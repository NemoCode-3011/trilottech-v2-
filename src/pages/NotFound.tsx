import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <main id="main" className="bg-ink pb-24 pt-32 md:pb-32 md:pt-48">
      <Seo
        title="Page not found | Trilot"
        description="This page doesn’t exist."
        path="/404"
        noindex
      />
      <Container>
        <p className="text-sm font-semibold text-blue-text">404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          We couldn’t find that page<span className="text-green">.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate md:text-lg">
          The link may be old or mistyped. Head back home and we’ll point you
          in the right direction.
        </p>
        <div className="mt-8">
          <Button to="/" className="px-6 py-3.5">
            Back to home
          </Button>
        </div>
      </Container>
    </main>
  );
}