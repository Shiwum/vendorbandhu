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
      name: "Shivam Singh",
      role: "Founder & CEO",
      description: "Former street vendor turned tech entrepreneur",
    },
    {
      name: "Kumar Tejshwi",
      role: "Head of Operations",
      description: "Supply chain expert with 10+ years experience",
    },
    {
      name: "Gaurav Choudhry",
      role: "Community Manager",
      description: "Connects vendors and suppliers across India",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 animate-fade-in">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Empowering India's Street Food Vendors
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
                VendorBandhu was born from the streets of Mumbai, where we witnessed the daily struggles of street food vendors trying to source quality ingredients at affordable prices.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Our Mission</h2>
              <Card className="mb-8 animate-scale-in hover:scale-105 transition-transform duration-300 hover:animate-glow-pulse backdrop-blur-sm bg-gradient-card">
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
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-scale-in hover:animate-glow-pulse" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:animate-float" />
                      <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
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
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="animate-slide-in-left backdrop-blur-sm bg-card/30 p-6 rounded-lg hover:bg-card/50 transition-colors">
                  In 2023, our founder Shivam Singh was running a successful vada pav stall in Dadar, Mumbai. Despite his popularity, he struggled with rising ingredient costs and unreliable suppliers. He realized that if vendors could unite their purchasing power, they could negotiate better prices and ensure consistent quality.
                </p>
                <p className="animate-slide-in-right backdrop-blur-sm bg-card/30 p-6 rounded-lg hover:bg-card/50 transition-colors" style={{animationDelay: '0.2s'}}>
                  What started as a WhatsApp group of 20 local vendors has now grown into a platform serving hundreds of vendors across multiple cities. VendorBandhu has saved vendors an average of 30% on their ingredient costs while connecting them with verified, reliable suppliers.
                </p>
                <p className="animate-slide-in-left backdrop-blur-sm bg-card/30 p-6 rounded-lg hover:bg-card/50 transition-colors" style={{animationDelay: '0.4s'}}>
                  Today, we're proud to support the backbone of India's food culture - the hardworking street food vendors who feed millions of people every day with delicious, affordable meals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-500 animate-scale-in hover:shadow-2xl hover:animate-glow-pulse backdrop-blur-sm bg-card/80" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:animate-float">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">{member.name}</CardTitle>
                    <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{member.description}</p>
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