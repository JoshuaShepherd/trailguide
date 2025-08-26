'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      headings.push({ id, text, level })
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    // Observe headings for active state
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries.filter(entry => entry.isIntersecting)
        if (visibleHeadings.length > 0) {
          const closest = visibleHeadings.reduce((closest, entry) => {
            return entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
          })
          setActiveId(closest.target.id)
        }
      },
      { 
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0 
      }
    )

    // Observe all headings
    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <div className={cn('', className)}>
      <div className="bg-gray-50 rounded-lg border border-gray-200">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 hover:text-trailguide-evergreen md:cursor-default"
        >
          Table of Contents
          <span className="md:hidden">
            {isCollapsed ? '+' : '−'}
          </span>
        </button>
        
        <nav className={cn(
          'px-4 pb-4',
          'md:block', // Always show on desktop
          isCollapsed ? 'hidden' : 'block' // Toggle on mobile
        )}>
          <ul className="space-y-2 text-sm">
            {toc.map(({ id, text, level }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    'block py-1 text-gray-600 hover:text-trailguide-evergreen transition-colors border-l-2 border-transparent hover:border-trailguide-evergreen/30',
                    level === 3 && 'pl-4',
                    activeId === id && 'text-trailguide-evergreen border-trailguide-evergreen font-medium'
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(id)
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

interface FootnoteProps {
  id: string
  children: React.ReactNode
}

export function Footnote({ id, children }: FootnoteProps) {
  return (
    <span className="relative group">
      <sup className="text-trailguide-bronze hover:text-trailguide-bronze/80 cursor-help">
        <a href={`#footnote-${id}`} id={`footnote-ref-${id}`}>
          [{id}]
        </a>
      </sup>
      <span className="invisible group-hover:visible absolute bottom-full left-0 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 mb-1 whitespace-nowrap z-10 max-w-xs">
        {children}
      </span>
    </span>
  )
}

interface FootnotesProps {
  footnotes: Array<{
    id: string
    content: React.ReactNode
  }>
}

export function Footnotes({ footnotes }: FootnotesProps) {
  if (footnotes.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Footnotes</h3>
      <ol className="space-y-2 text-sm text-gray-600">
        {footnotes.map(({ id, content }) => (
          <li key={id} id={`footnote-${id}`} className="flex gap-2">
            <span className="text-trailguide-bronze font-medium">{id}.</span>
            <div className="flex-1">
              {content}
              <a
                href={`#footnote-ref-${id}`}
                className="ml-2 text-trailguide-evergreen hover:text-trailguide-evergreen/80"
                title="Return to reference"
              >
                ↩
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
