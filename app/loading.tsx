import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-trailguide-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <Loader2 className="h-8 w-8 animate-spin text-trailguide-evergreen mx-auto" />
        </div>
        <h2 className="text-xl font-semibold text-trailguide-neutral mb-2">
          Loading TrailGuide
        </h2>
        <p className="text-trailguide-slate">
          Preparing your journey...
        </p>
      </div>
    </div>
  )
}
