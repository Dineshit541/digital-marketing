import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, TrendingUp, Users, Target, Calendar, DollarSign, BarChart3, Lightbulb } from "lucide-react";
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
      duration: "6 months",
      caseStudy: {
        challenge: "Our client, a leading fashion retailer, was struggling with low conversion rates and high cart abandonment. Despite having a large product catalog, customers were overwhelmed and couldn't find relevant products easily. The existing recommendation system was basic and didn't adapt to user behavior.",
        solution: "We implemented a comprehensive AI-powered recommendation engine that analyzed user behavior, purchase history, browsing patterns, and even seasonal trends. The system included personalized product suggestions, smart search functionality, and dynamic pricing strategies.",
        implementation: [
          "Deployed machine learning algorithms for real-time personalization",
          "Integrated behavioral tracking across all touchpoints",
          "Created A/B testing framework for continuous optimization",
          "Implemented predictive analytics for inventory management"
        ],
        results: [
          "Conversion rates increased from 2.3% to 9.2%",
          "Average order value grew by 150%",
          "Cart abandonment reduced by 45%",
          "Customer lifetime value increased by 200%"
        ],
        testimonial: "The AI recommendation system completely transformed our business. We're now seeing conversion rates we never thought possible, and our customers are finding exactly what they want.",
        keyMetrics: [
          { label: "Revenue Impact", value: "$2.5M increase" },
          { label: "ROI", value: "850%" },
          { label: "Implementation Time", value: "4 months" }
        ]
      }
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
      duration: "12 months",
      caseStudy: {
        challenge: "A multi-specialty hospital needed to increase patient acquisition and establish itself as a trusted healthcare provider in Chennai. They had minimal online presence and were losing patients to competitors with stronger digital marketing strategies.",
        solution: "We developed a comprehensive digital transformation strategy focusing on content marketing, local SEO, patient education, and community engagement. The approach emphasized trust-building and providing valuable health information to potential patients.",
        implementation: [
          "Created 200+ educational health articles and videos",
          "Optimized for local search with 'near me' keywords",
          "Launched targeted social media campaigns for different specialties",
          "Implemented online appointment booking system",
          "Developed patient testimonial and success story campaigns"
        ],
        results: [
          "Reached over 1 million potential patients",
          "Online appointment bookings increased by 400%",
          "Website traffic grew by 600%",
          "Brand awareness surveys showed 500% improvement",
          "Patient satisfaction scores increased to 4.8/5"
        ],
        testimonial: "Our digital presence has completely transformed. We're now the go-to healthcare provider in Chennai, and patients trust us because of the valuable content we share.",
        keyMetrics: [
          { label: "New Patients", value: "15,000+" },
          { label: "Digital ROI", value: "450%" },
          { label: "Online Reviews", value: "4.8★ average" }
        ]
      }
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
      duration: "3 months",
      caseStudy: {
        challenge: "A new fintech startup needed to launch their payment app in a highly competitive market. They faced challenges including lack of brand recognition, high customer acquisition costs, and skepticism about security in digital payments.",
        solution: "We created a multi-channel launch campaign focusing on trust-building, influencer partnerships, and performance-driven advertising. The strategy emphasized security, convenience, and exclusive launch benefits.",
        implementation: [
          "Partnered with 50+ financial influencers and tech reviewers",
          "Created educational content about digital payment security",
          "Launched targeted campaigns across Google, Facebook, and LinkedIn",
          "Implemented referral program with gamification elements",
          "Developed PR strategy with major tech publications"
        ],
        results: [
          "Acquired 100,000+ active users in first 90 days",
          "Achieved 500,000+ app downloads",
          "Reduced customer acquisition cost by 60%",
          "Achieved 4.6-star rating on app stores",
          "Generated $10M in transaction volume"
        ],
        testimonial: "The launch campaign exceeded all our expectations. We not only hit our user acquisition targets but also built a strong foundation of trust with our customers.",
        keyMetrics: [
          { label: "Market Share", value: "8% in segment" },
          { label: "User Retention", value: "75% after 30 days" },
          { label: "Campaign ROI", value: "320%" }
        ]
      }
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
      duration: "8 months",
      caseStudy: {
        challenge: "A luxury real estate developer needed to pre-sell premium apartments before construction completion. Traditional marketing methods weren't effective for high-value properties, and buyers wanted to experience the space before committing.",
        solution: "We created immersive VR experiences and 3D virtual tours that allowed potential buyers to walk through their future homes. Combined with targeted digital marketing to high-net-worth individuals.",
        implementation: [
          "Developed photorealistic VR tours for each apartment type",
          "Created interactive floor plans with customization options",
          "Launched targeted campaigns on luxury lifestyle platforms",
          "Set up VR experience centers in prime locations",
          "Implemented CRM system for lead nurturing"
        ],
        results: [
          "Sold 85% of units before construction completion",
          "Conducted 10,000+ virtual tours",
          "Lead quality improved by 400%",
          "Average time to sale reduced by 50%",
          "Customer satisfaction rate of 96%"
        ],
        testimonial: "The VR experience was a game-changer. Customers could truly envision their future home, which made the buying decision much easier.",
        keyMetrics: [
          { label: "Sales Value", value: "₹150 Crores" },
          { label: "Time to Sale", value: "3 months avg" },
          { label: "Marketing ROI", value: "600%" }
        ]
      }
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
      duration: "18 months",
      caseStudy: {
        challenge: "A regional restaurant chain wanted to expand nationally but struggled with brand awareness in new markets. They needed to drive foot traffic to existing locations while building excitement for new openings.",
        solution: "We implemented a location-based marketing strategy combined with social media campaigns and a comprehensive loyalty program. The approach focused on local community engagement and food influencer partnerships.",
        implementation: [
          "Launched hyper-local social media campaigns for each location",
          "Created location-specific menus and promotions",
          "Developed mobile app with loyalty rewards and geo-targeting",
          "Partnered with local food bloggers and influencers",
          "Implemented data-driven site selection for new locations"
        ],
        results: [
          "Foot traffic increased by 300% across all locations",
          "Successfully expanded to 15 new cities",
          "Customer loyalty program reached 100,000+ members",
          "Average order value increased by 45%",
          "Brand recognition improved by 400% in new markets"
        ],
        testimonial: "Our expansion was incredibly successful thanks to the targeted marketing approach. Each new location felt like a local favorite from day one.",
        keyMetrics: [
          { label: "Revenue Growth", value: "₹50 Crores" },
          { label: "Market Penetration", value: "15 new cities" },
          { label: "Customer Retention", value: "80%" }
        ]
      }
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
      duration: "15 months",
      caseStudy: {
        challenge: "An online learning platform was struggling with low user engagement and high drop-off rates. Despite having quality content, they couldn't retain learners or build a strong community around their courses.",
        solution: "We developed a comprehensive content marketing and community building strategy that focused on learner success stories, interactive content, and peer-to-peer learning experiences.",
        implementation: [
          "Created weekly educational webinars with industry experts",
          "Launched peer learning groups and study circles",
          "Developed gamification system with badges and leaderboards",
          "Implemented email nurturing sequences for course completion",
          "Created success story campaigns featuring alumni"
        ],
        results: [
          "Grew to 500,000+ active users",
          "Course completion rates increased by 600%",
          "Revenue grew by 800% year-over-year",
          "Community engagement increased by 400%",
          "Net Promoter Score improved to 72"
        ],
        testimonial: "The community aspect transformed our platform. Students are now learning from each other and staying engaged throughout their entire learning journey.",
        keyMetrics: [
          { label: "Course Completions", value: "2.5M+" },
          { label: "Community Members", value: "300K+" },
          { label: "Revenue Impact", value: "₹25 Crores" }
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