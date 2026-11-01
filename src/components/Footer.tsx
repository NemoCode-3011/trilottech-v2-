import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, site, whatsappLink } from "../data/site";
import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const exploreLinks = [...navLinks, { label: "FAQ", href: "/#faq" }];

const linkClass = "text-slate transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <Container className="grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Trilot Technologies home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
            Custom-coded websites and web systems.
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-slate">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              Remote studio based in {site.location}. Working with clients in
              Nigeria and beyond.
            </span>
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink(
                  "Hi Trilot, I’d like to talk about a project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <FaWhatsapp size={16} aria-hidden="true" focusable="false" />
                WhatsApp chat
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <IoMailOutline size={16} aria-hidden="true" focusable="false" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <FaInstagram size={16} aria-hidden="true" focusable="false" />
                Instagram
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <FaTiktok size={16} aria-hidden="true" focusable="false" />
                TikTok
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <FaFacebook size={16} aria-hidden="true" focusable="false" />
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{year}</span> Trilot Technologies.
            All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link to="/privacy" className={linkClass}>
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={linkClass}>
                Terms
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
