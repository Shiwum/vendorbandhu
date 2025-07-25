import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, TrendingUp, Users, DollarSign, Clock, MapPin, Star, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

const orders = [
  {
    id: "ORD-001",
    product: "Premium Onions",
    quantity: "500kg",
    vendors: 12,
    value: "₹12,500",
    status: "pending",
    deadline: "2 days",
    location: "Andheri, Mumbai"
  },
  {
    id: "ORD-002", 
    product: "Fresh Tomatoes",
    quantity: "200kg",
    vendors: 8,
    value: "₹6,000",
    status: "accepted",
    deadline: "1 day",
    location: "Dadar, Mumbai"
  },
  {
    id: "ORD-003",
    product: "Mustard Oil",
    quantity: "100L",
    vendors: 15,
    value: "₹14,000",
    status: "completed",
    deadline: "Delivered",
    location: "Bandra, Mumbai"
  }
];

const products = [
  {
    id: 1,
    name: "Premium Onions",
    price: "₹25/kg",
    stock: "2000kg",
    orders: 24,
    rating: 4.8,
    status: "active"
  },
  {
    id: 2,
    name: "Fresh Tomatoes", 
    price: "₹30/kg",
    stock: "800kg",
    orders: 18,
    rating: 4.6,
    status: "active"
  },
  {
    id: 3,
    name: "Pure Mustard Oil",
    price: "₹140/L",
    stock: "500L",
    orders: 32,
    rating: 4.9,
    status: "low_stock"
  }
];

const SupplierPortal = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Supplier Dashboard</h1>
            <p className="text-muted-foreground">Manage your inventory and fulfill bulk orders from street food vendors</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">₹2,45,000</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Package className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">74</div>
                    <div className="text-sm text-muted-foreground">Active Orders</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-subtle">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">186</div>
                    <div className="text-sm text-muted-foreground">Connected Vendors</div>
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
                    <div className="text-2xl font-bold text-foreground">4.7</div>
                    <div className="text-sm text-muted-foreground">Avg. Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="orders">Pending Orders</TabsTrigger>
              <TabsTrigger value="products">My Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="bg-gradient-card border-0 shadow-subtle hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-5 gap-6 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{order.product}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Order ID: {order.id}</p>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{order.location}</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{order.quantity}</div>
                        <div className="text-sm text-muted-foreground">Quantity</div>
                      </div>

                      <div className="text-center">
                        <div className="text-xl font-semibold text-accent">{order.value}</div>
                        <div className="text-sm text-muted-foreground">{order.vendors} vendors</div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{order.deadline}</span>
                        </div>
                        {order.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                              Accept Order
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                        {order.status === 'accepted' && (
                          <Button size="sm" variant="outline">
                            Update Status
                          </Button>
                        )}
                        {order.status === 'completed' && (
                          <Button size="sm" variant="ghost">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="products" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Your Products</h3>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Add New Product
                </Button>
              </div>
              
              <div className="grid gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="bg-gradient-card border-0 shadow-subtle">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-6 gap-4 items-center">
                        <div className="md:col-span-2">
                          <h4 className="font-semibold text-foreground">{product.name}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-primary">{product.price}</div>
                        </div>
                        <div className="text-center">
                          <div className={`font-medium ${product.status === 'low_stock' ? 'text-red-600' : 'text-foreground'}`}>
                            {product.stock}
                          </div>
                          {product.status === 'low_stock' && (
                            <Badge variant="destructive" className="text-xs mt-1">Low Stock</Badge>
                          )}
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-accent">{product.orders}</div>
                          <div className="text-sm text-muted-foreground">orders</div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="ghost">Analytics</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="bg-gradient-card border-0 shadow-subtle">
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>Track your performance and growth metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SupplierPortal;