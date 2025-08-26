'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, Share2, ArrowLeft } from 'lucide-react'
import { BlogPost as BlogPostType } from '@/lib/blog'
import { MDXContent } from '@/components/mdx/mdx-content'
import { TableOfContents } from '@/components/mdx/table-of-contents'
import { cn } from '@/lib/utils'

interface BlogPostProps {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  const [emailSubscribe, setEmailSubscribe] = useState('')
  
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      })
    } else {
      await navigator.clipboard.writeText(window.location.href)
    }
  }

  const CTABlock = ({ title, description, buttonText, buttonHref, className }: {
    title: string
    description: string
    buttonText: string
    buttonHref: string
    className?: string
  }) => (
    <div className={cn(
      'my-12 p-6 bg-gradient-to-r from-trailguide-evergreen/5 to-trailguide-bronze/5 border border-trailguide-evergreen/10 rounded-lg',
      className
    )}>
      <h4 className="font-semibold text-lg text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={buttonHref}
        className="inline-flex items-center bg-trailguide-evergreen text-white px-6 py-3 rounded-lg font-medium hover:bg-trailguide-evergreen/90 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link
                href="/blog"
                className="flex items-center text-trailguide-evergreen hover:text-trailguide-evergreen/80 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </nav>

            {/* Category and Series */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-trailguide-evergreen text-white px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                {post.category}
              </span>
              {post.series && (
                <span className="bg-trailguide-bronze text-white px-3 py-1 rounded-full text-sm font-medium">
                  Part {post.series.part}{post.series.total && ` of ${post.series.total}`} • {post.series.name}
                </span>
              )}
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              {/* Author */}
              <div className="flex items-center gap-2">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <User className="h-6 w-6 bg-gray-200 rounded-full p-1" />
                )}
                <div>
                  <Link
                    href={`/authors/${post.author.handle}`}
                    className="font-medium text-gray-900 hover:text-trailguide-evergreen"
                  >
                    {post.author.name}
                  </Link>
                  {post.author.role && (
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              {/* Updated Date */}
              {post.updatedAt && (
                <div className="flex items-center gap-1 text-gray-500">
                  <span>Updated:</span>
                  <time dateTime={post.updatedAt}>
                    {new Date(post.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              )}

              {/* Reading Time */}
              {post.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              )}

              {/* Share */}
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <Tag className="h-4 w-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-trailguide-evergreen hover:text-white transition-colors border border-gray-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative aspect-[21/9] md:aspect-[3/1] bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Table of Contents - Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-8 lg:self-start">
              <TableOfContents content={post.content} />
            </aside>

            {/* Article Content */}
            <main className="lg:col-span-9">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-8">
                <TableOfContents content={post.content} />
              </div>

              {/* Article Body */}
              <article className="prose prose-lg max-w-none">
                <MDXContent content={post.content} />
              </article>

              {/* CTA Blocks would be inserted into content based on reading progress */}
              {/* This is a simplified version - in a full implementation, you'd track scroll progress */}
              
              {/* Mid-article CTA */}
              <CTABlock
                title="Ready to Start Your AI Journey?"
                description="Take our comprehensive assessment to discover your organization's AI readiness and get personalized recommendations."
                buttonText="Start Your Assessment"
                buttonHref="/trailmap"
                className="my-16"
              />

              {/* Email Subscription */}
              <div className="my-16 p-8 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Be first to new field notes
                </h3>
                <p className="text-gray-600 mb-6">
                  Get practical insights on AI for nonprofits delivered to your inbox.
                </p>
                <form className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    value={emailSubscribe}
                    onChange={(e) => setEmailSubscribe(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-trailguide-evergreen text-white px-6 py-2 rounded-lg font-medium hover:bg-trailguide-evergreen/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Late-article CTA */}
              <CTABlock
                title="Join a TrailHike"
                description="Connect with other nonprofits on similar AI journeys. Share challenges, celebrate wins, and learn together."
                buttonText="Join a TrailHike"
                buttonHref="/hikes"
                className="my-16"
              />
            </main>
          </div>
        </div>
      </div>

      {/* Author Box */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full shrink-0"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {post.author.name}
                </h3>
                {post.author.role && (
                  <p className="text-trailguide-evergreen font-medium mb-2">
                    {post.author.role}
                  </p>
                )}
                <p className="text-gray-600 mb-4">
                  Bio placeholder - experienced in nonprofit AI implementation and ethics.
                </p>
                <Link
                  href={`/authors/${post.author.handle}`}
                  className="text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
                >
                  View all posts by {post.author.name} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical Link Display */}
      {post.canonicalUrl && (
        <div className="bg-blue-50 border-t border-blue-200">
          <div className="container mx-auto px-4 py-3">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-blue-800">
                Originally published at{' '}
                <a
                  href={post.canonicalUrl}
                  className="font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {new URL(post.canonicalUrl).hostname}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
