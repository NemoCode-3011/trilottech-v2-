import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { navLinks } from "../data/site";
import { cn } from "../lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-base focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
          scrolled || open
            ? "border-white/10 bg-ink"
            : "border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" aria-label="Trilot home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <span className="hidden items-center gap-2 text-sm text-slate lg:flex">
              <span
                className="size-2 rounded-full bg-green"
                aria-hidden="true"
              />
              Taking on projects
            </span>
            <Button to="/start-project" className="px-4 py-2.5">
              Start a project
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-base text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>

        {open && (
          <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink md:hidden"
          >
            <Container className="flex flex-col gap-2 py-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 font-display text-2xl font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Button
                to="/start-project"
                className="mt-8 w-full py-4"
              >
                Start a project
              </Button>

              <p className="mt-6 flex items-center gap-2 text-sm text-slate">
                <span
                  className="size-2 rounded-full bg-green"
                  aria-hidden="true"
                />
                Taking on projects
              </p>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}