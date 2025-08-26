import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-trailguide-background to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
            Start Your Trail Today
          </h2>
          
          <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto mb-12 leading-relaxed">
            Take the first step toward confident, ethical AI adoption. 
            Our assessment helps you understand where you are and where you&rsquo;re headed.
          </p>

          {/* Benefits Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-sm text-trailguide-slate">
              <div className="w-8 h-8 rounded-full bg-trailguide-evergreen/10 flex items-center justify-center mr-3">
                <Shield className="h-4 w-4 text-trailguide-evergreen" />
              </div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center text-sm text-trailguide-slate">
              <div className="w-8 h-8 rounded-full bg-trailguide-evergreen/10 flex items-center justify-center mr-3">
                <Clock className="h-4 w-4 text-trailguide-evergreen" />
              </div>
              <span>Less than 10 minutes</span>
            </div>
            <div className="flex items-center text-sm text-trailguide-slate">
              <div className="w-8 h-8 rounded-full bg-trailguide-evergreen/10 flex items-center justify-center mr-3">
                <Shield className="h-4 w-4 text-trailguide-evergreen" />
              </div>
              <span>No account required</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg"
              className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/assessment" className="flex items-center">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-4 text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-trailguide-slate max-w-xl mx-auto">
            Questions? We&rsquo;re here to help. Our team includes nonprofit veterans and AI experts 
            who understand your challenges and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
