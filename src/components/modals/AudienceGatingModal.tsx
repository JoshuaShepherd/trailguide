'use client';

import { useState } from 'react';
import { X, Users, Target, ClipboardCheck, Globe, Lightbulb, Heart, Shield, TrendingUp } from 'lucide-react';

interface AudienceGatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AudienceGatingModal = ({ isOpen, onClose }: AudienceGatingModalProps) => {
  const [activeTab, setActiveTab] = useState('description');

  if (!isOpen) return null;

  const tabs = [
    { id: 'description', label: 'Audience Description', icon: Users },
    { id: 'standards', label: 'Standards for Acceptance', icon: Target },
    { id: 'rubric', label: 'Evaluation Rubric', icon: ClipboardCheck }
  ];

  const rubricCategories = [
    {
      name: 'Missional Alignment',
      points: 20,
      icon: Heart,
      description: 'Demonstrated commitment to missional/movemental values and kingdom advancement'
    },
    {
      name: 'Demonstrated Impact/Influence',
      points: 20,
      icon: TrendingUp,
      description: 'Evidence of meaningful influence in their sphere, regardless of scale'
    },
    {
      name: 'Audience & Engagement',
      points: 15,
      icon: Users,
      description: 'Existing community or audience (size less important than engagement quality)'
    },
    {
      name: 'Digital Readiness',
      points: 15,
      icon: Globe,
      description: 'Willingness and capacity to engage in digital publishing and formation'
    },
    {
      name: 'Contribution Potential',
      points: 15,
      icon: Lightbulb,
      description: 'Ability to teach, coach, or provide thought leadership to the network'
    },
    {
      name: 'Diversity & Representation',
      points: 10,
      icon: Globe,
      description: 'Contribution to network diversity (gender, ethnicity, geography, perspective)'
    },
    {
      name: 'Ethical Commitment',
      points: 5,
      icon: Shield,
      description: 'Commitment to human flourishing and ethical use of AI/technology'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Audience Standards
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Understanding our community, standards, and evaluation process
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 text-2xl leading-none flex-shrink-0 p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200">
          <nav className="flex px-4 sm:px-6 md:px-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="px-4 sm:px-6 md:px-8 py-6 overflow-y-auto max-h-[60vh]">
          
          {/* Audience Description Tab */}
          {activeTab === 'description' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Users className="text-emerald-600" size={24} />
                  Who We Serve
                </h3>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  TrailGuide serves a carefully curated network of <strong>movement leaders</strong> and <strong>missional practitioners</strong> 
                  who are shaping the future of faith, leadership, and community transformation.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Core Movement Leaders</h4>
                    <p className="text-slate-700">
                      Established voices like Alan Hirsch, Brad Brisco, Tim Catchim, and their networks—leaders who have 
                      already proven their capacity to influence and shape movemental thinking at scale.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Emerging & Local Leaders</h4>
                    <p className="text-slate-700">
                      Practitioners with resonant but under-amplified voices—pastors, nonprofit leaders, church planters, 
                      and community organizers whose local impact deserves broader reach.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Network-Connected Voices</h4>
                    <p className="text-slate-700">
                      Leaders connected to movements like MLC, 5Q, Forge, and similar networks—those already engaged 
                      in collaborative, kingdom-focused work.
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">Our Commitment to Diversity</h4>
                    <p className="text-emerald-800">
                      We actively prioritize diverse representation: women, people of color, Global South voices, 
                      and perspectives that have been historically underrepresented in Christian publishing.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-900 text-white rounded-lg">
                  <p className="font-medium">
                    This is a network capped at 1,000 members, designed for serious practitioners 
                    committed to shaping movements and advancing the kingdom through digital publishing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Standards Tab */}
          {activeTab === 'standards' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Target className="text-emerald-600" size={24} />
                  Our Standards
                </h3>
                <p className="text-slate-600 mb-6">
                  Our standards committee (Alan Hirsch, Brad Brisco, Josh Shepherd) evaluates applications 
                  based on these core criteria:
                </p>
              </div>

              <div className="grid gap-4">
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Heart className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Missional/Movemental Alignment</h4>
                      <p className="text-slate-700">
                        Clear evidence of commitment to kingdom values, missional living, and movemental thinking. 
                        We look for leaders whose work advances God's mission in the world.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Users className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Demonstrated Community</h4>
                      <p className="text-slate-700">
                        Evidence of existing audience or community engagement. Size matters less than depth—we value 
                        quality relationships and meaningful influence over follower counts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Globe className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Digital Formation Readiness</h4>
                      <p className="text-slate-700">
                        Willingness to engage in digital publishing and online community building. We're looking for 
                        leaders ready to embrace new platforms while maintaining their authentic voice.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Generative Contribution</h4>
                      <p className="text-slate-700">
                        Capacity for teaching, coaching, or thought leadership that benefits the broader network. 
                        We value leaders who can both learn and contribute to our collective wisdom.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Ethical AI Commitment</h4>
                      <p className="text-slate-700">
                        Dedication to human flourishing and ethical use of AI and technology. We believe technology 
                        should serve people, not replace human connection and authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rubric Tab */}
          {activeTab === 'rubric' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <ClipboardCheck className="text-emerald-600" size={24} />
                  100-Point Evaluation Rubric
                </h3>
                <p className="text-slate-600 mb-6">
                  Our evaluation process combines committee review with AI-assisted analysis of public records 
                  to ensure fair, consistent assessment across all applications.
                </p>
              </div>

              <div className="space-y-4">
                {rubricCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-slate-900">{category.name}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                {category.points} pts
                              </span>
                            </div>
                            <p className="text-slate-700 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-slate-900 mb-3">Evaluation Process</h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Committee Review:</strong> Alan Hirsch, Brad Brisco, and Josh Shepherd review all applications</p>
                  <p><strong>AI Analysis:</strong> Public record analysis supplements human judgment for consistency</p>
                  <p><strong>Scoring:</strong> Minimum threshold of 70/100 points for acceptance consideration</p>
                  <p><strong>Final Decision:</strong> Committee has final discretion on all admissions</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 sm:px-6 md:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-slate-600 text-sm">
              Questions about our standards? <span className="text-emerald-600 font-medium">Contact us</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceGatingModal;
