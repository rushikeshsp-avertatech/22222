import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import { ProjectOverview } from '@/components/sections/project-overview';
import { SchemeComponents } from '@/components/sections/scheme-components';
import { EligibilityWizard } from '@/components/sections/eligibility-wizard';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { UpdatesTicker } from '@/components/sections/updates-ticker';
import { DownloadsSection } from '@/components/sections/downloads-section';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main id="main-content">
        <HeroCarousel />
        <ProjectOverview />
        <SchemeComponents />
        <EligibilityWizard />
        <DashboardSection />
        <UpdatesTicker />
        <DownloadsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
