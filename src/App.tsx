import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { TShape } from './components/t-shape/TShape';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { StatsSection } from './components/stats/StatsSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-android focus:text-bg focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TShape />
        <ExperienceSection />
        <ProjectsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
