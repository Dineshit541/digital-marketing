import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Focus",
      description: "Every campaign is strategically crafted with data-driven insights and laser focus on your business objectives."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through transparent communication and exceptional results."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology and creative thinking to deliver solutions that set you apart."
    },
    {
      icon: Trophy,
      title: "Proven Excellence",
      description: "300+ successful campaigns and 99% client satisfaction rate speak to our commitment to excellence."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              About <span className="gradient-text">AGENCORE</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a Chennai-based digital marketing agency that combines artificial intelligence 
              with creative brilliance to transform how brands connect with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses with AI-driven marketing solutions that deliver measurable impact. 
                We believe in the power of technology to amplify human creativity and drive authentic connections 
                between brands and their customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From Chennai to the global stage, we help businesses of all sizes leverage the latest 
                in digital marketing technology to achieve their growth objectives.
              </p>
              <Button variant="default" size="lg" className="group">
                Get Started <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">300+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every campaign we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate team of digital marketing experts, AI specialists, and creative minds 
              working together to deliver exceptional results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Based in Chennai, Tamil Nadu</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines local market knowledge with global digital marketing expertise 
                to deliver campaigns that resonate with audiences worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Join Our Team
                </Button>
                <Button variant="default" size="lg">
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;