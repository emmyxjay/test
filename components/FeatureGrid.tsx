import { IconCircle } from "./ui/Icon";

const features = [
  {
    icon: "layers" as const,
    title: "One loop, not ten tools",
    body: "Attention, capture, and follow-up run from a single system. Nothing to wire together, nothing to keep in sync.",
  },
  {
    icon: "pen" as const,
    title: "Trained on how you write",
    body: "Ten minutes of setup gives the system your voice. What comes out reads like you, because the input was you.",
  },
  {
    icon: "clock" as const,
    title: "An hour a day, not a hire",
    body: "Built for the founder who is also the marketer, the support desk, and the person shipping the product.",
  },
];

export function FeatureGrid() {
  return (
    <section className="rail">
      <div className="grid gap-[12px] border-t border-line pt-[32px] md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-[14px] border-b border-line p-[12px] pb-[28px]"
          >
            <IconCircle name={f.icon} />
            <h3 className="text-[16px] font-medium text-ink">{f.title}</h3>
            <p className="text-[15px] leading-[1.6] text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
