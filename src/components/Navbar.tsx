import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Avantages", href: "#avantages" },
    { label: "Offres", href: "#offres" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(3, 7, 30, 0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-heading font-bold text-xl text-foreground tracking-tight">
          Marc Dev<span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#e4e4e7] hover:bg-white text-zinc-900 px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Démarrer mon projet
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#e4e4e7] hover:bg-white text-zinc-900 px-6 py-2.5 rounded-full text-sm font-medium text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Démarrer mon projet
          </a>
        </div>
      )}
    </nav>
  );
}
