export const metadata = {
  title: 'TrailKit Hub (Legacy) - TrailGuide',
  description: 'Legacy TrailKit hub interface - original implementation preserved for comparison.',
};

export default async function HubOldPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            TrailKit Hub (Legacy Version)
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Original TrailKit interface preserved for reference and comparison
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> This is the original TrailKit hub interface before the Unified Dashboard Shell implementation. 
              Use this to compare with the new unified interface at <code>/hub/[kit]</code>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Links to original kit implementations */}
          {[
            { slug: 'fundraising', name: 'Fundraising Kit' },
            { slug: 'grants', name: 'Grants Kit' },
            { slug: 'major-gifts', name: 'Major Gifts Kit' },
            { slug: 'volunteers', name: 'Volunteers Kit' },
            { slug: 'events', name: 'Events Kit' },
            { slug: 'communications', name: 'Communications Kit' },
          ].map((kit) => (
            <a
              key={kit.slug}
              href={`/hub-old/${kit.slug}`}
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {kit.name}
              </h3>
              <p className="text-sm text-gray-600">
                Legacy implementation with original KitShell interface
              </p>
              <div className="mt-4 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                Original Interface
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 bg-evergreen-600 text-white rounded-md hover:bg-evergreen-700 transition-colors"
          >
            View New Unified Dashboard →
          </a>
        </div>
      </div>
    </div>
  );
}
