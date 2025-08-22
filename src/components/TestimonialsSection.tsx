import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "राजेश कुमार",
    business: "Rajesh Chaat Corner",
    location: "Mumbai",
    rating: 5,
    testimonial: "VendorBandhu के साथ जुड़ने के बाद मेरी सामग्री की लागत 35% कम हो गई है। अब मैं अच्छी quality के ingredients use कर पाता हूं।",
    avatar: "👨‍🍳"
  },
  {
    id: 2,
    name: "प्रिया शर्मा",
    business: "Priya's South Indian",
    location: "Delhi",
    rating: 5,
    testimonial: "Group ordering system बहुत helpful है। अब हम 10-15 vendors मिलकर bulk में order करते हैं और अच्छे rates मिलते हैं।",
    avatar: "👩‍🍳"
  },
  {
    id: 3,
    name: "मोहन गुप्ता",
    business: "Mohan's Pav Bhaji",
    location: "Pune",
    rating: 5,
    testimonial: "Suppliers verified हैं और quality guarantee के साथ materials मिलते हैं। Customer trust भी बढ़ा है।",
    avatar: "🧑‍🍳"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Vendors Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from vendors who have transformed their businesses with VendorBandhu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-card/90 backdrop-blur-sm border border-border/30 shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Quote className="h-6 w-6 text-primary opacity-50" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Vendor Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">₹2Cr+</div>
            <div className="text-sm text-muted-foreground">Total Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2500+</div>
            <div className="text-sm text-muted-foreground">Active Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;