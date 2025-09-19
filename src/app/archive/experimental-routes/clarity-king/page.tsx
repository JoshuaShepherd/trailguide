import Link from 'next/link';

const ClarityKingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">TrailGuide</h1>
          <h2 className="text-2xl text-slate-600 font-medium">Clarity is King.</h2>
        </div>

        <hr className="border-slate-300 mb-16" />

        {/* Two Simple Doors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Two Simple Doors</h2>
          <p className="text-xl text-slate-700 mb-4">
            TrailGuide helps people publish and lead with clarity.
          </p>
          <p className="text-xl text-slate-700 mb-12">
            We do this in <strong>two ways</strong>:
          </p>

          {/* TrailGuide Press */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
              <span className="text-3xl mr-3">🚪</span>
              TrailGuide Press
            </h3>
            <p className="text-lg text-slate-600 italic mb-6">
              For Thought Leaders, Authors, Teachers, Coaches
            </p>

            <ul className="space-y-3 mb-8 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Your <strong>full-stack digital publishing platform</strong> (React + Next.js + Tailwind + Supabase + Vercel).
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Blog, courses, paywall subscriptions, events, newsletters — all in one place.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                $1,000 setup + 10% of future revenue.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Built in weeks, not months.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Zero hidden fees. You own the code.
              </li>
            </ul>

            <div className="space-y-2">
              <p>
                <Link 
                  href="/alan-hirsch-platform" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  👉 <span className="ml-2"><strong>See Alan Hirsch's Platform →</strong></span>
                </Link>
              </p>
              <p>
                <Link 
                  href="/brad-brisco-platform" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  👉 <span className="ml-2"><strong>See Brad Brisco's Platform →</strong></span>
                </Link>
              </p>
            </div>
          </div>

          <hr className="border-slate-300 mb-16" />

          {/* TrailGuide Labs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
              <span className="text-3xl mr-3">🚪</span>
              TrailGuide Labs
            </h3>
            <p className="text-lg text-slate-600 italic mb-6">
              For Nonprofits, Movements, Organizations
            </p>

            <ul className="space-y-3 mb-8 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <strong>TrailKits</strong>: dashboards + AI agents for every core nonprofit function (fundraising, comms, volunteers, exec leadership, etc.).
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <strong>TrailHikes</strong>: 3-week sprints/workshops to train your team in AI literacy and practice.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <strong>TrailMap</strong>: your custom AI maturity roadmap, for ethics, efficiency, and impact.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <strong>Consulting & Coaching</strong>: bespoke guidance for leadership teams navigating AI.
              </li>
            </ul>

            <p>
              <Link 
                href="/nonprofit-trailkit-demo" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                👉 <span className="ml-2"><strong>See Nonprofit TrailKit Demo →</strong></span>
              </Link>
            </p>
          </div>
        </section>

        <hr className="border-slate-300 mb-16" />

        {/* Why This Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why This Matters</h2>
          
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>For Thought Leaders</strong>: Traditional publishers take 85%. TrailGuide puts <strong>90%+ in your pocket</strong>, connects you directly with your audience, and gives you the tools of a six-figure digital agency — at 1% of the price.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>For Nonprofits</strong>: Every dollar wasted on inefficiency is a dollar not serving your mission. TrailGuide helps you reclaim time, save money, and amplify your work — responsibly, with a covenant around ethical AI.
              </div>
            </li>
          </ul>
        </section>

        <hr className="border-slate-300 mb-16" />

        {/* How to Get Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Get Started</h2>
          
          <ul className="space-y-3 mb-8 text-slate-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Thought Leaders</strong>: <Link href="/trailguide-press" className="text-blue-600 hover:text-blue-800 font-medium">[Start with TrailGuide Press →]</Link>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Nonprofits</strong>: <Link href="/trailguide-labs" className="text-blue-600 hover:text-blue-800 font-medium">[Explore TrailGuide Labs →]</Link>
              </div>
            </li>
          </ul>

          <div className="text-slate-700 space-y-2">
            <p>You don't need jargon, complexity, or 100 different tools.</p>
            <p>You need a clear path.</p>
            <p className="font-medium">That's why TrailGuide exists.</p>
          </div>
        </section>

        <hr className="border-slate-300 mb-16" />

        {/* About TrailGuide */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">About TrailGuide</h3>
          
          <div className="text-slate-700 space-y-4 mb-6">
            <p>
              TrailGuide is founded by Josh [Your Last Name],<br />
              a technologist and movement leader who has built for:
            </p>
            
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                National authors (Alan Hirsch, Brad Brisco, Tim Catchim)
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Industry innovators (SpecChem, CRM + Mobile Apps)
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Nonprofits and networks shaping the future of mission
              </li>
            </ul>
          </div>

          <p>
            <Link 
              href="/full-story" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              👉 <span className="ml-2"><strong>Read the Full Story →</strong></span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ClarityKingPage;
