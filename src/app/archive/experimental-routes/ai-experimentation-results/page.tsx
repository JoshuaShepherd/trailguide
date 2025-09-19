"use client";

import React, { useState } from "react";
import { Clock, DollarSign, Star, ChevronRight, BarChart3, TrendingUp, Users, Building, BookOpen, Globe, Database, FileText } from "lucide-react";

// Type definitions
type QualityGrade = "A+" | "A" | "A-" | "B+" | "B";
type Category = "Digital Marketing" | "Business Strategy" | "Research & Design" | "Educational Design" | "Digital Publishing" | "Content Strategy" | "Technical Architecture";

interface CaseStudy {
  id: string;
  title: string;
  category: Category;
  icon: React.ReactElement;
  color: string;
  timeSaved: string;
  timeSavedHours: number;
  revenueGenerated: string;
  revenueAmount: number;
  qualityGrade: QualityGrade;
  description: string;
  whatWasDone: string;
  oldWayTime: string;
  qualityImprovements: string[];
  storyExample: string;
}

// Case study data extracted from the markdown notes
const caseStudies = [
  {
    id: "spechem-digital",
    title: "SpecChem Digital Strategy Analysis",
    category: "Digital Marketing",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "blue",
    timeSaved: "18-25 hours",
    timeSavedHours: 21.5,
    revenueGenerated: "$5,000-$10,000 annually",
    revenueAmount: 7500,
    qualityGrade: "A",
    description: "Transformed a simple purchasing query into comprehensive strategic marketing analysis",
    whatWasDone: "Built a full strategic analysis of SpecChem's digital search health with custom 0–100 rubric, scored agency-style report benchmarking against competitors, and 90-day action plan with measurable KPIs.",
    oldWayTime: "20–30 hours across multiple people for manual web research, interviews, drafting, and revisions",
    qualityImprovements: [
      "Agency-quality structured outputs with improved clarity and precision",
      "Detailed rubric and competitor benchmarks",
      "Prioritized roadmap suitable for stakeholder presentation",
      "Integration of Efficiencies, Revenues, and Improvements framework"
    ],
    storyExample: "A basic contractor query ('where should I buy cure and seal in St. Louis?') was reframed into a comprehensive blueprint for SpecChem's AI + SEO dominance, demonstrating how everyday questions can unlock high-value strategy work."
  },
  {
    id: "movement-os",
    title: "Movement OS Business Framework",
    category: "Business Strategy",
    icon: <Building className="h-6 w-6" />,
    color: "green",
    timeSaved: "250-400 hours",
    timeSavedHours: 325,
    revenueGenerated: "$680,000+ potential",
    revenueAmount: 680000,
    qualityGrade: "A+",
    description: "Co-developed comprehensive business and operational framework for Movement OS",
    whatWasDone: "Clarified business model and pricing, defined qualification standards, outlined audience personas, projected revenues and growth scenarios, scoped operational roles, explored branding, and created content creation playbooks.",
    oldWayTime: "4–6 months with multiple consultants, likely $20k–$50k in fees",
    qualityImprovements: [
      "Condensed scattered ideas into clear business frameworks", 
      "HBR-level analysis with startup playbook detail",
      "Creative brand metaphors and visual prompts",
      "Risk management strategies with concrete threat mitigation",
      "Investor-ready language and structure"
    ],
    storyExample: "Qualification gating process for thought leaders was clarified from weeks of back-and-forth discussions into a clear 100-point rubric with applied case studies, providing both rigor and practical application examples."
  },
  {
    id: "city-demographics",
    title: "City Demographics & Design System",
    category: "Research & Design",
    icon: <Globe className="h-6 w-6" />,
    color: "purple",
    timeSaved: "30-35 hours",
    timeSavedHours: 32.5,
    revenueGenerated: "$55,000-$110,000",
    revenueAmount: 82500,
    qualityGrade: "A",
    description: "Comprehensive demographic reports for 11 cities with React/Tailwind design system",
    whatWasDone: "Produced comprehensive city demographic reports for 11 U.S. and Canadian cities with citations, plus imaginative React/Tailwind/Next.js design spec for engaging web presentation with duotone system and city-specific accents.",
    oldWayTime: "35–45 hours including manual research, design ideation, and formatting",
    qualityImprovements: [
      "Standardized signal metrics for city comparability",
      "Cohesive branded design system with professional polish",
      "Strategic framing mapping data to ministry actions",
      "Cultural vibe boards making data emotive, not just numeric",
      "Citations, tooltips, and accessibility guidance"
    ],
    storyExample: "Catalyst network leader needed city reports and presentation system for 11 target cities. AI produced both research report and fully-specified design system in one thread, enabling leaders to engage cities with clarity and confidence."
  },
  {
    id: "ebook-repurposing",
    title: "E-book to Digital Learning Experience",
    category: "Educational Design",
    icon: <BookOpen className="h-6 w-6" />,
    color: "orange",
    timeSaved: "11-19 hours",
    timeSavedHours: 15,
    revenueGenerated: "$50,000-$100,000",
    revenueAmount: 75000,
    qualityGrade: "A-",
    description: "Repurposed e-book into interactive digital adult learning experience",
    whatWasDone: "Explored repurposing options, designed sample full module (Principle 3: Incarnational Mission) as template, and created report of Brad Brisco's stated goals with direct quotes anchoring design in original intent.",
    oldWayTime: "12–20 hours for reading, analysis, extraction, brainstorming, and drafting",
    qualityImprovements: [
      "Organized Brad's vision into concise categories with direct quotes",
      "Applied adult learning theory frameworks",
      "Creative, adaptive, community-driven formats suggested",
      "Moved from vague ideas to structured module design",
      "Grounded in authentic voice through direct quotes"
    ],
    storyExample: "Ministry team transformed Brad Brisco's Rethink e-book into learning journey, cutting preparation from two workweeks to under an hour while enabling pursuit of licensing opportunities worth tens of thousands."
  },
  {
    id: "thought-leader-strategy",
    title: "Thought Leader Digital Strategy",
    category: "Digital Publishing",
    icon: <Users className="h-6 w-6" />,
    color: "teal",
    timeSaved: "95-120 hours",
    timeSavedHours: 107.5,
    revenueGenerated: "$100,000-$250,000",
    revenueAmount: 175000,
    qualityGrade: "A",
    description: "Comprehensive business and digital strategy for serving thought leaders",
    whatWasDone: "Mapped monetization pathways, user personas, digital publishing best practices, design frameworks, and drafted Copilot Agent prompts for website creation. Clarified pricing models, competitive positioning, and deployment workflows.",
    oldWayTime: "85–165 hours across strategy consultants, web design agencies, market research, and deployment experimentation",
    qualityImprovements: [
      "Organized business questions into structured frameworks",
      "Multiple design options with current aesthetic trend references",
      "Execution-ready prompts for direct VS Code deployment",
      "Strategic depth integrating marketing, SEO, UX, and monetization",
      "Creative direction tailored to personality types"
    ],
    storyExample: "Paul Bartel's realtor site received complete creative brief from just logo and 'Better Call Saul' inspiration—including color palette, typography, layout, and copy style—normally requiring weeks of designer iteration."
  },
  {
    id: "publishing-strategy",
    title: "Publishing Strategy & Transformation",
    category: "Content Strategy",
    icon: <FileText className="h-6 w-6" />,
    color: "pink",
    timeSaved: "20-30 hours",
    timeSavedHours: 25,
    revenueGenerated: "$50,000-$500,000",
    revenueAmount: 275000,
    qualityGrade: "A-",
    description: "Publishing strategy, content repurposing, and digital transformation frameworks",
    whatWasDone: "Explored publishing strategy, repurposing content for thought leaders, maturity models, engagement pathways, and practical tools. Generated concrete prompts, design language, and site maps for TrailGuide and Crystal Cove Branson projects.",
    oldWayTime: "20–40 hours for research, synthesis, brainstorming, and iteration",
    qualityImprovements: [
      "Clear frameworks for maturity models and repurposing pathways",
      "Comprehensive prompts ready for implementation",
      "Strategic foresight connecting tools with revenue goals",
      "Professional polish suitable for board or client use",
      "Integration of strategy with execution-ready artifacts"
    ],
    storyExample: "Alan Hirsch and Brad Brisco's works were mapped into repeatable repurposing framework, turning abstract 'repurpose books' idea into concrete process with visual inspiration examples."
  },
  {
    id: "spechem-web-strategy",
    title: "SpecChem Web Architecture Strategy",
    category: "Technical Architecture",
    icon: <Database className="h-6 w-6" />,
    color: "indigo",
    timeSaved: "80-120 hours",
    timeSavedHours: 100,
    revenueGenerated: "$500,000-$1,000,000",
    revenueAmount: 750000,
    qualityGrade: "A+",
    description: "Complete digital design and content strategy for SpecChem technical architecture",
    whatWasDone: "Defined best practices for file naming and storage, wrote production-ready Copilot prompts, established site map and design specs, created non-destructive style guide, and aligned with 2025 digital strategy.",
    oldWayTime: "3–5 weeks of combined consultant and internal team time",
    qualityImprovements: [
      "Organized prompts and specs engineers can immediately implement",
      "Comprehensive technical and strategic aspects coverage",
      "Non-destructive workflows with semantic tokens",
      "Compliance clarity with future-proofing considerations",
      "Senior-level digital strategist and frontend architect quality"
    ],
    storyExample: "Supabase storage for thousands of SDS/TDS files evolved from 'make folders' suggestion into complete enterprise architecture with buckets, naming conventions, metadata registry, and compliance policies in one step."
  }
];

