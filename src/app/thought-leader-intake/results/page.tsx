import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assessment Results | TrailGuide',
  description: 'Your personalized thought leader assessment results and next steps.',
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Assessment Results
            </h1>
            <p className="text-xl text-gray-600">
              Detailed analysis and personalized recommendations for your thought leadership journey
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-600 text-center">
              Results will be available after completing the assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}