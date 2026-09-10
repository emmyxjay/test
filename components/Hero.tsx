import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowCircle } from "./ui/ArrowCircle";
import { Badge } from "./ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[128px] pb-[var(--section-gap)]">
      {/* Warm ember wash behind the left rail. No blur, no shadow: the
          depth comes from colour tone only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10%] top-[10%] h-[520px] w-[620px] rounded-[9999px] opacity-[0.16]"
        style={{
          background:
            "radial-gradient(circle, var(--color-amber-forge) 0%, transparent 62%)",
        }}
      />

      <div className="rail relative grid items-center gap-[52px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[64px]">
        <div>
          <Badge tone="cream">AI growth system for solo founders</Badge>

          <h1 className="t-hero-xl mt-[24px] max-w-[13ch] text-balance">
            Your product works. Nobody knows it exists.
          </h1>

          <p className="mt-[24px] max-w-[46ch] text-[16px] leading-[1.6] text-[var(--color-sand)]">
            Slowburn is one operating loop for attention, capture, and
            follow-up. It learns how you write, runs on your own material, and
            takes about an hour a day. No agency. No stack to assemble.
          </p>

          <div className="mt-[32px] flex flex-wrap items-center gap-[12px]">
            <Button href="/#pricing" variant="amber">
              Start the loop
            </Button>
            <ArrowCircle />
            <Button href="/#system" variant="outline">
              See how it works
            </Button>
          </div>

          <p className="mt-[20px] text-[13px] text-[var(--color-driftwood)]">
            14 days free. No card. Cancel from inside the app.
          </p>
        </div>

        {/* Placeholder. Swap the file at /public/hero.svg for the real
            photograph and change the extension here. */}
        <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[6px] border border-[var(--color-walnut)]">
          <Image
            src="/hero.svg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--color-espresso) 0%, transparent 30%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
