import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-300">
      <nav
        className={`w-full rounded-full transition-all duration-300 bg-[#090b11]/80 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] ${
          scrolled ? "border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight">
              Marcdev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:to-rose-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-zinc-900/90 border border-white/15 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-zinc-800 hover:border-white/30 transition-all duration-300 backdrop-blur-md hover:scale-105 cursor-pointer"
            >
              Démarrer mon projet
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white cursor-pointer p-2 rounded-lg bg-white/5 border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-6 pt-4 pb-6 flex flex-col gap-4 bg-[#090b11]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl animate-in slide-in-from-top duration-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-300 hover:text-white font-medium transition-colors text-base py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-zinc-900/90 border border-white/15 text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-zinc-800 hover:border-white/30 transition-all backdrop-blur-md cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Démarrer mon projet
          </a>
        </div>
      )}
    </header>
  );
}

