import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "VendorBandhu कैसे काम करता है?",
    answer: "VendorBandhu एक cooperative platform है जहाँ vendors मिलकर bulk में raw materials order करते हैं। इससे wholesale prices मिलते हैं और quality guarantee भी होती है। आप हमारे platform पर register करें, nearby vendors के साथ group बनाएं, और bulk orders place करें।"
  },
  {
    id: "faq-2", 
    question: "क्या group orders में minimum quantity की requirement है?",
    answer: "हाँ, हर product के लिए minimum order quantity (MOQ) होती है। यह suppliers के according अलग-अलग होती है। Group बनाकर यह MOQ easily achieve कर सकते हैं और सभी को wholesale rates मिलते हैं।"
  },
  {
    id: "faq-3",
    question: "Payment कैसे करते हैं और कितना safe है?",
    answer: "हमारा payment system completely secure है। आप UPI, Net Banking, या Digital Wallet से payment कर सकते हैं। हम escrow system use करते हैं - यानी पैसा तब तक hold रहता है जब तक goods receive नहीं हो जाते।"
  },
  {
    id: "faq-4",
    question: "Quality guarantee कैसे मिलती है?",
    answer: "सभी suppliers हमारे द्वारा verified हैं। Quality standards maintain करने के लिए regular audits होते हैं। अगर quality issue है तो replacement या refund की गारंटी है। Customer ratings और reviews भी देख सकते हैं।"
  },
  {
    id: "faq-5",
    question: "Delivery कितने समय में होती है?",
    answer: "Location और product के आधार पर delivery 1-3 दिन में होती है। Group orders के लिए central location पर delivery होती है, फिर सभी vendors अपना share collect कर सकते हैं।"
  },
  {
    id: "faq-6",
    question: "Registration के लिए कौन से documents चाहिए?",
    answer: "Registration के लिए Aadhaar Card, business proof (shop license या GST number), और bank details चाहिए। Verification process 24-48 घंटे में complete हो जाती है।"
  },
  {
    id: "faq-7",
    question: "क्या कोई membership fee या commission है?",
    answer: "Basic membership free है। हम suppliers से small commission लेते हैं, vendors को कोई extra charge नहीं देना पड़ता। Premium features के लिए अलग plans available हैं।"
  },
  {
    id: "faq-8",
    question: "अगर group में कोई vendor payment नहीं करे तो क्या होगा?",
    answer: "हमारा prepaid system है - order confirm करने से पहले payment होता है। अगर कोई vendor अपना share नहीं भरता, तो वो order से automatically remove हो जाता है। बाकी vendors का order proceed होता रहता है।"
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about VendorBandhu and how it works
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border border-border/30 rounded-lg px-6 shadow-warm hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              📞 Call us: +91 98765 43210
            </a>
            <a 
              href="mailto:support@vendorbandhu.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              ✉️ Email: support@vendorbandhu.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;