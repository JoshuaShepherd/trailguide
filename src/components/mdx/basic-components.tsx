'use client'

import { useState } from 'react'
import { Copy, Check, Info, AlertTriangle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalloutProps {
  children: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
}

export function Callout({ children, variant = 'info', title }: CalloutProps) {
  const variants = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: Info,
      iconColor: 'text-blue-500'
    },
    success: {
      container: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      icon: CheckCircle,
      iconColor: 'text-emerald-500'
    },
    warning: {
      container: 'bg-amber-50 border-amber-200 text-amber-900',
      icon: AlertTriangle,
      iconColor: 'text-amber-500'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-900',
      icon: AlertTriangle,
      iconColor: 'text-red-500'
    }
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <div className={cn(
      'my-6 rounded-lg border p-4',
      config.container
    )}>
      <div className="flex gap-3">
        <Icon className={cn('h-5 w-5 mt-0.5 shrink-0', config.iconColor)} />
        <div className="flex-1">
          {title && (
            <p className="font-medium mb-2">{title}</p>
          )}
          <div className="prose prose-sm max-w-none">{children}</div>
        </div>
      </div>
    </div>
  )
}

interface NoteProps {
  children: React.ReactNode
}

export function Note({ children }: NoteProps) {
  return (
    <div className="my-6 border-l-4 border-trailguide-evergreen bg-gray-50 pl-4 py-3">
      <div className="prose prose-sm max-w-none text-gray-700">
        {children}
      </div>
    </div>
  )
}

interface QuoteProps {
  children: React.ReactNode
  author?: string
  source?: string
}

export function Quote({ children, author, source }: QuoteProps) {
  return (
    <blockquote className="my-8 relative">
      <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-trailguide-bronze">
        <div className="prose prose-lg max-w-none text-gray-800 italic">
          {children}
        </div>
        {(author || source) && (
          <footer className="mt-4 text-sm text-gray-600">
            — {author}{source && `, ${source}`}
          </footer>
        )}
      </div>
    </blockquote>
  )
}

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-gray-900 text-gray-100">
      {filename && (
        <div className="px-4 py-2 bg-gray-800 text-sm text-gray-300 border-b border-gray-700">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className={language ? `language-${language}` : ''}>
            {children}
          </code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-3 right-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

import Image from 'next/image'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  credit?: string
}

export function Figure({ src, alt, caption, credit }: FigureProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="w-full rounded-lg shadow-md"
        loading="lazy"
      />
      {(caption || credit) && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center">
          {caption}
          {credit && (
            <span className="block mt-1 text-gray-500">
              Credit: {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}

interface CardGridProps {
  items: Array<{
    title: string
    description: string
    href?: string
    icon?: React.ReactNode
    eyebrow?: string
  }>
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 hover:border-trailguide-evergreen transition-colors"
        >
          {item.eyebrow && (
            <div className="text-xs font-medium text-trailguide-bronze uppercase tracking-wide mb-2">
              {item.eyebrow}
            </div>
          )}
          <div className="flex items-start gap-3">
            {item.icon && (
              <div className="shrink-0 text-trailguide-evergreen">
                {item.icon}
              </div>
            )}
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {item.href ? (
                  <a href={item.href} className="hover:text-trailguide-evergreen">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', external }: ButtonLinkProps) {
  const baseClasses = 'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-trailguide-evergreen text-white hover:bg-trailguide-evergreen/90',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  }

  return (
    <a
      href={href}
      className={cn(baseClasses, variants[variant])}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
