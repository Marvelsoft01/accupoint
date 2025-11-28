import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import truckImage from "@/assets/truck-side.jpg";
import fleetImage from "@/assets/hero-fleet.jpg";

const History = () => {
  const timeline = [
    {
      year: "2005",
      title: "Company Founded",
      description: "ACCOUPOINT TRUCKING started with just 3 trucks and a vision to provide reliable freight services across Alaska.",
    },
    {
      year: "2008",
      title: "Fleet Expansion",
      description: "Expanded to 25 trucks and opened our second distribution center in Fairbanks, doubling our capacity.",
    },
    {
      year: "2012",
      title: "Nationwide Coverage",
      description: "Launched interstate operations, connecting Alaska to the lower 48 states through strategic partnerships.",
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Implemented GPS tracking and real-time shipment monitoring, revolutionizing customer service standards.",
    },
    {
      year: "2018",
      title: "Green Initiative",
      description: "Introduced fuel-efficient vehicles and sustainable practices, reducing our carbon footprint by 30%.",
    },
    {
      year: "2021",
      title: "50+ Fleet Milestone",
      description: "Reached 50+ modern trucks and became one of Alaska's most trusted transportation companies.",
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received the Alaska Business Excellence Award for outstanding service and customer satisfaction.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Expanding services with expedited shipping options and enhanced security measures for high-value cargo.",
    },
  ];

  const milestones = [
    "Over 2 million miles driven safely",
    "10,000+ successful deliveries",
    "99.8% on-time delivery rate",
    "Zero major accidents in 5 years",
    "Served 500+ businesses nationwide",
    "24/7 customer support since 2015",
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
                Our Journey
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Nearly two decades of excellence in freight transportation
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Building Trust, One Mile at a Time
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2005 in Anchorage, Alaska, ACCOUPOINT TRUCKING began with a simple mission: 
                  to provide reliable, professional freight transportation services to businesses across the 
                  Last Frontier and beyond.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  What started as a small operation with just three trucks has grown into a full-service 
                  transportation company with a modern fleet, cutting-edge technology, and a team of 
                  dedicated professionals committed to excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our growth has been driven by our unwavering commitment to safety, reliability, and 
                  customer satisfaction. Today, we're proud to serve hundreds of clients across the 
                  United States, maintaining the same values that guided us from day one.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={truckImage} 
                  alt="ACCOUPOINT TRUCKING truck" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones that shaped our journey to becoming Alaska's premier trucking company
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="relative pb-12 last:pb-0">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-accent" />
                  )}
                  <div className="flex gap-6 items-start">
                    <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg relative z-10">
                      {item.year}
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-lg border border-border flex-1 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Achievements We're Proud Of
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our success is measured not just in numbers, but in the trust our clients place in us 
                  every single day. Here are some milestones that reflect our commitment to excellence.
                </p>
                
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-lg">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={fleetImage} 
                    alt="ACCOUPOINT TRUCKING fleet" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Looking Ahead</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As we continue to grow, our focus remains on innovation, sustainability, and 
                exceptional service. We're investing in electric vehicle technology, advanced 
                logistics systems, and expanding our service offerings to better serve our clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The next chapter of ACCOUPOINT TRUCKING is being written every day, and we're 
                excited to have you be a part of it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default History;
