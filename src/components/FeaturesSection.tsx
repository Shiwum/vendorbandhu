import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingCart, Verified, IndianRupee, Truck, Handshake } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Cooperative Sourcing",
    description: "Pool orders with nearby vendors to unlock wholesale prices and better deals",
    color: "text-primary"
  },
  {
    icon: Verified,
    title: "Verified Suppliers",
    description: "All suppliers are background-checked and quality-certified for your peace of mind",
    color: "text-accent"
  },
  {
    icon: IndianRupee,
    title: "Cost Savings",
    description: "Save 20-40% on raw material costs through group purchasing power",
    color: "text-primary"
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Get your orders delivered directly to your stall or designated pickup points",
    color: "text-accent"
  },
  {
    icon: ShoppingCart,
    title: "Smart Ordering",
    description: "AI-powered recommendations based on your menu and seasonal demand",
    color: "text-primary"
  },
  {
    icon: Handshake,
    title: "Trust Network",
    description: "Build lasting relationships with reliable suppliers and fellow vendors",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose VendorBandhu?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Indian street food vendors, with features that understand your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-subtle hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;