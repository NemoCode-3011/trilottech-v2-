export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="317 298 654 689"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M317 298H971L863 444H707V791L533 987V548L625 444H317Z" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-6 w-auto text-blue" />
      <span className="font-display text-xl font-semibold tracking-tight">
        Trilot<span className="text-green">.</span>
      </span>
    </span>
  );
}