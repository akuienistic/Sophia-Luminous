import { Sparkles, Heart, Shield } from "lucide-react";

const BrandStory = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Every piece is carefully selected for exceptional craftsmanship and materials.",
    },
    {
      icon: Heart,
      title: "Curated with Love",
      description: "We hand-pick each item to ensure it meets our high standards of elegance.",
    },
    {
      icon: Shield,
      title: "Trusted Excellence",
      description: "Years of experience bringing you the finest fashion and beauty products.",
    },
  ];

  return (
    <section id="story" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold font-sans text-sm uppercase tracking-[0.2em] mb-3 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Sophy's Luminous, we believe that true beauty shines from within. Founded with a passion 
                for curated elegance, we bring you a carefully selected collection of premium wigs, 
                sophisticated suits, exquisite jewelry, luxury handbags, and captivating fragrances.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each piece in our collection is chosen with care, ensuring that when you shop with us, 
                you're not just buying a product—you're investing in quality, style, and confidence. 
                We're here to help you elevate your glow and express your unique beauty.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 md:p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gold-gradient mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
