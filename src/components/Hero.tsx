import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { whatsappLink } from "../data/site";

const hero = {
  headline: "High-end digital design. Elite engineering",
  support:
    "We build fast landing pages, custom software, and digital systems tailored to your business goals. Launched quickly, engineered to scale.",
  primaryCta: "Get a clear quote",
  secondaryCta: "Chat on WhatsApp",
  footnote: "We reply within 24 hours",
};

const whatsappUrl = whatsappLink("Hi Trilot, I'd like a quote for a website.");

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <img
        src="/assets/hero3.png"
        alt=""
        width={1672}
        height={941}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />

      {/* Readability overlay: solid on mobile, fades out left-to-right on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/75 md:bg-transparent md:bg-linear-to-r md:from-ink md:via-ink/80 md:to-ink/0"
      />

      <Container className="pb-16 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05]"
          >
            {hero.headline}
            <span className="text-green">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            {hero.support}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/start-project" className="px-6 py-3.5">
              {hero.primaryCta}
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              className="px-6 py-3.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {hero.secondaryCta}
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate">
            <span aria-hidden="true" className="mr-1.5 text-green">
              →
            </span>
            {hero.footnote}
          </p>
        </div>
      </Container>
    </section>
  );
}