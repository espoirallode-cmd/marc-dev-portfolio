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
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-full bg-[#0a0e1a]/85 border border-slate-800/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <span className="font-heading font-extrabold text-lg text-white tracking-tight">
            Marc<span className="text-blue-400">Dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Démarrer mon projet
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer p-1.5 rounded-full bg-white/5 border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4 rounded-3xl bg-[#0a0e1a]/95 backdrop-blur-2xl border border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white font-medium transition-colors text-base py-1.5 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold text-center shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Démarrer mon projet
          </a>
        </div>
      )}
    </nav>
  );
}

