import { notFound } from 'next/navigation';
import { getKitBySlug } from '@/kits';

interface KitPageProps {
  params: Promise<{ kit: string }>;
}

export default async function KitPage({ params }: KitPageProps) {
  const resolvedParams = await params;
  const kit = getKitBySlug(resolvedParams.kit);

  if (!kit) {
    notFound();
  }

  // For now, render a simple demo of the kit data
  // In production, this would use UnifiedShell component
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{kit.name}</h1>
          <p className="text-gray-600">{kit.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-gray-500">Stage: {kit.stage}</span>
            <span className="text-sm text-gray-500">Kit: {kit.slug}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* KPIs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kit.kpis.map((kpi) => (
                  <div key={kpi.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{kpi.label}</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {kpi.format === 'currency' && typeof kpi.value === 'number' 
                        ? `$${kpi.value.toLocaleString()}`
                        : kpi.value}
                    </div>
                    {kpi.delta && (
                      <div className={`text-sm ${kpi.delta > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.delta > 0 ? '+' : ''}{kpi.delta}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {kit.quickActions.map((action) => (
                  <button 
                    key={action.id}
                    className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{action.label}</div>
                    {action.description && (
                      <div className="text-sm text-gray-600 mt-1">{action.description}</div>
                    )}
                    <div className="text-xs text-gray-500 mt-2">
                      Handler: {action.handler}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Resources */}
            {kit.learn && kit.learn.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Learning Resources</h3>
                <div className="space-y-2">
                  {kit.learn.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      className="block text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Guardrails */}
            {kit.guardrails && kit.guardrails.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
                <div className="space-y-4">
                  {kit.guardrails.map((guardrail, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 text-sm">{guardrail.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{guardrail.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kit Info */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">About This Kit</h3>
              <p className="text-sm text-blue-800">
                This is a demo of the {kit.name} kit. In the full platform, 
                this would include live data integration, AI-powered actions, 
                and real-time analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
