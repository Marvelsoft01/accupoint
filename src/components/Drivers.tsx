import driver1 from "@/assets/driver-1.jpg";
import driver2 from "@/assets/driver-2.jpg";
import driver3 from "@/assets/driver-3.jpg";

const drivers = [
  {
    image: driver1,
    name: "Robert Mitchell",
    role: "Senior Driver",
    experience: "15+ Years Experience",
    description: "Specialized in long-haul cross-country freight with an impeccable safety record."
  },
  {
    image: driver2,
    name: "Sarah Thompson",
    role: "Regional Driver",
    experience: "8+ Years Experience",
    description: "Expert in time-sensitive deliveries and expedited freight services."
  },
  {
    image: driver3,
    name: "James Wilson",
    role: "Fleet Supervisor",
    experience: "20+ Years Experience",
    description: "Oversees driver operations and maintains our high safety standards."
  }
];

const Drivers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            The Heart of Our Operations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Meet Our Professional Drivers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team of experienced, certified drivers are dedicated professionals 
            who take pride in delivering your cargo safely and on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {driver.experience}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{driver.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{driver.role}</p>
                <p className="text-muted-foreground">{driver.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            <span className="text-accent font-semibold">50+</span> professional drivers serving all 50 states
          </p>
        </div>
      </div>
    </section>
  );
};

export default Drivers;
