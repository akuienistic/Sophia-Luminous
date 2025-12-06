import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "1234567890";
  const message = encodeURIComponent("Hello! I'm interested in your products.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(142,70%,49%)] text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,49%)] animate-ping opacity-30" />
    </a>
  );
};

export default FloatingWhatsApp;
