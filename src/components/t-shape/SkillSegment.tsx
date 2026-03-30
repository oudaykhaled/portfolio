import { motion } from 'framer-motion';
import type { TechnologyDomain } from '../../types';

interface SkillSegmentProps {
  domain: TechnologyDomain;
  index: number;
  onHover: (domain: TechnologyDomain | null) => void;
  onClick: (domain: TechnologyDomain) => void;
}

export function SkillSegment({ domain, index, onHover, onClick }: SkillSegmentProps) {
  const delay = 0.15 + index * 0.06;

  return (
    <motion.button
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, zIndex: 10 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => onHover(domain)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(domain)}
      aria-label={`${domain.name} — rated ${domain.rating}/10. Click for details.`}
      className="
        group relative flex flex-col items-center justify-center gap-2
        h-28 sm:h-36 lg:h-40 w-full origin-left
        rounded-xl border border-white/[0.06] cursor-pointer
        transition-shadow duration-300
      "
      style={{
        background: `linear-gradient(135deg, ${domain.color}12, ${domain.color}06)`,
        boxShadow: `0 0 24px ${domain.color}18`,
      }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `0 0 40px ${domain.color}35, inset 0 0 24px ${domain.color}0a` }}
      />

      <span
        className="relative z-10 text-sm sm:text-base lg:text-lg font-bold tracking-tight text-center leading-tight px-2"
        style={{ color: domain.color }}
      >
        {domain.shortName}
      </span>

      <span className="relative z-10 font-mono text-[11px] sm:text-xs text-text-muted">
        {domain.rating}/10
      </span>

      <div className="relative z-10 h-1.5 w-12 sm:w-16 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${domain.rating * 10}%` }}
          transition={{ delay: delay + 0.3, duration: 0.6 }}
          className="h-full rounded-full"
          style={{ backgroundColor: domain.color }}
        />
      </div>
    </motion.button>
  );
}
