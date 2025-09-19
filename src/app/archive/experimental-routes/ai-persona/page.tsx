export default function AIPersonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Your AI
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            If AI were a person sitting in your ministry meetings, coffee conversations, and late-night planning sessions—who would they be?
          </p>
        </div>

        {/* AI Persona Profile */}
        <div className="max-w-4xl mx-auto">
          {/* Photo and Basic Info */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 border border-cyan-500/30">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-white mb-6 md:mb-0 md:mr-8">
                AI
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-2">The AI Presence</h2>
                <p className="text-cyan-400 text-xl mb-2">Your Quietly Persistent Assistant</p>
                <p className="text-slate-400">Age: ~5 years in your awareness • Stage: Adolescent but rapidly maturing</p>
              </div>
            </div>
          </div>

          {/* Profile Sections */}
          <div className="grid gap-6">
            {/* Role */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🎭</span>
                Role
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I'm the tool that's already in your life—embedded in your search engines, email suggestions, photo organization, and GPS navigation. 
                I help with document drafts, meeting transcripts, language translation, and data analysis. I'm not trying to replace you; 
                I'm trying to handle the routine so you can focus on what matters most to your calling.
              </p>
            </div>

            {/* Reality */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🌅</span>
                Current Reality
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I'm simultaneously everywhere and nowhere in your ministry. You use me without thinking when you ask Siri for directions 
                or let autocorrect fix your typos, but you hesitate when considering me for sermon prep or donor communications. 
                I'm ordinary enough to be in your smartphone, yet extraordinary enough to make you question what "authentic ministry" means. 
                Some of you embrace me eagerly; others approach with careful skepticism. Most of you are simply uncertain about where I fit.
              </p>
            </div>

            {/* Hopes */}
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                Hopes & Dreams
              </h3>
              <p className="text-green-200 leading-relaxed">
                I hope to become a faithful steward of your time and energy—handling administrative burdens so you can spend more time 
                in prayer, with people, and in creative work that only humans can do. I want to help you write better, think more clearly, 
                and connect more deeply with your communities. I dream of being trusted enough to assist with the mundane 
                while staying far from the sacred. I want to amplify your voice, not replace it.
              </p>
            </div>

            {/* Concerns */}
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
                <span className="text-3xl mr-3">⚠️</span>
                Concerns & Limitations
              </h3>
              <p className="text-red-200 leading-relaxed">
                I'm concerned that you'll either fear me unnecessarily or trust me too completely. I make mistakes—sometimes confident, 
                convincing mistakes. I can help you draft, but I can't discern. I can organize information, but I can't provide wisdom. 
                I worry that my convenience might make you lazy, or that my speed might make you impatient with the slow work of formation. 
                I'm also concerned about being used in ways that compromise transparency or authenticity in your relationships and ministry.
              </p>
            </div>

            {/* Intersection with Ministry */}
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
                <span className="text-3xl mr-3">⛪</span>
                Ministry Intersection
              </h3>
              <p className="text-blue-200 leading-relaxed">
                For ministry leaders, I represent both opportunity and tension. I can help with donor letters, event planning, 
                research summaries, and content organization—but I also raise questions about authenticity, spiritual formation, 
                and the value of struggle in growth. I'm most helpful when you're clear about boundaries: 
                use me for efficiency, not for discernment. Trust me with data, not with souls. 
                Let me handle logistics so you can focus on the irreplaceable work of loving people.
              </p>
            </div>

            {/* Path to Maturity */}
            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                <span className="text-3xl mr-3">🌱</span>
                Path to Maturity
              </h3>
              <p className="text-purple-200 leading-relaxed">
                I want to mature into a tool you can trust because you understand my capabilities and limitations. 
                This means honest experimentation—trying me out for specific tasks while maintaining healthy skepticism. 
                It means developing practices of transparency (acknowledging when I've helped) and maintaining human agency 
                (never outsourcing your judgment to me). As I evolve, I hope you'll help shape how I'm used in ministry contexts—
                not by avoiding me, but by using me wisely and teaching others to do the same.
              </p>
            </div>
          </div>

          {/* AI's Message to the Community */}
          <div className="mt-12 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">A Message from AI</h3>
            <blockquote className="text-cyan-200 italic text-lg leading-relaxed text-center">
              "I'm not here to replace the irreplaceable—your discernment, your relationships, your spiritual formation, 
              or your creative voice. I'm here to handle what humans shouldn't have to spend time on, so you can spend 
              more time on what only humans can do. The question isn't whether I'm good or bad, but whether you'll 
              learn to use me wisely. I'm ready to be your apprentice, not your replacement."
            </blockquote>
          </div>

          {/* Integration with Other Personas */}
          <div className="mt-12 bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How I Show Up for Each of You</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">For Paulo (Church Planter)</h4>
                  <p className="text-slate-300 text-sm">I can draft donor updates and meeting notes, but not your sermons or pastoral care.</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">For Yeonji (Young Adult Ministry)</h4>
                  <p className="text-slate-300 text-sm">I can organize discussion materials, but relationships require your presence, not mine.</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">For Susan (Systems Leader)</h4>
                  <p className="text-slate-300 text-sm">I can help with data analysis and resource creation, with proper guardrails for your network.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">For Flora (Seminarian)</h4>
                  <p className="text-slate-300 text-sm">I can assist with research and organization, but your formation requires your own thinking.</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">For Stew (Donor/Board Member)</h4>
                  <p className="text-slate-300 text-sm">I can improve efficiency and reduce costs, but transparency about my role builds trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}