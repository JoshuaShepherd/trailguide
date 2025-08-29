export default function ExpertPublisherDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
            Expert Publisher Platform <span className="text-green-600">Demo</span>
          </h1>
          <p className="text-xl text-trailguide-slate mb-8">
            This is the Expert Publisher platform demonstration. 
            The original TrailGuide content has been restored to the home page.
          </p>
          <div className="space-y-4">
            <p className="text-trailguide-slate">Visit our demo pages:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/expert-publisher/what-you-get" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Complete Platform
              </a>
              <a href="/expert-publisher/ai-workspace" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                AI Workspace
              </a>
              <a href="/expert-publisher/content-system" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Content System
              </a>
              <a href="/expert-publisher/analytics" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Analytics
              </a>
              <a href="/expert-publisher/distribution" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Distribution
              </a>
              <a href="/expert-publisher/design-system" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Design System
              </a>
              <a href="/expert-publisher/products" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Products
              </a>
              <a href="/expert-publisher/template" className="p-4 border rounded-lg hover:border-green-400 transition-colors">
                Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Expert Publisher Platform Demo - Build Your Thought Leadership Empire',
  description: 'Live interactive demonstration of our complete Expert Publisher platform. See exactly how you\'ll build authority, grow your audience, and create multiple revenue streams.',
};
