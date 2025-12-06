import categoryWigs from "@/assets/category-wigs.jpg";
import categorySuits from "@/assets/category-suits.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryHandbags from "@/assets/category-handbags.jpg";
import categoryPerfumes from "@/assets/category-perfumes.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { name: "Wigs", image: categoryWigs, description: "Premium Quality Hair" },
  { name: "Suits", image: categorySuits, description: "Elegant Tailoring" },
  { name: "Necklaces", image: categoryNecklaces, description: "Timeless Jewelry" },
  { name: "Handbags", image: categoryHandbags, description: "Luxury Leather" },
  { name: "Perfumes", image: categoryPerfumes, description: "Signature Scents" },
  { name: "Accessories", image: categoryAccessories, description: "Finishing Touches" },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-sans text-sm uppercase tracking-[0.2em] mb-3 block">
            Our Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each piece selected for quality and elegance.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`#products`}
              className="group relative overflow-hidden rounded-lg aspect-square hover-lift cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={`${category.name} - ${category.description} at Sophy's Luminous`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-all duration-300 group-hover:from-charcoal/90" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 text-center">
                <h3 className="font-serif text-lg md:text-2xl font-semibold text-cream mb-1">
                  {category.name}
                </h3>
                <p className="text-cream/80 text-xs md:text-sm font-sans opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
