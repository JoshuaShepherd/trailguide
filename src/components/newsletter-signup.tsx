'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Mail, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'compact'
  title?: string
  description?: string
  className?: string
}

export function NewsletterSignup({ 
  variant = 'default',
  title,
  description,
  className 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    // Simulate API call - replace with actual implementation
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const defaultTitle = 'Stay Updated on AI for Good'
  const defaultDescription = 'Get practical insights, new resources, and updates on responsible AI implementation for nonprofits.'

  if (variant === 'compact') {
    return (
      <div className={cn('max-w-md', className)}>
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-trailguide-evergreen" />
          <h3 className="font-semibold text-trailguide-neutral">
            {title || 'Newsletter'}
          </h3>
        </div>
        
        {status === 'success' ? (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 text-sm">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 border border-trailguide-border rounded-md focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
              disabled={status === 'loading'}
            />
            <Button
              type="submit"
              disabled={status === 'loading'}
              size="sm"
              className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">{message}</p>
        )}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={cn('bg-trailguide-evergreen/5 border border-trailguide-evergreen/20 rounded-lg p-6', className)}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-trailguide-evergreen/10 rounded-md">
              <Mail className="h-6 w-6 text-trailguide-evergreen" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-trailguide-neutral mb-2">
                {title || defaultTitle}
              </h3>
              <p className="text-trailguide-slate text-sm mb-4">
                {description || defaultDescription}
              </p>
              
              {status === 'success' ? (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 text-sm">{message}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 border border-trailguide-border rounded-md focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
                    disabled={status === 'loading'}
                  />
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
              
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-2">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default card variant
  return (
    <Card className={cn('border-trailguide-border', className)}>
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-6 w-6 text-trailguide-evergreen" />
        </div>
        <CardTitle className="text-xl text-trailguide-neutral">
          {title || defaultTitle}
        </CardTitle>
        <p className="text-trailguide-slate">
          {description || defaultDescription}
        </p>
      </CardHeader>
      
      <CardContent>
        {status === 'success' ? (
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-green-800">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-trailguide-border rounded-md focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
                disabled={status === 'loading'}
              />
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-2">{message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
              size="lg"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe to Updates
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        )}
        
        <p className="text-xs text-trailguide-slate text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  )
}
