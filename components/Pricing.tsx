import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Icon } from "./ui/Icon";

const tiers = [
  {
    name: "Solo",
    price: "39",
    note: "One founder, one product.",
    featured: false,
    features: [
      "Signal queue, five prompts a week",
      "Voice setup and one writing profile",
      "Two capture pages",
      "Weekly loop report",
    ],
  },
  {
    name: "Operator",
    price: "89",
    note: "The full loop, running on a schedule.",
    featured: true,
    features: [
      "Everything in Solo",
      "All five parts automated",
      "Unlimited capture pages",
      "Follow-up sequences up to 12 months",
      "Offer clarity checks",
    ],
  },
  {
    name: "Studio",
    price: "189",
    note: "Up to five brands under one login.",
    featured: false,
    features: [
      "Everything in Operator",
      "Five voice profiles",
      "Cross-brand reporting",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-[72px] py-[var(--section-gap)]">
      <div className="rail">
        <div className="max-w-[46ch]">
          <p className="t-caption">Pricing</p>
          <h2 className="t-display-lg mt-[16px] text-balance">
            Less than an afternoon of an agency.
          </h2>
          <p className="prose-warm mt-[24px]">
            Billed monthly. Move between plans whenever the work changes.
          </p>
        </div>

        <div className="mt-[52px] grid gap-[12px] lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-[6px] border p-[24px] ${
                t.featured
                  ? "border-accent"
                  : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-[12px]">
                <h3 className="t-heading-sm">{t.name}</h3>
                {t.featured ? <Badge tone="accent">Most chosen</Badge> : null}
              </div>

              <p className="mt-[12px] text-[15px] text-muted">
                {t.note}
              </p>

              <p className="mt-[24px] flex items-baseline gap-[6px]">
                <span className="t-display tabular-nums">${t.price}</span>
                <span className="text-[15px] text-label">
                  / month
                </span>
              </p>

              <ul className="mt-[24px] flex flex-col gap-[12px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-[10px]">
                    <span className="mt-[4px] shrink-0 text-accent">
                      <Icon name="proof" size={15} />
                    </span>
                    <span className="text-[15px] leading-[1.55] text-muted">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-[28px] flex-1" />

              <Button
                href="/#capture"
                variant={t.featured ? "amber" : "outline"}
                className="w-full"
              >
                Start 14 days free
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
