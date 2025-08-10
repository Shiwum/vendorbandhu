import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, TrendingUp, Sparkles } from "lucide-react";
import vegetablesImg from "@/assets/vegetables.jpg";
import spicesImg from "@/assets/spices.jpg";
import suppliesImg from "@/assets/supplies.jpg";

const products = [
  {
    id: 1,
    name: "Premium Red Onions",
    category: "Vegetables",
    price: "₹22",
    originalPrice: "₹35",
    unit: "per kg",
    rating: 4.8,
    reviews: 124,
    image: vegetablesImg,
    discount: "37% OFF",
    groupBuy: true,
    minQuantity: "100kg",
    vendor: "FreshFarms Co."
  },
  {
    id: 2,
    name: "Authentic Garam Masala",
    category: "Spices",
    price: "₹180",
    originalPrice: "₹250",
    unit: "per kg",
    rating: 4.9,
    reviews: 89,
    image: spicesImg,
    discount: "28% OFF",
    groupBuy: true,
    minQuantity: "25kg",
    vendor: "Spice Masters"
  },
  {
    id: 3,
    name: "Refined Sunflower Oil",
    category: "Oils",
    price: "₹95",
    originalPrice: "₹125",
    unit: "per litre",
    rating: 4.7,
    reviews: 156,
    image: suppliesImg,
    discount: "24% OFF",
    groupBuy: true,
    minQuantity: "200L",
    vendor: "Golden Oil Mills"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-primary rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 animate-wiggle" />
            Trending Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              Best Deals
            </span>
            <span className="block">This Week</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join group orders and save up to 40% on premium quality ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group bg-gradient-card border-0 shadow-glow hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-zoom-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-primary text-primary-foreground font-bold animate-glow-pulse">
                    {product.discount}
                  </Badge>
                </div>
                
                {product.groupBuy && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 text-accent border-accent font-medium">
                      Group Buy
                    </Badge>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                
                <div className="text-sm text-muted-foreground">
                  by {product.vendor}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.unit}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Group buy info */}
                  <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium">
                        Min order: {product.minQuantity}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Join with other vendors to unlock this price
                    </div>
                  </div>

                  {/* Action button */}
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:animate-wiggle" />
                    Join Group Order
                    <Sparkles className="ml-2 h-4 w-4 group-hover/btn:animate-shimmer" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Want to see more products? 
            <span className="text-primary font-semibold"> Browse our full catalog!</span>
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;