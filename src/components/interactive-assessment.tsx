'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Question {
  id: string
  text: string
  category: 'awareness' | 'assessment' | 'alignment' | 'action' | 'adoption'
  dimension: 'strategy' | 'operations' | 'people' | 'technology'
  weight: number
}

interface AssessmentResult {
  stage: string
  score: number
  maxScore: number
  recommendations: string[]
  nextSteps: string[]
}

const questions: Question[] = [
  // Awareness Stage
  {
    id: 'q1',
    text: 'Our leadership team understands the potential benefits and risks of AI for our organization',
    category: 'awareness',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q2',
    text: 'We have identified specific use cases where AI could support our mission',
    category: 'awareness',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q3',
    text: 'Staff members are curious about AI tools rather than fearful of them',
    category: 'awareness',
    dimension: 'people',
    weight: 2
  },
  {
    id: 'q4',
    text: 'We understand our organization\'s current data collection and management practices',
    category: 'awareness',
    dimension: 'technology',
    weight: 2
  },

  // Assessment Stage
  {
    id: 'q5',
    text: 'We have completed a formal assessment of our organizational readiness for AI',
    category: 'assessment',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q6',
    text: 'Our team has the necessary skills to implement and manage AI tools',
    category: 'assessment',
    dimension: 'people',
    weight: 3
  },
  {
    id: 'q7',
    text: 'We have established data governance policies and privacy protections',
    category: 'assessment',
    dimension: 'technology',
    weight: 3
  },
  {
    id: 'q8',
    text: 'We have budget allocated for AI experimentation and implementation',
    category: 'assessment',
    dimension: 'operations',
    weight: 2
  },

  // Alignment Stage
  {
    id: 'q9',
    text: 'AI initiatives are directly connected to our strategic priorities',
    category: 'alignment',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q10',
    text: 'We have identified success metrics for our AI implementation',
    category: 'alignment',
    dimension: 'operations',
    weight: 3
  },
  {
    id: 'q11',
    text: 'Staff roles and responsibilities for AI oversight are clearly defined',
    category: 'alignment',
    dimension: 'people',
    weight: 2
  },
  {
    id: 'q12',
    text: 'We have selected appropriate AI tools that match our technical capacity',
    category: 'alignment',
    dimension: 'technology',
    weight: 2
  },

  // Action Stage
  {
    id: 'q13',
    text: 'We are currently running AI pilot projects with clear success criteria',
    category: 'action',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q14',
    text: 'Staff are actively using AI tools in their daily work',
    category: 'action',
    dimension: 'people',
    weight: 3
  },
  {
    id: 'q15',
    text: 'We regularly monitor and evaluate the performance of our AI implementations',
    category: 'action',
    dimension: 'operations',
    weight: 3
  },
  {
    id: 'q16',
    text: 'Our AI systems integrate smoothly with existing technology infrastructure',
    category: 'action',
    dimension: 'technology',
    weight: 2
  },

  // Adoption Stage
  {
    id: 'q17',
    text: 'AI tools are fully integrated into our core organizational processes',
    category: 'adoption',
    dimension: 'operations',
    weight: 3
  },
  {
    id: 'q18',
    text: 'We have documented policies and procedures for ongoing AI governance',
    category: 'adoption',
    dimension: 'strategy',
    weight: 3
  },
  {
    id: 'q19',
    text: 'Staff training on AI tools is part of our regular professional development',
    category: 'adoption',
    dimension: 'people',
    weight: 2
  },
  {
    id: 'q20',
    text: 'We continuously evaluate new AI opportunities and iterate on existing implementations',
    category: 'adoption',
    dimension: 'technology',
    weight: 2
  }
]

