import { MapPin, Phone, Mail, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold">ACCOUPOINT TRUCKING</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for reliable freight transportation across all 50 states.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div className="text-primary-foreground/80">
                  <div>7125 Old Seward Hwy Ste 1</div>
                  <div>Anchorage, AK 99518</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@accoupoint.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#quote" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#careers" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} ACCOUPOINT TRUCKING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
