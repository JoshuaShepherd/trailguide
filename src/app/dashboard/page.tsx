import { getKitCategories } from '@/kits';
import { DashboardLanding } from '@/components/dashboard';

export const metadata = {
  title: 'Unified Dashboard - TrailGuide',
  description: 'Experience the next evolution of TrailGuide with our unified dashboard shell. One consistent interface across all TrailKits, enhanced with AI assistance and automated workflows.',
  openGraph: {
    title: 'TrailGuide Unified Dashboard',
    description: 'One shell, many kits. Experience consistent UX across all 15 TrailKits with integrated AI, automated playbooks, and unified workflows.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrailGuide Unified Dashboard',
    description: 'One shell, many kits. Experience consistent UX across all 15 TrailKits with integrated AI, automated playbooks, and unified workflows.',
  },
};

export default async function UnifiedDashboardPage() {
  // Load kit data asynchronously following blog pattern
  const kitCategories = await Promise.resolve(getKitCategories());

  return <DashboardLanding kitCategories={kitCategories} />;
}
