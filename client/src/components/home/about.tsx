import { FadeIn } from "../ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-white/50">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
            {/* culinary preparation food shot */}
            <img 
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef preparing Mag Pulav" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
            />
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              A Tradition of <br />
              <span className="text-accent italic">Excellence</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="space-y-6 text-muted text-lg font-light leading-relaxed">
              <p>
                Darbar Mag Pulav brings you a taste that transcends generations. Our recipe is rooted in the royal kitchens of the past, preserved and perfected for the modern palate.
              </p>
              <p>
                We believe that great food is an art form. Every grain of rice, every spice blend, and every garnish is chosen with the utmost care to ensure that what reaches your table is nothing short of perfection.
              </p>
              <p>
                Authenticity is our promise. We don't just serve a meal; we serve a piece of history, crafted with love and dedication.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
