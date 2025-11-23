import { Card, CardContent } from "@/components/ui/card";
import truckloadImg from "@/assets/service-truckload.jpg";
import expeditedImg from "@/assets/service-expedited.jpg";
import nationwideImg from "@/assets/service-nationwide.jpg";
import secureImg from "@/assets/service-secure.jpg";

const services = [
  {
    image: truckloadImg,
    title: "Full Truckload",
    description: "Dedicated full truckload services for your large shipments across the continental United States.",
  },
  {
    image: expeditedImg,
    title: "Expedited Shipping",
    description: "Time-sensitive deliveries with guaranteed delivery windows for your urgent freight needs.",
  },
  {
    image: nationwideImg,
    title: "Nationwide Coverage",
    description: "Operating across all 50 states with comprehensive logistics network and tracking.",
  },
  {
    image: secureImg,
    title: "Insured & Secure",
    description: "Full cargo insurance and state-of-the-art security measures for complete peace of mind.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive trucking solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
