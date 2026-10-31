import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { services } from "../data/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="on-light bg-white py-24 text-ink md:py-32"
    >
      <Container>
        <p className="text-sm font-semibold text-blue">Services</p>

        <h2
          id="services-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl"
        >
          Built from scratch to bring in customers
          <span className="text-blue">.</span>
        </h2>

        <ul className="mt-14 border-t border-ink/15 md:mt-20">
          {services.map((service) => (
            <li
              key={service.slug}
              className="group relative border-b border-ink/15 py-8 md:py-10"
            >
              <div className="grid gap-4 pr-10 md:grid-cols-12 md:gap-10 md:pr-16">
                <h3 className="text-2xl font-semibold md:col-span-5 md:text-3xl">
                  <Link
                    to={`/start-project?service=${service.slug}`}
                    className="transition-colors duration-200 after:absolute after:inset-0 group-hover:text-blue focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-blue"
                  >
                    {service.title}
                  </Link>
                </h3>

                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-slate-ink md:text-lg">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm text-slate-ink">
                    <span className="font-semibold text-ink">Best for:</span>{" "}
                    {service.bestFor}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                aria-hidden="true"
                size={24}
                className="absolute right-0 top-8 text-ink/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue md:top-10"
              />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base text-slate-ink">
          Not sure which one fits?{" "}
          <Link
            to="/start-project"
            className="font-semibold text-blue underline underline-offset-4 hover:text-ink"
          >
            Tell us what you need
          </Link>{" "}
          and we'll point you to the right one.
        </p>
      </Container>
    </section>
  );
}