import React from 'react';
import { Target, Users, Zap, Award, CheckCircle, ArrowRight, Star, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Built by Experts,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> For Experts</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              This template showcases the complete Expert Publisher platform architecture—demonstrating exactly how thought leaders transform their expertise into sustainable digital authority and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission: Human-First Digital Publishing
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe expertise should be shared, not hoarded. This platform template demonstrates how AI can amplify human knowledge while keeping the expert at the center of their audience relationship.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Every feature you see here—from content creation to monetization—is designed to scale your impact while preserving your authentic voice and maintaining direct connection with your audience.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Human-Authored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">90%+</div>
                    <div className="text-sm text-gray-600">Revenue Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">10x</div>
                    <div className="text-sm text-gray-600">Content Velocity</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Target className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert-Centric Design</h3>
                    <p className="text-gray-600 max-w-xs">
                      Every element serves your expertise and audience relationship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Platform Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This template embodies our core beliefs about digital publishing and expert authority
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Human-Centered AI</h3>
                <p className="text-gray-600">AI amplifies your voice, never replaces it. Every piece of content maintains your authentic perspective and expertise.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Operations</h3>
                <p className="text-gray-600">You own your content, your audience data, and your revenue streams. Complete transparency in all platform operations.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Growth</h3>
                <p className="text-gray-600">Build long-term authority through consistent value delivery, not growth hacks or audience manipulation.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Over Quantity</h3>
                <p className="text-gray-600">Every piece of content serves your audience's specific needs and reinforces your expertise positioning.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Alignment</h3>
                <p className="text-gray-600">Our success is tied to yours. We only succeed when you're building sustainable authority and revenue.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Audience First</h3>
                <p className="text-gray-600">Every feature prioritizes your audience relationship over platform convenience or vendor lock-in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Behind the Platform */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built by Publishing Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This template represents years of experience building digital authority for thought leaders across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-blue-600">EP</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Publisher Team</h3>
                <p className="text-gray-600 mb-4">Platform architects with deep expertise in digital publishing, AI integration, and thought leadership development.</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>15+ Years Publishing</span>
                  <span>•</span>
                  <span>500+ Experts Served</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-green-600">AI</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Development Team</h3>
                <p className="text-gray-600 mb-4">Specialists in human-AI collaboration, ensuring technology amplifies rather than replaces human expertise.</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>PhD-Level AI Research</span>
                  <span>•</span>
                  <span>Ethics-First Approach</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-orange-600">UX</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User Experience Team</h3>
                <p className="text-gray-600 mb-4">Designers focused on creating intuitive workflows that serve both expert creators and their audiences.</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>Award-Winning Design</span>
                  <span>•</span>
                  <span>User-Tested Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Commitment to You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Complete Transparency</h3>
                </div>
                <p className="text-gray-600">Every feature, every integration, every AI enhancement is fully documented and explained. No black boxes.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Data Ownership</h3>
                </div>
                <p className="text-gray-600">Your content, your audience data, your analytics—you own everything and can export at any time.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Human-First AI</h3>
                </div>
                <p className="text-gray-600">AI tools that enhance your expertise and voice, never replace them. You're always in control.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Continuous Innovation</h3>
                </div>
                <p className="text-gray-600">Regular platform updates based on user feedback and emerging best practices in digital publishing.</p>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to See Your Platform?</h3>
              <p className="text-blue-100 mb-6">
                This template is just the beginning. Your actual platform would be customized to your expertise, audience, and goals.
              </p>
              <Link href="/products/membership" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore Platform Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}