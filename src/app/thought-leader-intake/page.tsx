import { Metadata } from 'next'
import ThoughtLeaderIntakeForm from '@/components/intake/ThoughtLeaderIntakeForm'

export const metadata: Metadata = {
  title: 'Thought Leader Assessment | TrailGuide',
  description: 'Discover your potential as a thought leader and content creator. Take our quick assessment to identify your unique strengths and opportunities.',
  openGraph: {
    title: 'Thought Leader Assessment | TrailGuide',
    description: 'Discover your potential as a thought leader and content creator.',
    type: 'website',
  },
}

export default function ThoughtLeaderIntakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thought Leader Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your potential as a content creator and thought leader. 
              This quick assessment will help us understand your unique strengths 
              and identify the best path forward for your expert publishing journey.
            </p>
          </div>
          
          <ThoughtLeaderIntakeForm />
        </div>
      </div>
    </div>
  )
}