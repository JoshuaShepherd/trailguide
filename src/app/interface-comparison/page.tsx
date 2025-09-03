export const metadata = {
  title: 'Interface Comparison - TrailGuide',
  description: 'Compare the legacy KitShell vs the new Unified Dashboard Shell implementation.',
};

export default async function InterfaceComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Interface Evolution Comparison
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare the original KitShell with the new Unified Dashboard Shell implementation
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Legacy Interface */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">Legacy KitShell</h2>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Architecture</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Individual kit implementations</li>
                    <li>• Tab-based navigation (Overview, Actions, Data, etc.)</li>
                    <li>• Right-side agent panel</li>
                    <li>• KPI cards in grid layout</li>
                    <li>• Basic action buttons</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Kit-specific layouts</li>
                    <li>• Simple sidebar with tabs</li>
                    <li>• Static guardrails display</li>
                    <li>• Basic search functionality</li>
                    <li>• Individual kit branding</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="/hub-old/fundraising"
                    className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-sm font-medium"
                  >
                    View Legacy Interface →
                  </a>
                </div>
              </div>
            </div>

            {/* New Unified Interface */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-evergreen-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">Unified Dashboard Shell</h2>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Architecture</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Single shell, consistent across all kits</li>
                    <li>• Enhanced sidebar with kit modules</li>
                    <li>• Integrated KPI bar at top</li>
                    <li>• Slide-out agent console drawer</li>
                    <li>• Bottom playbooks bar</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Universal navigation structure</li>
                    <li>• AI-first design with transparent agent console</li>
                    <li>• Audit log for compliance</li>
                    <li>• Playbook automation system</li>
                    <li>• Unified branding with kit accents</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="/hub/fundraising"
                    className="inline-flex items-center px-4 py-2 bg-evergreen-100 text-evergreen-800 rounded-md hover:bg-evergreen-200 transition-colors text-sm font-medium"
                  >
                    View Unified Interface →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Comparison */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Philosophy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Legacy Approach</h4>
                <p className="text-gray-600 text-sm">
                  Each kit was a custom implementation with its own layout, navigation, and components. 
                  This provided maximum flexibility but created inconsistent user experiences.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Unified Approach</h4>
                <p className="text-gray-600 text-sm">
                  Following the "One Shell, Many Kits" philosophy from the TrailKits Shell Guide. 
                  Consistent layout with swappable content provides scalability and ease of learning.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                <p className="text-gray-600 text-sm">
                  Users never need to re-learn navigation. Agent integration is consistent. 
                  Development is faster through reusable components.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Try Both Interfaces</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/hub-old"
                className="px-6 py-3 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors font-medium"
              >
                Legacy Hub Overview
              </a>
              <a
                href="/dashboard"
                className="px-6 py-3 bg-evergreen-100 text-evergreen-800 rounded-lg hover:bg-evergreen-200 transition-colors font-medium"
              >
                Unified Dashboard
              </a>
              <a
                href="/hub/fundraising"
                className="px-6 py-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors font-medium"
              >
                Try Fundraising Kit (New)
              </a>
              <a
                href="/hub-old/fundraising"
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Try Fundraising Kit (Legacy)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
