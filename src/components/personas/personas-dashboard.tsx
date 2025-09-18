"use client";

import { useState } from "react";
import { Search, Filter, User, Heart, AlertTriangle, Target, TrendingUp, ChevronDown, ChevronUp, Clock, DollarSign, Star, CheckCircle, FileText, Lightbulb } from "lucide-react";

// Persona data
const personas = [
  {
    id: "paulo",
    name: "Paulo",
    title: "The Church Planter",
    age: 34,
    stage: "married with two kids",
    role: "Planting a new church in a mid-sized city while working part-time at UPS to support his family",
    photo: "/images/personas/paulo.png",
    reality: "Paulo is stretched thin. He's juggling preaching, fundraising, pastoral care, and admin on top of shift work. Exhaustion is real, but so is his conviction that God has called him to this mission.",
    hopes: "To reach his neighborhood, build a sustainable faith community, and raise up leaders who can share the load.",
    concerns: "Feels the tension between using tools like AI to save time and the fear of \"cheating\" or being spiritually lazy. Wonders if using AI in sermon prep or donor updates would cross ethical lines.",
    aiIntersection: "For Paulo, AI feels like both a lifeline and a temptation — something that might give him hours back, but that could compromise authenticity if misused.",
    pathToMaturity: "Learning to use AI to reclaim time (donor letters, meeting notes) while modeling integrity and transparency to his congregation.",
    category: "frontline",
    techComfort: "medium",
    aiReadiness: "cautious"
  },
  {
    id: "yeonji",
    name: "Yeonji",
    title: "The Young Adult Ministry Leader",
    age: 42,
    stage: "seminary-trained, leading young adult ministry",
    role: "Discipleship, counseling, retreat planning, and mentoring",
    photo: "/images/personas/yeonji.png",
    reality: "Yeonji pours herself into relational ministry. She supports dozens of young adults navigating faith, career, and identity. She's comfortable with technology but cautious about its role in spiritual life.",
    hopes: "To multiply her impact by equipping others to disciple well. She dreams of raising up the next generation of leaders with wisdom and resilience.",
    concerns: "AI risks eroding authenticity. She's wary of replacing Spirit-led discernment and embodied community with shortcuts or \"bots in place of bodies.\"",
    aiIntersection: "For Yeonji, AI feels like a potential aid but also a relational risk. She wonders if AI can serve discipleship without cheapening it.",
    pathToMaturity: "Using AI to prepare discussion guides or training materials, freeing her to spend more time in prayer, mentoring, and relational presence.",
    category: "discipleship",
    techComfort: "high",
    aiReadiness: "skeptical"
  },
  {
    id: "susan",
    name: "Susan",
    title: "The Systems & Movement Leader",
    age: 50,
    stage: "regional strategist in a church planting network",
    role: "Coaches 20–30 planters, oversees fundraising strategies, and ensures leaders have tools to survive and thrive",
    photo: "/images/personas/susan.png",
    reality: "Susan is a big-picture thinker with a systems mindset. She's been in the trenches as a planter herself but now equips others. Her challenge is scaling support across many leaders without diluting depth.",
    hopes: "To create reproducible systems and equip planters with tools that make their work more sustainable.",
    concerns: "Wary of hype. She fears planters misusing AI in ways that damage trust (plagiarized sermons, shallow theology, unhealthy dependency).",
    aiIntersection: "For Susan, AI feels like an unproven but promising set of tools. She needs clarity about what actually works and how to set guardrails.",
    pathToMaturity: "Developing network-wide practices for AI adoption that are responsible, transparent, and aligned with mission.",
    category: "leadership",
    techComfort: "medium",
    aiReadiness: "analytical"
  },
  {
    id: "flora",
    name: "Flora",
    title: "The Seminarian / Formation",
    age: 26,
    stage: "Latina, second-year seminary student at NOBTS",
    role: "Balances coursework with part-time ministry",
    photo: "/images/personas/flora.png",
    reality: "Flora is a digital native. She experiments with AI tools for study (e.g., parsing Greek verbs, summarizing commentaries) but wrestles with how they impact her intellectual and spiritual formation.",
    hopes: "To grow into a wise leader who knows how to use technology without outsourcing her own voice or creativity.",
    concerns: "Over-reliance on AI could weaken her critical thinking and dull her spiritual growth. She sees peers using AI to shortcut assignments and doesn't want to fall into the same trap.",
    aiIntersection: "For Flora, AI feels like both a helpful hack and a moral dilemma. It saves time but raises deep questions about authenticity and formation.",
    pathToMaturity: "Practicing discernment in using AI as a learning aid, while intentionally reflecting on its impact and keeping her own creative and theological voice central.",
    category: "formation",
    techComfort: "high",
    aiReadiness: "experimental"
  },
  {
    id: "stew",
    name: "Stew",
    title: "The Donor & Board Member",
    age: 62,
    stage: "retired teacher, long-time supporter",
    role: "Serves on the board, provides financial support, and tracks the mission's health",
    photo: "/images/personas/stew.png",
    reality: "Stew is deeply invested in the church's vision. He's generous, thoughtful, and engaged — but not particularly tech-savvy.",
    hopes: "To see the church thrive in ways that are sustainable, faithful, and Spirit-led. He wants confidence that his gifts are stewarded wisely.",
    concerns: "Skeptical of AI as a fad or distraction. Worries it could undermine relational ministry or replace authentic leadership.",
    aiIntersection: "For Stew, AI feels like a potential distraction unless leaders prove it is a faithful stewardship tool. Transparency is essential.",
    pathToMaturity: "Gaining confidence that AI is used to save money and time for mission, not to replace relationships or spiritual practices.",
    category: "support",
    techComfort: "low",
    aiReadiness: "resistant"
  }
];

