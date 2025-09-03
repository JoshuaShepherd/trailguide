import { UnifiedShell } from '@/components/dashboard';
import { getKitBySlug } from '@/kits';
import { notFound } from 'next/navigation';

interface UnifiedDashboardPageProps {
  params: {
    kit: string;
  };
}

export default function UnifiedDashboardPage({ params }: UnifiedDashboardPageProps) {
  const kit = getKitBySlug(params.kit);
  
  if (!kit) {
    return notFound();
  }

  return (
    <UnifiedShell 
      kit={kit}
      orgContext={{
        id: 'demo-org',
        name: 'Demo Organization',
        role: 'admin'
      }}
    />
  );
}

// Generate static params for all available kits
export async function generateStaticParams() {
  // Import the kit registry to get all kit slugs
  const { getAllKits } = await import('@/kits');
  const allKits = getAllKits();
  
  return allKits.map((kit) => ({
    kit: kit.slug,
  }));
}
