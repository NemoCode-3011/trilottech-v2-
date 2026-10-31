import { Check } from "lucide-react";
import { Container } from "../components/Container";
import { ContactForm } from "../components/ContactForm";
import { whatsappLink } from "../data/site";
import { Seo } from "../components/Seo";

const reassurance = [
  "Fixed price, agreed in writing before we start",
  "50% to begin, 50% when the site is ready to launch",
  "No obligation to go ahead after the proposal",
];

export default function StartProject() {
  return (
    <main id="main" className="bg-ink pb-24 pt-32 md:pb-32 md:pt-40">
      <Seo
        title="Get a quote | Trilot"
        description="Tell us what you want to build. We reply within 24 hours and send a fixed-price proposal once the scope is clear."
        path="/start-project"
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-text">
              Start a project
            </p>
            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
              Tell us what you want to build
              <span className="text-green">.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate md:text-lg">
              We review every request and reply within 24 hours. Once the scope
              is clear, we send a fixed-price proposal.
            </p>

            <ul className="mt-8 space-y-3">
              {reassurance.map((line) => (
                <li key={line} className="flex items-start gap-3 text-base">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-blue-text"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-base text-slate">
              Prefer to talk first?{" "}
              <a
                href={whatsappLink(
                  "Hi Trilot, I’d like to talk about a project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-text underline underline-offset-4 hover:text-white"
              >
                Chat on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
