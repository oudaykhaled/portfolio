import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Skills', href: '#t-shape' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Impact', href: '#stats' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-text hover:text-android transition-colors"
        >
          OK<span className="text-android">.</span>dev
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
