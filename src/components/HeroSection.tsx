import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { memo } from "react";

const starryBackground = "/lovable-uploads/3482a817-1a88-4ef0-952f-a3741dbd4677.png?v=1";

const HeroSection = memo(() => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy" />
      
      {/* Subtle starry overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 will-change-transform"
        style={{ 
          backgroundImage: `url(${starryBackground})`,
          transform: 'translateZ(0)' // Hardware acceleration
        }}
      />
      
      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Hero Headline - Top Left Positioned */}
            <div className="animate-fade-in-up">
              <h1 className="hero-title mb-8">
                Where AI Meets
                <br />
                <span className="hero-gradient-text text-glow-blue">
                  Digital Brilliance
                </span>
              </h1>
              
              <p className="hero-text text-xl lg:text-2xl font-light max-w-2xl mb-12 leading-relaxed">
                Elevate your brand with AI-powered marketing strategies, cinematic storytelling, 
                and precision campaigns that deliver measurable impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-scale-in">
              <Button variant="glow" size="lg" className="group button-text-white">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="ghost-glow" size="lg" className="group text-white hover:text-white">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Floating stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl floating-element shadow-2xl">
                <div className="text-3xl stats-number mb-2">20+</div>
                <div className="text-sm stats-label font-light">Projects Completed</div>
              </div>
              <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl floating-element shadow-2xl" style={{ animationDelay: '1s' }}>
                <div className="text-3xl stats-number mb-2">99%</div>
                <div className="text-sm stats-label font-light">Client Satisfaction</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl floating-element backdrop-blur-xl bg-white/5 border border-white/10" style={{ animationDelay: '2s' }}>
                <div className="text-3xl stats-number mb-2">10x</div>
                <div className="text-sm stats-label font-light">ROI Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;