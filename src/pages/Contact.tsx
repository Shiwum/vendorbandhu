import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  HeadphonesIcon,
  Send
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "vendor",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "vendor",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["123 Street Food Plaza", "Dadar West, Mumbai 400028", "Maharashtra, India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109", "Vendor Support: +91 76543 21098"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["support@vendorbandhu.com", "vendors@vendorbandhu.com", "suppliers@vendorbandhu.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM", "Emergency Support: 24/7"]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Quick responses for urgent queries",
      action: "Message on WhatsApp",
      color: "text-green-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      action: "Send Email",
      color: "text-purple-500"
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
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're Here to Help
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about VendorBandhu? Need support? Want to become a partner? 
                Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="type" className="block text-sm font-medium mb-2">
                        I am a *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                        required
                      >
                        <option value="vendor">Street Food Vendor</option>
                        <option value="supplier">Supplier/Wholesaler</option>
                        <option value="investor">Potential Investor</option>
                        <option value="partner">Business Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="font-semibold mb-2">{info.title}</h3>
                                <div className="space-y-1">
                                  {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-muted-foreground text-sm">
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Support Channel</h2>
              <p className="text-muted-foreground text-lg">
                Get help through your preferred communication method
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${channel.color}`} />
                      <CardTitle className="text-xl">{channel.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{channel.description}</p>
                      <Button variant="outline" className="w-full">
                        {channel.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I join VendorBandhu as a vendor?",
                  answer: "Simply click on 'Vendor Login' and sign up with your phone number. We'll verify your account and you can start browsing suppliers immediately."
                },
                {
                  question: "What are the fees for using the platform?",
                  answer: "VendorBandhu is free for vendors to use. Suppliers pay a small commission only on successful orders."
                },
                {
                  question: "How does group buying work?",
                  answer: "Vendors can join existing group orders or create new ones. When the minimum quantity is reached, everyone gets bulk pricing."
                },
                {
                  question: "What if I have issues with my order?",
                  answer: "Contact our support team immediately. We mediate between vendors and suppliers to resolve any issues quickly."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;