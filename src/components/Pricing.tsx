import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { pricingFactors, whatsappLink } from "../data/site";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-navy py-24 md:py-32"
    >
      <Container>
        <p className="text-sm font-semibold text-blue-text">Pricing</p>

        <h2
          id="pricing-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl"
        >
          What shapes the price of your project
          <span className="text-green">.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
          We don’t sell fixed packages, because no two projects need the same
          things. Every project gets a fixed price, agreed before we start.
        </p>

        <ul className="mt-14 border-t border-white/10 md:mt-20">
          {pricingFactors.map((factor) => (
            <li
              key={factor.title}
              className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <h3 className="text-2xl font-semibold md:col-span-5 md:text-3xl">
                {factor.title}
              </h3>
              <p className="text-base leading-relaxed text-slate md:col-span-7 md:text-lg">
                {factor.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-base bg-surface p-8 md:mt-20 md:p-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
            <div className="md:col-span-7">
              <h3 className="text-3xl font-semibold md:text-4xl">
                Ready for an honest assessment?
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate md:text-lg">
                Tell us what you need. We reply within 24 hours and send a
                fixed-price proposal once the scope is clear. You pay 50% to
                start and 50% at launch.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <Button to="/start-project" className="px-6 py-3.5">
                Get a clear quote
              </Button>
              <Button
                href={whatsappLink("Hi Trilot, I'd like a quote for a website.")}
                variant="secondary"
                className="px-6 py-3.5"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}