import type { ReactElement } from "react";

/* Monochrome line icons, ~18px stroke-consistent, sitting inside
   walnut-bordered circular containers when paired with feature text. */
const paths: Record<string, ReactElement> = {
  signal: (
    <>
      <path d="M3 12a9 9 0 0 1 9-9" />
      <path d="M6.5 12A5.5 5.5 0 0 1 12 6.5" />
      <circle cx="12" cy="12" r="1.4" />
      <path d="M12 12l7 7" />
    </>
  ),
  capture: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  proof: (
    <>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </>
  ),
  offer: (
    <>
      <path d="M12 3.5l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.9l6.1-.8z" />
    </>
  ),
  return: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20.5 3.5V8H16" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z" />
      <path d="M3.5 12.5L12 17l8.5-4.5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5z" />
      <path d="M14 6.5l3.5 3.5" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
};

export function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: keyof typeof paths;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function IconCircle({ name }: { name: keyof typeof paths }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[9999px] border border-line text-ink">
      <Icon name={name} />
    </span>
  );
}
