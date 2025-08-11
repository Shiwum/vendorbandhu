import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Truck, ShoppingCart, Star, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import productsHero from "@/assets/products-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-mesh overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-primary rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-rainbow rounded-full opacity-20 animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-medium animate-shimmer bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%]">
                <Sparkles className="h-4 w-4 animate-wiggle" />
                #1 Vendor Cooperation Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-fade-in">
                  सहयोग से सफलता
                </span>
                <span className="block text-primary font-extrabold">
                  VendorBandhu
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in">
                Empowering Indian street food vendors through 
                <span className="text-primary font-semibold"> cooperative sourcing</span>. 
                Get high-quality raw materials at wholesale prices by joining forces with fellow vendors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300 group border-0" 
                asChild
              >
                <Link to="/vendor-portal">
                  <Users className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                  Join as Vendor
                  <Sparkles className="ml-2 h-4 w-4 group-hover:animate-shimmer" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 group" 
                asChild
              >
                <Link to="/supplier-portal">
                  <Truck className="mr-2 h-5 w-5 group-hover:animate-bounce-slow" />
                  Become Supplier
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="bg-card/90 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-zoom-in">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Users className="h-3 w-3" />
                    Active Vendors
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-zoom-in" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Star className="h-3 w-3" />
                    Verified Suppliers
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-zoom-in" style={{animationDelay: '0.4s'}}>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">₹2Cr+</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Savings Generated
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <img 
                src={productsHero} 
                alt="VendorBandhu Platform - Fresh Ingredients" 
                className="rounded-2xl shadow-xl w-full transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Floating product cards */}
              <div className="absolute -top-4 -left-4 bg-card border border-border/20 rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Fresh Daily</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card border border-border/20 rounded-xl p-4 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-sm font-medium text-foreground">30% Savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-muted-foreground mb-8 text-lg">Trusted by vendors across India</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="bg-card border border-border/30 px-8 py-4 rounded-2xl shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              <span className="text-foreground font-semibold">Mumbai</span>
            </div>
            <div className="bg-card border border-border/30 px-8 py-4 rounded-2xl shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              <span className="text-foreground font-semibold">Delhi</span>
            </div>
            <div className="bg-card border border-border/30 px-8 py-4 rounded-2xl shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              <span className="text-foreground font-semibold">Bangalore</span>
            </div>
            <div className="bg-card border border-border/30 px-8 py-4 rounded-2xl shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              <span className="text-foreground font-semibold">Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;