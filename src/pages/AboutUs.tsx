import { Target, Users, Shield, Award, Zap, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import highwayImage from "@/assets/highway-aerial.jpg";
import fleetImage from "@/assets/hero-fleet.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest safety standards in every aspect of our operations, ensuring secure transport for all shipments.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Our 99.8% on-time delivery rate speaks to our unwavering commitment to keeping our promises to clients.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technology and sustainable practices to continuously improve our services.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Every decision we make is centered around delivering exceptional value and service to our clients.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our success is built on the dedication and expertise of our talented team of professionals.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices at all times.",
    },
  ];

  const stats = [
    { number: "50+", label: "Modern Trucks" },
    { number: "19", label: "Years of Experience" },
    { number: "500+", label: "Business Partners" },
    { number: "99.8%", label: "On-Time Delivery" },
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
                About ACCOUPOINT TRUCKING
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Alaska's premier freight transportation company, delivering excellence since 2005
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To provide reliable, safe, and efficient freight transportation services that exceed 
                  our clients' expectations while maintaining the highest standards of professionalism 
                  and environmental responsibility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to being more than just a transportation company—we're your trusted 
                  logistics partner, dedicated to the success of your business through timely deliveries, 
                  transparent communication, and innovative solutions.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={highwayImage} 
                  alt="Highway transportation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={fleetImage} 
                  alt="ACCOUPOINT fleet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To be recognized as the most trusted and innovative freight transportation company 
                  in the United States, setting industry standards for reliability, safety, and 
                  customer service.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a future where sustainable logistics practices and advanced technology 
                  work together to create seamless, efficient transportation solutions that benefit 
                  both our clients and the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow group"
                  >
                    <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ACCOUPOINT TRUCKING?</h2>
                <p className="text-lg text-muted-foreground">
                  We go beyond standard freight services to deliver exceptional value
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg shadow-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our drivers and logistics professionals bring decades of combined experience and 
                    industry expertise to every shipment.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Modern Fleet</h3>
                  <p className="text-muted-foreground">
                    Well-maintained trucks equipped with the latest safety features and GPS tracking 
                    technology for real-time monitoring.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock customer service ensures you always have support when you need it, 
                    no matter the time or day.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Transparent quotes with no hidden fees, backed by flexible payment options and 
                    volume discounts for regular clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                When you choose ACCOUPOINT TRUCKING, you're choosing a partner dedicated to your success. 
                We treat every shipment with the care and attention it deserves, ensuring your freight 
                arrives safely, on time, every time. That's not just our promise—it's our guarantee.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
