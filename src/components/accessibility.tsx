'use client'

import { useEffect } from 'react'

interface SkipLinkProps {
  href?: string
  children?: React.ReactNode
}

export function SkipLink({ href = '#main-content', children = 'Skip to main content' }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-trailguide-evergreen focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:ring-offset-2"
    >
      {children}
    </a>
  )
}

// Focus management for better navigation
export function FocusManager() {
  useEffect(() => {
    // Add focus visible styles for better keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('focus-visible')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('focus-visible')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return null
}

// Screen reader announcements
interface AnnouncementProps {
  message: string
  priority?: 'polite' | 'assertive'
}

export function ScreenReaderAnnouncement({ message, priority = 'polite' }: AnnouncementProps) {
  useEffect(() => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    const cleanup = setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
    
    return () => clearTimeout(cleanup)
  }, [message, priority])

  return null
}
