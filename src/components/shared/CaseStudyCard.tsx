import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, TrendingUp, Users, Calendar } from 'lucide-react'

interface CaseStudyCardProps {
  title: string
  organization: string
  summary: string
  outcomes: string[]
  metrics?: {
    label: string
    value: string
    change?: string
  }[]
  status: 'live' | 'coming-soon'
  href?: string
  className?: string
}

export function CaseStudyCard({ 
  title,
  organization,
  summary,
  outcomes,
  metrics,
  status,
  href,
  className 
}: CaseStudyCardProps) {
  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-bronze-600 font-medium text-sm mb-2">{organization}</p>
        </div>
        <Badge 
          variant={status === 'live' ? 'default' : 'outline'}
          className={status === 'live' ? 'bg-evergreen-600 text-white' : 'text-gray-500'}
        >
          {status === 'live' ? 'Live Case Study' : 'Coming Soon'}
        </Badge>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{summary}</p>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          {metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
              {metric.change && (
                <div className="text-sm text-evergreen-600 flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Outcomes */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="w-4 h-4 mr-2 text-evergreen-600" />
          <span className="font-medium text-gray-700">Key Outcomes</span>
        </div>
        <ul className="space-y-2">
          {outcomes.slice(0, 3).map((outcome, index) => (
            <li key={index} className="flex items-start text-gray-700 leading-relaxed">
              <span className="w-1 h-1 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      {status === 'live' && href ? (
        <Button variant="outline" className="w-full" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Open Case Study
          </a>
        </Button>
      ) : status === 'coming-soon' ? (
        <Button variant="outline" className="w-full" disabled>
          <Calendar className="w-4 h-4 mr-2" />
          Available Soon
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      )}
    </Card>
  )
}
