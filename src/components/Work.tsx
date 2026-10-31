import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { projects, type Project } from "../data/site";

function ProjectTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-base border border-ink/15 px-2.5 py-0.5 text-sm font-semibold text-slate-ink">
      {label}
    </span>
  );
}

function LiveLink({
  project,
  variant,
}: {
  project: Project;
  variant: "dark" | "outlineDark";
}) {
  return (
    <Button href={project.liveUrl} variant={variant} className="px-5 py-3">
      View live site
      <span className="sr-only">: {project.name}, opens in a new tab</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </Button>
  );
}

export function Work() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="on-light bg-white py-24 text-ink md:py-32"
    >
      <Container>
        <p className="text-sm font-semibold text-blue">Work</p>

        <h2
          id="work-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl"
        >
          Builds you can open and test
          <span className="text-blue">.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-ink md:text-lg">
          Two are self-initiated concepts and one was built for a real family
          barbershop. Each is labeled, and each is live so you can test it.
        </p>

        {/* Featured build */}
        {featured && (
          <article className="mt-14 md:mt-20">
            <img
              src={featured.imagePath}
              alt={featured.imageAlt}
              width={1200}
              height={514}
              loading="lazy"
              className="aspect-video h-auto w-full rounded-base border border-ink/10 bg-paper object-cover object-top md:aspect-[21/9]"
            />

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-semibold">{featured.name}</h3>
                <div className="mt-3">
                  <ProjectTag label={featured.tag} />
                </div>
              </div>
              <div className="space-y-3 text-base leading-relaxed text-slate-ink lg:col-span-5">
                <p>
                  <strong className="text-ink">The problem:</strong>{" "}
                  {featured.problem}
                </p>
                <p>
                  <strong className="text-ink">What we built:</strong>{" "}
                  {featured.solution}
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 lg:col-span-3">
                <p className="text-sm text-slate-ink">
                  {featured.metricLabel}
                  <span className="block text-xl font-semibold text-ink">
                    {featured.metricValue}
                  </span>
                </p>
                <LiveLink project={featured} variant="dark" />
              </div>
            </div>
          </article>
        )}

        {/* Secondary builds */}
        <div className="mt-16 grid gap-14 border-t border-ink/15 pt-16 md:grid-cols-2 md:gap-10">
          {rest.map((project) => (
            <article key={project.id} className="flex flex-col">
              <img
                src={project.imagePath}
                alt={project.imageAlt}
                width={800}
                height={500}
                loading="lazy"
                className="aspect-[16/10] h-auto w-full rounded-base border border-ink/10 bg-paper object-cover object-top"
              />

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <ProjectTag label={project.tag} />
              </div>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-ink md:text-base">
                <p>
                  <strong className="text-ink">The problem:</strong>{" "}
                  {project.problem}
                </p>
                <p>
                  <strong className="text-ink">What we built:</strong>{" "}
                  {project.solution}
                </p>
              </div>

              <p className="mt-5 text-sm text-slate-ink">
                {project.metricLabel}:{" "}
                <span className="font-semibold text-ink">
                  {project.metricValue}
                </span>
              </p>

              <div className="mt-5">
                <LiveLink project={project} variant="outlineDark" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-ink">
          Lighthouse scores measured in October 2026. Results vary between runs
          and devices.
        </p>
      </Container>
    </section>
  );
}
