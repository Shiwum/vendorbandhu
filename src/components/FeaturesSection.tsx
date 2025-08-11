import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingCart, Verified, IndianRupee, Truck, Handshake, Sparkles, TrendingUp, Shield } from "lucide-react";
import vegetablesImg from "@/assets/vegetables.jpg";
import spicesImg from "@/assets/spices.jpg";
import suppliesImg from "@/assets/supplies.jpg";

const features = [
  {
    icon: Users,
    title: "Cooperative Sourcing",
    description: "Pool orders with nearby vendors to unlock wholesale prices and better deals",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: vegetablesImg
  },
  {
    icon: Verified,
    title: "Verified Suppliers",
    description: "All suppliers are background-checked and quality-certified for your peace of mind",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: spicesImg
  },
  {
    icon: IndianRupee,
    title: "Cost Savings",
    description: "Save 20-40% on raw material costs through group purchasing power",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: suppliesImg
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Get your orders delivered directly to your stall or designated pickup points",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: vegetablesImg
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% quality assurance with easy returns and replacements policy",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: spicesImg
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Access analytics and insights to optimize your ingredient purchasing",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: suppliesImg
  }
];

const productCategories = [
  {
    name: "Fresh Vegetables",
    image: vegetablesImg,
    description: "Premium quality vegetables sourced directly from farms"
  },
  {
    name: "Authentic Spices",
    image: spicesImg,
    description: "Traditional Indian spices with guaranteed purity"
  },
  {
    name: "Essential Supplies",
    image: suppliesImg,
    description: "Oil, flour, and other bulk ingredients at wholesale rates"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-primary rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-rainbow rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Features Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 animate-wiggle" />
            Why Choose VendorBandhu?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            Street Food Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Indian street food vendors, with features that understand your unique needs
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10 animate-fade-in">Our Product Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group bg-card/90 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-zoom-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{category.name}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/90 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 overflow-hidden rounded-bl-3xl">
                  <img 
                    src={feature.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:animate-glow-pulse transition-all duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color} group-hover:animate-wiggle`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl font-bold text-accent mb-2">4.8★</div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;