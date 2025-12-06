import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your products.");
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Sophy's Luminous - Premium Fashion & Beauty Collection featuring luxury wigs, handbags, necklaces, and perfumes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl mx-[10px]">
          <span style={{
          animationDelay: "0.2s",
          animationFillMode: "forwards"
        }} className="inline-block text-gold font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up mx-[70px]">
            Premium Collection
          </span>
          
          <h1 style={{
          animationDelay: "0.4s",
          animationFillMode: "forwards"
        }} className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up mx-[70px]">
            Elevate Your{" "}
            <span className="text-gradient-gold">Glow</span>
          </h1>
          
          <p style={{
          animationDelay: "0.6s",
          animationFillMode: "forwards"
        }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg opacity-0 animate-fade-up mx-[70px]">
            Premium Wigs, Suits & Accessories. Discover curated fashion pieces designed to make you shine.
          </p>
          
          <div style={{
          animationDelay: "0.8s",
          animationFillMode: "forwards"
        }} className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up mx-[50px]">
            <Button variant="gold" size="xl" asChild>
              <a href="#categories">View Collections</a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;