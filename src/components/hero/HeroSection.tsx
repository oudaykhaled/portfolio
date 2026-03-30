import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #3DDC84, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #3178C6, transparent 70%)', animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full opacity-10 blur-[80px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #512BD4, transparent 70%)', animationDelay: '3s' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MiniT />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight"
        >
          Ouday Khaled
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl font-mono text-text-muted tracking-wide"
        >
          Software Engineer | Consultant
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-2xl text-sm sm:text-base text-text-muted leading-relaxed"
        >
          14+ years of software engineering. Deep expertise in native Android &mdash;
          Kotlin, Jetpack Compose, clean architecture. Broad mastery across 9 languages,
          Flutter, .NET, React, and full-stack production systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center gap-5 mt-2"
        >
          <a
            href="https://linkedin.com/in/oudaykhaled"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-text-dim hover:text-android transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-text-dim" aria-hidden="true">|</span>
          <a
            href="https://github.com/oudaykhaled"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-text-dim hover:text-android transition-colors"
          >
            GitHub
          </a>
          <span className="text-text-dim" aria-hidden="true">|</span>
          <a
            href="mailto:ouday.khaled@gmail.com"
            className="text-sm font-mono text-text-dim hover:text-android transition-colors"
          >
            ouday.khaled@gmail.com
          </a>
          <span className="text-text-dim" aria-hidden="true">|</span>
          <a
            href="tel:+31622956715"
            className="text-sm font-mono text-text-dim hover:text-android transition-colors"
          >
            +31 6 22956715
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#t-shape"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 animate-float"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="text-text-muted" size={28} />
      </motion.a>
    </section>
  );
}

function MiniT() {
  const horizontalColors = ['#02569B', '#512BD4', '#3178C6', '#FFD43B', '#2563EB', '#F05138', '#00ADD8', '#CE422B', '#6E4A7E'];
  return (
    <div className="flex flex-col items-center gap-0.5 mb-2">
      <div className="flex gap-0.5">
        {horizontalColors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            className="h-2 w-3.5 sm:h-2.5 sm:w-4.5 rounded-[2px]"
            style={{ backgroundColor: color, opacity: 0.8 }}
          />
        ))}
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="h-10 w-5 sm:h-12 sm:w-6 rounded-b-[3px] origin-top"
        style={{ backgroundColor: '#3DDC84', opacity: 0.8 }}
      />
    </div>
  );
}
