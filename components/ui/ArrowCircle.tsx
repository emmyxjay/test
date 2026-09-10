/* Recurring motif from the source system: a filled amber circle carrying a
   diagonal arrow, sitting beside a pill button as a second "go" signal. */
export function ArrowCircle({ size = 46 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-[9999px] bg-accent text-on-accent"
      style={{ width: size, height: size }}
    >
      <svg
        width={Math.round(size * 0.4)}
        height={Math.round(size * 0.4)}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
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
