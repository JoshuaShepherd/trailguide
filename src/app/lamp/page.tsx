import LampDemo from "@/components/aceternity/lamp-demo";

export default function LampPage() {
  return (
    <div className="min-h-screen">
      <LampDemo />
      
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lamp Component</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A beautiful animated lamp effect with conic gradients and smooth transitions.
              Perfect for hero sections and feature highlights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Component Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>• Animated conic gradients</p>
                  <p>• Smooth width transitions</p>
                  <p>• Layered lighting effects</p>
                  <p>• Customizable containers</p>
                </div>
                <div className="space-y-2">
                  <p>• Dark theme optimized</p>
                  <p>• Responsive design</p>
                  <p>• Motion-based animations</p>
                  <p>• Professional aesthetics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
