import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import healthcareImage from "@/assets/healthcare-digital.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce AI Revolution",
      description: "AI-powered product recommendation system that increased conversion rates by 300%",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "E-Commerce",
      technologies: ["AI/ML", "Personalization", "Analytics"],
      results: [
        { label: "Conversion Rate", value: "+300%" },
        { label: "Revenue Growth", value: "+250%" },
        { label: "Customer Retention", value: "+180%" }
      ],
      client: "Fashion Retailer",
      duration: "6 months"
    },
    {
      title: "Healthcare Digital Transformation",
      description: "Comprehensive digital marketing strategy for a healthcare provider reaching 1M+ patients",
      image: healthcareImage,
      category: "Healthcare",
      technologies: ["Content Marketing", "SEO", "Social Media"],
      results: [
        { label: "Patient Reach", value: "1M+" },
        { label: "Appointment Bookings", value: "+400%" },
        { label: "Brand Awareness", value: "+500%" }
      ],
      client: "Multi-Specialty Hospital",
      duration: "12 months"
    },
    {
      title: "FinTech App Launch Campaign",
      description: "Multi-channel campaign for a revolutionary fintech app that acquired 100K users in 90 days",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "FinTech",
      technologies: ["Mobile Marketing", "Influencer Partnerships", "Performance Ads"],
      results: [
        { label: "User Acquisition", value: "100K+" },
        { label: "App Downloads", value: "500K+" },
        { label: "Cost Per Acquisition", value: "-60%" }
      ],
      client: "Payment Solutions Startup",
      duration: "3 months"
    },
    {
      title: "Real Estate Digital Showcase",
      description: "Virtual reality marketing campaign that sold 85% of premium properties before construction",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Real Estate",
      technologies: ["VR/AR", "3D Visualization", "Digital Tours"],
      results: [
        { label: "Pre-Sales", value: "85%" },
        { label: "Virtual Tours", value: "10K+" },
        { label: "Lead Quality", value: "+400%" }
      ],
      client: "Luxury Developer",
      duration: "8 months"
    },
    {
      title: "Restaurant Chain Expansion",
      description: "Location-based marketing strategy that tripled foot traffic and expanded to 15 new cities",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food & Beverage",
      technologies: ["Location Marketing", "Social Campaigns", "Loyalty Programs"],
      results: [
        { label: "Foot Traffic", value: "+300%" },
        { label: "New Locations", value: "15" },
        { label: "Customer Loyalty", value: "+250%" }
      ],
      client: "Restaurant Chain",
      duration: "18 months"
    },
    {
      title: "Educational Platform Growth",
      description: "Content-driven strategy that grew an online learning platform to 500K active users",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
      technologies: ["Content Strategy", "Community Building", "Webinar Marketing"],
      results: [
        { label: "Active Users", value: "500K+" },
        { label: "Course Completions", value: "+600%" },
        { label: "Revenue Growth", value: "+800%" }
      ],
      client: "EdTech Platform",
      duration: "15 months"
    }
  ];

  const categories = ["All", "E-Commerce", "Healthcare", "FinTech", "Real Estate", "Food & Beverage", "Education"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through innovative AI-powered digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center glass-card p-8 rounded-3xl">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">300+</div>
              <div className="text-muted-foreground">Successful Campaigns</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
              <div className="text-muted-foreground">People Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real campaigns. See how we've transformed businesses across various industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-xl font-bold text-primary">{result.value}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Client: {project.client}</div>
                      <div className="text-sm text-muted-foreground">Duration: {project.duration}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      View Case Study <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Be Our Next <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve similar remarkable results 
              with our AI-powered digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;