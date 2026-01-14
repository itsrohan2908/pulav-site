import { FadeIn } from "../ui/fade-in";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The most authentic flavor I've tasted in years. Reminds me of home.",
    author: "Rahul Mehta"
  },
  {
    quote: "An absolute masterpiece. The spice balance is impeccable.",
    author: "Priya Sharma"
  },
  {
    quote: "Royal indeed. A culinary experience that stands out from the rest.",
    author: "Amit Patel"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif">Kind Words</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15} className="text-center space-y-6">
              <Quote className="w-8 h-8 text-accent/30 mx-auto" />
              <blockquote className="text-muted font-light italic leading-relaxed">
                "{item.quote}"
              </blockquote>
              <cite className="block not-italic font-medium text-sm tracking-wider uppercase">
                — {item.author}
              </cite>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
