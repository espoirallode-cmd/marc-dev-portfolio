import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
      {/* Glow top full-width */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-[440px]"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(230,0,41,0.28) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Main Heading */}
        <h1
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease-out" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}


