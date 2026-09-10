import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "outline",
}: {
  children: ReactNode;
  tone?: "outline" | "accent";
}) {
  const tones = {
    outline: "border border-ink text-ink",
    accent: "bg-accent text-on-accent",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-[9999px] px-[12px] py-[6px] text-[13px] leading-none ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
