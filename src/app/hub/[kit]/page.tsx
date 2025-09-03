import { notFound } from 'next/navigation';
import { getKitBySlug } from '@/kits';
import { UnifiedShell } from '@/components/dashboard';

interface KitPageProps {
  params: Promise<{ kit: string }>;
}

export default async function KitPage({ params }: KitPageProps) {
  const resolvedParams = await params;
  const kit = getKitBySlug(resolvedParams.kit);

  if (!kit) {
    notFound();
  }

  return (
    <UnifiedShell 
      kit={kit}
      orgContext={{
        id: 'demo-org',
        name: 'TrailGuide Demo Org',
        role: 'admin'
      }}
    />
  );
}

export async function generateStaticParams() {
  // Generate static params for all kits
  return [
    { kit: 'fundraising' },
    { kit: 'major-gifts' },
    { kit: 'grants' },
    { kit: 'programs' },
    { kit: 'communications' },
    { kit: 'events' },
    { kit: 'volunteers' },
    { kit: 'finance' },
    { kit: 'hr' },
    { kit: 'compliance' },
    { kit: 'board' },
    { kit: 'partnerships' },
    { kit: 'data' },
    { kit: 'it' },
    { kit: 'strategy' },
  ];
}

export async function generateMetadata({ params }: KitPageProps) {
  const resolvedParams = await params;
  const kit = getKitBySlug(resolvedParams.kit);

  if (!kit) {
    return {
      title: 'Kit Not Found - TrailHub',
      description: 'The requested TrailKit could not be found.',
    };
  }

  return {
    title: `${kit.name} - TrailHub`,
    description: kit.description,
  };
}
