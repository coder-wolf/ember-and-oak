import { cx } from "@/lib/utils";

export function FlameMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.3 2.2c2.7 3.9 5.5 6.3 5.5 10a5.8 5.8 0 1 1-11.6 0c0-2.1 1-3.7 2.6-5.5.2 1.5.8 2.5 1.8 3.3.2-2.8.6-5.4 1.7-7.8Z"
        fill="currentColor"
      />
      <path
        d="M12 21.2a3.3 3.3 0 0 1-3.3-3.3c0-1.6 1-2.7 2-3.9.4.8.9 1.3 1.3 1.7.5-.6.9-1.2 1.1-2 1 1.2 2.1 2.6 2.1 4.2a3.3 3.3 0 0 1-3.2 3.3Z"
        fill="var(--color-cream)"
        opacity="0.92"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <FlameMark className={cx("size-7 shrink-0 text-ember", markClassName)} />
      <span className="font-display text-[1.4rem] leading-none tracking-[-0.015em]">
        Ember <span className="italic text-ember">&amp;</span> Oak
      </span>
    </span>
  );
}
