import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import vendorBandhuLogo from "@/assets/vendorbandhu-logo.png";

const Navigation = () => {
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

        <div className="flex items-center gap-3">
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
      </div>
    </nav>
  );
};

export default Navigation;