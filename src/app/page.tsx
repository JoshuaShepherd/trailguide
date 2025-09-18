import React from 'react';
import { BookOpen, Users, Target, Zap, TrendingUp, Award, ArrowRight, CheckCircle, Play, Download, Calendar, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Expert Publisher Platform Demo
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Expertise Into 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> Digital Authority</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              This is a live demonstration of our Expert Publisher platform—showcasing exactly what your complete digital presence, content engine, and monetization stack will look like when you launch with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/products/membership" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore Membership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                See How It Works
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                AI-Enhanced Content Creation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Multi-Format Publishing
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Integrated Monetization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Build Digital Authority
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This template demonstrates our complete Expert Publisher ecosystem—from content creation to monetization. Every feature you see here is what you get.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Engine</h3>
                <p className="text-gray-600 mb-6">AI-powered content creation across blog posts, podcasts, videos, newsletters, and social media—all from your core expertise.</p>
                <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  See Blog Examples <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Audience Building</h3>
                <p className="text-gray-600 mb-6">Integrated newsletter, membership tiers, and community features that turn readers into paying customers automatically.</p>
                <Link href="/newsletter" className="text-orange-600 font-medium hover:text-orange-700 inline-flex items-center">
                  View Newsletter <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monetization Stack</h3>
                <p className="text-gray-600 mb-6">Courses, coaching, speaking, consulting, and premium content—all integrated into your publishing workflow.</p>
                <Link href="/products" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                  Explore Products <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
                <p className="text-xl text-gray-600">Real examples of the content this platform helps you create</p>
              </div>
              <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                View All Articles <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Articles */}
              <article className="group cursor-pointer">
                <Link href="/blog/board-ready-ai-reports-template">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Target className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-blue-600 font-medium">Strategic Planning</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Board-Ready AI Reports Template
                    </h3>
                    <p className="text-gray-600">
                      Transform complex AI initiatives into executive-ready presentations that drive decision-making.
                    </p>
                  </div>
                </Link>
              </article>
              
              <article className="group cursor-pointer">
                <Link href="/blog/nonprofit-grant-sprint-guide">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-green-600 font-medium">Nonprofit Leadership</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      Nonprofit Grant Sprint Guide
                    </h3>
                    <p className="text-gray-600">
                      A systematic approach to securing funding through strategic grant writing and relationship building.
                    </p>
                  </div>
                </Link>
              </article>
              
              <article className="group cursor-pointer">
                <Link href="/blog/orientation-first-ai-journey">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Zap className="w-12 h-12 text-orange-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-orange-600 font-medium">AI Implementation</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      Orientation-First AI Journey
                    </h3>
                    <p className="text-gray-600">
                      Begin your AI transformation with human-centered orientation before diving into technology solutions.
                    </p>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Offerings Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Monetization That Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how the Expert Publisher platform transforms your expertise into multiple revenue streams
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/products/membership" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Membership</h3>
                <p className="text-sm text-gray-600">Premium content and community access</p>
                <div className="text-blue-600 text-sm font-medium mt-3">From $29/month</div>
              </Link>
              
              <Link href="/products/courses" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Courses</h3>
                <p className="text-sm text-gray-600">Deep-dive learning experiences</p>
                <div className="text-green-600 text-sm font-medium mt-3">$497-$2,997</div>
              </Link>
              
              <Link href="/products/workshops" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Workshops</h3>
                <p className="text-sm text-gray-600">Interactive group sessions</p>
                <div className="text-orange-600 text-sm font-medium mt-3">$197-$997</div>
              </Link>
              
              <Link href="/products/consulting" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Consulting</h3>
                <p className="text-sm text-gray-600">1:1 strategic guidance</p>
                <div className="text-purple-600 text-sm font-medium mt-3">$500-$2,000/hr</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Platform Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from experts using this exact platform architecture
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-gray-600">Newsletter Subscribers</div>
                <div className="text-sm text-gray-500 mt-1">Average in 12 months</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$150K+</div>
                <div className="text-gray-600">Annual Revenue</div>
                <div className="text-sm text-gray-500 mt-1">From digital products</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
                <div className="text-gray-600">Content Automation</div>
                <div className="text-sm text-gray-500 mt-1">Time saved on production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Expert Authority?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This demonstration shows exactly what you'll get. Every feature, every integration, every monetization tool—ready to launch with your expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/products/membership" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-500 transition-colors">
                View Case Studies
                <Download className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
