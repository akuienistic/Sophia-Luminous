import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amara Johnson",
    role: "Fashion Enthusiast",
    content: "The quality of the wigs is absolutely incredible! I've never felt more confident. The customer service was exceptional, and my order arrived beautifully packaged.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michelle Chen",
    role: "Business Professional",
    content: "Found my perfect blazer here. The tailoring is impeccable, and it's become my go-to for important meetings. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Beauty Influencer",
    content: "The perfume selection is divine! Each fragrance is unique and long-lasting. Sophy's Luminous has become my go-to for luxury accessories.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-sans text-sm uppercase tracking-[0.2em] mb-3 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gold-gradient flex items-center justify-center z-10">
            <Quote className="w-5 h-5 text-primary-foreground" />
          </div>

          {/* Cards Container */}
          <div className="relative overflow-hidden rounded-2xl bg-cream p-8 md:p-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 text-center"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-serif italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-gold" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
