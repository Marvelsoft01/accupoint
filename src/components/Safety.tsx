import { Shield, CheckCircle, Award, FileCheck, AlertTriangle, Wrench } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "DOT Compliance",
    description: "Full compliance with Department of Transportation regulations and standards"
  },
  {
    icon: FileCheck,
    title: "Regular Inspections",
    description: "Rigorous pre-trip and post-trip vehicle inspections for every haul"
  },
  {
    icon: AlertTriangle,
    title: "Safety Training",
    description: "Comprehensive driver safety programs and continuous education"
  },
  {
    icon: Wrench,
    title: "Fleet Maintenance",
    description: "Preventive maintenance schedules ensuring optimal vehicle performance"
  },
  {
    icon: Award,
    title: "Safety Certifications",
    description: "Industry-recognized safety certifications and best practices"
  },
  {
    icon: CheckCircle,
    title: "Clean Safety Record",
    description: "Proven track record of incident-free deliveries across the nation"
  }
];

const Safety = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Your Cargo, Our Priority
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Safety & Maintained Standards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            At ACCOUPOINT TRUCKING, safety isn't just a policy—it's our culture. 
            We maintain the highest industry standards to protect your cargo and our drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
            Every truck in our fleet undergoes regular maintenance checks, and every driver 
            completes ongoing safety training. We invest in the latest safety technology 
            and follow strict protocols to ensure your freight arrives safely, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;
