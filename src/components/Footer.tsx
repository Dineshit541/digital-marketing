import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-light mb-4">
              AGEN
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CORE
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Where AI meets digital brilliance. We don't just market. 
              We engineer success through cutting-edge automation and creativity.
            </p>
            <Button variant="glow">
              Start Your Journey
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">AI-Powered Ad Campaigns</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Predictive SEO</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Social Media Automation</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Conversion Funnel AI</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Creative Storytelling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                hello@agencore.ai
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                Creative District, NYC
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AGENCORE. Engineered with AI precision.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;