// Calculate totals
const totalTimeSaved = caseStudies.reduce((sum, study) => sum + study.timeSavedHours, 0);
const totalRevenue = caseStudies.reduce((sum, study) => sum + study.revenueAmount, 0);
const averageGrade: QualityGrade = "A"; // Based on analysis of grades

const gradeColors: Record<QualityGrade, string> = {
  "A+": "text-green-400",
  "A": "text-green-300", 
  "A-": "text-yellow-300",
  "B+": "text-yellow-400",
  "B": "text-orange-300"
};

const categoryColors: Record<Category, string> = {
  "Digital Marketing": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Business Strategy": "bg-green-500/20 text-green-300 border-green-500/30",
  "Research & Design": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Educational Design": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Digital Publishing": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Content Strategy": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Technical Architecture": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
};

export default function AIExperimentationResultsPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  const selectedStudy = selectedCaseStudy ? caseStudies.find(study => study.id === selectedCaseStudy) : null;

  if (selectedStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <button
            onClick={() => setSelectedCaseStudy(null)}
            className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180 mr-2" />
            Back to Overview
          </button>

          {/* Case Study Detail */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r from-${selectedStudy.color}-900/30 to-${selectedStudy.color}-800/30 p-8 border-b border-slate-700`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${selectedStudy.color}-500/20 rounded-xl flex items-center justify-center mr-4`}>
                    {selectedStudy.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedStudy.title}</h1>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryColors[selectedStudy.category as Category]}`}>
                      {selectedStudy.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400 mb-1">Quality Grade</div>
                  <div className={`text-2xl font-bold ${gradeColors[selectedStudy.qualityGrade as QualityGrade]}`}>
                    {selectedStudy.qualityGrade}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="p-8 border-b border-slate-700">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-300 font-medium">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{selectedStudy.timeSaved}</div>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-300 font-medium">Revenue Potential</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{selectedStudy.revenueGenerated}</div>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-purple-300 font-medium">Quality Impact</span>
                  </div>
                  <div className={`text-2xl font-bold ${gradeColors[selectedStudy.qualityGrade as QualityGrade]}`}>
                    {selectedStudy.qualityGrade}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                <p className="text-slate-300 text-lg">{selectedStudy.description}</p>
              </div>

              {/* What Was Done */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">What Was Accomplished</h3>
                <p className="text-slate-300 leading-relaxed">{selectedStudy.whatWasDone}</p>
              </div>

              {/* Old Way Comparison */}
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">The Traditional Approach</h3>
                <p className="text-slate-300 leading-relaxed">{selectedStudy.oldWayTime}</p>
              </div>

              {/* Quality Improvements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Quality Improvements Achieved</h3>
                <div className="space-y-3">
                  {selectedStudy.qualityImprovements.map((improvement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-slate-300">{improvement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Example */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Story for Reflection</h3>
                <p className="text-blue-200 italic leading-relaxed">"{selectedStudy.storyExample}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Experimentation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Results
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Real-world analysis of AI impact across diverse use cases. These results represent a random 
            sampling of actual work, not cherry-picked examples.
          </p>
        </div>

        {/* Aggregate Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-8 border border-blue-500/30 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">{Math.round(totalTimeSaved)}</div>
            <div className="text-blue-300 font-medium text-lg">Total Hours Saved</div>
            <div className="text-slate-400 text-sm mt-2">Equivalent to ~{Math.round(totalTimeSaved/40)} work weeks</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-8 border border-green-500/30 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">${(totalRevenue/1000000).toFixed(1)}M</div>
            <div className="text-green-300 font-medium text-lg">Revenue Generation Potential</div>
            <div className="text-slate-400 text-sm mt-2">Across all documented use cases</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-8 border border-purple-500/30 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-purple-400" />
            </div>
            <div className={`text-4xl font-bold mb-2 ${gradeColors[averageGrade]}`}>{averageGrade}</div>
            <div className="text-purple-300 font-medium text-lg">Work Quality Analysis</div>
            <div className="text-slate-400 text-sm mt-2">Average quality improvement grade</div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Individual Case Studies</h2>
          <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
            Click any case study below to explore detailed analysis, metrics, and stories of AI application impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCaseStudy(study.id)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${study.color}-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-${study.color}-500/30 transition-colors`}>
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {study.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[study.category as Category]}`}>
                      {study.category}
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>

              <p className="text-slate-300 text-sm mb-4 line-clamp-2">{study.description}</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-blue-400 text-sm font-medium">{study.timeSaved}</div>
                  <div className="text-slate-500 text-xs">Time Saved</div>
                </div>
                <div>
                  <div className="text-green-400 text-sm font-medium">
                    {study.revenueAmount >= 1000000 ? `$${(study.revenueAmount/1000000).toFixed(1)}M` : 
                     study.revenueAmount >= 1000 ? `$${(study.revenueAmount/1000)}K` : `$${study.revenueAmount}`}
                  </div>
                  <div className="text-slate-500 text-xs">Revenue Potential</div>
                </div>
                <div>
                  <div className={`text-sm font-medium ${gradeColors[study.qualityGrade as QualityGrade]}`}>
                    {study.qualityGrade}
                  </div>
                  <div className="text-slate-500 text-xs">Quality Grade</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Efficiency Gains</h4>
              <p className="text-slate-300 text-sm">
                Consistent 80-90% time savings across all use cases, from hours of work compressed into minutes of conversation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2">Revenue Impact</h4>
              <p className="text-slate-300 text-sm">
                Significant revenue opportunities unlocked through improved strategy, faster execution, and enhanced quality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Quality Enhancement</h4>
              <p className="text-slate-300 text-sm">
                Consistently higher quality outputs with better structure, strategic depth, and professional polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}