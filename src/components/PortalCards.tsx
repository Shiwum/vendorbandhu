import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChefHat, Truck, ArrowRight, Star, TrendingUp, Users, Package, Sparkles } from "lucide-react";

const PortalCards = () => {
  return (
    <section className="py-20 bg-gradient-mesh relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-primary rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-rainbow rounded-full opacity-20 animate-glow-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 animate-wiggle" />
            Choose Your Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              Access Your Portal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Two specialized platforms designed for your specific business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vendor Portal Card */}
          <Card className="relative bg-gradient-card border-0 shadow-xl hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group overflow-hidden animate-slide-in-left">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-primary rounded-full"></div>
            </div>

            <CardHeader className="text-center pb-6 relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:animate-glow-pulse transition-all duration-300">
                <ChefHat className="h-12 w-12 text-primary-foreground animate-wiggle" />
              </div>
              <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors">
                Vendor Portal
              </CardTitle>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>For Food Vendors</span>
              </div>
            </CardHeader>

            <CardContent className="text-center space-y-6 relative z-10">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Join thousands of successful vendors! Browse products, participate in group orders, 
                  manage your inventory, and connect with verified suppliers.
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
                    <span>Wholesale Prices</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{animationDelay: '0.2s'}}></div>
                    <span>Group Orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{animationDelay: '0.4s'}}></div>
                    <span>Order Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{animationDelay: '0.6s'}}></div>
                    <span>Vendor Network</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-4 mt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">2500+</div>
                      <div className="text-xs text-muted-foreground">Active Vendors</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">₹50K</div>
                      <div className="text-xs text-muted-foreground">Avg. Monthly Savings</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">4.8★</div>
                      <div className="text-xs text-muted-foreground">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-warm group text-lg py-6" 
                asChild
              >
                <Link to="/vendor-portal">
                  <Users className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                  Enter Vendor Portal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Supplier Portal Card */}
          <Card className="relative bg-gradient-card border-0 shadow-xl hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group overflow-hidden animate-slide-in-right">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
            </div>

            <CardHeader className="text-center pb-6 relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent to-accent shadow-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:animate-glow-pulse transition-all duration-300">
                <Truck className="h-12 w-12 text-accent-foreground animate-bounce-slow" />
              </div>
              <CardTitle className="text-3xl font-bold group-hover:text-accent transition-colors">
                Supplier Portal
              </CardTitle>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <Package className="h-4 w-4 text-accent" />
                <span>For Suppliers & Wholesalers</span>
              </div>
            </CardHeader>

            <CardContent className="text-center space-y-6 relative z-10">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Expand your business reach! List your products, manage bulk orders, 
                  track payments, and connect with a growing network of vendors.
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse"></div>
                    <span>Reach 2500+ Vendors</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{animationDelay: '0.2s'}}></div>
                    <span>Bulk Order Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{animationDelay: '0.4s'}}></div>
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{animationDelay: '0.6s'}}></div>
                    <span>Analytics Dashboard</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-4 mt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent">500+</div>
                      <div className="text-xs text-muted-foreground">Verified Suppliers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent">₹2Cr</div>
                      <div className="text-xs text-muted-foreground">Monthly Volume</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent">95%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 shadow-warm group text-lg py-6" 
                asChild
              >
                <Link to="/supplier-portal">
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                  Enter Supplier Portal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            New to VendorBandhu? 
            <span className="text-primary font-semibold"> Join thousands of successful vendors and suppliers!</span>
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-gradient-card px-4 py-2 rounded-full shadow-subtle">
              <span className="text-sm">✨ No setup fees</span>
            </div>
            <div className="bg-gradient-card px-4 py-2 rounded-full shadow-subtle">
              <span className="text-sm">🚀 Instant approval</span>
            </div>
            <div className="bg-gradient-card px-4 py-2 rounded-full shadow-subtle">
              <span className="text-sm">💰 Start saving today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalCards;