import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "History", path: "/history" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-lg group-hover:bg-accent/90 transition-colors">
              <Truck className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground block leading-tight">
                ACCOUPOINT
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Trucking
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent/10 hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/quote" className="ml-2">
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:bg-accent/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3"
            >
              <Button variant="hero" size="lg" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
