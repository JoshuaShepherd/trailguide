'use client'

import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageModalProps {
  src: string
  alt: string
  className?: string
}

export function ClickableImage({ src, alt, className = '' }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Clickable Image with Hover Effect */}
      <div className="relative group cursor-pointer inline-block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          className={`rounded-lg shadow-md my-6 max-w-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02] ${className}`}
          src={src}
          alt={alt}
          onClick={() => setIsOpen(true)}
        />
        {/* Zoom indicator overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2 shadow-lg">
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-60 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image caption */}
              {alt && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                  <p className="text-sm text-center">{alt}</p>
                </div>
              )}
            </motion.div>

            {/* Click outside to close hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}