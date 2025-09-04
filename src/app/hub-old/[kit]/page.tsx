import { notFound } from 'next/navigation';

interface KitPageProps {
  params: Promise<{ kit: string }>;
}

export default async function HubOldKitPage({ params }: KitPageProps) {
  const resolvedParams = await params;
  
  // Simple fallback for build purposes
  const validKits = [
    'fundraising', 'major-gifts', 'grants', 'programs', 
    'communications', 'events', 'volunteers', 'finance',
    'hr', 'compliance', 'board', 'partnerships', 'data',
    'it', 'strategy'
  ];

  if (!validKits.includes(resolvedParams.kit)) {
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
              Legacy Interface: {resolvedParams.kit.charAt(0).toUpperCase() + resolvedParams.kit.slice(1)}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={`/hub/${resolvedParams.kit}`}
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

      {/* Simple fallback content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Legacy {resolvedParams.kit.charAt(0).toUpperCase() + resolvedParams.kit.slice(1)} Kit
        </h1>
        <p className="text-gray-600">
          This is the legacy interface for the {resolvedParams.kit} kit. Please use the new interface instead.
        </p>
      </div>
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
