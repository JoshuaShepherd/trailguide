import { HeroSection } from '@/components/sections/HeroSection';
import { TrailMapSection } from '@/components/sections/TrailMapSection';
import { TrailHikesSection } from '@/components/sections/TrailHikesSection';
import { TrailKitsSection } from '@/components/sections/TrailKitsSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { TrustEthicsSection } from '@/components/sections/TrustEthicsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrailMapSection />
      <TrailHikesSection />
      <TrailKitsSection />
      <CaseStudySection />
      <TrustEthicsSection />
      <NewsletterSection />
      <FinalCTASection />
    </>
  );
}
