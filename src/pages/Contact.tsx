import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", serviceType: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 907 416 3145"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@accoupointtrucking.com", "quotes@accoupointtrucking.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["7125 Old Seward Hwy Ste 1", "Anchorage, AK 99518"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Have questions about our services? Our team is ready to help you with your shipping needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll respond as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-truckload">Full Truckload</SelectItem>
                      <SelectItem value="expedited">Expedited Shipping</SelectItem>
                      <SelectItem value="nationwide">Nationwide Coverage</SelectItem>
                      <SelectItem value="insured">Insured & Secure</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your shipping needs..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground">
                Stop by our Anchorage location or schedule a consultation
              </p>
            </div>
            <div className="max-w-5xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg border border-border h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.3!2d-149.87!3d61.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjHCsDEwJzQ4LjAiTiAxNDnCsDUyJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="ACCOUPOINT TRUCKING Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
