import { Button } from "@/components/ui/button";
import { Search, Target, Pen, Code, TrendingUp, Bot } from "lucide-react";
import { memo, useMemo } from "react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Ad Campaigns",
    description: "Maximize ROI with data-driven targeting across Google, Meta, and beyond.",
    features: ["Machine Learning Optimization", "Predictive Analytics", "Automated Bidding"]
  },
  {
    icon: Search,
    title: "Predictive SEO Optimization",
    description: "Stay ahead of search trends with AI keyword forecasting.",
    features: ["AI Keyword Research", "Content Gap Analysis", "Trend Prediction"]
  },
  {
    icon: TrendingUp,
    title: "Automated Social Media Management",
    description: "Content scheduling, audience engagement, and analytics—fully automated.",
    features: ["Smart Scheduling", "Auto-Engagement", "Performance Tracking"]
  },
  {
    icon: Target,
    title: "Conversion Funnel Automation",
    description: "From lead capture to purchase, we streamline every step with AI.",
    features: ["Lead Scoring", "Behavioral Triggers", "Purchase Prediction"]
  },
  {
    icon: Pen,
    title: "Creative Storytelling",
    description: "Cinematic brand visuals that connect and convert.",
    features: ["Video Production", "Brand Storytelling", "Visual Design"]
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technology and AI optimization.",
    features: ["Responsive Design", "Performance Optimization", "SEO Integration"]
  }
];

const ServicesSection = memo(() => {
  const memoizedServices = useMemo(() => services, []);
  
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-light mb-6">
            Our AI-Driven
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-4">
              Marketing Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            At AGENCORE, we combine cutting-edge AI automation with world-class creativity 
            to help brands dominate in a fast-changing digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {memoizedServices.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-3xl group hover:glow-ambient transition-ambient animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-cinematic">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button variant="ghost-glow" className="w-full group">
                Learn More
                <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-3xl glow-ambient">
          <h3 className="text-3xl font-semibold mb-6">Let's Build Your AI Marketing Engine</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a startup looking to scale fast or an established brand aiming for global reach, 
            AGENCORE is your partner in AI-powered growth.
          </p>
          <Button variant="glow" size="lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;