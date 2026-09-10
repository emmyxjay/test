import { Button } from "./ui/Button";

const faqs = [
  {
    q: "Do I need to already have an audience?",
    a: "No. The first four weeks assume you are starting from nothing and treat the signal queue as a research tool. If you already have a list, the system imports it and starts at follow-up instead.",
  },
  {
    q: "Does everything sound like AI wrote it?",
    a: "It sounds like whatever you feed it. Setup asks for six things you have already written, in your words. If you skip that step, the output is generic and it is generic because the input was.",
  },
  {
    q: "What if I miss a week?",
    a: "The loop is designed to survive gaps. Follow-up keeps running, the signal queue holds, and the weekly report tells you what fell behind rather than resetting your streak.",
  },
  {
    q: "Which channels does it cover?",
    a: "Long-form social, email, and your own site. Paid is out of scope on purpose. Slowburn is built for founders who need distribution before they need a budget.",
  },
  {
    q: "Is this a course?",
    a: "No. There is nothing to complete. It is software you open every working day, and it is finished when the hour is done.",
  },
  {
    q: "Can I export my work?",
    a: "Yes. Every draft, list, and sequence exports as plain files. If you leave, you take the material with you.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-[68px] bg-[var(--color-warm-cream)] py-[var(--section-gap)] text-[var(--color-espresso)]"
    >
      <div className="rail grid gap-[52px] lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          {/* Amber is a dark-canvas signal only. On the cream band the
              primary ink is Espresso and the CTA flips to a dark outline. */}
          <p className="text-[12px] uppercase leading-[1.4] tracking-[0.01em] text-[var(--color-cedar)]">
            Questions
          </p>
          <h2 className="t-display mt-[16px] max-w-[14ch] text-balance">
            The ones people actually ask.
          </h2>
          <div className="mt-[28px]">
            <Button href="/#capture" variant="dark">
              Ask something else
            </Button>
          </div>
        </div>

        <div className="border-t border-[var(--color-walnut)]">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-[var(--color-walnut)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] py-[14px] text-[17px] font-medium leading-[1.35] marker:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[62ch] pb-[18px] text-[15px] leading-[1.6] text-[var(--color-cedar)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
