import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, TrendingUp, Users, Target, Calendar, DollarSign, BarChart3, Lightbulb } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Growth Strategy",
      description: "Designed and implemented a high-conversion, SEO-optimized e-commerce website for an Indian fashion retailer, leading to 4X growth in sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "E-Commerce",
      technologies: ["AI Product Recommendations", "SEO Optimization", "WhatsApp Automation", "UPI Integration"],
      results: [
        { label: "Conversion Rate", value: "+280%" },
        { label: "Organic Traffic", value: "+350%" },
        { label: "Cart Abandonment", value: "70% → 35%" }
      ],
      client: "Indian Fashion Retailer",
      duration: "5 months",
      caseStudy: {
        challenge: "Client had a non-responsive, outdated site with low organic traffic (less than 1K/month) and high cart abandonment rate (70%+). They were struggling to compete in the growing Indian e-commerce market.",
        solution: "We built a modern, mobile-first website with integrated AI product recommendations, optimized SEO for 'ethnic wear online India' and other high-volume keywords, added WhatsApp automation for abandoned cart recovery, and integrated UPI & wallet payments for Indian buyers.",
        implementation: [
          "Built responsive, mobile-first website design",
          "Implemented AI-powered product recommendation engine",
          "Optimized for high-volume Indian fashion keywords",
          "Integrated WhatsApp Business API for cart recovery",
          "Added UPI, wallets, and COD payment options",
          "Set up analytics and conversion tracking"
        ],
        results: [
          "+280% increase in conversion rate",
          "+350% organic traffic growth within 6 months",
          "Cart abandonment reduced from 70% → 35%",
          "Monthly revenue crossed ₹35 Lakhs",
          "Improved mobile user experience by 90%",
          "Reduced page load time by 60%"
        ],
        testimonial: "The new website completely transformed our business. We're now getting orders from all over India, and our customers love the smooth shopping experience. The AI recommendations have increased our average order value significantly.",
        keyMetrics: [
          { label: "Revenue Impact", value: "₹2.5 Cr (6 months)" },
          { label: "ROI", value: "720%" },
          { label: "Implementation Time", value: "5 months" }
        ]
      }
    },
    {
      title: "Scaling Student Enrollment with AI + Digital Marketing",
      description: "Helped a local spoken English academy in Tamil Nadu reach more students online and scale beyond word-of-mouth leads.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
      technologies: ["Meta Ads", "Google Ads", "Content Strategy", "Student Portal"],
      results: [
        { label: "Student Growth", value: "80 → 450" },
        { label: "Revenue Growth", value: "₹2L → ₹11L" },
        { label: "Dropout Reduction", value: "-40%" }
      ],
      client: "Spoken English Academy",
      duration: "6 months",
      caseStudy: {
        challenge: "A local spoken English academy in Tamil Nadu had offline-only promotions with limited reach, students dropping out after 1–2 months, and strong competition from online apps.",
        solution: "We launched Meta & Google Ads targeting 'English speaking classes near me', created landing pages with demo booking automation, built a content strategy (Instagram reels + YouTube shorts), and introduced student progress tracking portal with gamification.",
        implementation: [
          "Set up targeted Google and Meta ad campaigns",
          "Created high-converting landing pages with demo booking",
          "Developed Instagram reels and YouTube shorts strategy",
          "Built student progress tracking portal",
          "Implemented gamification for better retention",
          "Created automated follow-up sequences"
        ],
        results: [
          "Student enrollment grew from 80 → 450 in 9 months",
          "Dropout rate reduced by 40%",
          "3X increase in demo class bookings",
          "Monthly revenue grew from ₹2 Lakhs → ₹11 Lakhs",
          "Built strong social media presence with 25K+ followers",
          "Achieved 4.8-star Google rating"
        ],
        testimonial: "We never imagined we could grow this fast! The digital marketing strategy brought us students from across Tamil Nadu, and the student portal has made our teaching much more effective.",
        keyMetrics: [
          { label: "Students Enrolled", value: "450+" },
          { label: "ROI", value: "850%" },
          { label: "Implementation Time", value: "6 months" }
        ]
      }
    },
    {
      title: "10X Qualified Leads for Real Estate Developer",
      description: "Generated massive qualified homebuyer leads for a real estate firm in Coimbatore with virtual tours and AI-driven campaigns.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Real Estate",
      technologies: ["Virtual Tours", "AI-driven Google Ads", "CRM Automation", "SEO Content"],
      results: [
        { label: "Qualified Leads", value: "2,000+" },
        { label: "Cost per Lead", value: "-65%" },
        { label: "Sales Pipeline", value: "₹40+ Cr" }
      ],
      client: "Real Estate Developer",
      duration: "4 months",
      caseStudy: {
        challenge: "A real estate firm in Coimbatore had weak online presence, no proper lead funnel, high ad spend but low-quality leads, and competitors dominating Google searches.",
        solution: "We built a real estate lead-gen website with virtual tours & WhatsApp CTA, ran AI-driven Google Ads targeting 'flats for sale in Coimbatore', automated CRM follow-ups via SMS/WhatsApp, and published SEO blog content around home loans, property tax, RERA, etc.",
        implementation: [
          "Built lead-generation website with virtual property tours",
          "Implemented WhatsApp CTA buttons throughout the site",
          "Set up AI-driven Google Ads campaigns",
          "Created automated CRM with SMS/WhatsApp follow-ups",
          "Developed SEO content strategy for real estate keywords",
          "Integrated lead scoring and qualification system"
        ],
        results: [
          "2,000+ verified leads in 4 months",
          "Cost-per-lead reduced by 65%",
          "50+ site visits scheduled every month",
          "₹40+ Crore sales pipeline generated",
          "Increased website traffic by 500%",
          "Achieved 95% lead response rate within 1 hour"
        ],
        testimonial: "The lead quality has improved dramatically. We're now getting serious buyers who are ready to visit our projects, and the virtual tours have made our sales process much more efficient.",
        keyMetrics: [
          { label: "Leads Generated", value: "2,000+" },
          { label: "Sales Pipeline", value: "₹40 Cr" },
          { label: "ROI", value: "450%" }
        ]
      }
    },
    {
      title: "Personal Branding & Coaching Funnel for Life Coach",
      description: "Helped a Bangalore-based life coach scale beyond 1:1 sessions and sell group coaching programs online with personal branding.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Personal Development",
      technologies: ["Personal Branding", "Instagram Strategy", "Meta Ads Funnel", "Email Automation"],
      results: [
        { label: "Instagram Growth", value: "0 → 35K" },
        { label: "Webinar Signups", value: "1,200+" },
        { label: "Revenue Generated", value: "₹25 Lakhs" }
      ],
      client: "Life Coach",
      duration: "4 months",
      caseStudy: {
        challenge: "A Bangalore-based life coach had no brand visibility online, was struggling to attract high-ticket clients, and sessions were limited to word-of-mouth referrals.",
        solution: "We built a personal brand website with booking system + testimonials, created Instagram content strategy (quotes, reels, success stories), launched Meta Ads funnel: Free webinar → Paid course, and automated email nurturing system with AI copywriting.",
        implementation: [
          "Designed personal brand website with integrated booking system",
          "Created comprehensive Instagram content calendar",
          "Developed high-converting webinar funnel",
          "Set up automated email nurturing sequences",
          "Implemented Meta Ads campaigns for webinar promotion",
          "Created client testimonial and success story campaigns"
        ],
        results: [
          "Grew from 0 → 35K Instagram followers in 6 months",
          "Generated 1,200+ webinar sign-ups",
          "Converted 10% into paid coaching clients",
          "₹25 Lakhs revenue in 6 months",
          "Built email list of 5,000+ subscribers",
          "Achieved 4.9-star client satisfaction rating"
        ],
        testimonial: "The personal branding strategy completely transformed my coaching business. I'm now attracting clients from across India, and my group programs are always full. The automated systems have given me my time back.",
        keyMetrics: [
          { label: "Revenue Impact", value: "₹25 Lakhs" },
          { label: "ROI", value: "12X" },
          { label: "Implementation Time", value: "4 months" }
        ]
      }
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
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">10x</div>
              <div className="text-muted-foreground">ROI Delivered</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="group">
                          View Case Study <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl mb-4">{project.title} - Detailed Case Study</DialogTitle>
                        </DialogHeader>
                        
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid grid-cols-4 w-full mb-6">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="challenge">Challenge</TabsTrigger>
                            <TabsTrigger value="solution">Solution</TabsTrigger>
                            <TabsTrigger value="results">Results</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="overview" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <img 
                                  src={project.image} 
                                  alt={project.title}
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </div>
                              <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span className="text-sm text-muted-foreground">Duration: {project.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4" />
                                  <span className="text-sm text-muted-foreground">Client: {project.client}</span>
                                </div>
                                <Badge variant="secondary">{project.category}</Badge>
                                <p className="text-muted-foreground">{project.description}</p>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                Key Metrics
                              </h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                {project.caseStudy.keyMetrics.map((metric, index) => (
                                  <div key={index} className="glass-card p-4 rounded-lg text-center">
                                    <div className="text-xl font-bold text-primary">{metric.value}</div>
                                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="challenge" className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.caseStudy.challenge}
                            </p>
                          </TabsContent>
                          
                          <TabsContent value="solution" className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {project.caseStudy.solution}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" />
                                Implementation Strategy
                              </h4>
                              <ul className="space-y-2">
                                {project.caseStudy.implementation.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
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
                          </TabsContent>
                          
                          <TabsContent value="results" className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" />
                                Results & Impact
                              </h3>
                              <ul className="space-y-3 mb-6">
                                {project.caseStudy.results.map((result, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="glass-card p-6 rounded-lg">
                              <h4 className="font-semibold mb-3">Client Testimonial</h4>
                              <blockquote className="text-muted-foreground italic leading-relaxed">
                                "{project.caseStudy.testimonial}"
                              </blockquote>
                              <div className="mt-4 text-sm text-muted-foreground">
                                — {project.client}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                Performance Overview
                              </h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                {project.results.map((result, resultIndex) => (
                                  <div key={resultIndex} className="text-center glass-card p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-primary">{result.value}</div>
                                    <div className="text-sm text-muted-foreground">{result.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
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
