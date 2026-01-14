export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl mb-2">Darbar Mag Pulav</h3>
          <p className="text-white/40 text-sm">Authentic flavors, royal tradition.</p>
        </div>

        <nav className="flex gap-8 text-sm uppercase tracking-widest text-white/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="text-white/20 text-xs">
          © {new Date().getFullYear()} Darbar Mag Pulav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
