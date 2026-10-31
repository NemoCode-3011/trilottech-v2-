import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { whatsappLink } from "../data/site";

export function ContactCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-ink py-24 md:py-32"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate">
            <span
              className="size-2 rounded-full bg-green"
              aria-hidden="true"
            />
            Taking on new projects
          </p>

          <h2
            id="cta-heading"
            className="mt-6 text-4xl font-semibold md:text-6xl"
          >
            Tell us what you need, and we’ll reply within 24 hours
            <span className="text-green">.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            No pressure, no obligation. Just a clear conversation, then a
            fixed-price proposal once we understand the scope.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/start-project" className="px-6 py-3.5">
              Get a clear quote
            </Button>
            <Button
              href={whatsappLink("Hi Trilot, I’d like to talk about a project.")}
              variant="secondary"
              className="px-6 py-3.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}