import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "amber" | "outline";

const base =
  "inline-flex items-center justify-center rounded-[9999px] text-[15px] font-medium leading-none " +
  "px-[20px] py-[14px] transition-colors duration-150 whitespace-nowrap";

/* The source spec listed the primary CTA as amber fill with Warm Cream
   text. Cream on #ffb442 measures ~1.5:1 and is unreadable. Espresso on
   amber measures ~10:1, which is what the spec's own prompt guide says.
   Espresso wins, and it holds on both grounds.

   The outline variant needs no light-mode twin: it reads --ink and
   --canvas, which the inverted band and the light theme both redefine. */
const variants: Record<Variant, string> = {
  amber: "bg-accent text-on-accent hover:bg-[#ffc266] active:bg-[#f0a52f]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-canvas",
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
