import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Zap, PenSquare, Smartphone, Search } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    num: "01",
    title: "Livraison rapide",
    desc: "Site livré sous 7 jours, prêt à l'emploi.",
  },
  {
    icon: PenSquare,
    num: "02",
    title: "Design sur-mesure",
    desc: "Un design unique adapté à votre identité.",
  },
  {
    icon: Smartphone,
    num: "03",
    title: "100% Responsive",
    desc: "Parfait sur mobile, tablette et desktop.",
  },
  {
    icon: Search,
    num: "04",
    title: "SEO optimisé",
    desc: "Visible sur Google dès le lancement.",
  },
];

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight * 0.45;

      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      const section = document.getElementById("avantages");
      if (section) {
        const secRect = section.getBoundingClientRect();
        if (secRect.top < windowHeight * 0.85 && secRect.bottom > windowHeight * 0.15) {
          setActiveIndex(closestIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="avantages" className="py-20 sm:py-28 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 sm:mb-20 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>

        {/* Workflow Chain Layout */}
        <div className="flex flex-col items-center">
          {advantages.map((a, i) => {
            const isActive = activeIndex === i;

            return (
              <div key={i} className="w-full flex flex-col items-center">
                {/* Node Card with Fade-in */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="w-full flex justify-center"
                >
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`relative w-full max-w-lg cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-out select-none ${
                      isActive
                        ? "bg-[#E60029] border border-[#E60029] text-white shadow-2xl scale-[1.02]"
                        : "bg-zinc-950/90 border border-white/10 text-white/90 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                    }`}
                  >
                    {/* Top connector dot on card edge */}
                    {i > 0 && (
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 bg-zinc-800 border border-zinc-600" />
                    )}

                    {/* Bottom connector dot on card edge */}
                    {i < advantages.length - 1 && (
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 bg-zinc-800 border border-zinc-600" />
                    )}

                    {/* Left vertical pill indicator */}
                    <div
                      className={`absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-white" : "bg-[#E60029]"
                      }`}
                    />

                    {/* Card Content */}
                    <div className="flex items-center gap-4 pl-4 pr-1">
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-white/20 border border-white/30 text-white"
                            : "bg-white/5 border border-white/10 text-white/70"
                        }`}
                      >
                        <a.icon className="w-5 h-5" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-heading font-bold text-base sm:text-lg leading-tight truncate">
                            {a.title}
                          </h3>
                          <span
                            className={`font-mono text-xs font-bold tracking-widest transition-colors duration-300 ${
                              isActive ? "text-white/80" : "text-white/30"
                            }`}
                          >
                            {a.num}
                          </span>
                        </div>
                        <p
                          className={`font-body text-xs sm:text-sm mt-1 leading-snug line-clamp-2 transition-colors duration-300 ${
                            isActive ? "text-white/95 font-medium" : "text-zinc-400"
                          }`}
                        >
                          {a.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Vertical Dotted Connector between cards */}
                {i < advantages.length - 1 && (
                  <div className="relative flex flex-col items-center justify-center my-1 sm:my-1.5 h-10 sm:h-12 w-full">
                    {/* Vertical dashed line */}
                    <div className="h-full w-0 border-l-2 border-dashed border-zinc-700/80" />
                    {/* Intermediate Dot Node */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
