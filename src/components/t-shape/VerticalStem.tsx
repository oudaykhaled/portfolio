import { motion } from 'framer-motion';
import { verticalDomain } from '../../data/skills';
import type { TechnologyDomain } from '../../types';

interface VerticalStemProps {
  onSelect: (domain: TechnologyDomain) => void;
}

export function VerticalStem({ onSelect }: VerticalStemProps) {
  const domain = verticalDomain;
  const topSkills = domain.skills.filter(s => s.rating >= 8).slice(0, 12);

  return (
    <div className="flex justify-center -mt-px">
      <motion.button
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect(domain)}
        aria-label={`${domain.name} — depth expertise rated ${domain.rating}/10. Click for details.`}
        className="relative origin-top w-56 sm:w-72 lg:w-80 rounded-b-2xl border border-white/[0.06] border-t-0 cursor-pointer group transition-shadow duration-300"
        style={{
          background: `linear-gradient(180deg, ${domain.color}14, ${domain.color}05)`,
          boxShadow: `0 0 40px ${domain.color}18`,
        }}
      >
        <div
          className="absolute inset-0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 50px ${domain.color}30, inset 0 0 35px ${domain.color}0a` }}
        />

        <div className="relative z-10 py-6 sm:py-8 px-5 sm:px-6 flex flex-col items-center gap-3">
          <span
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight"
            style={{ color: domain.color }}
          >
            {domain.name}
          </span>

          <span className="font-mono text-xs sm:text-sm text-text-muted">
            {domain.rating}/10 &middot; {domain.repoCount} repos
          </span>

          <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${domain.rating * 10}%` }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="h-full rounded-full"
              style={{ backgroundColor: domain.color }}
            />
          </div>

          <div className="w-full border-t border-white/5 pt-4 mt-2 space-y-2.5">
            {topSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.04, duration: 0.3 }}
                className="flex items-center justify-between"
              >
                <span className="text-xs sm:text-sm text-text-muted truncate mr-3">{skill.name}</span>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-1 w-8 sm:w-10 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.rating * 10}%`,
                        backgroundColor: domain.color,
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs text-text-dim w-3 text-right">{skill.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-text-dim mt-2">
            +{domain.skills.length - topSkills.length} more &middot; click to explore
          </p>
        </div>
      </motion.button>
    </div>
  );
}
