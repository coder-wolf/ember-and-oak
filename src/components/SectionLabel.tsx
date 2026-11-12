import { cx } from "@/lib/utils";

export function SectionLabel({
  index,
  title,
  tone = "dark",
  className,
}: {
  index: string;
  title: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex items-center gap-3",
        tone === "dark" ? "text-espresso/65" : "text-cream/65",
        className,
      )}
    >
      <span className="font-sans text-[10px] tabular-nums tracking-[0.18em]">
        {index}
      </span>
      <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
      <span className="eyebrow">{title}</span>
    </div>
  );
}
