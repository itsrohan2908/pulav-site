import { FadeIn } from "../ui/fade-in";
import { Star, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Ingredients",
    description: "We source only the finest basmati rice and hand-picked spices for an authentic aroma."
  },
  {
    icon: Clock,
    title: "Slow Cooked",
    description: "Our Mag Pulav is slow-cooked to perfection, allowing flavors to meld beautifully."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each batch is prepared in small quantities to ensure consistent quality and taste."
  }
];

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif">Why Choose Us</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-12 h-1 bg-accent mx-auto" />
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)} className="text-center space-y-4 p-8 hover:bg-white transition-colors duration-500 rounded-sm">
              <div className="w-12 h-12 mx-auto bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium">{feature.title}</h3>
              <p className="text-muted leading-relaxed font-light">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
