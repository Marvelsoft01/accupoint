import truckImage from "@/assets/truck-side.jpg";

const stats = [
  { value: "50", label: "States Covered" },
  { value: "24/7", label: "Support Available" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "1000+", label: "Deliveries Monthly" },
];

const Stats = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={truckImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trusted Nationwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading performance across America
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg bg-card shadow-lg"
            >
              <div className="text-5xl sm:text-6xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
