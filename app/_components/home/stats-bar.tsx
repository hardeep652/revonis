import { COLORS, STATS } from "./home-data";
import { useCountUp } from "./use-count-up";

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
      <span ref={ref} className="text-4xl font-semibold sm:text-5xl" style={{ color: COLORS.textPrimary }}>
        {value}
        <span style={{ color: COLORS.accentGold }}>{stat.suffix}</span>
      </span>
      <span className="text-xs font-medium tracking-wide" style={{ color: COLORS.textSecondary }}>
        {stat.label}
      </span>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="relative px-6 py-16">
      <div
        className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y rounded-3xl border sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0"
        style={{ borderColor: COLORS.border }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ borderColor: COLORS.border }} className={i > 0 ? "border-black/5" : ""}>
            <StatCard stat={stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
