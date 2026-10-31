import { MessageCircle, Plus } from "lucide-react";
import { Container } from "./Container";
import { faqs, whatsappLink } from "../data/site";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="on-light bg-white py-24 text-ink md:py-32"
    >
      <Container>
        <p className="text-sm font-semibold text-blue">FAQ</p>

        <h2
          id="faq-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl"
        >
          Common questions, direct answers
          <span className="text-blue">.</span>
        </h2>

        <div className="mt-14 border-t border-ink/15 md:mt-20">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-xl font-semibold marker:content-none md:py-8 md:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="max-w-3xl font-display">{faq.question}</span>
                <Plus
                  aria-hidden="true"
                  size={24}
                  className="mt-1 shrink-0 text-blue transition-transform duration-200 group-open:rotate-45"
                />
              </summary>

              <p className="max-w-3xl pb-8 text-base leading-relaxed text-slate-ink md:pb-10 md:text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-slate-ink">
          Still have a question?
          <a
            href={whatsappLink("Hi Trilot, I have a question about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue underline underline-offset-4 hover:text-ink"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Ask us on WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </p>
      </Container>
    </section>
  );
}