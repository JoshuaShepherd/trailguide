import { notFound } from 'next/navigation';
import { getKitBySlug } from '@/kits';
import KitShell from '@/components/kit-shell';

interface KitPageProps {
  params: Promise<{ kit: string }>;
}

export default async function HubOldKitPage({ params }: KitPageProps) {
  const resolvedParams = await params;
  const kit = getKitBySlug(resolvedParams.kit);

  if (!kit) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Legacy Interface Notice */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-amber-800 font-medium">
              Legacy Interface: {kit.name}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={`/hub/${kit.slug}`}
              className="text-evergreen-600 hover:text-evergreen-700 font-medium"
            >
              View in New Unified Shell →
            </a>
            <a
              href="/hub-old"
              className="text-amber-700 hover:text-amber-800"
            >
              ← Back to Legacy Hub
            </a>
          </div>
        </div>
      </div>

      {/* Original KitShell Implementation */}
      <KitShell 
        kit={kit}
        orgName="TrailGuide Demo Org"
        userRole="admin"
      />
    </div>
  );
}

export async function generateStaticParams() {
  // Generate static params for all kits (same as original hub)
  return [
    { kit: 'fundraising' },
    { kit: 'major-gifts' },
    { kit: 'grants' },
    { kit: 'volunteers' },
    { kit: 'events' },
    { kit: 'communications' },
    { kit: 'programs' },
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
