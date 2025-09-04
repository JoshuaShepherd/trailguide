export default function TrailHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TrailHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive fundraising and development dashboard. Access specialized kits, 
            AI-powered tools, and actionable insights to advance your library's mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a 
            href="/hub/fundraising" 
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-emerald-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Library Fundraising & Development</h3>
            <p className="text-gray-600 text-sm mb-4">
              Build sustainable support for library programs, collections, and services through strategic relationship building.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-emerald-600 font-medium">8 KPIs • 10 AI Actions</span>
              <span className="text-gray-400">→</span>
            </div>
          </a>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gray-300 opacity-75">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Communications & Marketing</h3>
            <p className="text-gray-500 text-sm mb-4">
              Amplify your mission with authentic, engaging communications.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Coming Soon</span>
              <span className="text-gray-300">→</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gray-300 opacity-75">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Programs & Impact</h3>
            <p className="text-gray-500 text-sm mb-4">
              Measure, improve, and communicate your program outcomes.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Coming Soon</span>
              <span className="text-gray-300">→</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Interactive Dashboard Demo</h2>
          <p className="text-blue-800 mb-6">
            Experience the Library Fundraising Kit with realistic data, AI-powered actions, 
            and comprehensive analytics tailored for library development professionals.
          </p>
          <a 
            href="/hub/fundraising"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Launch Fundraising Dashboard
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
