'use client'

import { useState } from 'react'
import { Search, Grid, List, Filter } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import BlogCard from './blog-card'
import BlogList from './blog-list'
import { cn } from '@/lib/utils'

interface BlogArchiveProps {
  posts: BlogPost[]
  featuredPosts: BlogPost[]
  tags: string[]
  pagination: {
    current: number
    total: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export default function BlogArchive({ posts, featuredPosts, tags, pagination }: BlogArchiveProps) {
  const [view, setView] = useState<'cards' | 'list'>('cards')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllTags, setShowAllTags] = useState(false)

  // Filter and sort posts
  let filteredPosts = posts

  // Apply search filter
  if (searchQuery) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }

  // Apply tag filter
  if (selectedTag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
    )
  }

  // Apply sorting
  if (sortBy === 'oldest') {
    filteredPosts = [...filteredPosts].reverse()
  } else if (sortBy === 'featured') {
    filteredPosts = [...filteredPosts].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  }

  const displayedTags = showAllTags ? tags : tags.slice(0, 6)

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Insights & Field Notes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Practical, ethical, quietly premium thinking at the intersection of AI and the nonprofit world.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !selectedTag && !searchQuery && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
          />
        </div>

        {/* View Toggle and Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('cards')}
                className={cn(
                  'px-3 py-1 rounded text-sm font-medium transition-colors',
                  view === 'cards'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <Grid className="h-4 w-4 mr-1 inline" />
                Cards
              </button>
              <button
                onClick={() => setView('list')}
                className={cn(
                  'px-3 py-1 rounded text-sm font-medium transition-colors',
                  view === 'list'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <List className="h-4 w-4 mr-1 inline" />
                List
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'featured')}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="featured">Featured</option>
            </select>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-600">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <button
            onClick={() => setSelectedTag(null)}
            className={cn(
              'px-3 py-1 rounded-full text-sm font-medium transition-colors',
              !selectedTag
                ? 'bg-trailguide-evergreen text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All
          </button>
          {displayedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={cn(
                'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                selectedTag === tag
                  ? 'bg-trailguide-evergreen text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {tag}
            </button>
          ))}
          {tags.length > 6 && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {showAllTags ? 'Show Less' : `+${tags.length - 6} more`}
            </button>
          )}
        </div>
      </div>

      {/* Posts Grid/List */}
      {filteredPosts.length > 0 ? (
        <div className={cn(
          view === 'cards' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        )}>
          {filteredPosts.map((post) => (
            view === 'cards' ? (
              <BlogCard key={post.slug} post={post} />
            ) : (
              <BlogList key={post.slug} post={post} />
            )
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedTag(null)
              }}
              className="text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}

      {/* Pagination */}
      {pagination.total > 1 && (
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            {pagination.hasPrev && (
              <a
                href={`/blog/page/${pagination.current - 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </a>
            )}
            
            {Array.from({ length: pagination.total }, (_, i) => i + 1).map((page) => (
              <a
                key={page}
                href={`/blog/page/${page}`}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg',
                  page === pagination.current
                    ? 'bg-trailguide-evergreen text-white'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                )}
              >
                {page}
              </a>
            ))}
            
            {pagination.hasNext && (
              <a
                href={`/blog/page/${pagination.current + 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Next
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
