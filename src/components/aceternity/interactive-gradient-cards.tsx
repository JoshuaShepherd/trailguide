"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function InteractiveGradientCards() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Interactive Gradient Cards</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Multiple cards with animated gradient backgrounds
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Dynamic Animations",
            description: "Five-layer gradient system with smooth rotations",
            firstColor: "18, 113, 255",
            secondColor: "221, 74, 255",
            thirdColor: "100, 220, 255",
            fourthColor: "200, 50, 50",
            fifthColor: "180, 180, 50",
            pointerColor: "140, 100, 255"
          },
          {
            title: "Mouse Interaction",
            description: "Gradients that follow your cursor movements",
            firstColor: "255, 113, 18",
            secondColor: "255, 74, 221",
            thirdColor: "255, 220, 100",
            fourthColor: "50, 200, 50",
            fifthColor: "50, 180, 180",
            pointerColor: "255, 100, 140"
          }
        ].map((card, index) => (
          <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
            <BackgroundGradientAnimation
              gradientBackgroundStart={`rgb(${card.firstColor})`}
              gradientBackgroundEnd={`rgb(${card.secondColor})`}
              firstColor={card.firstColor}
              secondColor={card.secondColor}
              thirdColor={card.thirdColor}
              fourthColor={card.fourthColor}
              fifthColor={card.fifthColor}
              pointerColor={card.pointerColor}
            >
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {card.description}
                  </p>
                </div>
              </div>
            </BackgroundGradientAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}
