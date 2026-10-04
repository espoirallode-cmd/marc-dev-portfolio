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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : "py-5 bg-black/40 backdrop-blur-md border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(229,0,36,0.5)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-rose-500" />
            </div>
          </div>
          <span className="font-heading font-extrabold text-xl text-white tracking-tight group-hover:text-rose-400 transition-colors">
            Marc <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Dev</span>
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
            className="inline-flex items-center justify-center bg-[#e60029] hover:bg-[#c2001f] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
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
            className="mt-2 bg-[#e60029] hover:bg-[#c2001f] text-white px-6 py-3 rounded-full text-sm font-semibold text-center transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Démarrer mon projet
          </a>
        </div>
      )}
    </nav>
  );
}

