import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Check, MessageCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "./Button";
import { cn } from "../lib/cn";
import { services, whatsappLink } from "../data/site";

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "unsure", label: "Not sure yet" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmailOrPhone(value: string) {
  const v = value.trim();
  if (emailPattern.test(v)) return true;
  const digits = v.replace(/\D/g, "");
  return /^[+\d\s()-]+$/.test(v) && digits.length >= 7 && digits.length <= 15;
}

function buildReplyLink(contact: string) {
  const value = contact.trim();
  if (emailPattern.test(value)) return `mailto:${encodeURI(value)}`;

  let digits = value.replace(/\D/g, "");
  // Assumes a Nigerian number when it starts with 0 and has 11 digits
  if (digits.startsWith("0") && digits.length === 11) {
    digits = `234${digits.slice(1)}`;
  }
  return `https://wa.me/${digits}`;
}
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name or company name."),
  contact: z
    .string()
    .trim()
    .refine(isEmailOrPhone, "Enter a valid email or WhatsApp number."),
  service: z.string().min(1, "Please choose one option."),
  details: z
    .string()
    .trim()
    .min(20, "Tell us a little more, at least a sentence or two."),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "success" | "error";

const inputBase =
  "mt-2 w-full rounded-base border bg-transparent px-4 py-3 text-base text-white placeholder:text-slate/60 focus:border-blue-text";

function describe(id: string, hasHint: boolean, error?: string) {
  const ids = [hasHint ? `${id}-hint` : "", error ? `${id}-error` : ""]
    .filter(Boolean)
    .join(" ");
  return ids || undefined;
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-slate">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function buildWhatsappMessage(values: Values) {
  const label =
    serviceOptions.find((o) => o.value === values.service)?.label ?? "";
  return [
    "Hi Trilot, I’d like a quote.",
    `Name: ${values.name}`,
    `Reply to: ${values.contact}`,
    label && `Project: ${label}`,
    values.details && `Details: ${values.details.slice(0, 800)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function ContactForm() {
  const [params] = useSearchParams();
  const fromQuery = params.get("service") ?? "";
  const initialService = serviceOptions.some((o) => o.value === fromQuery)
    ? fromQuery
    : "";

  const emptyValues: Values = {
    name: "",
    contact: "",
    service: initialService,
    details: "",
  };

  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [website, setWebsite] = useState(""); // honeypot
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onText(
    key: "name" | "contact" | "details",
  ): (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    return (e) => update(key, e.target.value);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    // Bots fill the hidden field. Pretend it worked and send nothing.
    if (website) {
      setStatus("success");
      return;
    }

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);

      const firstKey = Object.keys(next)[0];
      const targetId =
        firstKey === "service"
          ? `service-${serviceOptions[0].value}`
          : firstKey;
      document.getElementById(targetId)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env
        .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // A missing key is a failure, never a fake success.
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured");
      }

      const { default: emailjs } = await import("@emailjs/browser");

      const serviceLabel =
        serviceOptions.find((o) => o.value === parsed.data.service)?.label ??
        parsed.data.service;
      const isEmail = emailPattern.test(parsed.data.contact);

      // Rejects on any non-200 response, so success below is real.
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: parsed.data.name,
          contact: parsed.data.contact,
          contact_type: isEmail ? "Email" : "WhatsApp / phone",
          reply_link: buildReplyLink(parsed.data.contact),
          service: serviceLabel,
          details: parsed.data.details,
        },
        { publicKey },
      );

      // Best effort: never blocks or breaks the real lead
      if (autoReplyTemplateId && isEmail) {
        emailjs
          .send(
            serviceId,
            autoReplyTemplateId,
            {
              to_email: parsed.data.contact,
              name: parsed.data.name,
              service: serviceLabel,
            },
            { publicKey },
          )
          .catch((error) => console.error("Auto-reply failed:", error));
      }

      setStatus("success");
    } catch (error) {
      console.error("Quote form failed:", error);
      setStatus("error");
    }
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setWebsite("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="rounded-base bg-surface p-8 md:p-10">
        <p className="flex items-center gap-2 text-sm font-semibold text-green">
          <Check size={18} aria-hidden="true" />
          Request received
        </p>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="mt-4 text-3xl font-semibold outline-none md:text-4xl"
        >
          Thanks, we’ve got your request
          <span className="text-green">.</span>
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
          We’ll reply within 24 hours using the contact details you gave us. If
          you don’t hear from us, message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={reset}
            className="px-5 py-3"
          >
            Send another request
          </Button>
          <Button
            href={whatsappLink("Hi Trilot, I just sent a quote request.")}
            variant="secondary"
            className="px-5 py-3"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <Field id="name" label="Your name or company name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={onText("name")}
          aria-invalid={!!errors.name}
          aria-describedby={describe("name", false, errors.name)}
          className={cn(
            inputBase,
            errors.name ? "border-danger" : "border-white/20",
          )}
        />
      </Field>

      <Field
        id="contact"
        label="WhatsApp number or email"
        hint="We’ll reply on whichever you give us."
        error={errors.contact}
      >
        <input
          id="contact"
          name="contact"
          type="text"
          value={values.contact}
          onChange={onText("contact")}
          aria-invalid={!!errors.contact}
          aria-describedby={describe("contact", true, errors.contact)}
          className={cn(
            inputBase,
            errors.contact ? "border-danger" : "border-white/20",
          )}
        />
      </Field>

      <fieldset aria-describedby={errors.service ? "service-error" : undefined}>
        <legend className="text-sm font-semibold">
          What are we building for you?
        </legend>
        <div className="mt-3 grid gap-3">
          {serviceOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-base border px-4 py-3 text-base transition-colors",
                values.service === option.value
                  ? "border-blue-text bg-blue/10"
                  : "border-white/20 hover:border-white/40",
              )}
            >
              <input
                type="radio"
                id={`service-${option.value}`}
                name="service"
                value={option.value}
                checked={values.service === option.value}
                onChange={() => update("service", option.value)}
                className="mt-1 size-4 accent-blue"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {errors.service && (
          <p id="service-error" className="mt-2 text-sm text-danger">
            {errors.service}
          </p>
        )}
      </fieldset>

      <Field
        id="details"
        label="Tell us about your business and what you need"
        error={errors.details}
      >
        <textarea
          id="details"
          name="details"
          rows={5}
          maxLength={2000}
          value={values.details}
          onChange={onText("details")}
          placeholder="For example: I run a small property agency and need a fast website where buyers can enquire."
          aria-invalid={!!errors.details}
          aria-describedby={describe("details", false, errors.details)}
          className={cn(
            inputBase,
            errors.details ? "border-danger" : "border-white/20",
          )}
        />
      </Field>

      {/* Honeypot: hidden from people, visible to bots */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-base border border-danger/40 bg-danger/10 p-5"
        >
          <p className="font-semibold text-danger">
            We couldn’t send your request.
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate">
            Your details are still here. Try again, or send them to us on
            WhatsApp instead.
          </p>
          <Button
            href={whatsappLink(buildWhatsappMessage(values))}
            variant="secondary"
            className="mt-4 px-5 py-3"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Send on WhatsApp
          </Button>
        </div>
      )}

      <div>
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-6 py-4 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send quote request"}
        </Button>
        <p className="mt-4 text-sm text-slate">
          We only use your details to reply to this request. See our{" "}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
