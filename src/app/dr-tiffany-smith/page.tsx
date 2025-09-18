"use client";

import React from "react";
import { MapPin, BookOpen, Users, Globe, Award, Heart, ArrowRight, Lightbulb } from "lucide-react";

export default function DrTiffanySmithPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Dr. Tiffany Smith
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Strategist, teacher, and mentor at the crossroads of mission, leadership development, and everyday discipleship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-blue-900/30 rounded-full px-4 py-2 border border-blue-500/30">
              <MapPin className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-blue-300">NAMB Send Network</span>
            </div>
            <div className="flex items-center bg-green-900/30 rounded-full px-4 py-2 border border-green-500/30">
              <Award className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-300">Strategies Coordinator</span>
            </div>
            <div className="flex items-center bg-purple-900/30 rounded-full px-4 py-2 border border-purple-500/30">
              <BookOpen className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-purple-300">Doctorate in Missional Leadership</span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Biography</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Dr. Tiffany Smith is a strategist, teacher, and mentor whose calling sits at the crossroads of mission, 
              leadership development, and everyday discipleship. She currently serves as Strategies Coordinator with the 
              Send Network at the North American Mission Board (NAMB), where she equips and mobilizes church planters, 
              leaders, and teams to live and lead missionally in diverse contexts across North America and beyond.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Educational Journey</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Her journey into mission began early and took shape in unexpected ways. After completing her Bachelor of 
              Science in Psychology at Texas A&M University, she pursued theological training at Southwestern Baptist 
              Theological Seminary, where she earned her Master of Divinity in Theology. Hungry to bring together 
              theological depth and practical leadership, she later completed her Doctorate in Missional Leadership at 
              New Orleans Baptist Theological Seminary, a program that sharpened her vision for how churches and leaders 
              can navigate the rapidly changing cultural landscape with wisdom and courage.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Missionary Experience</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              But Tiffany's formation has always been more than academic. She served for two years as a missionary in 
              Japan, where she experienced firsthand both the joys and the challenges of cross-cultural ministry. That 
              season continues to shape her conviction that the "sent life" is not only about distant lands, but about 
              embodying the gospel wherever God has placed us — in neighborhoods, schools, and workplaces as much as in 
              faraway nations.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Professional Leadership</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              At NAMB and beyond, Tiffany has held roles as Pipeline Consultant, National Mobilizer, and Missions 
              Mobilization Associate. She has also taught in secondary schools, which deepened her passion for investing 
              in the next generation of leaders — especially young adults, women, and those called to pioneer work in 
              under-resourced contexts. Her leadership style is equal parts strategic and relational: she builds systems 
              that sustain movements, while also walking closely with individuals in their formation.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Teaching & Communication</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tiffany is widely recognized for her ability to translate complex missional and theological ideas into 
              accessible, everyday language. Through her writing (including her blog Missional Mayhem) and speaking, she 
              helps people see that mission isn't an extracurricular activity for the few, but the calling of the whole 
              church. Whether speaking to denominational leaders, mentoring a church planter, or sitting with young adults 
              wrestling with faith, she consistently brings a mix of practical wisdom, biblical conviction, and personal 
              authenticity.
            </p>
          </div>
        </div>

        {/* Three Ways Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How Her Audience Knows Her</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Strategist</h3>
              <p className="text-blue-200">
                Provides frameworks and tools that make complex systems more navigable, helping leaders turn vision into actionable strategy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Mentor</h3>
              <p className="text-green-200">
                Takes emerging leaders seriously and gives them confidence to step into their calling, especially young adults and women in ministry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Storyteller</h3>
              <p className="text-purple-200">
                Draws from her own experiences — teaching in Japan, mobilizing planters, navigating calling — to remind others that God works through ordinary lives.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Core Philosophy</h2>
          <div className="text-center">
            <p className="text-xl text-slate-300 mb-4">
              "Tiffany's north star is helping people embrace a <strong className="text-white">sent identity</strong>."
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              She believes that whether you're a church planter, a donor, a seminary student, or simply a disciple in the pew, 
              the question is the same: <em>How is God sending me, here and now, for the sake of others?</em>
            </p>
          </div>
        </div>

        {/* AI Conversation Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 border-b border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">Where AI Meets Mission</h2>
            <p className="text-xl text-slate-300">
              A Conversation Between Josh Shepherd and Dr. Tiffany Smith
            </p>
          </div>

          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The conversations that matter most often begin in places we didn't expect. That's certainly true for Josh 
                Shepherd and Dr. Tiffany Smith, who are meeting today not to trade technical jargon about artificial 
                intelligence, but to explore what AI means for the people and ministries they both serve: church planters, 
                movement leaders, young adult ministers, seminarians, and the donors who sustain it all.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Two Distinct Vantage Points</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">Josh Shepherd</h4>
                  <p className="text-slate-300 text-sm">
                    A strategist and content architect whose work centers on helping mission-driven organizations discover 
                    what AI can do for them in concrete daily ministry. His framework: use AI to save time (efficiencies), 
                    raise resources (revenues), and improve work quality (improvements).
                  </p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Dr. Tiffany Smith</h4>
                  <p className="text-slate-300 text-sm">
                    Strategies Coordinator at NAMB's Send Network, equipped by missionary service in Japan and a doctorate 
                    in Missional Leadership. For Tiffany, mission is a calling to inhabit neighborhoods, schools, and 
                    workplaces as people attentive to God's presence and leadership.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">A Shared Audience, A Shared Challenge</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Both Josh and Tiffany work with leaders who are overextended, under-resourced, and pressed into constant 
                adaptation. The church planter with a handful of volunteers. The young adult ministry leader trying to 
                communicate with Gen Z. The seminary student juggling studies and a side job. The donor who wants to make 
                a difference but feels overwhelmed by the noise.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                What unites them is not only their calling, but also the presence of countless unwanted inefficiencies — 
                duplicated effort, wasted hours, unstructured data, administrative drag. These aren't minor inconveniences; 
                they are the hidden overhead that quietly drains time and energy from mission.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Translating AI for the Sent Life</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                One of the keys to this conversation will be translation. Most of Tiffany's audience doesn't need — or want — 
                to hear about "large language models" or "transformer architectures." They need to know how ChatGPT, or other 
                accessible tools, might touch their daily realities.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Together, Josh and Tiffany can help frame AI in ways that feel proximate, not distant:
              </p>

              <div className="grid gap-4 mb-8">
                {[
                  {
                    role: "Church Planter",
                    description: "AI can help you draft your launch budget in minutes, freeing you for relational work.",
                    color: "blue"
                  },
                  {
                    role: "Young Adult Leader", 
                    description: "AI can synthesize student feedback into themes so you can focus on presence, not spreadsheets.",
                    color: "green"
                  },
                  {
                    role: "Seminarian",
                    description: "AI can simulate counterarguments to strengthen your theology papers without replacing your own voice.",
                    color: "purple"
                  },
                  {
                    role: "Systems Leader",
                    description: "AI can condense 60-page reports into board-ready briefs, helping you steward time and attention.",
                    color: "orange"
                  },
                  {
                    role: "Donor",
                    description: "AI can scan proposals and highlight risks, equipping you to give wisely and confidently.",
                    color: "teal"
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-${item.color}-900/20 border border-${item.color}-500/30 rounded-lg p-4`}>
                    <div className="flex items-start">
                      <ArrowRight className={`h-5 w-5 text-${item.color}-400 mr-3 mt-0.5 flex-shrink-0`} />
                      <div>
                        <span className={`font-semibold text-${item.color}-300`}>{item.role}:</span>
                        <span className="text-slate-300 ml-2">"{item.description}"</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Ethics, Boundaries, and the Witness of the Church</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Tiffany has been clear in her own writing and teaching: leadership begins with following. Applied to AI, that 
                conviction means asking not just "what can we do with this tool?" but "what should we do?"
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Here the conversation will touch tender ground. If the church adopts AI uncritically, it risks sending messages 
                about personhood and community that undermine its very witness. Josh has been outspoken about plagiarism, 
                integrity, and the dangers of outsourcing thought wholesale to machines. Tiffany has raised questions about what 
                AI companionship and overreliance might do to the soul of a leader.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Looking Ahead: Maturity in the Age of AI</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The velocity of change in AI is dizzying. Both Josh and Tiffany know that most leaders can't afford to keep up 
                with every technical update. What they can do is commit to a posture of maturity.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                For this audience, maturity in AI means:
              </p>

              <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Engaging in small, bounded experiments.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Naming and eliminating inefficiencies that no longer serve mission.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Identifying opportunities for fundraising and donor engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Using AI as a partner in strategic thinking and communication.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Holding fast to ethical and theological guardrails that protect the church's witness.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">The Likely Fruit of Their Conversation</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The most compelling thing about this meeting is not that it will answer every question about AI. It won't. 
                Instead, its fruit will likely be:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-semibold text-blue-300 mb-2">Demystification</h4>
                  <p className="text-slate-300 text-sm">AI explained in ways that feel accessible and actionable.</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-semibold text-green-300 mb-2">Storytelling</h4>
                  <p className="text-slate-300 text-sm">Concrete case studies showing how ordinary leaders are already using AI wisely.</p>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-semibold text-purple-300 mb-2">Ethical Anchoring</h4>
                  <p className="text-slate-300 text-sm">Reminders that the church's witness matters more than efficiency.</p>
                </div>
                <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
                  <h4 className="font-semibold text-orange-300 mb-2">Shared Imagination</h4>
                  <p className="text-slate-300 text-sm">A vision for how the sent life and AI stewardship can converge to serve the Kingdom.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3">The Ultimate Question</h3>
                <p className="text-slate-300 italic">
                  In the end, this intersection is less about technology and more about vocation. Both Josh Shepherd and 
                  Dr. Tiffany Smith are asking the same question from different angles: How can leaders steward their time, 
                  resources, and gifts so that the mission of God moves forward with integrity and power in this generation?
                </p>
                <p className="text-blue-200 mt-4 font-medium">
                  That's the conversation their listeners will be stepping into.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}