const stageInfo = {
  awareness: {
    title: 'Awareness',
    description: 'Understanding AI\'s potential impact on your mission',
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  assessment: {
    title: 'Assessment', 
    description: 'Evaluating your organization\'s readiness',
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  alignment: {
    title: 'Alignment',
    description: 'Connecting AI opportunities to strategic priorities', 
    color: 'bg-amber-50 border-amber-200 text-amber-800'
  },
  action: {
    title: 'Action',
    description: 'Implementing pilot projects with clear metrics',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  adoption: {
    title: 'Adoption',
    description: 'Scaling successful initiatives organization-wide',
    color: 'bg-green-50 border-green-200 text-green-800'
  }
}

export default function InteractiveAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)
    
    // Auto-advance to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      // Calculate results
      setTimeout(() => {
        calculateResults(newAnswers)
        setIsComplete(true)
      }, 300)
    }
  }

  const calculateResults = (finalAnswers: Record<string, number>) => {
    let totalScore = 0
    let maxPossibleScore = 0
    const stageScores: Record<string, { score: number; max: number }> = {}

    questions.forEach(question => {
      const answer = finalAnswers[question.id] || 0
      const weightedScore = answer * question.weight
      totalScore += weightedScore
      maxPossibleScore += 4 * question.weight // Max answer is 4

      if (!stageScores[question.category]) {
        stageScores[question.category] = { score: 0, max: 0 }
      }
      stageScores[question.category].score += weightedScore
      stageScores[question.category].max += 4 * question.weight
    })

    // Determine current stage based on highest scoring complete stage
    let currentStage = 'awareness'
    const stages = ['awareness', 'assessment', 'alignment', 'action', 'adoption']
    
    for (const stage of stages) {
      const stageData = stageScores[stage]
      if (stageData && stageData.score / stageData.max >= 0.7) {
        currentStage = stage
      } else {
        break
      }
    }

    const recommendations = getRecommendations(currentStage)
    const nextSteps = getNextSteps(currentStage)

    setResult({
      stage: currentStage,
      score: Math.round((totalScore / maxPossibleScore) * 100),
      maxScore: 100,
      recommendations,
      nextSteps
    })
  }

  const getRecommendations = (stage: string) => {
    const recommendations = []
    
    if (stage === 'awareness') {
      recommendations.push(
        'Schedule AI literacy sessions for leadership and key staff',
        'Research AI applications specific to your nonprofit sector',
        'Begin documenting your current data practices and challenges'
      )
    } else if (stage === 'assessment') {
      recommendations.push(
        'Complete a formal organizational readiness assessment',
        'Identify skill gaps and training needs in your team',
        'Establish data governance policies and ethical guidelines'
      )
    } else if (stage === 'alignment') {
      recommendations.push(
        'Map AI opportunities to your strategic plan priorities',
        'Define clear success metrics for pilot projects',
        'Select 1-2 low-risk, high-value use cases for experimentation'
      )
    } else if (stage === 'action') {
      recommendations.push(
        'Launch pilot projects with defined timelines and budgets',
        'Implement regular monitoring and evaluation processes',
        'Document lessons learned and best practices'
      )
    } else {
      recommendations.push(
        'Scale successful pilots across the organization',
        'Establish ongoing governance and continuous improvement processes',
        'Share your experience and mentor other nonprofits'
      )
    }

    return recommendations
  }

  const getNextSteps = (stage: string) => {
    const nextSteps = []
    
    if (stage === 'awareness') {
      nextSteps.push(
        'Book a TrailGuide consultation call',
        'Join our next "AI Readiness" workshop',
        'Download our Organizational Assessment Toolkit'
      )
    } else if (stage === 'assessment') {
      nextSteps.push(
        'Schedule a Strategic Planning Session',
        'Enroll in our TrailHike: Strategic Alignment workshop',
        'Access our Data Governance Starter Kit'
      )
    } else if (stage === 'alignment') {
      nextSteps.push(
        'Join our TrailHike: Pilot Project Planning workshop',
        'Access our Implementation Planning Toolkit',
        'Schedule pilot project consulting sessions'
      )
    } else if (stage === 'action') {
      nextSteps.push(
        'Book scaling strategy consultation',
        'Join our Advanced TrailHike cohort',
        'Access our Scaling and Governance Toolkit'
      )
    } else {
      nextSteps.push(
        'Explore our TrailGuide Partner Program',
        'Schedule a case study interview',
        'Consider mentoring other nonprofits in our network'
      )
    }

    return nextSteps
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsComplete(false)
    setResult(null)
  }

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (isComplete && result) {
    const stageData = stageInfo[result.stage as keyof typeof stageInfo]
    
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl mb-4">Your TrailMap Assessment Results</CardTitle>
          <div className={cn('inline-flex items-center px-4 py-2 rounded-full border-2', stageData.color)}>
            <span className="font-semibold text-lg">{stageData.title}</span>
          </div>
          <p className="text-gray-600 mt-2">{stageData.description}</p>
          <div className="mt-4">
            <div className="text-3xl font-bold text-trailguide-evergreen">{result.score}%</div>
            <div className="text-sm text-gray-500">Overall AI Readiness Score</div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Recommendations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recommended Focus Areas</h3>
            <div className="grid gap-3">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 shrink-0" />
                  <span className="text-gray-700">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suggested Next Steps</h3>
            <div className="grid gap-3">
              {result.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-trailguide-evergreen transition-colors">
                  <ArrowRight className="h-4 w-4 text-trailguide-evergreen shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button onClick={resetAssessment} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Assessment
            </Button>
            <Button className="flex-1 bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Schedule Consultation
            </Button>
            <Button className="flex-1" variant="outline">
              Download Full Report
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-trailguide-evergreen h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              {stageInfo[question.category].title}
            </Badge>
            <Badge variant="outline" className="text-xs capitalize">
              {question.dimension}
            </Badge>
          </div>
          <CardTitle className="text-lg leading-relaxed">
            {question.text}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3 mb-6">
            {[
              { value: 4, label: 'Strongly Agree', color: 'hover:bg-green-50 hover:border-green-300' },
              { value: 3, label: 'Agree', color: 'hover:bg-blue-50 hover:border-blue-300' },
              { value: 2, label: 'Disagree', color: 'hover:bg-amber-50 hover:border-amber-300' },
              { value: 1, label: 'Strongly Disagree', color: 'hover:bg-red-50 hover:border-red-300' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                className={cn(
                  'w-full p-4 text-left border-2 rounded-lg transition-all duration-200',
                  'border-gray-200',
                  option.color,
                  answers[question.id] === option.value && 'border-trailguide-evergreen bg-trailguide-evergreen/5'
                )}
              >
                <div className="flex items-center gap-3">
                  {answers[question.id] === option.value ? (
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-sm text-gray-500 flex items-center">
              {answers[question.id] ? 'Click to change answer' : 'Select an answer to continue'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
