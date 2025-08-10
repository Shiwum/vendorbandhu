import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Active Vendors", value: "500+", icon: Users },
    { label: "Verified Suppliers", value: "150+", icon: Shield },
    { label: "Cities Covered", value: "12", icon: Target },
    { label: "Cost Savings", value: "30%", icon: Heart },
  ];

  const team = [
    {
      name: "Raj Patel",
      role: "Founder & CEO",
      description: "Former street vendor turned tech entrepreneur",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      description: "Supply chain expert with 10+ years experience",
    },
    {
      name: "Arjun Singh",
      role: "Community Manager",
      description: "Connects vendors and suppliers across India",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering India's Street Food Vendors
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                VendorBandhu was born from the streets of Mumbai, where we witnessed the daily struggles of street food vendors trying to source quality ingredients at affordable prices.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-center">
                    To revolutionize the street food ecosystem by creating a cooperative platform where vendors unite their purchasing power, access verified suppliers, and build sustainable businesses while preserving India's rich street food culture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  In 2023, our founder Raj Patel was running a successful vada pav stall in Dadar, Mumbai. Despite his popularity, he struggled with rising ingredient costs and unreliable suppliers. He realized that if vendors could unite their purchasing power, they could negotiate better prices and ensure consistent quality.
                </p>
                <p>
                  What started as a WhatsApp group of 20 local vendors has now grown into a platform serving hundreds of vendors across multiple cities. VendorBandhu has saved vendors an average of 30% on their ingredient costs while connecting them with verified, reliable suppliers.
                </p>
                <p>
                  Today, we're proud to support the backbone of India's food culture - the hardworking street food vendors who feed millions of people every day with delicious, affordable meals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="outline">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;