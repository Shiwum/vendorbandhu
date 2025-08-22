import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import PortalCards from "@/components/PortalCards";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SearchFilters />
      <ProductShowcase />
      <TestimonialsSection />
      <PortalCards />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
