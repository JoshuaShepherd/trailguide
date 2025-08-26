import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Clock, Target, TrendingUp, Eye } from 'lucide-react'

interface KitCardProps {
  title: string
  purpose: string
  tasks: string[]
  outcomes: string[]
  timeSavings: string
  features: string[]
  className?: string
}

export function KitCard({ 
  title, 
  purpose, 
  tasks, 
  outcomes, 
  timeSavings, 
  features,
  className 
}: KitCardProps) {
  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{purpose}</p>
        </div>
        <Badge variant="outline" className="text-bronze-600 border-bronze-200">
          <Clock className="w-3 h-3 mr-1" />
          {timeSavings}
        </Badge>
      </div>

      <div className="space-y-6 mt-6">
        <div>
          <div className="flex items-center mb-4">
            <Target className="w-4 h-4 mr-3 text-evergreen-600" />
            <span className="font-medium text-gray-700">Key Tasks</span>
          </div>
          <ul className="text-gray-700 space-y-2 leading-relaxed">
            {tasks.slice(0, 3).map((task, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <TrendingUp className="w-4 h-4 mr-3 text-bronze-600" />
            <span className="font-medium text-gray-700">Outcomes</span>
          </div>
          <ul className="text-gray-700 space-y-2 leading-relaxed">
            {outcomes.slice(0, 2).map((outcome, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-bronze-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mt-6">
            <Eye className="w-4 h-4 mr-2" />
            See Inside
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{title} - Complete Overview</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <h4 className="font-medium mb-2">Purpose</h4>
              <p className="text-gray-600">{purpose}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">All Tasks Covered</h4>
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Expected Outcomes</h4>
              <ul className="space-y-2">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="w-2 h-2 bg-bronze-600 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">What&rsquo;s Included</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Time Savings:</strong> {timeSavings} compared to building from scratch
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
