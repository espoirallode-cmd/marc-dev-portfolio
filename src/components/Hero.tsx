import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const title = "On construit votre présence en ligne, vous gérez votre business.";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 sm:pt-40 bg-black bg-grid-pattern"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Main Heading */}
        <h1
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] tracking-tight mb-8 text-white"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease-out" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Des sites d'exception qui captivent votre audience, convertissent vos visiteurs et propulsent votre activité.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#offres"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-base px-8 py-4 rounded-full shadow-[0_0_30px_rgba(229,0,36,0.4)] hover:shadow-[0_0_45px_rgba(229,0,36,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>Voir mes offres</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-zinc-900/90 border border-white/15 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-zinc-800 hover:border-white/30 transition-all duration-300 backdrop-blur-md hover:scale-105 cursor-pointer"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-bounce text-zinc-500 z-10 hidden sm:block">
        <ChevronDown className="w-6 h-6 text-rose-500" />
      </div>
    </section>
  );
}


