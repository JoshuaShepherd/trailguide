import { AceternityShowcase } from "@/components/aceternity/aceternity-showcase";

export default function AceternityPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Aceternity Components</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#sparkles-hero" className="text-slate-300 hover:text-white transition-colors text-sm">Sparkles</a>
              <a href="#aurora-background" className="text-slate-300 hover:text-white transition-colors text-sm">Aurora</a>
              <a href="#vortex" className="text-slate-300 hover:text-white transition-colors text-sm">Vortex</a>
              <a href="#meteors" className="text-slate-300 hover:text-white transition-colors text-sm">Meteors</a>
              <a href="#glowing-stars" className="text-slate-300 hover:text-white transition-colors text-sm">Glowing Stars</a>
              <a href="#shooting-stars" className="text-slate-300 hover:text-white transition-colors text-sm">Shooting Stars</a>
              <a href="#spotlight-new" className="text-slate-300 hover:text-white transition-colors text-sm">Spotlight</a>
              <a href="#glowing-effect" className="text-slate-300 hover:text-white transition-colors text-sm">Glowing Effect</a>
              <a href="#lamp" className="text-slate-300 hover:text-white transition-colors text-sm">Lamp</a>
              <a href="#hero-parallax" className="text-slate-300 hover:text-white transition-colors text-sm">Hero Parallax</a>
              <a href="#coming-soon" className="text-slate-300 hover:text-white transition-colors text-sm">Coming Soon</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Aceternity UI Components
          </h1>
          <p className="text-slate-300 text-lg">
            Beautiful animated components powered by particles and gradients
          </p>
        </div>
        
        {/* Project Setup Verification */}
        <div className="mb-8 p-6 bg-slate-800 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">✅ Project Setup Verified</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-emerald-50 text-emerald-800 p-3 rounded">
              <h3 className="font-semibold">shadcn/ui Structure</h3>
              <p>Components directory at /components/ui ✓</p>
            </div>
            <div className="bg-blue-50 text-blue-800 p-3 rounded">
              <h3 className="font-semibold">Tailwind CSS v4.0</h3>
              <p>Modern PostCSS setup with @tailwindcss/postcss ✓</p>
            </div>
            <div className="bg-purple-50 text-purple-800 p-3 rounded">
              <h3 className="font-semibold">TypeScript</h3>
              <p>Full TypeScript support configured ✓</p>
            </div>
          </div>
        </div>

        {/* Dependencies Installed */}
        <div className="mb-8 p-6 bg-slate-800 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">📦 Dependencies Installed</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Particles System:</h3>
              <ul className="space-y-1 text-slate-400">
                <li>• @tsparticles/react</li>
                <li>• @tsparticles/slim</li>
                <li>• @tsparticles/engine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Animation:</h3>
              <ul className="space-y-1 text-slate-400">
                <li>• framer-motion</li>
                <li>• Existing: clsx, tailwind-merge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component Files Created */}
        <div className="mb-8 p-6 bg-slate-800 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">📁 Components Available</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2 text-slate-300">
              <div>✅ Sparkles - Particle effects</div>
              <div>✅ Aurora Background - Dynamic aurora</div>
              <div>✅ Vortex - Spinning particles</div>
              <div>✅ Meteors - Shooting meteors</div>
              <div>✅ Glowing Stars - Star fields</div>
            </div>
            <div className="space-y-2 text-slate-300">
              <div>✅ Shooting Stars - Animated trails</div>
              <div>✅ New Spotlight - Dual beams</div>
              <div>✅ Glowing Effect - Interactive glows</div>
              <div>✅ Lamp Container - Hero lighting</div>
              <div>✅ Hero Parallax - 3D scrolling</div>
            </div>
          </div>
        </div>

        {/* Component Showcase */}
        <AceternityShowcase />
          
        {/* Coming Soon Section */}
        <section id="coming-soon" className="scroll-mt-20 mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">🚀 Coming Soon</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              More components are being added to the collection. Check back for advanced particle systems, animated gradients, and special effects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-48 bg-slate-800 rounded-md flex flex-col items-center justify-center">
              <div className="text-3xl mb-2">🌌</div>
              <h3 className="text-white font-semibold mb-1">Advanced Particles</h3>
              <p className="text-slate-500 text-sm text-center">Physics-based systems</p>
            </div>
            <div className="h-48 bg-slate-800 rounded-md flex flex-col items-center justify-center">
              <div className="text-3xl mb-2">🌈</div>
              <h3 className="text-white font-semibold mb-1">Gradient Animations</h3>
              <p className="text-slate-500 text-sm text-center">Flowing color transitions</p>
            </div>
            <div className="h-48 bg-slate-800 rounded-md flex flex-col items-center justify-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-white font-semibold mb-1">Lightning Effects</h3>
              <p className="text-slate-500 text-sm text-center">Electric animations</p>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <div className="p-6 bg-slate-800 rounded-lg mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Usage Instructions</h2>
          <div className="space-y-4 text-slate-300">
            <p>All aceternity components are now ready to use throughout your project. Each component has its own dedicated page for detailed documentation.</p>
            
            <div className="bg-slate-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Import any component:</h3>
              <code className="text-green-400 text-sm">
                {`import { ComponentName } from "@/components/ui/component-name";`}
              </code>
            </div>

            <div className="bg-slate-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Individual component pages:</h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
                <div>• /sparkles - Particle effects</div>
                <div>• /aurora-background - Aurora effects</div>
                <div>• /vortex - Spinning particles</div>
                <div>• /meteors - Shooting meteors</div>
                <div>• /glowing-stars - Star fields</div>
                <div>• /shooting-stars - Animated trails</div>
                <div>• /spotlight-new - Spotlight effects</div>
                <div>• /glowing-effect - Interactive glows</div>
                <div>• /lamp - Hero lighting</div>
                <div>• /hero-parallax - 3D scrolling</div>
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">General usage pattern:</h3>
              <ul className="text-sm space-y-1 text-slate-400">
                <li>• All components use motion for animations</li>
                <li>• Components are responsive by default</li>
                <li>• Most components accept className for customization</li>
                <li>• Check individual pages for specific props</li>
                <li>• All components are "use client" compatible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
