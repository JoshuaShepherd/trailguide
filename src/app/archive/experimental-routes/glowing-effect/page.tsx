import GlowingEffectDemo from "@/components/aceternity/glowing-effect-demo";

export default function GlowingEffectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Glowing Effect</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interactive mouse-following glow effects with customizable borders and gradients.
            Perfect for highlighting interactive cards and elements.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <GlowingEffectDemo />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Component Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p>• Mouse-following glow effect</p>
                <p>• Customizable spread and blur</p>
                <p>• Proximity-based activation</p>
                <p>• Smooth motion animations</p>
              </div>
              <div className="space-y-2">
                <p>• White and default variants</p>
                <p>• Configurable inactive zones</p>
                <p>• Border width customization</p>
                <p>• Performance optimized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
