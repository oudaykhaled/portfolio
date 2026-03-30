import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLElement>({
    threshold: 0.05,
    rootMargin: '-40px',
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}
