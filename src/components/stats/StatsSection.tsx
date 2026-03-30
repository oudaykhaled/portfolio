import { Section } from '../layout/Section';
import { StatCounter } from './StatCounter';
import { stats } from '../../data/projects';

export function StatsSection() {
  return (
    <Section id="stats" className="py-24 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Impact at <span className="text-android">Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
            Real numbers from 14+ years of engineering &mdash; spanning fintech,
            startups, enterprise, and open-source across 9 languages.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-surface/50 p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
