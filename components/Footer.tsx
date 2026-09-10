import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#system", label: "The system" },
      { href: "/#dial", label: "How it runs" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#capture", label: "The letter" },
      { href: "/#capture", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#", label: "Privacy" },
      { href: "/#", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="band-deep pt-[52px] pb-[32px]">
      <div className="rail">
        <div className="grid gap-[32px] border-b border-line pb-[32px] md:grid-cols-[1.4fr_repeat(3,0.6fr)]">
          <div>
            <p className="text-[16px] font-medium tracking-[-0.01em] text-ink">
              SLOWBURN
            </p>
            <p className="mt-[12px] max-w-[34ch] text-[15px] leading-[1.6] text-muted">
              An AI growth system for solo founders. One loop, an hour a day.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="t-caption">
                {c.title}
              </p>
              <ul className="mt-[12px] flex flex-col gap-[8px]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-ink transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-[24px] text-[13px] leading-[1.4] text-label">
          © {new Date().getFullYear()} Slowburn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
