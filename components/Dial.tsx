/* Signature data graphic. Sixty Warm Cream dots in a ring with a vertical
   pendulum line from top centre, on the deepest surface in the system.
   Pure dot-and-line art: no chrome, no shadow, no second accent. */

const SIZE = 420;
const R = 168;
const CENTER = SIZE / 2;

function dots() {
  return Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
    const major = i % 5 === 0;
    return {
      key: i,
      cx: CENTER + Math.cos(angle) * R,
      cy: CENTER + Math.sin(angle) * R,
      r: major ? 3 : 1.6,
      opacity: major ? 1 : 0.42,
    };
  });
}

export function Dial() {
  return (
    <section
      id="dial"
      className="scroll-mt-[68px] bg-[var(--color-midnight-cocoa)] py-[var(--section-gap)]"
    >
      <div className="rail grid items-center gap-[52px] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="mx-auto w-full max-w-[420px]">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="h-auto w-full"
            role="img"
            aria-label="A dial of sixty marks representing sixty minutes a day"
          >
            {dots().map((d) => (
              <circle
                key={d.key}
                cx={d.cx}
                cy={d.cy}
                r={d.r}
                fill="var(--color-warm-cream)"
                opacity={d.opacity}
              />
            ))}
            <line
              x1={CENTER}
              y1={CENTER - R + 18}
              x2={CENTER}
              y2={CENTER - 62}
              stroke="var(--color-warm-cream)"
              strokeWidth="1"
              opacity="0.55"
            />
            <text
              x={CENTER}
              y={CENTER + 14}
              textAnchor="middle"
              fill="var(--color-warm-cream)"
              fontSize="76"
              fontWeight="500"
              letterSpacing="-2.5"
            >
              60
            </text>
            <text
              x={CENTER}
              y={CENTER + 44}
              textAnchor="middle"
              fill="var(--color-driftwood)"
              fontSize="13"
              letterSpacing="1.2"
            >
              MINUTES A DAY
            </text>
          </svg>
        </div>

        <div>
          <p className="t-caption">How it runs</p>
          <h2 className="t-display mt-[16px] max-w-[18ch] text-balance">
            One hour, in the same place, every working day.
          </h2>
          <p className="prose-warm mt-[24px]">
            Slowburn opens with a queue, not a blank page. Twenty minutes on
            what to say, twenty on where it lands, twenty on the people already
            waiting to hear back. When the hour is up, the loop is closed for
            the day.
          </p>
          <ul className="mt-[32px] border-t border-[var(--color-walnut)]">
            {[
              ["00:00 – 00:20", "Draft from the signal queue"],
              ["00:20 – 00:40", "Publish and route to capture"],
              ["00:40 – 01:00", "Clear the follow-up list"],
            ].map(([time, task]) => (
              <li
                key={time}
                className="flex flex-wrap items-baseline justify-between gap-[12px] border-b border-[var(--color-walnut)] py-[14px]"
              >
                <span className="text-[13px] tabular-nums text-[var(--color-driftwood)]">
                  {time}
                </span>
                <span className="text-[16px] text-[var(--color-warm-cream)]">
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
