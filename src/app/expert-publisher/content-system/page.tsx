import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Crown, FileText, Image, Video, Quote, Table, Code, 
  ArrowRight, CheckCircle, Star, Lightbulb, Calendar,
  Upload, Crop, FolderOpen, Clock, Users, MessageSquare,
  Search, Tag, BookOpen, Edit3, Save, Eye, Zap, Target
} from 'lucide-react';

export default function ContentSystem() {
  const cmsFeatures = [
    {
      category: "Advanced Editor",
      icon: Edit3,
      features: [
        { name: "Rich Text Blocks", description: "Paragraph, heading, list formatting with keyboard shortcuts", visual: true },
        { name: "Media Blocks", description: "Images, videos, audio with drag-and-drop insertion", visual: true },
        { name: "Interactive Blocks", description: "Quotes, callouts, code snippets, tables", visual: true },
        { name: "Embed Blocks", description: "YouTube, Twitter, LinkedIn, custom HTML embeds", visual: true },
        { name: "Paywall Markers", description: "Insert paywall breaks anywhere in content", visual: true }
      ]
    },
    {
      category: "Media Management",
      icon: Image,
      features: [
        { name: "Smart Upload", description: "Automatic compression, format optimization, CDN delivery", visual: true },
        { name: "Image Editor", description: "Crop, resize, filter with built-in editor", visual: true },
        { name: "Asset Library", description: "Organized folders, search, tagging system", visual: true },
        { name: "Usage Tracking", description: "See where assets are used across content", visual: false },
        { name: "Bulk Operations", description: "Mass upload, delete, organize assets", visual: false }
      ]
    },
    {
      category: "SEO & Discovery",
      icon: Search,
      features: [
        { name: "Meta Optimization", description: "Title, description, OG image customization", visual: true },
        { name: "URL Structure", description: "Clean, SEO-friendly URLs with redirects", visual: false },
        { name: "Schema Markup", description: "Automatic JSON-LD structured data", visual: false },
        { name: "Internal Linking", description: "AI-suggested related content links", visual: true },
        { name: "Sitemap Generation", description: "Automatic XML sitemap updates", visual: false }
      ]
    },
    {
      category: "Content Organization",
      icon: FolderOpen,
      features: [
        { name: "Series & Collections", description: "Group related content for reader journeys", visual: true },
        { name: "Tag Management", description: "Hierarchical tagging with auto-suggestions", visual: true },
        { name: "Content Calendar", description: "Visual scheduling with drag-and-drop", visual: true },
        { name: "Draft Management", description: "Version control, autosave, recovery", visual: true },
        { name: "Content Templates", description: "Reusable templates for consistent formatting", visual: true }
      ]
    },
    {
      category: "Collaboration",
      icon: Users,
      features: [
        { name: "Multi-Author Support", description: "Team writing with role-based permissions", visual: true },
        { name: "Review Workflow", description: "Draft approval, comments, suggestions", visual: true },
        { name: "Editorial Calendar", description: "Team coordination and deadline tracking", visual: true },
        { name: "Change Tracking", description: "Version history with rollback capability", visual: false },
        { name: "Real-time Editing", description: "Collaborative editing like Google Docs", visual: false }
      ]
    }
  ];

  const editorBlocks = [
    { type: "Paragraph", icon: FileText, description: "Rich text with formatting, links, inline code" },
    { type: "Heading", icon: FileText, description: "H1-H6 with automatic anchor links" },
    { type: "Image", icon: Image, description: "Responsive images with captions, alt text" },
    { type: "Video", icon: Video, description: "Embedded or uploaded videos with poster images" },
    { type: "Quote", icon: Quote, description: "Styled blockquotes with attribution" },
    { type: "Code", icon: Code, description: "Syntax-highlighted code blocks" },
    { type: "Table", icon: Table, description: "Sortable, responsive data tables" },
    { type: "Callout", icon: Lightbulb, description: "Highlighted boxes for tips, warnings, notes" },
    { type: "Divider", icon: Target, description: "Section breaks and visual separators" },
    { type: "Button", icon: Zap, description: "Call-to-action buttons with tracking" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <FileText className="h-4 w-4" />
            <span>📝 CONTENT SYSTEM DEMO - Professional Publishing Tools for Thought Leaders</span>
            <FileText className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full mb-6">
            <FileText className="h-4 w-4" />
            <span>Content Management System Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Professional <span className="text-green-600">Content System</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            A complete content management system designed for thought leaders. Create, organize, 
            and publish professional content with advanced editing tools, SEO optimization, and collaboration features.
          </p>

          <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-green-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-trailguide-slate text-sm">Content Blocks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Auto</div>
                <div className="text-trailguide-slate text-sm">SEO Optimization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Team</div>
                <div className="text-trailguide-slate text-sm">Collaboration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Pro</div>
                <div className="text-trailguide-slate text-sm">Publishing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Demo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Advanced Content Editor</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Tiptap-based WYSIWYG editor with professional publishing features
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden shadow-lg">
            {/* Editor Toolbar */}
            <div className="bg-gray-50 border-b p-4">
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-1">
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">Bold</button>
                  <button className="px-3 py-1 border rounded text-sm">Italic</button>
                  <button className="px-3 py-1 border rounded text-sm">Link</button>
                </div>
                <div className="w-px bg-gray-300 mx-2"></div>
                <div className="flex gap-1">
                  <button className="px-3 py-1 border rounded text-sm">H1</button>
                  <button className="px-3 py-1 border rounded text-sm">H2</button>
                  <button className="px-3 py-1 border rounded text-sm">Quote</button>
                </div>
                <div className="w-px bg-gray-300 mx-2"></div>
                <div className="flex gap-1">
                  <button className="px-3 py-1 border rounded text-sm flex items-center">
                    <Image className="h-3 w-3 mr-1" /> Image
                  </button>
                  <button className="px-3 py-1 border rounded text-sm flex items-center">
                    <Video className="h-3 w-3 mr-1" /> Video
                  </button>
                  <button className="px-3 py-1 border rounded text-sm flex items-center">
                    <Code className="h-3 w-3 mr-1" /> Code
                  </button>
                </div>
                <div className="ml-auto">
                  <button className="px-4 py-1 bg-green-600 text-white rounded text-sm">
                    💰 Insert Paywall
                  </button>
                </div>
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-trailguide-neutral mb-4">
                    5 Strategies for Building Authentic Authority
                  </h1>
                  <p className="text-trailguide-slate leading-relaxed">
                    Building genuine authority in your industry isn&apos;t about self-promotion—it&apos;s about 
                    consistently delivering value and insights that your audience can&apos;t find anywhere else.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                  <div className="flex">
                    <Lightbulb className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">Pro Tip</h3>
                      <p className="text-blue-800 text-sm">
                        Authority is earned through consistent value delivery, not flashy marketing tactics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-yellow-400 pt-4">
                  <div className="bg-yellow-50 p-4 rounded mb-4">
                    <div className="flex items-center gap-2 text-yellow-800 text-sm font-medium mb-2">
                      <Crown className="h-4 w-4" />
                      Premium Content Below - Members Only
                    </div>
                    <p className="text-yellow-700 text-sm">
                      The following content is available to paid subscribers only.
                    </p>
                  </div>
                  <div className="blur-sm">
                    <h2 className="text-xl font-semibold text-trailguide-neutral mb-2">
                      Advanced Authority Building Techniques
                    </h2>
                    <p className="text-trailguide-slate">
                      Here are the specific strategies that successful thought leaders use...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor Footer */}
            <div className="bg-gray-50 border-t p-4 flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-trailguide-slate">
                <span>📄 1,247 words</span>
                <span>⏱️ 6 min read</span>
                <span className="text-green-600">💾 Saved 2 min ago</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Save className="h-3 w-3 mr-1" />
                  Publish
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Blocks */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Rich Content Blocks</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Professional content blocks for every type of thought leadership content
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {editorBlocks.map((block, index) => (
              <div key={block.type} className="bg-white border-2 border-green-200 rounded-lg p-4 hover:border-green-400 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <block.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-trailguide-neutral text-sm mb-1">{block.type}</h3>
                  <p className="text-xs text-trailguide-slate">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CMS Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Complete CMS Features</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Everything you need for professional content management and publishing
            </p>
          </div>

          {cmsFeatures.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-trailguide-neutral">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className={`border-2 ${feature.visual ? 'border-green-200 hover:border-green-400' : 'border-blue-200 hover:border-blue-400'} transition-all duration-300`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                        {feature.visual ? (
                          <Eye className="h-4 w-4 text-green-600" />
                        ) : (
                          <Star className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-trailguide-slate">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Media Library Demo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Professional Media Library</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Organize, optimize, and deliver media assets with enterprise-grade tools
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
            {/* Media Library Header */}
            <div className="bg-gray-50 border-b p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-trailguide-neutral">Media Library</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-3 w-3 mr-1" />
                    Upload
                  </Button>
                  <Button variant="outline" size="sm">
                    <FolderOpen className="h-3 w-3 mr-1" />
                    New Folder
                  </Button>
                </div>
              </div>
            </div>

            {/* Media Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center border-2 border-transparent hover:border-green-400 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-500">image-{i + 1}.jpg</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Features */}
        <section className="mb-20">
          <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">Built-in SEO Optimization</h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Every piece of content is automatically optimized for search engines and social sharing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Meta Tags</h3>
                <p className="text-trailguide-slate text-sm">
                  Automatic title, description, and Open Graph optimization for every post
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Schema Markup</h3>
                <p className="text-trailguide-slate text-sm">
                  JSON-LD structured data for rich snippets and better search visibility
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Internal Linking</h3>
                <p className="text-trailguide-slate text-sm">
                  AI-suggested internal links to improve SEO and reader engagement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to Create Professional Content?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This complete content management system is included in your Expert Publisher platform. 
              Start creating, organizing, and publishing like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/trailmap">
                  Start Platform Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/expert-publisher/what-you-get">View Complete Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
