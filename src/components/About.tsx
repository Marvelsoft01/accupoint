import { CheckCircle } from "lucide-react";
import highwayImage from "@/assets/highway-aerial.jpg";

const features = [
  "Modern fleet of well-maintained trucks",
  "Experienced and professional drivers",
  "Real-time GPS tracking for all shipments",
  "Competitive pricing with transparent quotes",
  "Dedicated customer service team",
  "Flexible scheduling options",
];

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose ACCOUPOINT TRUCKING?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in the transportation industry, we've built our reputation on reliability, safety, and exceptional service. Our commitment to excellence ensures your freight arrives on time, every time.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <video 
                src="https://media.accupointruck.com/1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
