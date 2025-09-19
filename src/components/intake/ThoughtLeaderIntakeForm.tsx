'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LikertScale from './LikertScale'

interface FormData {
  [key: string]: number
}

interface Question {
  id: string
  text: string
  tooltip?: string
}

const questions: Question[] = [
  {
    id: 'calling',
    text: 'Part of my calling/vocation is to communicate, teach, consult, write, create, or lead.',
    tooltip: 'This includes formal and informal ways of sharing knowledge, influencing others, or creating meaningful content.'
  },
  {
    id: 'others_encouragement',
    text: 'Others have said I should do more of the above.',
    tooltip: 'People in your network have encouraged you to share more, teach more, or create more content.'
  },
  {
    id: 'personal_desire',
    text: 'I want to do more of the above.',
    tooltip: 'You feel personally motivated to expand your communication, teaching, or creative efforts.'
  },
  {
    id: 'published_before',
    text: 'I have published before.',
    tooltip: 'Publishing includes: books, articles, blog posts, academic papers, newsletters, social media content, videos, podcasts, or any form of public content creation.'
  },
  {
    id: 'repurpose_content',
    text: 'I would be interested in repurposing some of my past work as digital content (ebook, course, video, podcast, infographic, articles/blogs, etc).',
    tooltip: 'Converting existing presentations, reports, or expertise into new digital formats to reach wider audiences.'
  },
  {
    id: 'engaged_audience',
    text: 'I am interested in the idea of having a deeper, more engaged relationship with a small, devoted audience.',
    tooltip: 'Building a community of engaged followers rather than pursuing mass reach or viral content.'
  },
  {
    id: 'practitioner_focus',
    text: 'Content creation is only part of my vocation. I am a practitioner.',
    tooltip: 'You actively practice your expertise (consulting, coaching, services) rather than being primarily a content creator or educator.'
  }
]

export default function ThoughtLeaderIntakeForm() {
  const [formData, setFormData] = useState<FormData>({})
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const progress = (Object.keys(formData).length / questions.length) * 100
  const isComplete = Object.keys(formData).length === questions.length

  const handleAnswer = (questionId: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }))

    // Auto-advance to next question on answer
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 500)
    }
  }

  const handleSubmit = async () => {
    if (!isComplete) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowResults(true)
  }

  const handleRestart = () => {
    setFormData({})
    setCurrentStep(0)
    setShowResults(false)
    setIsSubmitting(false)
  }

  const calculateScore = () => {
    const total = Object.values(formData).reduce((sum, value) => sum + value, 0)
    return {
      total,
      average: total / questions.length,
      maxPossible: questions.length * 5
    }
  }

  const getPersonaRecommendation = () => {
    const score = calculateScore()
    const { calling, others_encouragement, personal_desire, published_before, practitioner_focus } = formData

    if (score.average >= 4.5) {
      return {
        type: "Expert Publisher Pro",
        description: "You're ready to build a comprehensive thought leadership platform",
        color: "emerald",
        nextSteps: ["Launch your expert platform", "Develop premium content", "Build your membership community"]
      }
    } else if (score.average >= 3.5) {
      return {
        type: "Emerging Thought Leader",
        description: "You have strong potential and should start building your platform",
        color: "blue",
        nextSteps: ["Start with content creation", "Build your email list", "Develop your unique voice"]
      }
    } else if (practitioner_focus >= 4) {
      return {
        type: "Expert Practitioner",
        description: "Focus on practitioner-led content that showcases your expertise",
        color: "purple",
        nextSteps: ["Document your practice", "Create case studies", "Share practical insights"]
      }
    } else {
      return {
        type: "Knowledge Explorer",
        description: "Continue developing your expertise and consider starting small",
        color: "amber",
        nextSteps: ["Identify your niche", "Start sharing insights", "Connect with other experts"]
      }
    }
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getPersonaRecommendation()
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${recommendation.color}-100 mb-4`}
            >
              <span className={`text-3xl text-${recommendation.color}-600`}>🎯</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Results</h2>
            <p className="text-lg text-gray-600">Based on your responses, here's your thought leader profile</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Score</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Score:</span>
                  <span className="font-semibold">{score.total}/{score.maxPossible}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average:</span>
                  <span className="font-semibold">{score.average.toFixed(1)}/5.0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div 
                    className={`bg-${recommendation.color}-500 h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${(score.total / score.maxPossible) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className={`bg-${recommendation.color}-50 rounded-xl p-6`}>
              <h3 className="font-semibold text-gray-900 mb-4">Your Profile</h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${recommendation.color}-100 text-${recommendation.color}-800 mb-3`}>
                {recommendation.type}
              </div>
              <p className="text-gray-700">{recommendation.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
            <ul className="space-y-2">
              {recommendation.nextSteps.map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Retake Assessment
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started Today
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {Math.min(currentStep + 1, questions.length)} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {questions.map((question, index) => {
            if (index > currentStep) return null
            
            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentStep ? 1 : 0.7,
                  y: 0,
                  scale: index === currentStep ? 1 : 0.98
                }}
                transition={{ duration: 0.3 }}
                className={index === currentStep ? '' : 'pointer-events-none'}
              >
                <LikertScale
                  id={question.id}
                  question={question.text}
                  value={formData[question.id]}
                  onChange={handleAnswer}
                  tooltip={question.tooltip}
                  required
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                formData[questions[index].id] 
                  ? 'bg-green-500' 
                  : index === currentStep 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors font-medium flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                Analyzing...
              </>
            ) : (
              'See My Results'
            )}
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(Math.min(questions.length - 1, currentStep + 1))}
            disabled={currentStep >= questions.length - 1}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}