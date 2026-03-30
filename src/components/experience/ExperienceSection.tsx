import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { experience } from '../../data/projects';

export function ExperienceSection() {
  return (
    <Section id="experience" className="py-24 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Career <span className="text-android">Timeline</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            14+ years of progressive engineering leadership &mdash; from
            senior engineer to principal, across fintech, startups, and enterprise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 sm:pl-20"
              >
                <div className="absolute left-2.5 sm:left-6.5 top-1.5 h-3 w-3 rounded-full border-2 border-android bg-bg" />

                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5 sm:p-6 hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-text">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-android font-medium">
                        {exp.roles.join(' → ')}
                      </p>
                    </div>
                    <div className="text-xs font-mono text-text-dim shrink-0">
                      <span>{exp.period}</span>
                      <span className="block text-text-dim">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-text-muted leading-relaxed flex gap-2">
                        <span className="text-android shrink-0 mt-1">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full px-2.5 py-0.5 text-xs font-mono text-text-dim border border-white/5 bg-white/[0.02]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative pl-10 sm:pl-20 mt-8"
          >
            <div className="absolute left-2.5 sm:left-6.5 top-1.5 h-3 w-3 rounded-full border-2 border-text-dim bg-bg" />
            <div className="p-4">
              <p className="text-sm font-mono text-text-dim">
                B.Sc. Computer Engineering &mdash; Beirut Arab University, 2009–2013
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
