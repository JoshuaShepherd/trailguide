import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { DualPathSection } from '@/components/sections/DualPathSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { StartJourneySection } from '@/components/sections/StartJourneySection';

export default function Home() {
  return (
    <main>
      <NewHeroSection />
      <DualPathSection />
      <ProofSection />
      <ValuesSection />
      <ClientStoriesSection />
      <StartJourneySection />
    </main>
  );
}
