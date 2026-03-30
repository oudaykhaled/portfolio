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
      <Navbar />
      <main>
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
