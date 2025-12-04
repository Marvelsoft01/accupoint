import { Truck, Settings, MapPin, Clock } from "lucide-react";
import fleetTruck1 from "@/assets/fleet-truck-1.jpg";
import fleetTruck2 from "@/assets/fleet-truck-2.jpg";
import fleetTruck3 from "@/assets/fleet-truck-3.jpg";

const trucks = [
  {
    image: fleetTruck1,
    name: "Heavy Haul Fleet",
    description: "Our Peterbilt and Kenworth tractors handle the toughest loads with power and reliability.",
    specs: ["40+ Ton Capacity", "GPS Tracked", "Climate Controlled"]
  },
  {
    image: fleetTruck2,
    name: "Long-Haul Division",
    description: "Purpose-built for cross-country freight with maximum efficiency and driver comfort.",
    specs: ["Coast to Coast", "Fuel Efficient", "Real-Time Tracking"]
  },
  {
    image: fleetTruck3,
    name: "Regional Fleet",
    description: "Modern Freightliner units optimized for regional deliveries and tight timelines.",
    specs: ["Quick Turnaround", "Dock Height", "Secure Storage"]
  }
];

const fleetStats = [
  { icon: Truck, value: "75+", label: "Active Trucks" },
  { icon: Settings, value: "24/7", label: "Maintenance Support" },
  { icon: MapPin, value: "50", label: "States Covered" },
  { icon: Clock, value: "99.2%", label: "On-Time Delivery" }
];

const Fleet = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Modern Equipment, Reliable Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Our Fleet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A well-maintained fleet of modern trucks equipped with the latest technology 
            to ensure your cargo is transported safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {fleetStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border/50">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{truck.name}</h3>
                <p className="text-muted-foreground mb-4">{truck.description}</p>
                <div className="flex flex-wrap gap-2">
                  {truck.specs.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
