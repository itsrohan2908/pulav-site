import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function StickyOrder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderClick = () => {
    // Analytics tracking
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "whatsapp_click" });
    }
    
    // Open WhatsApp
    window.open("https://wa.me/917405467136", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <button
            onClick={handleOrderClick}
            className="pointer-events-auto bg-neutral-900 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="font-sans font-medium tracking-wide">Order Online</span>
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
