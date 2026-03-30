import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { TechnologyDomain } from '../../types';
import { useEffect, useRef, useCallback } from 'react';

interface SkillDetailPanelProps {
  domain: TechnologyDomain | null;
  onClose: () => void;
}

export function SkillDetailPanel({ domain, onClose }: SkillDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'Tab' && panelRef.current) {
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [onClose]);

  useEffect(() => {
    if (!domain) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.addEventListener('keydown', handleKeyDown);

    requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [domain, handleKeyDown]);

  return (
    <AnimatePresence>
      {domain && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-panel-title"
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-lg overflow-y-auto border-l border-white/10 bg-surface p-6 sm:p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 id="skill-panel-title" className="text-2xl font-bold" style={{ color: domain.color }}>
                  {domain.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted font-mono">
                  {domain.rating}/10 overall &middot; {domain.repoCount} repos
                </p>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close panel"
                className="rounded-lg p-2 text-text-muted hover:text-text hover:bg-white/5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              {domain.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {domain.products.map((product) => (
                <span
                  key={product}
                  className="rounded-full px-3 py-1 text-xs font-medium border"
                  style={{
                    borderColor: `${domain.color}30`,
                    color: domain.color,
                    background: `${domain.color}08`,
                  }}
                >
                  {product}
                </span>
              ))}
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-dim mb-4">
              Skills Breakdown
            </h4>

            <div className="space-y-3">
              {domain.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: domain.color }}
                      />
                      <span className="text-sm font-medium text-text">{skill.name}</span>
                    </div>
                    <span className="font-mono text-xs text-text-muted">{skill.rating}/10</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-white/5 mb-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.rating * 10}%` }}
                      transition={{ delay: 0.2 + i * 0.03, duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: domain.color }}
                    />
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{skill.detail}</p>
                  <span className="mt-1 inline-block text-xs text-text-dim font-mono uppercase">
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
