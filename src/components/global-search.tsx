'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { Search, X, FileText, Users, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SearchResult {
  title: string
  excerpt: string
  url: string
  type: 'page' | 'blog' | 'author'
  category?: string
}

// This would typically come from a search API or static index
const searchData: SearchResult[] = [
  // Pages
  {
    title: 'TrailMap - AI Readiness Assessment',
    excerpt: 'A 5-stage, 4-dimension model that orients individuals and organizations—then guides the next step.',
    url: '/trailmap',
    type: 'page'
  },
  {
    title: 'TrailHikes - AI Workshops and Cohorts',
    excerpt: 'Community-driven workshops helping nonprofits navigate AI implementation together.',
    url: '/hikes',
    type: 'page'
  },
  {
    title: 'TrailKits - AI Toolkits by Role',
    excerpt: 'Practical AI toolkits designed for different roles in nonprofit organizations.',
    url: '/kits',
    type: 'page'
  },
  {
    title: 'Case Studies - AI Success Stories',
    excerpt: 'Real examples of nonprofits successfully implementing AI to advance their missions.',
    url: '/case-studies',
    type: 'page'
  },
  {
    title: 'About TrailGuide',
    excerpt: 'Our mission to help nonprofits navigate AI implementation with wisdom and care.',
    url: '/about',
    type: 'page'
  },
  {
    title: 'Ethics Framework',
    excerpt: 'Our commitment to responsible AI development and implementation in the nonprofit sector.',
    url: '/ethics',
    type: 'page'
  },
  
  // Blog posts (examples)
  {
    title: 'Getting Started with AI in Your Nonprofit',
    excerpt: 'A beginner\'s guide to understanding how AI can support your mission without overwhelming your team.',
    url: '/blog/getting-started-with-ai-nonprofit',
    type: 'blog',
    category: 'Strategy'
  },
  {
    title: 'Data Privacy and AI: What Nonprofits Need to Know',
    excerpt: 'Essential considerations for protecting donor and beneficiary data when implementing AI tools.',
    url: '/blog/data-privacy-ai-nonprofits',
    type: 'blog',
    category: 'Ethics'
  },
  {
    title: 'Measuring AI Impact in Social Good Organizations',
    excerpt: 'How to establish meaningful metrics and evaluation frameworks for AI initiatives in nonprofits.',
    url: '/blog/measuring-ai-impact-nonprofits',
    type: 'blog',
    category: 'Implementation'
  },
  {
    title: 'Building AI Literacy in Your Team',
    excerpt: 'Strategies for developing AI understanding and comfort across all levels of your organization.',
    url: '/blog/building-ai-literacy-team',
    type: 'blog',
    category: 'People'
  },
  
  // Authors (examples)
  {
    title: 'Dr. Sarah Chen - AI Ethics Researcher',
    excerpt: 'Leading researcher in responsible AI development with 15+ years in nonprofit technology.',
    url: '/authors/sarah-chen',
    type: 'author'
  },
  {
    title: 'Marcus Rodriguez - Implementation Strategist',
    excerpt: 'Former nonprofit executive turned AI implementation consultant, helping organizations scale impact.',
    url: '/authors/marcus-rodriguez',
    type: 'author'
  }
]

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search logic
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const filtered = searchData.filter(item => {
      const searchText = `${item.title} ${item.excerpt} ${item.category || ''}`.toLowerCase()
      const queryWords = searchQuery.toLowerCase().split(' ')
      return queryWords.some(word => searchText.includes(word))
    })

    // Sort by relevance (title matches first, then excerpt matches)
    const sorted = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(searchQuery.toLowerCase())
      const bTitle = b.title.toLowerCase().includes(searchQuery.toLowerCase())
      if (aTitle && !bTitle) return -1
      if (!aTitle && bTitle) return 1
      return 0
    })

    setResults(sorted.slice(0, 8)) // Limit to 8 results
    setSelectedIndex(0)
  }, [])

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    performSearch(value)
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % results.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev === 0 ? results.length - 1 : prev - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].url
          onClose()
        }
        break
      case 'Escape':
        onClose()
        break
    }
  }

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="h-4 w-4" />
      case 'blog':
        return <FileText className="h-4 w-4" />
      case 'author':
        return <Users className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'text-blue-600 bg-blue-50'
      case 'blog':
        return 'text-green-600 bg-green-50'
      case 'author':
        return 'text-purple-600 bg-purple-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-24"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-2xl mx-4">
        <Card className="shadow-2xl border-0">
          <CardContent className="p-0">
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-gray-200">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages, blog posts, and more..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 text-lg outline-none placeholder-gray-400"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-2 p-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Results */}
            <div ref={resultsRef} className="max-h-96 overflow-y-auto">
              {query && results.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-500">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No results found for &quot;{query}&quot;</p>
                  <p className="text-sm mt-1">Try different keywords or browse our main sections</p>
                </div>
              )}

              {results.map((result, index) => (
                <Link
                  key={`${result.url}-${index}`}
                  href={result.url}
                  onClick={onClose}
                  className={cn(
                    'block px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0',
                    selectedIndex === index && 'bg-trailguide-evergreen/5'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn('p-1.5 rounded-md mt-0.5', getTypeColor(result.type))}>
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900 truncate">
                          {result.title}
                        </h3>
                        <span className={cn(
                          'px-2 py-0.5 rounded-full text-xs capitalize',
                          getTypeColor(result.type)
                        )}>
                          {result.type}
                        </span>
                        {result.category && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                            {result.category}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {result.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 mt-1 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer with shortcuts */}
            {query && (
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">↑↓</kbd>
                    <span>navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">↵</kbd>
                    <span>select</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">esc</kbd>
                    <span>close</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Search trigger component
export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="w-full max-w-sm justify-start text-muted-foreground hover:text-foreground"
      >
        <Search className="h-4 w-4 mr-2" />
        <span>Search...</span>
        <div className="ml-auto flex items-center gap-1">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </Button>
      
      <GlobalSearch isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
