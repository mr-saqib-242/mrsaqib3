/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SideSocialDock } from './components/SideSocialDock';
import { PageSwitcherDock } from './components/PageSwitcherDock';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AboutSkillsPage } from './components/AboutSkillsPage';
import { ServicesSection } from './components/ServicesSection';
import { ServicesSolutionsPage } from './components/ServicesSolutionsPage';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectsPortfolioPage } from './components/ProjectsPortfolioPage';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { AnimatePresence, motion } from 'motion/react';
import { Project, PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'about-and-skills') {
        setCurrentPage('about-and-skills');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'services-and-solutions') {
        setCurrentPage('services-and-solutions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'projects-and-portfolio' || hash === 'projects') {
        setCurrentPage('projects-and-portfolio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    const validPageId: PageId =
      pageId === 'about-and-skills'
        ? 'about-and-skills'
        : pageId === 'services-and-solutions'
        ? 'services-and-solutions'
        : pageId === 'projects-and-portfolio' || pageId === 'projects'
        ? 'projects-and-portfolio'
        : pageId === 'contact'
        ? 'contact'
        : 'home';

    setCurrentPage(validPageId);
    window.location.hash = `#/${validPageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    handleNavigate('contact');
  };

  const handleProjectsClick = () => {
    handleNavigate('projects-and-portfolio');
  };

  const handleServicesClick = () => {
    handleNavigate('services-and-solutions');
  };

  return (
    <div className="min-h-screen bg-[#131316] text-[#e5e1e6] selection:bg-[#ff6600] selection:text-white relative font-sans">
      {/* Top Scroll Progress Bar & Floating Top Button */}
      <ScrollProgressIndicator />

      {/* Fixed Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onContactClick={handleContactClick}
      />

      {/* Floating Side Social Rail */}
      <SideSocialDock />

      {/* Main Content Router with Smooth Page Transitions */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          {currentPage === 'about-and-skills' ? (
            <motion.div
              key="about-and-skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <AboutSkillsPage
                onContactClick={handleContactClick}
                onNavigateHome={() => handleNavigate('home')}
                onNavigateProjects={handleProjectsClick}
                onNavigateServices={handleServicesClick}
              />
            </motion.div>
          ) : currentPage === 'services-and-solutions' ? (
            <motion.div
              key="services-and-solutions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ServicesSolutionsPage
                onContactClick={handleContactClick}
                onNavigateHome={() => handleNavigate('home')}
              />
            </motion.div>
          ) : currentPage === 'projects-and-portfolio' ? (
            <motion.div
              key="projects-and-portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ProjectsPortfolioPage
                onSelectProject={(project) => setSelectedProject(project)}
                onNavigateHome={() => handleNavigate('home')}
                onContactClick={handleContactClick}
              />
            </motion.div>
          ) : currentPage === 'contact' ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ContactPage onNavigateHome={() => handleNavigate('home')} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <HeroSection
                onProjectsClick={handleProjectsClick}
                onOpenResume={() => setResumeOpen(true)}
                onAboutClick={() => handleNavigate('about-and-skills')}
              />
              <AboutSection
                onContactClick={handleContactClick}
                onOpenAboutSkillsPage={() => handleNavigate('about-and-skills')}
              />
              <ServicesSection
                onContactClick={handleContactClick}
                onExploreServices={handleServicesClick}
              />
              <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating View Switcher Dock */}
      <PageSwitcherDock
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Case Study & CV Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactClick}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onContactClick={handleContactClick}
      />
    </div>
  );
}
