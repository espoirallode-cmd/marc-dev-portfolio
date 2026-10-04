import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import LightRays from "./LightRays";
import GradientText from "./GradientText";
import ShinyText from "./ShinyText";
import { useIsMobile } from "@/hooks/use-mobile";

const mockups = [
  "/assets/mockup-1.webp",
  "/assets/mockup-2.webp",
  "/assets/mockup-3.webp",
  "/assets/mockup-4.webp",
  "/assets/mockup-5.webp",
  "/assets/mockup-6.webp",
  "/assets/mockup-7.webp"
];

export default function Hero() {
  const title = "Votre présence en ligne, professionnelle et livrée clé en main.";
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 sm:pt-40 bg-black bg-grid-pattern"
    >
      {/* Radial Dark Glow Overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Light Rays WebGL Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#e50024"
        raysSpeed={0.9}
        lightSpread={1.4}
        rayLength={2.8}
        pulsating={true}
        fadeDistance={1.2}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.12}
        noiseAmount={0.0}
        distortion={0.0}
        raysOffset={isMobile ? -0.02 : 0.15}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2.5 bg-black/80 border border-white/15 px-5 py-2 rounded-full mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(229,0,36,0.2)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <ShinyText text="Création de site pro avec l'IA" disabled={false} speed={3} className="font-semibold text-xs sm:text-sm tracking-wide text-white" />
        </div>

        {/* Main Heading */}
        <h1 
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] tracking-tight mb-8"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease-out" }}
        >
          <GradientText
            colors={['#ffffff', '#ff4d6d', '#ffffff', '#e50024']}
            animationSpeed={6}
            className="w-full inline-block pb-2"
          >
            {title}
          </GradientText>
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

      {/* Mockups Marquee */}
      <div className="relative z-10 w-full overflow-hidden mt-16 sm:mt-20 mask-horizontal">
        <div className="flex w-max hover:pause">
          <div className="flex gap-5 sm:gap-7 animate-marquee shrink-0 pr-5 sm:pr-7">
            {mockups.map((src, i) => (
              <div
                key={i}
                className="w-52 h-32 sm:w-72 sm:h-48 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(229,0,36,0.3)] hover:-translate-y-1 cursor-pointer overflow-hidden group"
              >
                {src ? (
                  <img 
                    src={src} 
                    alt={`Mockup ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-zinc-500 font-heading font-medium text-sm">
                    Mockup {i + 1}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-5 sm:gap-7 animate-marquee shrink-0 pr-5 sm:pr-7" aria-hidden="true">
            {mockups.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="w-52 h-32 sm:w-72 sm:h-48 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(229,0,36,0.3)] hover:-translate-y-1 cursor-pointer overflow-hidden group"
              >
                {src ? (
                  <img 
                    src={src} 
                    alt={`Mockup ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-zinc-500 font-heading font-medium text-sm">
                    Mockup {i + 1}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-bounce text-zinc-500 z-10 hidden sm:block">
        <ChevronDown className="w-6 h-6 text-rose-500" />
      </div>
    </section>
  );
}

