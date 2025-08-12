import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.midjourney.com/video/1b8765f8-a8b0-4e6a-9224-5d25998e152e/0.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic overlay */}
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Hero Headline - Top Left Positioned */}
            <div className="animate-fade-in-up">
              <h1 className="hero-text text-6xl lg:text-8xl font-extralight leading-tight mb-8">
                Where AI Meets
                <br />
                <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
              <Button variant="glow" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="ghost-glow" size="lg" className="group">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Floating stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center glass-card p-6 rounded-2xl floating-element">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground font-light">Campaigns Delivered</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl floating-element" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm text-muted-foreground font-light">Client Satisfaction</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl floating-element" style={{ animationDelay: '2s' }}>
                <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-muted-foreground font-light">Global Reach</div>
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
};

export default HeroSection;