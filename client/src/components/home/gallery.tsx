import { FadeIn } from "../ui/fade-in";

const images = [
  // authentic biryani pot
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800",
  // spices and rice composition
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
  // plated pulav dish elegant
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800"
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative aspect-[4/5] overflow-hidden group">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
