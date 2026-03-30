import { Section } from '../layout/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export function ProjectsSection() {
  return (
    <Section id="projects" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Proven <span className="text-android">Side Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            18 production side projects spanning mobile, web, microservices, and
            infrastructure &mdash; click on projects with microservices to explore the full backend.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
