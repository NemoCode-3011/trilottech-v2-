import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { legal } from "../data/legal";
import { Seo } from "../components/Seo";

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Legal({ doc }: { doc: "privacy" | "terms" }) {
  const content = legal[doc];
  const other =
    doc === "privacy"
      ? { to: "/terms", label: "Terms of Use" }
      : { to: "/privacy", label: "Privacy Policy" };

  return (
    <main id="main" className="bg-ink pb-24 pt-32 md:pb-32 md:pt-40">
      <Seo
        title={`${content.title} | Trilot`}
        description={
          doc === "privacy"
            ? "How Trilot collects, uses and protects the information you share through this website."
            : "The terms that apply when you use the Trilot website."
        }
        path={doc === "privacy" ? "/privacy" : "/terms"}
      />
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-text">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            {content.title}
            <span className="text-green">.</span>
          </h1>
          <p className="mt-4 text-sm text-slate">
            Last updated: {content.updated}
          </p>

          <p className="mt-8 text-base leading-relaxed text-slate md:text-lg">
            {content.intro}
          </p>

          <div className="mt-12 space-y-10">
            {content.sections.map((section) => (
              <section
                key={section.heading}
                aria-labelledby={slug(section.heading)}
              >
                <h2
                  id={slug(section.heading)}
                  className="text-2xl font-semibold"
                >
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-relaxed text-slate"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate marker:text-blue-text">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="mt-14 border-t border-white/10 pt-8 text-base text-slate">
            Also see our{" "}
            <Link
              to={other.to}
              className="font-semibold text-blue-text underline underline-offset-4 hover:text-white"
            >
              {other.label}
            </Link>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
