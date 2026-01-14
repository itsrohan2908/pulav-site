import { FadeIn } from "../ui/fade-in";
import { useMenu } from "@/hooks/use-content";
import { Loader2 } from "lucide-react";

export function Menu() {
  const { data: menuItems, isLoading } = useMenu();

  return (
    <section id="menu" className="py-24 md:py-32 px-4 bg-foreground text-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20 space-y-6">
          <FadeIn>
            <span className="text-accent uppercase tracking-widest text-sm">Our Offerings</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-serif text-white">The Menu</h2>
          </FadeIn>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid gap-12 md:gap-16">
            {menuItems?.length === 0 ? (
              <FadeIn>
                <p className="text-center text-white/50 italic">Menu items coming soon...</p>
              </FadeIn>
            ) : (
              menuItems?.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.1} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex-1 mx-6 border-b border-white/10 relative -top-2" />
                    <span className="text-xl md:text-2xl font-serif text-accent">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-white/60 font-light max-w-xl">{item.description}</p>
                    {item.category && (
                      <span className="text-xs uppercase tracking-wider text-white/30 ml-4 mt-1 border border-white/10 px-2 py-1">
                        {item.category}
                      </span>
                    )}
                  </div>
                </FadeIn>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
