import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import vendorBandhuLogo from "@/assets/vendorbandhu-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-subtle">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={vendorBandhuLogo} 
              alt="VendorBandhu Logo" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-glow rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-rainbow bg-clip-text text-transparent group-hover:animate-glow-pulse">
            VendorBandhu
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/about" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/features" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="outline" 
            className="border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/vendor-login">Vendor Login</Link>
          </Button>
          <Button 
            className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/supplier-login">Supplier Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/about" 
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/vendor-login" onClick={() => setIsMobileMenuOpen(false)}>
                  Vendor Login
                </Link>
              </Button>
              <Button 
                className="w-full bg-gradient-primary"
                asChild
              >
                <Link to="/supplier-login" onClick={() => setIsMobileMenuOpen(false)}>
                  Supplier Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;