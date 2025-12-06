import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import SearchFilters from "@/components/SearchFilters";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <SearchFilters />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
