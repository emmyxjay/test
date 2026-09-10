import { Button } from "./ui/Button";
import { ArrowCircle } from "./ui/ArrowCircle";

export function Capture() {
  return (
    <section id="capture" className="section scroll-mt-[68px]">
      <div className="rail">
        <div className="grid items-end gap-[52px] lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="t-caption">The letter</p>
            <h2 className="t-display-lg mt-[16px] max-w-[15ch] text-balance">
              One letter a week on running the loop.
            </h2>
            <p className="prose-warm mt-[24px]">
              What worked, what did not, and the exact wording that moved. No
              pitch attached. Leave whenever it stops being useful.
            </p>
          </div>

          <form
            className="flex flex-col gap-[12px]"
            action="/api/subscribe"
            method="post"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-[12px] sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@yourcompany.com"
                className="w-full rounded-[9999px] border border-[var(--color-cedar)] bg-transparent px-[20px] py-[13px] text-[14px] text-[var(--color-warm-cream)] transition-colors focus:border-[var(--color-amber-forge)] focus:outline-none"
              />
              <Button type="submit" variant="amber" className="shrink-0">
                Send it weekly
              </Button>
              <span className="hidden items-center sm:inline-flex">
                <ArrowCircle size={44} />
              </span>
            </div>
            <p className="text-[13px] text-[var(--color-driftwood)]">
              No sharing, no resale, one unsubscribe link in every issue.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
