import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage1 from "@/assets/hero-truck.jpg";
import heroImage2 from "@/assets/hero-highway-sunset.jpg";
import heroImage3 from "@/assets/hero-fleet.jpg";

const heroSlides = [
  {
    image: heroImage1,
    alt: "Semi-truck on highway"
  },
  {
    image: heroImage2,
    alt: "Truck on sunset highway"
  },
  {
    image: heroImage3,
    alt: "Fleet of trucks at depot"
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen p-0">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Truck className="h-16 w-16 text-accent" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          ACCOUPOINT TRUCKING
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Nationwide Freight Solutions
        </p>
        
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Reliable, efficient transportation services across all 50 states. Your cargo, our commitment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg">
            Get a Quote
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
