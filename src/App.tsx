import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { TopNavbar } from './components/TopNavbar';
import { Hero } from './components/Hero';
import { AboutTimeline } from './components/AboutTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#121214] text-[#EDEDED] flex flex-col">
      {/* Top Fixed Navigation */}
      <TopNavbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About, Academic Timeline & Skills Matrix */}
        <AboutTimeline />

        {/* Projects Gallery & Featured Spotlight */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Contact & Social Outbound Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Technical Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
