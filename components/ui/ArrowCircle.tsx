/* Recurring motif from the source system: a filled amber circle carrying a
   diagonal arrow, sitting beside a pill button as a second "go" signal. */
export function ArrowCircle({ size = 44 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-[9999px] bg-[var(--color-amber-forge)]"
      style={{ width: size, height: size }}
    >
      <svg
        width={Math.round(size * 0.40)}
        height={Math.round(size * 0.40)}
        viewBox="0 0 16 16"
        fill="none"
        stroke="var(--color-espresso)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12L12 4" />
        <path d="M5.5 4H12v6.5" />
      </svg>
    </span>
  );
}
