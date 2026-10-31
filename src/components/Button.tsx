import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

type Props = {
  // Expanded to include the new visual styles needed for the dark and light section layout rhythms
  variant?: "primary" | "secondary" | "dark" | "outlineDark";
  to?: string;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-base px-5 py-3 text-sm font-semibold transition-colors duration-200";

const variants = {
  primary: "bg-blue text-white hover:bg-[#0058c7]",
  secondary: "border border-white/20 text-white hover:bg-white/10",
  // New solid dark variant for the light-background Work cards
  dark: "bg-[#051329] text-white hover:bg-blue",
  // New minimal border-style dark variant for secondary actions on light layouts
  outlineDark: "border border-[#051329]/20 text-[#051329] hover:bg-[#051329] hover:text-white px-4 py-2 text-xs",
};

export function Button({
  variant = "primary",
  to,
  href,
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
