import { PageLayout } from '@/components/layout/page-layout';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Portfolio() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <GallerySection />
      <ContactSection />
    </PageLayout>
  );
}
