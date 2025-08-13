import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your <span className="gradient-text">AI Marketing Engine</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Whether you're a startup looking to scale fast or an established brand aiming for global reach, 
              AGENCORE is your partner in AI-powered growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white font-medium">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-white/40 resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                
                <Button type="submit" variant="glow" size="lg" className="w-full">
                  Let's Start Building
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">dineshit541@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 8344031800</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose AGENCORE?</h3>
                <ul className="space-y-3 text-white/70">
                  <li>✓ AI-powered marketing automation</li>
                  <li>✓ Data-driven strategy development</li>
                  <li>✓ Full-service digital solutions</li>
                  <li>✓ Proven ROI optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;