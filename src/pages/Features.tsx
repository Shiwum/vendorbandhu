import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingCart, 
  TrendingDown, 
  Shield, 
  MessageCircle, 
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const vendorFeatures = [
    {
      icon: Users,
      title: "Group Buying Power",
      description: "Join other vendors to buy in bulk and save up to 30% on ingredients",
      color: "text-blue-500"
    },
    {
      icon: TrendingDown,
      title: "Price Comparison",
      description: "Compare prices from multiple suppliers in real-time",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "Access only FSSAI certified and background-verified suppliers",
      color: "text-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Chat directly with suppliers for custom requirements",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Order Tracking",
      description: "Track your orders from placement to delivery in real-time",
      color: "text-indigo-500"
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Rate suppliers and see community reviews before ordering",
      color: "text-yellow-500"
    }
  ];

  const supplierFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track sales, popular products, and vendor relationships",
      color: "text-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Bulk Order Management",
      description: "Efficiently handle large group orders from multiple vendors",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get notified immediately when new orders come in",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Order Fulfillment",
      description: "Streamlined process to confirm and deliver orders",
      color: "text-orange-500"
    }
  ];

  const platformFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline capabilities"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in Hindi and English with more languages coming"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Platform Features</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need to Succeed
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how VendorBandhu empowers vendors and suppliers with cutting-edge features designed for the Indian street food ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/vendor-portal">Try Vendor Portal</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/supplier-portal">Try Supplier Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="vendors" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="vendors">For Vendors</TabsTrigger>
                <TabsTrigger value="suppliers">For Suppliers</TabsTrigger>
              </TabsList>

              <TabsContent value="vendors">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Vendor Features</h2>
                  <p className="text-muted-foreground text-lg">
                    Tools designed to help street food vendors reduce costs and improve operations
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vendorFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Icon className={`w-10 h-10 ${feature.color} mb-4`} />
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="suppliers">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Supplier Features</h2>
                  <p className="text-muted-foreground text-lg">
                    Comprehensive tools for suppliers to manage orders and grow their business
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {supplierFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Icon className={`w-10 h-10 ${feature.color} mb-4`} />
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Platform Advantages</h2>
              <p className="text-muted-foreground text-lg">
                Built specifically for the Indian market with local needs in mind
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg">
                Simple steps to start saving money and improving your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create your account with phone number verification
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Browse & Join</h3>
                <p className="text-muted-foreground">
                  Find suppliers and join group orders to get bulk pricing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Save Money</h3>
                <p className="text-muted-foreground">
                  Enjoy lower prices and reliable delivery to your location
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of vendors and suppliers already saving money with VendorBandhu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/vendor-portal">Start as Vendor</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/supplier-portal">Start as Supplier</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;