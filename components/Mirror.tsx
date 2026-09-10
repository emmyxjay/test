const lines = [
  "You ship on Tuesday and tell nobody until Friday.",
  "The newsletter is three weeks late again.",
  "Someone replied with real interest in March. You never followed up.",
  "You know what to post. You just never have the hour.",
];

export function Mirror() {
  return (
    <section className="rail section">
      <div className="grid gap-[52px] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="t-caption">The actual problem</p>
          <h2 className="t-display mt-[16px] max-w-[16ch] text-balance">
            Distribution is a schedule problem, not a talent problem.
          </h2>
        </div>

        <div>
          <ul className="border-t border-[var(--color-walnut)]">
            {lines.map((l) => (
              <li
                key={l}
                className="border-b border-[var(--color-walnut)] py-[18px] text-[19px] leading-[1.4] text-[var(--color-warm-cream)]"
              >
                {l}
              </li>
            ))}
          </ul>
          <p className="prose-warm mt-[28px]">
            None of that is a marketing skill gap. It is one person holding
            every role at once, and marketing being the role with no deadline
            attached. Slowburn gives it the deadline.
          </p>
        </div>
      </div>
    </section>
  );
}
