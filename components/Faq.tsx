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
      className="band-inverse scroll-mt-[72px] py-[var(--section-gap)]"
    >
      <div className="rail grid gap-[52px] lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          {/* Inside .band-inverse every token flips, so the same
              utilities and the same outline button read correctly against
              whichever ground this band lands on. */}
          <p className="t-caption">Questions</p>
          <h2 className="t-display mt-[16px] max-w-[14ch] text-balance">
            The ones people actually ask.
          </h2>
          <div className="mt-[28px]">
            <Button href="/#capture" variant="outline">
              Ask something else
            </Button>
          </div>
        </div>

        <div className="border-t border-line">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] py-[18px] text-[18px] font-medium leading-[1.4] marker:hidden">
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
              <p className="max-w-[62ch] pb-[20px] text-[16px] leading-[1.65] text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
