import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "walnut",
}: {
  children: ReactNode;
  tone?: "walnut" | "amber" | "cream";
}) {
  const tones = {
    walnut: "bg-[var(--color-walnut)] text-[var(--color-warm-cream)]",
    amber: "bg-[var(--color-amber-forge)] text-[var(--color-espresso)]",
    cream:
      "border border-[var(--color-warm-cream)] text-[var(--color-warm-cream)]",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-[9999px] px-[10px] py-[5px] text-[12px] leading-none tracking-[0.01em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
