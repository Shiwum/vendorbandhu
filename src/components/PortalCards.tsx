import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChefHat, Truck, ArrowRight } from "lucide-react";

const PortalCards = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Portal
          </h2>
          <p className="text-xl text-muted-foreground">
            Access the platform designed for your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <ChefHat className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Vendor Portal</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Browse products, join group orders, manage your inventory, and connect with other vendors
                </p>
                <ul className="text-sm space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Access wholesale prices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Join cooperative orders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Track delivery status
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Connect with suppliers
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-gradient-primary hover:opacity-90 group" asChild>
                <Link to="/vendor-portal">
                  Enter Vendor Portal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Truck className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-2xl">Supplier Portal</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  List your products, manage bulk orders, track payments, and grow your customer base
                </p>
                <ul className="text-sm space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    Reach 500+ vendors
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    Manage bulk orders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    Secure payments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    Delivery tracking
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group" asChild>
                <Link to="/supplier-portal">
                  Enter Supplier Portal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortalCards;