import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Users, Clock, Target, CheckCircle } from 'lucide-react'

interface HikeCardProps {
  title: string
  description: string
  duration: string
  outcomes: string[]
  prerequisites: string[]
  nextCohortDate: string
  spotsAvailable: number
  totalSpots: number
  pricing?: string
  className?: string
}

export function HikeCard({ 
  title,
  description,
  duration,
  outcomes,
  prerequisites,
  nextCohortDate,
  spotsAvailable,
  totalSpots,
  pricing,
  className 
}: HikeCardProps) {
  const isAlmostFull = spotsAvailable <= 3
  const isFull = spotsAvailable === 0

  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
        </div>
        <Badge 
          variant={isFull ? "destructive" : isAlmostFull ? "secondary" : "outline"}
          className="ml-4 flex-shrink-0"
        >
          {isFull ? "Full" : isAlmostFull ? "Almost Full" : "Open"}
        </Badge>
      </div>

      {/* Key Details */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center text-gray-700">
          <Clock className="w-4 h-4 mr-3 text-bronze-600" />
          <span>{duration}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Calendar className="w-4 h-4 mr-3 text-bronze-600" />
          <span>Next cohort: {nextCohortDate}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Users className="w-4 h-4 mr-3 text-bronze-600" />
          <span>{spotsAvailable} of {totalSpots} spots available</span>
        </div>

        {pricing && (
          <div className="flex items-center font-medium text-evergreen-600">
            <span>💰 {pricing}</span>
          </div>
        )}
      </div>

      {/* Outcomes */}
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <Target className="w-4 h-4 mr-3 text-evergreen-600" />
          <span className="font-medium text-gray-700">You&rsquo;ll Build</span>
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

      {/* Prerequisites */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <CheckCircle className="w-4 h-4 mr-3 text-bronze-600" />
          <span className="font-medium text-gray-700">Prerequisites</span>
        </div>
        <ul className="space-y-2">
          {prerequisites.slice(0, 2).map((prereq, index) => (
            <li key={index} className="flex items-start text-gray-700 leading-relaxed">
              <span className="w-1 h-1 bg-bronze-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              {prereq}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <Button 
        className={`w-full ${isFull ? 'opacity-50 cursor-not-allowed' : 'bg-evergreen-600 hover:bg-evergreen-700'}`}
        disabled={isFull}
      >
        {isFull ? 'Join Waitlist' : 'Sign Up for This Hike'}
      </Button>
    </Card>
  )
}
