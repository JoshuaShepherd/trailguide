import { HeroSection } from '@/components/sections/HeroSection';
import { TrailMapSection } from '@/components/sections/TrailMapSection';
import { TrailHikesSection } from '@/components/sections/TrailHikesSection';
import { TrailKitsSection } from '@/components/sections/TrailKitsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrailMapSection />
      <TrailHikesSection />
      <TrailKitsSection />
    </div>
  );
}