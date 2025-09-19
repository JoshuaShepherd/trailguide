'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LikertScaleProps {
  id: string
  question: string
  value?: number
  onChange: (id: string, value: number) => void
  tooltip?: string
  required?: boolean
}

const scaleLabels = [
  { value: 1, label: 'Strongly Disagree', shortLabel: '1' },
  { value: 2, label: 'Disagree', shortLabel: '2' },
  { value: 3, label: 'Neutral', shortLabel: '3' },
  { value: 4, label: 'Agree', shortLabel: '4' },
  { value: 5, label: 'Strongly Agree', shortLabel: '5' }
]

export default function LikertScale({ 
  id, 
  question, 
  value, 
  onChange, 
  tooltip,
  required = false 
}: LikertScaleProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSelect = (selectedValue: number) => {
    onChange(id, selectedValue)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-start gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {question}
            {required && <span className="text-red-500 ml-1">*</span>}
          </h3>
          {tooltip && (
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                ?
              </button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5 }}
                    className="absolute z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg"
                  >
                    {tooltip}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Scale Options */}
      <div className="space-y-4">
        {/* Mobile: Vertical Layout */}
        <div className="block md:hidden space-y-3">
          {scaleLabels.map((option) => (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                value === option.value
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                  value === option.value
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {option.value}
                </div>
                <span className="font-medium">{option.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 font-medium">Strongly Disagree</span>
            <span className="text-sm text-gray-500 font-medium">Strongly Agree</span>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            {scaleLabels.map((option) => (
              <div key={option.value} className="flex flex-col items-center gap-2">
                <motion.button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setHoveredValue(option.value)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`w-12 h-12 rounded-full border-2 font-semibold transition-all duration-200 ${
                    value === option.value
                      ? 'border-blue-500 bg-blue-500 text-white shadow-lg'
                      : hoveredValue === option.value
                      ? 'border-blue-300 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {option.value}
                </motion.button>
                
                <AnimatePresence>
                  {(hoveredValue === option.value || value === option.value) && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs text-gray-600 font-medium text-center"
                    >
                      {option.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      {value && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(value / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full bg-green-500 rounded-full"
          />
        </motion.div>
      )}
    </div>
  )
}