import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const words = title.split(" ");
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 sm:pt-40"
    >
      {/* Light Rays WebGL Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={2.5}
        pulsating={false}
        fadeDistance={1.0}
        saturation={0.8}
        followMouse={true}
        mouseInfluence={0.08}
        noiseAmount={0.0}
        distortion={0.0}
        raysOffset={isMobile ? 0.05 : 0.2}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-foreground/5 text-muted-foreground text-sm font-body px-5 py-2 rounded-full mb-8 border border-foreground/10 backdrop-blur-sm tracking-wide">
          <span className="opacity-50 text-[10px] tracking-widest">///</span>
          <ShinyText text="Création de site pro avec l'IA" disabled={false} speed={3} className="font-medium" />
        </span>

        <h1 
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-tight mb-8"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease-out" }}
        >
          <GradientText
            colors={['#ffffff', '#e50024', '#ffffff']}
            animationSpeed={6}
            className="w-full inline-block pb-2"
          >
            {title}
          </GradientText>
        </h1>

        <p className="font-body text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Des sites qui convertissent, pour des businesses qui avancent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#offres"
            className="bg-[#e4e4e7] hover:bg-white text-zinc-900 px-8 py-3.5 rounded-full font-medium text-sm transition-colors cursor-pointer"
          >
            Voir mes offres
          </a>
          <a
            href="#contact"
            className="bg-foreground/5 border border-foreground/10 text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:bg-foreground/10 hover:border-foreground/20 transition-colors cursor-pointer backdrop-blur-sm"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Mockups Marquee */}
      <div className="relative z-10 w-full overflow-hidden mt-12 sm:mt-16 mask-horizontal">
        <div className="flex w-max hover:pause">
          <div className="flex gap-4 sm:gap-6 animate-marquee shrink-0 pr-4 sm:pr-6">
            {mockups.map((src, i) => (
              <div
                key={i}
                className="w-44 h-28 sm:w-60 sm:h-40 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 backdrop-blur-sm shadow-xl transition-all duration-300 hover:bg-foreground/10 hover:border-primary/40 cursor-pointer overflow-hidden group"
              >
                {src ? (
                  <img 
                    src={src} 
                    alt={`Mockup ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-muted-foreground/40 font-heading font-medium text-sm">
                    Mockup {i + 1}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4 sm:gap-6 animate-marquee shrink-0 pr-4 sm:pr-6" aria-hidden="true">
            {mockups.map((src, i) => (
              <div
                key={`dup-${i}`}
                className="w-44 h-28 sm:w-60 sm:h-40 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 backdrop-blur-sm shadow-xl transition-all duration-300 hover:bg-foreground/10 hover:border-primary/40 cursor-pointer overflow-hidden group"
              >
                {src ? (
                  <img 
                    src={src} 
                    alt={`Mockup ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <span className="text-muted-foreground/40 font-heading font-medium text-sm">
                    Mockup {i + 1}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-bounce text-muted-foreground z-10 hidden sm:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
