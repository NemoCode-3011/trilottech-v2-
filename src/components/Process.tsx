import { Button } from "./Button";
import { Container } from "./Container";
import { processSteps } from "../data/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-ink py-24 md:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: stays in place on desktop while the steps scroll */}
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="text-sm font-semibold text-blue-text">How we work</p>

            <h2
              id="process-heading"
              className="mt-4 text-4xl font-semibold md:text-5xl"
            >
              From message to launch<span className="text-green">.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate md:text-lg">
              Our three-step path is designed to keep things clear and your
              project moving forward.
            </p>
          </div>

          {/* Right: the steps */}
          <div className="lg:col-span-7">
            <ol className="border-t border-white/10">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-8 md:grid-cols-[4.5rem_1fr] md:py-10"
                >
                  <span className="pt-1 font-display text-lg font-semibold text-blue-text md:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="flex items-center gap-3 text-2xl font-semibold md:text-3xl">
                      {step.title}
                      {step.live && (
                        <span
                          aria-hidden="true"
                          className="size-2.5 rounded-full bg-green"
                        />
                      )}
                    </h3>

                    <p className="mt-3 max-w-xl text-base leading-relaxed text-slate md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Button to="/start-project" className="px-6 py-3.5">
                Get a clear quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}