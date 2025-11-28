import { Package, Zap, Globe, Shield, Truck, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import truckloadImage from "@/assets/service-truckload.jpg";
import expeditedImage from "@/assets/service-expedited.jpg";
import nationwideImage from "@/assets/service-nationwide.jpg";
import secureImage from "@/assets/service-secure.jpg";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Package,
      title: "Full Truckload Services",
      description: "Complete truckload capacity for large shipments requiring dedicated transportation.",
      image: truckloadImage,
      features: [
        "Dedicated truck for your shipment",
        "Direct delivery with no stops",
        "Ideal for 10+ pallets",
        "Temperature-controlled options available",
      ],
    },
    {
      icon: Zap,
      title: "Expedited Shipping",
      description: "Fast, time-sensitive delivery for urgent shipments that can't wait.",
      image: expeditedImage,
      features: [
        "Priority handling and routing",
        "24/7 dedicated dispatch support",
        "Team driver options for non-stop delivery",
        "Guaranteed delivery windows",
      ],
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Comprehensive transportation services across all 50 states.",
      image: nationwideImage,
      features: [
        "Coast-to-coast delivery network",
        "Alaska to lower 48 connections",
        "Strategic partner network",
        "Consistent service nationwide",
      ],
    },
    {
      icon: Shield,
      title: "Insured & Secure Transport",
      description: "Advanced security measures and comprehensive insurance for high-value cargo.",
      image: secureImage,
      features: [
        "Full cargo insurance coverage",
        "GPS tracking on all shipments",
        "Secure loading and unloading",
        "Background-checked drivers",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective shipping for smaller loads that don't require a full truck.",
    },
    {
      icon: Clock,
      title: "Scheduled Deliveries",
      description: "Reliable recurring shipments with consistent pickup and delivery times.",
    },
    {
      icon: Package,
      title: "Specialized Freight",
      description: "Handling of oversized, overweight, or special requirement cargo.",
    },
    {
      icon: Shield,
      title: "Hazmat Transport",
      description: "Certified transportation of hazardous materials with proper documentation.",
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
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Comprehensive freight transportation solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional transportation services designed to keep your business moving
              </p>
            </div>

            <div className="space-y-20">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    <div className={isEven ? "" : "lg:col-start-2"}>
                      <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="bg-accent rounded-full w-2 h-2 mt-2 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/quote">
                        <Button variant="hero" size="lg">
                          Get Quote for This Service
                        </Button>
                      </Link>
                    </div>
                    <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                      <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Extended capabilities to meet your specialized shipping requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose ACCOUPOINT TRUCKING?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We combine years of experience with modern technology and a commitment to excellence 
                to deliver transportation services you can rely on.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
                  <p className="text-muted-foreground">On-Time Delivery Rate</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-muted-foreground">Customer Support</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <p className="text-muted-foreground">Modern Trucks</p>
                </div>
              </div>

              <Link to="/quote">
                <Button variant="hero" size="lg" className="text-lg px-10">
                  Request a Quote Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
