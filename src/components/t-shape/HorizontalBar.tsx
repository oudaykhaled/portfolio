import { SkillSegment } from './SkillSegment';
import { horizontalDomains } from '../../data/skills';
import type { TechnologyDomain } from '../../types';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HorizontalBarProps {
  onSelect: (domain: TechnologyDomain) => void;
}

export function HorizontalBar({ onSelect }: HorizontalBarProps) {
  const [hovered, setHovered] = useState<TechnologyDomain | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const barRef = useRef<HTMLDivElement>(null);

  const handleHover = (domain: TechnologyDomain | null, index: number) => {
    setHovered(domain);
    if (domain && barRef.current) {
      const barRect = barRef.current.getBoundingClientRect();
      const segCount = horizontalDomains.length;
      const segWidth = barRect.width / segCount;
      setTooltipPos({
        x: segWidth * index + segWidth / 2,
        y: 0,
      });
    }
  };

  return (
    <div className="relative" ref={barRef}>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3">
        {horizontalDomains.map((domain, i) => (
          <SkillSegment
            key={domain.id}
            domain={domain}
            index={i}
            onHover={(d) => handleHover(d, i)}
            onClick={onSelect}
          />
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute z-50 w-80 hidden sm:block"
            style={{
              bottom: '100%',
              left: `${tooltipPos.x}px`,
              transform: 'translateX(-50%)',
              marginBottom: '16px',
            }}
          >
            <div
              className="rounded-xl border border-white/10 p-5 backdrop-blur-xl shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${hovered.color}15, var(--color-surface))` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold" style={{ color: hovered.color }}>
                  {hovered.name}
                </h4>
                <span className="font-mono text-xs text-text-muted">
                  {hovered.repoCount} repos
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-white/5 mb-4 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${hovered.rating * 10}%`, backgroundColor: hovered.color }}
                />
              </div>

              <div className="space-y-2">
                {hovered.skills.slice(0, 4).map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-text-muted truncate mr-3">{skill.name}</span>
                    <span className="font-mono text-xs text-text-dim shrink-0">{skill.rating}/10</span>
                  </div>
                ))}
              </div>

              {hovered.skills.length > 4 && (
                <p className="mt-3 text-xs text-text-dim">
                  +{hovered.skills.length - 4} more skills — click to view all
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
