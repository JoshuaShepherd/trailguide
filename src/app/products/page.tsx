import React from 'react';
import { Users, BookOpen, Calendar, Target, Star, CheckCircle, ArrowRight, TrendingUp, Award, Zap, Rocket, Crown, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Complete Monetization Suite
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Expertise Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Sustainable Revenue</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              This template showcases the complete range of monetization options built into every Expert Publisher platform—from membership communities to high-value consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/products/membership" className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Explore Membership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#revenue-calculator" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Calculate Revenue Potential
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Multiple Revenue Streams, One Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every Expert Publisher platform includes these proven monetization pathways, fully integrated and optimized for conversion
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Membership & Community */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Membership & Community</h3>
                    <div className="text-blue-700 font-medium">$29-$297/month recurring</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">Premium content, exclusive community access, and tiered benefits that scale with your audience growth.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Tiered membership levels</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Private community forums</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Exclusive content library</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Monthly member events</span>
                  </div>
                </div>
                <Link href="/products/membership" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Explore Membership <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Courses & Learning */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Courses & Learning</h3>
                    <div className="text-green-700 font-medium">$497-$2,997 per course</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">Comprehensive learning experiences that transform your expertise into structured, high-value educational products.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Self-paced online courses</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Live cohort programs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Certification programs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Assessment & feedback tools</span>
                  </div>
                </div>
                <Link href="/products/courses" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                  View Courses <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Workshops & Events */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Workshops & Events</h3>
                    <div className="text-orange-700 font-medium">$197-$997 per event</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">Interactive, time-bound experiences that deliver concentrated value and create strong community connections.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Live virtual workshops</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">In-person masterclasses</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">VIP intensive days</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Speaking engagements</span>
                  </div>
                </div>
                <Link href="/products/workshops" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                  Browse Events <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Consulting & Advisory */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Consulting & Advisory</h3>
                    <div className="text-purple-700 font-medium">$500-$2,000/hour</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">High-touch, personalized guidance for clients who need direct access to your expertise and strategic thinking.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">1:1 strategic consulting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advisory board positions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Done-with-you projects</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Retainer relationships</span>
                  </div>
                </div>
                <Link href="/products/consulting" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                  Book Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Revenue Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Revenue Potential
              </h2>
              <p className="text-xl text-gray-600">
                See how these revenue streams could work for your expertise level and audience size
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Conservative Estimates</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">100 Community Members × $29</span>
                      <span className="font-semibold text-gray-900">$2,900/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">25 Inner Circle Members × $97</span>
                      <span className="font-semibold text-gray-900">$2,425/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">2 Course Sales × $997 (monthly)</span>
                      <span className="font-semibold text-gray-900">$1,994/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">1 Workshop × $497 (monthly)</span>
                      <span className="font-semibold text-gray-900">$497/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">5 Consulting Hours × $500</span>
                      <span className="font-semibold text-gray-900">$2,500/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-green-50 rounded-lg px-4">
                      <span className="text-lg font-bold text-gray-900">Monthly Total:</span>
                      <span className="text-2xl font-bold text-green-600">$10,316</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-lg font-bold text-gray-900">Annual Revenue:</span>
                      <span className="text-2xl font-bold text-gray-900">$123,792</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Growth Projections</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">250 Community Members × $29</span>
                      <span className="font-semibold text-gray-900">$7,250/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">75 Inner Circle Members × $97</span>
                      <span className="font-semibold text-gray-900">$7,275/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">10 Mastermind Members × $297</span>
                      <span className="font-semibold text-gray-900">$2,970/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">5 Course Sales × $997 (monthly)</span>
                      <span className="font-semibold text-gray-900">$4,985/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">10 Consulting Hours × $750</span>
                      <span className="font-semibold text-gray-900">$7,500/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4">
                      <span className="text-lg font-bold text-gray-900">Monthly Total:</span>
                      <span className="text-2xl font-bold text-blue-600">$29,980</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-lg font-bold text-gray-900">Annual Revenue:</span>
                      <span className="text-2xl font-bold text-gray-900">$359,760</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">These projections assume:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                    <span>• 10% monthly growth</span>
                    <span>• 85% retention rate</span>
                    <span>• Conservative conversion rates</span>
                    <span>• Standard pricing tiers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Support */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Platform Implementation
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Every Expert Publisher platform includes full setup, training, and ongoing support to ensure your success
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Setup</h3>
                <p className="text-gray-600 mb-4">Complete technical implementation of all revenue streams, payment processing, and content management systems.</p>
                <div className="text-sm text-gray-500">
                  ✓ Payment gateway integration<br/>
                  ✓ Member portal configuration<br/>
                  ✓ Course delivery system<br/>
                  ✓ Email automation setup
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Training</h3>
                <p className="text-gray-600 mb-4">Comprehensive training on monetization strategies, content creation, and audience development best practices.</p>
                <div className="text-sm text-gray-500">
                  ✓ Pricing strategy workshops<br/>
                  ✓ Content planning sessions<br/>
                  ✓ Launch sequence training<br/>
                  ✓ Growth optimization tactics
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600 mb-4">Continuous optimization, performance monitoring, and strategic guidance to maximize your revenue potential.</p>
                <div className="text-sm text-gray-500">
                  ✓ Monthly performance reviews<br/>
                  ✓ A/B testing recommendations<br/>
                  ✓ Technical support included<br/>
                  ✓ Strategic consulting calls
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your Expert Publisher Platform?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every revenue stream, system, and strategy you see here is included in your complete Expert Publisher setup. 
              No additional development, integrations, or monthly software fees.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">$10K+</div>
                  <div className="text-sm opacity-80">Average monthly revenue within 6 months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">30 Days</div>
                  <div className="text-sm opacity-80">Complete platform setup and launch</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Done-for-you implementation</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/trailmap" 
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Schedule Strategy Call
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              🔒 No commitment required • Free platform assessment • Expert strategy session included
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
