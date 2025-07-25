import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import vendorBandhuIcon from "@/assets/vendorbandhu-icon.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={vendorBandhuIcon} alt="VendorBandhu" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">VendorBandhu</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/vendor-login">Vendor Login</Link>
          </Button>
          <Button asChild>
            <Link to="/supplier-login">Supplier Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;