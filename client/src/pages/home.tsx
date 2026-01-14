import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Why } from "@/components/home/why";
import { Menu } from "@/components/home/menu";
import { Gallery } from "@/components/home/gallery";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";
import { StickyOrder } from "@/components/layout/sticky-order";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Darbar Mag Pulav",
    "image": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    "telephone": "+917405467136",
    "priceRange": "$$",
    "servesCuisine": "Indian",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20">
      <Helmet>
        <title>Darbar Mag Pulav | Authentic Royal Cuisine</title>
        <meta name="description" content="Experience the authentic taste of Mag Pulav at Darbar. A royal culinary tradition prepared with premium ingredients and passion." />
        <meta property="og:title" content="Darbar Mag Pulav | Authentic Royal Cuisine" />
        <meta property="og:description" content="Experience the authentic taste of Mag Pulav at Darbar." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Why />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <StickyOrder />
    </div>
  );
}
