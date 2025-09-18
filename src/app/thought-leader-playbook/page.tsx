export default function ThoughtLeaderPlaybookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Thought Leader
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Playbook
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The MovementOS framework for building, engaging, and monetizing your thought leadership platform.
            From first post to movement catalyst.
          </p>
        </div>

        {/* Core Playbook */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">MovementOS Thought Leader Playbook</h2>
            <p className="text-slate-400">The 7 pillars of sustainable thought leadership</p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Pillar 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🏠</span>
                1. Establish Your Digital Home Base
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Treat your MovementOS site as your primary publishing and engagement hub.</li>
                <li>• Migrate your audience here (email list, socials, former blogs, etc.) with clear CTAs like "Subscribe to my new hub."</li>
                <li>• Use your site not just for announcements but as a rhythm: a weekly or bi-weekly post is the minimum baseline.</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">⏰</span>
                2. Commit to Consistent Content Rhythm
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Baseline cadence:</h4>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• 1 blog/article per week</li>
                    <li>• 1 short-form video or podcast clip per month</li>
                    <li>• 1 learning artifact (lesson, visualization, workshop outline, assessment, or LMS module) per quarter</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <p className="text-purple-200"><strong>Why:</strong> This rhythm powers virality and feeds the network's content aggregation.</p>
                  <p className="text-purple-200 mt-2"><strong>Encouragement:</strong> Small is fine—repurposed content counts. MovementOS + AI agents help reduce friction.</p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🔗</span>
                3. Lean Into the Network
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Cross-link to 2–3 other MovementOS thought leaders' content per month.</li>
                <li>• Accept at least one collaboration or co-appearance per quarter (workshop, podcast guesting, joint article).</li>
                <li>• Treat internal alerts (like Brad noticing Alan's workshop) as prompts to connect, not noise.</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">📈</span>
                4. Grow and Engage Your Audience
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Run email first: every content piece should have a CTA (subscribe, join, download).</li>
                <li>• Minimum: aim to add 50 new email subscribers per month.</li>
                <li>• MovementOS central team supports with SEO/analytics insights—thought leaders must apply them.</li>
                <li>• Respond to at least 10% of subscriber interactions (comments, replies, DMs).</li>
              </ul>
            </div>

            {/* Pillar 5 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">💳</span>
                5. Monetize Wisely
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Set up Stripe for at least one paid offering: subscription, workshop, course, or cohort.</li>
                <li>• Goal: by the end of Year 1, each thought leader should have one scalable paid product live.</li>
                <li>• Avoid fragmentation: refine one monetization stream before adding more.</li>
              </ul>
            </div>

            {/* Pillar 6 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                6. Share Analytics and Insights
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Opt in to group analytics sharing so we can amplify what works.</li>
                <li>• Leaders agree to quarterly reflection calls where we review network-level data.</li>
                <li>• Benefit: collective intelligence fuels better engagement tactics for everyone.</li>
              </ul>
            </div>

            {/* Pillar 7 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                7. Protect the Integrity of the Network
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Live within the MovementOS ethos: human flourishing, ethical use of AI, radical generosity with ideas.</li>
                <li>• No toxic publishing. No info-dumping without engagement. No "brand-only" posturing.</li>
                <li>• The gating covenant applies: each leader is part of a coalition, not just an individual brand.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-xl p-8 mb-20 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">The Covenant in Practice</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Publish regularly</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Engage meaningfully</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Cross-connect within the network</li>
            </ul>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Monetize at least one offering</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Contribute to analytics and collective learning</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Align with MovementOS values</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-cyan-200 text-center">
              <strong>This is what guarantees that 100 → 500 → 1000 users isn't just possible, but inevitable.</strong>
            </p>
            <p className="text-slate-300 text-center mt-2">
              Because each individual's discipline creates compounding network effects: more content → more visibility → more subscribers → more income → stronger collective scenius.
            </p>
          </div>
        </div>

        {/* Action Plan Callout */}
        <div className="text-center bg-slate-800/50 rounded-xl p-8 mb-20 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">✅ The Action Plan</h3>
          <p className="text-xl text-slate-300">
            So the action plan isn't about doing more work, it's about doing the <strong className="text-purple-400">right work rhythmically</strong> inside the MovementOS shell. That's the playbook.
          </p>
        </div>

        {/* Journey Example Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Example Journey: The Thought Leader Path</h2>
            <p className="text-slate-400">Alan Hirsch's Subscriber & Publishing Journey (Template Example)</p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {/* Stage 1 */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌱</span>
                Stage 1: Foundation – Planting the Seeds
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Website + publishing platform launched</li>
                    <li>• First blog post published</li>
                    <li>• First 100 free subscribers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>🌱 Planter – launched the site</li>
                    <li>✍️ First Word – first blog published</li>
                    <li>💯 Hundredfold – first 100 email subscribers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">🤝</span>
                Stage 2: Engagement – Building Trust
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Regular publishing rhythm (1 article per week for 6 weeks)</li>
                    <li>• First collaborative cross-link with another MovementOS thought leader</li>
                    <li>• Launch of first free resource (PDF, guide, reflection exercise)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>⏰ Steady Hand – sustained rhythm achieved</li>
                    <li>🔗 Connector – first collaboration</li>
                    <li>📘 Gift-Giver – first free resource released</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Stage 3: Monetization – First Fruits
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Stripe set up, first paid offering live (e.g., small workshop)</li>
                    <li>• First 10 paying subscribers</li>
                    <li>• Test run of small LMS module/course</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>💳 Builder of Streams – monetization channel set up</li>
                    <li>🎉 First Ten – first 10 paid subscribers</li>
                    <li>🏫 Educator – first course module live</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Stage 4: Expansion – Multiplying Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• 500 free subscribers milestone</li>
                    <li>• First cohort of 50+ participants in a paid workshop or course</li>
                    <li>• One piece of content goes "viral" in network (cross-shares among 3+ leaders)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>📈 Gatherer – 500 free subscribers</li>
                    <li>👥 Leader of Leaders – first large cohort</li>
                    <li>🌍 Sneezeable – viral idea milestone</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">👑</span>
                Stage 5: Authority – Movement Catalyst
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• First 100 paid subscribers</li>
                    <li>• Second LMS/course launched (e.g., Metanoia for advanced audience)</li>
                    <li>• Invited as co-creator in another leader's offering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>💯 Centurion – 100 paid subscribers</li>
                    <li>🎓 Teacher of Teachers – second course live</li>
                    <li>🤝 Co-Creator – collaboration on someone else's course/event</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 6 */}
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌳</span>
                Stage 6: Maturity – Sustained Flourishing
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• 1,000 free subscribers</li>
                    <li>• Ongoing rhythm of 200+ paid subscribers</li>
                    <li>• Flagship MovementOS LMS launched (e.g., Movemental Thinking)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>🌳 Deep Roots – 1,000 subscribers</li>
                    <li>💎 Sustainer – 200+ paid subscribers</li>
                    <li>🕊 Catalyst – flagship course online</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage 7 */}
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                Stage 7: Legacy – Movement Architect
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Milestones:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• 500+ paid subscribers</li>
                    <li>• Publishes an anthology/major digital collection with others in the network</li>
                    <li>• Content archive reshaped into evergreen formats (e.g., indexed resource hub)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Badges:</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>🏆 Master Builder – 500+ paid</li>
                    <li>📚 Co-Author of Movements – anthology milestone</li>
                    <li>🔒 Evergreen – resource hub established</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Philosophy */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Gamified Journey Philosophy</h3>
          <div className="space-y-4 text-slate-300">
            <p>• Every milestone ties to Alan's formational mission: not just revenue, but the spread of movemental thinking.</p>
            <p>• Badges aren't superficial—they're symbolic markers of growth, each one representing both practical and spiritual fruit.</p>
            <p>• The sequence ensures momentum: from planting → trust → monetization → expansion → authority → maturity → legacy.</p>
          </div>
          <div className="mt-6 p-4 bg-purple-900/30 rounded-lg text-center">
            <p className="text-purple-200 text-lg">
              👉 This way, Alan (and others like him) have a map, a motivation system, and visible recognition. It's the Trail Map, but translated into the MovementOS publishing journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
