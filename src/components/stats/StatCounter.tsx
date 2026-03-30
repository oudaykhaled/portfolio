import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { Stat } from '../../types';

interface StatCounterProps {
  stat: Stat;
  index: number;
}

export function StatCounter({ stat, index }: StatCounterProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const start = performance.now();
    const target = stat.value;

    const hasDecimal = target % 1 !== 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCount(hasDecimal ? parseFloat(val.toFixed(1)) : Math.round(val));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center gap-2 p-4"
    >
      <span className="text-4xl sm:text-5xl font-bold font-mono text-android tabular-nums">
        {count}{stat.suffix || ''}
      </span>
      <span className="text-xs sm:text-sm text-text-muted text-center leading-snug">
        {stat.label}
      </span>
    </motion.div>
  );
}
