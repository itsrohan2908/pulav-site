import { Link } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrder = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "whatsapp_click" });
    }
    window.open("https://wa.me/917405467136", "_blank");
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 md:px-8 py-6",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight z-50 hover:opacity-80 transition-opacity">
          Darbar Mag Pulav
        </Link>

        <button 
          onClick={handleOrder}
          className="hidden md:block px-6 py-2 border border-foreground/10 hover:border-accent hover:text-accent transition-colors rounded-sm text-sm font-medium tracking-wide uppercase"
        >
          Order Online
        </button>
      </div>
    </header>
  );
}
