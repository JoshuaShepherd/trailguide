import HeroParallaxDemo from "@/components/aceternity/hero-parallax-demo";

export default function HeroParallaxPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroParallaxDemo />
      
      {/* User Guide Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hero Parallax Component</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A stunning scrolling parallax effect that showcases products, portfolio items, or any visual content 
              with smooth 3D transformations and spring animations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">🎯 Customization Guide</h3>
            
            <div className="space-y-6">
              {/* Products Array */}
              <div>
                <h4 className="text-lg font-semibold mb-3">1. Replace Product Data</h4>
                <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <pre>{`export const products = [
  {
    title: "Your Product Name",
    link: "https://yourproduct.com", 
    thumbnail: "/path/to/your/image.jpg",
  },
  // Add 15 products total for best effect
];`}</pre>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  • Use high-quality images (600x600px recommended)<br/>
                  • Ensure 15 products for 3 rows of 5 items each<br/>
                  • Use your own URLs and product names
                </p>
              </div>

              {/* Header Customization */}
              <div>
                <h4 className="text-lg font-semibold mb-3">2. Customize Header Content</h4>
                <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <pre>{`export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Your Company <br /> Your Message
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Your custom description here...
      </p>
    </div>
  );
};`}</pre>
                </div>
              </div>

              {/* Animation Settings */}
              <div>
                <h4 className="text-lg font-semibold mb-3">3. Adjust Animation Settings</h4>
                <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <pre>{`const springConfig = { 
  stiffness: 300,  // Higher = snappier animation
  damping: 30,     // Higher = less bouncy  
  bounce: 100      // Spring bounce amount
};

// Scroll-based transforms
const translateX = useSpring(
  useTransform(scrollYProgress, [0, 1], [0, 1000]), // Adjust distance
  springConfig
);`}</pre>
                </div>
              </div>

              {/* Styling */}
              <div>
                <h4 className="text-lg font-semibold mb-3">4. Style Modifications</h4>
                <div className="space-y-3 text-sm">
                  <p><strong>Card Size:</strong> Change <code className="bg-gray-200 px-1 rounded">h-96 w-[30rem]</code> in ProductCard</p>
                  <p><strong>Spacing:</strong> Modify <code className="bg-gray-200 px-1 rounded">space-x-20 mb-20</code> for row spacing</p>
                  <p><strong>Height:</strong> Adjust <code className="bg-gray-200 px-1 rounded">h-[300vh]</code> for scroll area</p>
                  <p><strong>Colors:</strong> Update background and text colors to match your brand</p>
                </div>
              </div>

              {/* Tips */}
              <div>
                <h4 className="text-lg font-semibold mb-3">💡 Pro Tips</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>Use consistent image aspect ratios for best visual results</li>
                  <li>Test on mobile devices - the component is responsive</li>
                  <li>Consider loading states for images</li>
                  <li>Add error handling for broken image links</li>
                  <li>Optimize images for web (WebP format recommended)</li>
                  <li>The component works best with 15 items, but can handle more/less</li>
                </ul>
              </div>

              {/* Usage Example */}
              <div>
                <h4 className="text-lg font-semibold mb-3">5. Usage Example</h4>
                <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  <pre>{`import { HeroParallax } from "@/components/ui/hero-parallax";

const myProducts = [
  // Your products here
];

export default function MyPage() {
  return <HeroParallax products={myProducts} />;
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
