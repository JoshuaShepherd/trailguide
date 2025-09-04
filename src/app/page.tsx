import { TemplateHeroSection } from '@/components/sections/TemplateHeroSection';
import { TemplateShowcaseSection } from '@/components/sections/TemplateShowcaseSection';
import { TemplateEducationSection } from '@/components/sections/TemplateEducationSection';
import { EducationalBanner } from '@/components/sections/EducationalBanner';
import { ProofSection } from '@/components/sections/ProofSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { StartJourneySection } from '@/components/sections/StartJourneySection';

export default function Home() {
  return (
    <main>
      <TemplateHeroSection />
      <TemplateShowcaseSection />
      <TemplateEducationSection />
      <EducationalBanner />
      <ProofSection />
      <ValuesSection />
      <ClientStoriesSection />
      <StartJourneySection />
    </main>
  );
}
