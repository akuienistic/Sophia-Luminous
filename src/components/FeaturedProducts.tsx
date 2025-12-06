import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import productWig1 from "@/assets/product-wig-1.jpg";
import productWig2 from "@/assets/product-wig-2.jpg";
import productNecklace1 from "@/assets/product-necklace-1.jpg";
import productSuit1 from "@/assets/product-suit-1.jpg";
import productPerfume1 from "@/assets/product-perfume-1.jpg";
import productBag1 from "@/assets/product-bag-1.jpg";

const products = [
  {
    id: 1,
    name: "Golden Blonde Straight Wig",
    description: "Premium human hair, natural look, adjustable cap",
    price: 180,
    category: "Wigs",
    image: productWig1,
  },
  {
    id: 2,
    name: "Midnight Curls Wig",
    description: "Luxurious curls, heat-resistant, breathable",
    price: 220,
    category: "Wigs",
    image: productWig2,
  },
  {
    id: 3,
    name: "Teardrop Gold Pendant",
    description: "18K gold plated, crystal accent, elegant chain",
    price: 85,
    category: "Necklaces",
    image: productNecklace1,
  },
  {
    id: 4,
    name: "Ivory Blazer Suit",
    description: "Italian wool blend, tailored fit, timeless style",
    price: 320,
    category: "Suits",
    image: productSuit1,
  },
  {
    id: 5,
    name: "Amber Mystique Perfume",
    description: "Oriental notes, long-lasting, 100ml",
    price: 95,
    category: "Perfumes",
    image: productPerfume1,
  },
  {
    id: 6,
    name: "Cream Leather Tote",
    description: "Genuine leather, gold hardware, spacious",
    price: 275,
    category: "Handbags",
    image: productBag1,
  },
];

const FeaturedProducts = () => {
  const whatsappNumber = "1234567890";

  const handleWhatsAppOrder = (product: typeof products[0]) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering: ${product.name} - $${product.price}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-sans text-sm uppercase tracking-[0.2em] mb-3 block">
            Bestsellers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that define elegance and quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full text-muted-foreground">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-semibold text-gold">
                    ${product.price}
                  </span>
                  <Button 
                    variant="whatsapp" 
                    size="sm"
                    onClick={() => handleWhatsAppOrder(product)}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Order</span>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gold-outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
