import { FadeIn } from "../ui/fade-in";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#B8894D_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <FadeIn>
          <span className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            Est. 2024
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] tracking-tight">
            Authentic <br />
            <span className="italic text-accent">Mag Pulav</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed mt-6">
            A royal culinary experience. Discover the rich heritage of authentic flavors prepared with passion and tradition.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("menu")}
            className="px-8 py-4 bg-foreground text-background font-medium min-w-[160px] hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            View Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({ event: "whatsapp_click" });
              }
              window.open("https://wa.me/917405467136", "_blank");
            }}
            className="px-8 py-4 border border-foreground/20 text-foreground font-medium min-w-[160px] hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Order Now
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
