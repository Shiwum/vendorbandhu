import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Truck, ShoppingCart, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                सहयोग से सफलता
                <span className="block text-primary">VendorBandhu</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering Indian street food vendors through cooperative sourcing. 
                Get high-quality raw materials at wholesale prices by joining forces with fellow vendors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-warm" asChild>
                <Link to="/vendor-portal">
                  <Users className="mr-2 h-5 w-5" />
                  Join as Vendor
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/supplier-portal">
                  <Truck className="mr-2 h-5 w-5" />
                  Become Supplier
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="bg-gradient-card border-0 shadow-subtle">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Vendors</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-subtle">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">100+</div>
                  <div className="text-sm text-muted-foreground">Verified Suppliers</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-subtle">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">₹50L+</div>
                  <div className="text-sm text-muted-foreground">Savings Generated</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="VendorBandhu Platform" 
              className="rounded-2xl shadow-warm w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;