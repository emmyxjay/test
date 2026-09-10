import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { ArrowCircle } from "./ui/ArrowCircle";

const steps = [
  {
    n: "01",
    icon: "signal" as const,
    title: "Signal",
    body: "The system reads the conversations your buyers are already having and hands you the five worth entering this week. You pick one. It drafts in your voice.",
  },
  {
    n: "02",
    icon: "capture" as const,
    title: "Capture",
    body: "Attention that lives on someone else's platform is rented. Every piece routes to an address you own, with the capture page written to match the post that earned it.",
  },
  {
    n: "03",
    icon: "proof" as const,
    title: "Proof",
    body: "Show the work before you ask for the sale. The system pulls evidence out of what you already did this month and turns it into something publishable.",
  },
  {
    n: "04",
    icon: "offer" as const,
    title: "Offer",
    body: "Most offers fail on clarity, not price. Slowburn tests the wording against what people actually asked you for, and flags the version that reads as vague.",
  },
  {
    n: "05",
    icon: "return" as const,
    title: "Return",
    body: "The follow-up almost nobody builds. Sequences that stay warm for months, so the person who was not ready in March still hears from you in June.",
  },
];

export function SystemSteps() {
  return (
    <section id="system" className="section scroll-mt-[68px]">
      <div className="rail">
        <div className="max-w-[54ch]">
          <p className="t-caption">The system</p>
          <h2 className="t-display-lg mt-[16px] text-balance">
            Five parts. One loop. Run it weekly.
          </h2>
          <p className="prose-warm mt-[24px]">
            Growth stalls at whichever part is missing. Most solo founders have
            one and three. Slowburn runs all five on a schedule, and tells you
            which one is currently costing you the most.
          </p>
        </div>

        <ol className="mt-[52px] border-t border-[var(--color-walnut)]">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group grid gap-[12px] border-b border-[var(--color-walnut)] py-[28px] md:grid-cols-[64px_44px_1fr_minmax(0,52ch)] md:items-start md:gap-[24px]"
            >
              <span className="text-[13px] text-[var(--color-driftwood)]">
                {s.n}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[9999px] border border-[var(--color-walnut)] text-[var(--color-warm-cream)] transition-colors group-hover:border-[var(--color-amber-forge)] group-hover:text-[var(--color-amber-forge)]">
                <Icon name={s.icon} size={19} />
              </span>
              <h3 className="t-heading-lg">{s.title}</h3>
              <p className="text-[16px] leading-[1.6] text-[var(--color-sand)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-[32px] flex flex-wrap items-center gap-[12px]">
          <Button href="/#pricing" variant="amber">
            Run the whole loop
          </Button>
          <ArrowCircle />
        </div>
      </div>
    </section>
  );
}
