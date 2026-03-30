import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ChevronDown, Server } from 'lucide-react';
import type { Project } from '../../types';

const LANG_COLORS: Record<string, string> = {
  'Dart': '#02569B',
  'TypeScript': '#3178C6',
  'C#': '#512BD4',
  'Python': '#FFD43B',
  'Go': '#00ADD8',
  'Rust': '#CE422B',
  'Elixir': '#6E4A7E',
  'Swift': '#F05138',
  'Kotlin': '#7F52FF',
  'Java': '#ED8B00',
  'JavaScript': '#F7DF1E',
  'CSS': '#264de4',
  'Shell': '#89e051',
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMicroservices = project.microservices && project.microservices.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.06] bg-surface transition-all duration-300 hover:shadow-xl hover:shadow-white/[0.03] hover:border-white/10 cursor-pointer"
      onClick={() => hasMicroservices && setExpanded(!expanded)}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-text group-hover:text-white transition-colors">
              {project.name}
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-dim mt-0.5 inline-block">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-text-dim shrink-0 mt-1">
            <GitBranch size={13} />
            <span className="font-mono text-[11px]">{project.repoCount}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-muted/70 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.languages.map((lang) => {
            const color = LANG_COLORS[lang] || '#71717a';
            return (
              <span
                key={lang}
                className="rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium border"
                style={{
                  color,
                  background: `${color}0a`,
                  borderColor: `${color}25`,
                }}
              >
                {lang}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.components.map((comp) => (
            <span
              key={comp}
              className="text-[9px] sm:text-[10px] font-mono text-text-dim/60 bg-white/[0.03] px-2 py-0.5 rounded"
            >
              {comp}
            </span>
          ))}
        </div>

        {hasMicroservices && (
          <div className="flex items-center gap-1 mt-4 text-android/70 text-[11px] font-medium">
            <Server size={12} />
            <span>{project.microservices!.length} microservices</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-auto"
            >
              <ChevronDown size={14} />
            </motion.span>
          </div>
        )}
      </div>

      <AnimatePresence>
        {expanded && hasMicroservices && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-white/[0.04] pt-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-text-dim mb-3">
                Backend Microservices
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.microservices!.map((ms) => {
                  const color = LANG_COLORS[ms.language] || '#71717a';
                  return (
                    <div
                      key={ms.name}
                      className="flex items-center gap-2 text-[11px] text-text-muted/80 py-1 px-2 rounded bg-white/[0.02]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="truncate">{ms.name}</span>
                      <span
                        className="ml-auto text-[9px] font-mono shrink-0"
                        style={{ color }}
                      >
                        {ms.language}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
