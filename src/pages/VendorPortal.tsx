import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Users, TrendingUp, Star, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const products = [
  {
    id: 1,
    name: "Premium Onions",
    supplier: "Maharashtra Farms Co-op",
    price: "₹25/kg",
    originalPrice: "₹35/kg",
    savings: "29% off",
    rating: 4.8,
    location: "Pune, Maharashtra",
    cooperative: true,
    minOrder: "50kg",
    groupOrder: "Join 12 vendors"
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    supplier: "Nashik Vegetable Mart",
    price: "₹30/kg",
    originalPrice: "₹42/kg",
    savings: "28% off",
    rating: 4.6,
    location: "Nashik, Maharashtra",
    cooperative: true,
    minOrder: "25kg",
    groupOrder: "Join 8 vendors"
  },
  {
    id: 3,
    name: "Pure Mustard Oil",
    supplier: "Bengal Oil Mills",
    price: "₹140/L",
    originalPrice: "₹180/L",
    savings: "22% off",
    rating: 4.9,
    location: "Kolkata, West Bengal",
    cooperative: false,
    minOrder: "10L",
    groupOrder: null
  }
];

const VendorPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Find quality ingredients at wholesale prices through cooperative sourcing</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">₹12,450</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">18</div>
                    <div className="text-sm text-muted-foreground">Active Groups</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">34%</div>
                    <div className="text-sm text-muted-foreground">Avg. Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">4.8</div>
                    <div className="text-sm text-muted-foreground">Supplier Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="bg-gradient-card border-0 shadow-subtle mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for vegetables, spices, oils..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Vegetables
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Spices
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Oils
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Group Orders
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Listings */}
          <div className="grid gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-gradient-card border-0 shadow-subtle hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                        {product.cooperative && (
                          <Badge className="bg-accent text-accent-foreground">
                            <Users className="w-3 h-3 mr-1" />
                            Cooperative
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{product.supplier}</p>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{product.location}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Min Order: <span className="font-medium">{product.minOrder}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">{product.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {product.savings}
                        </Badge>
                      </div>
                      {product.groupOrder && (
                        <div className="text-right">
                          <div className="text-sm text-primary font-medium">{product.groupOrder}</div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      {product.cooperative ? (
                        <Button className="bg-gradient-primary hover:opacity-90">
                          <Users className="w-4 h-4 mr-2" />
                          Join Group Order
                        </Button>
                      ) : (
                        <Button variant="outline">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPortal;