import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "amber" | "outline" | "dark";

const base =
  "inline-flex items-center justify-center rounded-[9999px] text-[14px] font-medium leading-none " +
  "px-[18px] py-[13px] transition-colors duration-150 whitespace-nowrap";

/* The source spec listed the primary CTA as amber fill with Warm Cream
   text. Cream on #ffb442 measures ~1.5:1 and is unreadable. Espresso on
   amber measures ~10:1, which is what the spec's own prompt guide says.
   Espresso wins. */
const variants: Record<Variant, string> = {
  amber:
    "bg-[var(--color-amber-forge)] text-[var(--color-espresso)] hover:bg-[#ffc266] active:bg-[#f0a52f]",
  outline:
    "border border-[var(--color-warm-cream)] text-[var(--color-warm-cream)] " +
    "hover:bg-[var(--color-warm-cream)] hover:text-[var(--color-espresso)]",
  dark:
    "border border-[var(--color-espresso)] text-[var(--color-espresso)] " +
    "hover:bg-[var(--color-espresso)] hover:text-[var(--color-warm-cream)]",
};

export function Button({
  href,
  children,
  variant = "amber",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}
