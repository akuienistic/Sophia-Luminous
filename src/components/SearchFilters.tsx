import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Wigs", "Suits", "Necklaces", "Handbags", "Perfumes", "Accessories"];
const colors = ["All", "Gold", "Black", "Cream", "Brown", "Silver"];
const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "$200 - $300", value: "200-300" },
  { label: "Over $300", value: "300+" },
];

const SearchFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedColor("All");
    setSelectedPrice("all");
  };

  const hasActiveFilters = 
    searchQuery || selectedCategory !== "All" || selectedColor !== "All" || selectedPrice !== "all";

  return (
    <section className="py-12 md:py-16 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded-full"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <div className="flex justify-center mb-6 md:hidden">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-gold" />
            )}
          </Button>
        </div>

        {/* Filters */}
        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gold text-primary-foreground"
                        : "bg-background border border-border text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Color
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedColor === color
                        ? "bg-gold text-primary-foreground"
                        : "bg-background border border-border text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Price Range
              </label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full h-11 px-4 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="text-center mt-6">
              <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