const categories = [
  { value: "all", label: "All Personas", color: "bg-slate-500" },
  { value: "frontline", label: "Frontline Ministry", color: "bg-blue-500" },
  { value: "discipleship", label: "Discipleship", color: "bg-green-500" },
  { value: "leadership", label: "Leadership", color: "bg-purple-500" },
  { value: "formation", label: "Formation", color: "bg-orange-500" },
  { value: "support", label: "Support", color: "bg-red-500" }
];

const techComfortLevels = [
  { value: "all", label: "All Tech Levels" },
  { value: "low", label: "Low Tech Comfort" },
  { value: "medium", label: "Medium Tech Comfort" },
  { value: "high", label: "High Tech Comfort" }
];

const aiReadinessLevels = [
  { value: "all", label: "All AI Readiness" },
  { value: "resistant", label: "AI Resistant" },
  { value: "cautious", label: "AI Cautious" },
  { value: "skeptical", label: "AI Skeptical" },
  { value: "analytical", label: "AI Analytical" },
  { value: "experimental", label: "AI Experimental" }
];

export default function PersonasDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechComfort, setSelectedTechComfort] = useState("all");
  const [selectedAiReadiness, setSelectedAiReadiness] = useState("all");
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [showUniversalInsights, setShowUniversalInsights] = useState(true);
  const [activePersonaView, setActivePersonaView] = useState<string | null>(null);
  const [showReflectionTool, setShowReflectionTool] = useState(false);
  const [activeReflectionStep, setActiveReflectionStep] = useState<number | null>(null);
  const [reflectionResponses, setReflectionResponses] = useState<{[key: string]: string}>({});

  // Filter personas based on current filters
  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || persona.category === selectedCategory;
    const matchesTechComfort = selectedTechComfort === "all" || persona.techComfort === selectedTechComfort;
    const matchesAiReadiness = selectedAiReadiness === "all" || persona.aiReadiness === selectedAiReadiness;
    
    return matchesSearch && matchesCategory && matchesTechComfort && matchesAiReadiness;
  });

  const getPersonaById = (id: string) => personas.find(p => p.id === id);
  const selectedPersonaData = selectedPersona ? getPersonaById(selectedPersona) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Audience 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Personas
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            Understanding our diverse community of church planters, ministry leaders, and supporters
          </p>
          <div className="flex justify-center">
            <a 
              href="/ai-persona"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Meet AI as a Persona →
            </a>
          </div>
        </div>

        {/* Persona Navigation - People Page Style */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Meet Our Personas</h2>
            <p className="text-slate-300">Click on any persona to view their detailed profile</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {personas.map((persona) => {
              const categoryInfo = categories.find(c => c.value === persona.category);
              const isActive = activePersonaView === persona.id;
              
              return (
                <div
                  key={persona.id}
                  onClick={() => {
                    setActivePersonaView(activePersonaView === persona.id ? null : persona.id);
                  }}
                  className={`group relative bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-4 transition-all duration-300 border-2 cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 scale-[1.02] shadow-lg shadow-blue-500/20' 
                      : 'border-transparent hover:border-slate-600'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <img
                        src={persona.photo}
                        alt={persona.name}
                        className={`w-16 h-16 rounded-full object-cover transition-all duration-300 ${
                          isActive ? 'ring-4 ring-blue-400/50' : 'group-hover:ring-2 group-hover:ring-slate-400/50'
                        }`}
                      />
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-sm transition-colors ${
                      isActive ? 'text-blue-300' : 'text-white group-hover:text-blue-300'
                    }`}>
                      {persona.name}
                    </h3>
                    <p className="text-slate-400 text-xs mb-2 line-clamp-2">{persona.title}</p>
                    
                    <span className={`px-2 py-1 ${categoryInfo?.color} text-white rounded-full text-xs font-medium`}>
                      {categoryInfo?.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>

          {/* Personas Grid */}
        {activePersonaView ? (
          // Single Persona Detailed View
          (() => {
            const persona = personas.find(p => p.id === activePersonaView);
            const categoryInfo = categories.find(c => c.value === persona?.category);
            
            if (!persona) return null;
            
            return (
              <div className="mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={persona.photo}
                          alt={persona.name}
                          className="w-24 h-24 rounded-full object-cover mr-6 ring-4 ring-blue-400/30"
                        />
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{persona.name}</h2>
                          <p className="text-blue-400 text-xl mb-1">{persona.title}</p>
                          <p className="text-slate-300 mb-3">Age {persona.age} • {persona.stage}</p>
                          <span className={`px-4 py-2 ${categoryInfo?.color} text-white rounded-full text-sm font-medium`}>
                            {categoryInfo?.label}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePersonaView(null)}
                        className="text-slate-400 hover:text-white transition-colors p-2"
                        title="Back to all personas"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="p-8">
                    <div className="grid gap-6">
                      {/* Role */}
                      <div className="bg-slate-700/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <User className="mr-2 h-5 w-5" />
                          Role & Responsibilities
                        </h3>
                        <p className="text-slate-300">{persona.role}</p>
                      </div>

                      {/* Two Column Layout for Reality and Hopes */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Reality */}
                        <div className="bg-slate-700/50 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Target className="mr-2 h-5 w-5" />
                            Current Reality
                          </h3>
                          <p className="text-slate-300">{persona.reality}</p>
                        </div>

                        {/* Hopes */}
                        <div className="bg-slate-700/50 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Heart className="mr-2 h-5 w-5" />
                            Hopes & Dreams
                          </h3>
                          <p className="text-slate-300">{persona.hopes}</p>
                        </div>
                      </div>

                      {/* Concerns */}
                      <div className="bg-slate-700/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <AlertTriangle className="mr-2 h-5 w-5" />
                          Concerns & Challenges
                        </h3>
                        <p className="text-slate-300">{persona.concerns}</p>
                      </div>

                      {/* AI-Specific Content */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* AI Intersection */}
                        <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
                          <h3 className="text-lg font-semibold text-blue-300 mb-3">
                            AI Intersection
                          </h3>
                          <p className="text-blue-200 mb-4">{persona.aiIntersection}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              persona.techComfort === 'high' ? 'bg-green-500/20 text-green-300' :
                              persona.techComfort === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-red-500/20 text-red-300'
                            }`}>
                              Tech: {persona.techComfort}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              persona.aiReadiness === 'experimental' ? 'bg-blue-500/20 text-blue-300' :
                              persona.aiReadiness === 'analytical' ? 'bg-purple-500/20 text-purple-300' :
                              persona.aiReadiness === 'cautious' ? 'bg-yellow-500/20 text-yellow-300' :
                              persona.aiReadiness === 'skeptical' ? 'bg-orange-500/20 text-orange-300' :
                              'bg-red-500/20 text-red-300'
                            }`}>
                              AI: {persona.aiReadiness}
                            </span>
                          </div>
                        </div>

                        {/* Path to Maturity */}
                        <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                          <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5" />
                            Path to Maturity
                          </h3>
                          <p className="text-green-200">{persona.pathToMaturity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()
        ) : (
          // All Personas Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPersonas.map((persona) => {
              const categoryInfo = categories.find(c => c.value === persona.category);
              return (
                <div
                  key={persona.id}
                  onClick={() => setActivePersonaView(persona.id)}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Photo and Basic Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={persona.photo}
                      alt={persona.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{persona.name}</h3>
                      <p className="text-blue-400 text-sm">{persona.title}</p>
                      <p className="text-slate-400 text-sm">Age {persona.age} • {persona.stage}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`px-3 py-1 ${categoryInfo?.color} text-white rounded-full text-xs font-medium`}>
                      {categoryInfo?.label}
                    </span>
                  </div>

                  {/* Role */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {persona.role}
                  </p>

                  {/* Tech & AI Indicators */}
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400">Tech:</span>
                      <span className={`px-2 py-1 rounded ${
                        persona.techComfort === 'high' ? 'bg-green-500/20 text-green-300' :
                        persona.techComfort === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {persona.techComfort}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400">AI:</span>
                      <span className={`px-2 py-1 rounded ${
                        persona.aiReadiness === 'experimental' ? 'bg-blue-500/20 text-blue-300' :
                        persona.aiReadiness === 'analytical' ? 'bg-purple-500/20 text-purple-300' :
                        persona.aiReadiness === 'cautious' ? 'bg-yellow-500/20 text-yellow-300' :
                        persona.aiReadiness === 'skeptical' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {persona.aiReadiness}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Universal Insights Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 mb-8">
          {/* Toggle Header */}
          <button
            onClick={() => setShowUniversalInsights(!showUniversalInsights)}
            className="w-full p-6 flex items-center justify-between hover:bg-blue-900/20 transition-colors rounded-t-xl"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Universal Insights</h2>
              <p className="text-blue-200">What all personas share in common</p>
            </div>
            {showUniversalInsights ? (
              <ChevronUp className="h-6 w-6 text-blue-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-blue-400" />
            )}
          </button>

          {/* Collapsible Content */}
          {showUniversalInsights && (
            <div className="p-8 pt-0">
              <div className="text-center mb-8">
                <p className="text-blue-200 max-w-3xl mx-auto">
                  Despite their different roles and tech comfort levels, all our personas share common ground and universal needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Common Characteristics */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">They Are All:</h3>
                  
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4 text-red-400" />
                      Under Pressure
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Stretched between multiple responsibilities, limited resources, and high expectations. 
                      Time constraints and role demands create constant tension.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Search className="mr-2 h-4 w-4 text-yellow-400" />
                      Seeking AI Clarity
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Need clear guidance about how AI applies to their specific career path and calling. 
                      Uncertain about boundaries, best practices, and ethical implications.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-pink-400" />
                      Relationally-Motivated
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Driven by genuine care for people and communities. Concerned that technology 
                      might compromise authentic relationships and human connection.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Filter className="mr-2 h-4 w-4 text-green-400" />
                      Kingdom-Minded
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Ethically-driven with a focus on eternal values and God's purposes. 
                      Want to ensure all decisions align with biblical principles and kingdom priorities.
                    </p>
                  </div>
                </div>

                {/* What They Need to Hear */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">They All Need to Hear:</h3>
                  
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <h4 className="font-semibold text-green-300 mb-2">1. You Are Not Behind</h4>
                    <p className="text-green-200 text-sm">
                      "We are all beginners here. This technology is new for everyone, 
                      and there's no shame in learning at your own pace."
                    </p>
                  </div>

                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-semibold text-blue-300 mb-2">2. AI Must Not Displace</h4>
                    <p className="text-blue-200 text-sm">
                      "AI is a powerful tool that must be used in a way that doesn't replace: 
                      <strong>Christ, Community, Creation, or Creativity.</strong>"
                    </p>
                  </div>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="font-semibold text-purple-300 mb-2">3. Simple Way Forward</h4>
                    <p className="text-purple-200 text-sm">
                      "The journey is complicated, but the way forward is clear: small, thoughtful 
                      collaborative experiments that <strong>save time, make money, and improve work.</strong>"
                    </p>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
                    <h4 className="font-semibold text-orange-300 mb-2">4. Faithful Discernment</h4>
                    <p className="text-orange-200 text-sm">
                      "In times of disruption, faithfulness means discernment AND stewardship—both 
                      require innovation. Be <strong>timid as doves and shrewd as snakes.</strong>"
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-600">
                  <h4 className="text-2xl font-semibold text-white mb-6 text-center">The Universal Message</h4>
                  
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Point 1: Adaptive Challenge */}
                    <div className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-blue-500">
                      <h5 className="font-semibold text-blue-300 mb-2">1. AI is an Adaptive Challenge</h5>
                      <p className="text-slate-300">
                        AI integration is fundamentally a <strong>people problem</strong>, not a technological one. 
                        Adaptive challenges are human problems. The technology required to use AI is basic—the real 
                        challenge lies in how people use AI and how it affects us.
                      </p>
                    </div>

                    {/* Point 2: You're Already Here */}
                    <div className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-300 mb-2">2. You're Already Intersecting with AI</h5>
                      <p className="text-slate-300">
                        If you're using a PC or Mac—if you're using a computer—you already are intersecting with AI. 
                        You should be able to do so <strong>skillfully and wisely</strong>.
                      </p>
                    </div>

                    {/* Point 3: You May Need a Guide */}
                    <div className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-purple-500">
                      <h5 className="font-semibold text-purple-300 mb-2">3. You May Need a Guide</h5>
                      <p className="text-slate-300">
                        This is a metaphor for someone who knows the trail well and can guide you—but only as someone 
                        else on a journey down the same trail. <strong>You may even become a guide.</strong> AI maturity 
                        leads to this place: all of us as guides and models of wisdom, which now necessarily includes AI.
                      </p>
                    </div>

                    {/* Point 4: What a Guide Teaches */}
                    <div className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-orange-500">
                      <h5 className="font-semibold text-orange-300 mb-3">4. What the Right Guide Teaches (In Order)</h5>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">A</span>
                          <div>
                            <strong className="text-orange-200">Applications</strong> that intersect with you and how to use them
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">P</span>
                          <div>
                            <strong className="text-orange-200">People</strong> — how the use of these applications affects people
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">P</span>
                          <div>
                            <strong className="text-orange-200">Principles</strong> to directly address the people problems identified above
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">S</span>
                          <div>
                            <strong className="text-orange-200">Strategy</strong> — adaptive implementation required for individuals and organizations to journey to maturity together
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Point 5: Go Together */}
                    <div className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-teal-500">
                      <h5 className="font-semibold text-teal-300 mb-2">5. Don't Go Fast. Don't Go Alone.</h5>
                      <p className="text-slate-300 mb-3">
                        <em>"If you want to go fast, go alone. If you want to go far, go together."</em>
                      </p>
                      <p className="text-slate-300">
                        All opportunities and threat responses are found in <strong>Christ and in Community</strong>. 
                        This practically means opening up about and sharing your own AI learning as part of a collaborative 
                        learning community. It means sharing what you're seeing and asking: 
                        <em>"Are you seeing what I'm seeing?"</em>
                      </p>
                    </div>

                    {/* Call to Community */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-500/30 text-center">
                      <p className="text-blue-200 text-lg font-medium">
                        Let's explore AI together with wisdom, transparency, and unwavering commitment to what matters most: 
                        <strong className="text-white"> loving God and loving people.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Emotional Landscape Matrix */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 mb-8">
          <div className="p-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">How AI Feels to Each Persona</h2>
              <p className="text-purple-200 max-w-3xl mx-auto">
                The emotional landscape: how each persona experiences AI in their daily reality and ministry context
              </p>
            </div>

            <div className="grid gap-6">
              {/* Paulo */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/30">
                <div className="flex items-start">
                  <img
                    src="/images/personas/paulo.png"
                    alt="Paulo"
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Paulo - The Church Planter</h3>
                    <p className="text-slate-300 mb-3">
                      <strong>What AI feels like:</strong> A tempting shortcut that could either be a lifeline or a spiritual compromise. 
                      Like having a brilliant but morally ambiguous assistant offering to help with tasks he's not sure he should delegate.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">⚡ Conflicted Relief</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">😰 Ethical Anxiety</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">🤔 Cautious Hope</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yeonji */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-green-500/30">
                <div className="flex items-start">
                  <img
                    src="/images/personas/yeonji.png"
                    alt="Yeonji"
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Yeonji - Young Adult Ministry Leader</h3>
                    <p className="text-slate-300 mb-3">
                      <strong>What AI feels like:</strong> A sophisticated tool that might help with preparation but threatens the relational authenticity that defines her ministry. 
                      Like having a research assistant who's brilliant but can't understand the human heart.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">🔍 Thoughtful Skepticism</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">💔 Relational Concern</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">🎯 Strategic Interest</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Susan */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-start">
                  <img
                    src="/images/personas/susan.png"
                    alt="Susan"
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Susan - Systems & Movement Leader</h3>
                    <p className="text-slate-300 mb-3">
                      <strong>What AI feels like:</strong> An unproven technology with significant potential that requires careful evaluation and implementation standards. 
                      Like considering a new operational system that could either streamline everything or create new problems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">📊 Analytical Curiosity</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">⚠️ Risk Awareness</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">🎯 Strategic Optimism</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flora */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-orange-500/30">
                <div className="flex items-start">
                  <img
                    src="/images/personas/flora.png"
                    alt="Flora"
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">Flora - The Seminarian</h3>
                    <p className="text-slate-300 mb-3">
                      <strong>What AI feels like:</strong> A powerful study partner that could either enhance her learning or undermine her intellectual development. 
                      Like having access to incredibly smart tutoring that she's not sure is helping her actually learn or just helping her get answers.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">🧪 Experimental Wonder</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">🤯 Formation Anxiety</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">💡 Learning Excitement</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stew */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
                <div className="flex items-start">
                  <img
                    src="/images/personas/stew.png"
                    alt="Stew"
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Stew - Donor & Board Member</h3>
                    <p className="text-slate-300 mb-3">
                      <strong>What AI feels like:</strong> A potentially expensive distraction from proven ministry methods, though he's open to evidence that it actually saves money and time for mission. 
                      Like watching younger generations embrace something he doesn't fully understand but wants to steward wisely.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">🛡️ Protective Skepticism</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">📈 Stewardship Focus</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">🔍 Evidence-Seeking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Themes Summary */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                <h4 className="font-semibold text-blue-300 mb-2">Shared Ground</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Uncertainty about boundaries</li>
                  <li>• Desire for clarity and guidance</li>
                  <li>• Concern for authentic ministry</li>
                  <li>• Interest in efficiency gains</li>
                </ul>
              </div>
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                <h4 className="font-semibold text-purple-300 mb-2">Key Tensions</h4>
                <ul className="text-purple-200 text-sm space-y-1">
                  <li>• Convenience vs. Authenticity</li>
                  <li>• Innovation vs. Tradition</li>
                  <li>• Efficiency vs. Formation</li>
                  <li>• Individual vs. Community Impact</li>
                </ul>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                <h4 className="font-semibold text-green-300 mb-2">Emotional Spectrum</h4>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• From resistance to experimentation</li>
                  <li>• From anxiety to cautious hope</li>
                  <li>• From skepticism to strategic interest</li>
                  <li>• From confusion to curious engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      

        {/* AI Experimentation Reflection Tool */}
        <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl border border-green-500/30 mb-8">
          {/* Toggle Header */}
          <button
            onClick={() => setShowReflectionTool(!showReflectionTool)}
            className="w-full p-6 flex items-center justify-between hover:bg-green-900/20 transition-colors rounded-t-xl"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-2">AI Experimentation Framework</h2>
              <p className="text-green-200">Thoughtful AI experimentation for ministry & mission</p>
            </div>
            {showReflectionTool ? (
              <ChevronUp className="h-6 w-6 text-green-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-green-400" />
            )}
          </button>

          {/* Collapsible Content */}
          {showReflectionTool && (
            <div className="p-8 pt-0">
              <div className="text-center mb-8">
                <p className="text-green-200 max-w-3xl mx-auto mb-4">
                  This framework helps you identify where AI can faithfully intersect with your work, 
                  focusing on three aims: <strong>Efficiencies, Revenues, Improvements.</strong>
                </p>
                <div className="flex justify-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Efficiencies
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Revenues
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    Improvements
                  </span>
                </div>
              </div>

              {/* Three-Step Framework */}
              <div className="grid gap-6 mb-8">
                {/* Step 1: Efficiencies */}
                <div className="bg-slate-800/50 rounded-xl border border-blue-500/30">
                  <button
                    onClick={() => setActiveReflectionStep(activeReflectionStep === 1 ? null : 1)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-700/50 transition-colors rounded-t-xl"
                  >
                    <div className="flex items-center text-left">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-300">Identify Unwanted Inefficiencies → Desired Efficiencies</h3>
                        <p className="text-blue-200 text-sm">Remove repetitive, tedious, or low-value work</p>
                      </div>
                    </div>
                    <Clock className="h-5 w-5 text-blue-400" />
                  </button>

                  {activeReflectionStep === 1 && (
                    <div className="px-6 pb-6">
                      <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-white mb-3">Reflection Prompts:</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• What parts of your weekly work feel repetitive, tedious, or low-value?</li>
                          <li>• Which of these could be removed without harming your formation, relationships, or mission?</li>
                          <li>• What would you do with the time if it were freed up?</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-blue-300 mb-2">Your Reflection:</label>
                        <textarea
                          value={reflectionResponses.step1 || ''}
                          onChange={(e) => setReflectionResponses(prev => ({...prev, step1: e.target.value}))}
                          placeholder="Identify inefficiencies in your work that AI could help with..."
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                        />
                      </div>

                      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                        <h4 className="font-semibold text-blue-300 mb-2">Experiment Recipe:</h4>
                        <ol className="text-blue-200 space-y-1 text-sm list-decimal list-inside">
                          <li>Pick one unwanted inefficiency</li>
                          <li>Use AI to remove or reduce it (draft, summarize, format, automate)</li>
                          <li>Track time saved</li>
                          <li>Reflect: Was the time saved meaningful? Did it free me for what matters most?</li>
                        </ol>
                        <div className="mt-3 pt-3 border-t border-blue-500/20">
                          <p className="text-blue-300 font-medium text-sm mb-1">Examples:</p>
                          <ul className="text-blue-200 text-xs space-y-1">
                            <li>• Use AI to draft donor thank-you letters, then personalize</li>
                            <li>• Summarize meeting transcripts into 1-page action lists</li>
                            <li>• Convert long commentaries into bullet points for quick reference</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 2: Revenues */}
                <div className="bg-slate-800/50 rounded-xl border border-green-500/30">
                  <button
                    onClick={() => setActiveReflectionStep(activeReflectionStep === 2 ? null : 2)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-700/50 transition-colors rounded-t-xl"
                  >
                    <div className="flex items-center text-left">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-300">Identify Missed Opportunities → Desired Revenues</h3>
                        <p className="text-green-200 text-sm">Explore new revenue sources and improve fundraising</p>
                      </div>
                    </div>
                    <DollarSign className="h-5 w-5 text-green-400" />
                  </button>

                  {activeReflectionStep === 2 && (
                    <div className="px-6 pb-6">
                      <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-white mb-3">Reflection Prompts:</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• Where do we leave money or support on the table?</li>
                          <li>• Which tasks in fundraising or donor communication are so tedious they rarely get done?</li>
                          <li>• What new revenue sources have we never explored because of lack of bandwidth?</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-green-300 mb-2">Your Reflection:</label>
                        <textarea
                          value={reflectionResponses.step2 || ''}
                          onChange={(e) => setReflectionResponses(prev => ({...prev, step2: e.target.value}))}
                          placeholder="Identify missed revenue opportunities that AI could help capture..."
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-24"
                        />
                      </div>

                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                        <h4 className="font-semibold text-green-300 mb-2">Experiment Recipe:</h4>
                        <ol className="text-green-200 space-y-1 text-sm list-decimal list-inside">
                          <li>Choose one fundraising activity that often gets neglected</li>
                          <li>Use AI to generate a first draft, list, or visualization</li>
                          <li>Personalize and send</li>
                          <li>Track whether it resulted in increased giving, connections, or leads</li>
                        </ol>
                        <div className="mt-3 pt-3 border-t border-green-500/20">
                          <p className="text-green-300 font-medium text-sm mb-1">Examples:</p>
                          <ul className="text-green-200 text-xs space-y-1">
                            <li>• Segment donors by giving frequency and draft tailored notes</li>
                            <li>• Research potential grants or community foundations</li>
                            <li>• Reframe a donor appeal for multiple audiences (young adults, major givers, board)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 3: Improvements */}
                <div className="bg-slate-800/50 rounded-xl border border-purple-500/30">
                  <button
                    onClick={() => setActiveReflectionStep(activeReflectionStep === 3 ? null : 3)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-700/50 transition-colors rounded-t-xl"
                  >
                    <div className="flex items-center text-left">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-300">Identify Areas of Mediocrity → Desired Improvements</h3>
                        <p className="text-purple-200 text-sm">Improve quality and clarity of your work</p>
                      </div>
                    </div>
                    <Star className="h-5 w-5 text-purple-400" />
                  </button>

                  {activeReflectionStep === 3 && (
                    <div className="px-6 pb-6">
                      <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-white mb-3">Reflection Prompts:</h4>
                        <ul className="text-slate-300 space-y-2 text-sm">
                          <li>• Where does my work feel unclear, unsharpened, or underwhelming?</li>
                          <li>• Where would having a thoughtful "consultant" improve the quality of my ideas, writing, or strategy?</li>
                          <li>• What would it mean to do this work better, not just faster?</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-purple-300 mb-2">Your Reflection:</label>
                        <textarea
                          value={reflectionResponses.step3 || ''}
                          onChange={(e) => setReflectionResponses(prev => ({...prev, step3: e.target.value}))}
                          placeholder="Identify areas where AI could help improve the quality of your work..."
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none h-24"
                        />
                      </div>

                      <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                        <h4 className="font-semibold text-purple-300 mb-2">Experiment Recipe:</h4>
                        <ol className="text-purple-200 space-y-1 text-sm list-decimal list-inside">
                          <li>Pick one piece of work-in-progress (sermon outline, report, essay)</li>
                          <li>Ask AI to critique for clarity, accessibility, or blind spots</li>
                          <li>Revise based on insights, keeping ownership of the final product</li>
                          <li>Reflect: Did this improve quality without compromising authenticity?</li>
                        </ol>
                        <div className="mt-3 pt-3 border-t border-purple-500/20">
                          <p className="text-purple-300 font-medium text-sm mb-1">Examples:</p>
                          <ul className="text-purple-200 text-xs space-y-1">
                            <li>• Test sermon clarity by asking AI to summarize for an outsider</li>
                            <li>• Brainstorm discipleship ideas for Gen Z with AI prompts</li>
                            <li>• Create a decision-tree framework for coaching church planters</li>
                            <li>• Ask AI to simplify a donor report into a 1-page impact summary</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Reflection & Documentation Section */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-500/30 mb-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Step 4: Reflection & Documentation
                </h3>
                <p className="text-yellow-200 mb-4">After each experiment, document your findings:</p>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-yellow-300 mb-2">Experiment Results & Reflections:</label>
                  <textarea
                    value={reflectionResponses.step4 || ''}
                    onChange={(e) => setReflectionResponses(prev => ({...prev, step4: e.target.value}))}
                    placeholder="Document what worked, what didn't, ethical concerns, and whether to adopt, adapt, or abandon..."
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none h-32"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                    <h4 className="font-semibold text-yellow-300 mb-2">Questions to Ask:</h4>
                    <ul className="text-yellow-200 text-sm space-y-1">
                      <li>• What worked and what didn't?</li>
                      <li>• Any ethical concerns or relational risks?</li>
                      <li>• Should I adopt, adapt, or abandon this practice?</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <h4 className="font-semibold text-green-300 mb-2">Guiding Principles:</h4>
                    <ul className="text-green-200 text-sm space-y-1">
                      <li>• Not all friction is bad (keep formative inefficiencies)</li>
                      <li>• Always edit (AI drafts; you discern)</li>
                      <li>• Transparency builds trust</li>
                      <li>• Freedom is the aim</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setActiveReflectionStep(null);
                    setReflectionResponses({});
                  }}
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  Clear All Responses
                </button>
                <button
                  onClick={() => {
                    const responses = reflectionResponses;
                    const hasResponses = Object.values(responses).some(response => response.trim());
                    if (hasResponses) {
                      // In a real app, this could save to local storage or export as PDF
                      console.log('Reflection responses:', responses);
                      alert('Reflection saved! (In a real implementation, this would export your responses)');
                    } else {
                      alert('Please complete at least one reflection step before saving.');
                    }
                  }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Save Reflection
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Detailed View Modal - Keep for backward compatibility but make conditional */}
        {selectedPersonaData && !activePersonaView && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={selectedPersonaData.photo}
                      alt={selectedPersonaData.name}
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedPersonaData.name}</h2>
                      <p className="text-blue-400 text-lg">{selectedPersonaData.title}</p>
                      <p className="text-slate-400">Age {selectedPersonaData.age} • {selectedPersonaData.stage}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPersona(null)}
                    className="text-slate-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content Sections */}
                <div className="grid gap-6">
                  {/* Role */}
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Role
                    </h3>
                    <p className="text-slate-300">{selectedPersonaData.role}</p>
                  </div>

                  {/* Reality */}
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Current Reality
                    </h3>
                    <p className="text-slate-300">{selectedPersonaData.reality}</p>
                  </div>

                  {/* Hopes */}
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Heart className="mr-2 h-5 w-5" />
                      Hopes & Dreams
                    </h3>
                    <p className="text-slate-300">{selectedPersonaData.hopes}</p>
                  </div>

                  {/* Concerns */}
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Concerns & Challenges
                    </h3>
                    <p className="text-slate-300">{selectedPersonaData.concerns}</p>
                  </div>

                  {/* AI Intersection */}
                  <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">
                      AI Intersection
                    </h3>
                    <p className="text-blue-200">{selectedPersonaData.aiIntersection}</p>
                  </div>

                  {/* Path to Maturity */}
                  <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                    <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Path to Maturity
                    </h3>
                    <p className="text-green-200">{selectedPersonaData.pathToMaturity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}