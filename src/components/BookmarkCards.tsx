import { useState, useEffect, useRef } from "react";

const cards = [
  {
    brand: "Bright Path®",
    buttonLabel: "Cible",
    tagline: "Une croissance visible dès le premier mois.",
    title: "Landing page",
    image: "/assets/card-1.png",
    dots: 4,
    activeDot: 0,
    accent: "from-orange-500/30 via-red-600/20 to-transparent",
  },
  {
    brand: "North Field®",
    buttonLabel: "Éclat",
    tagline: "Le travail parle avant même de vous.",
    title: "Site vitrine",
    image: "/assets/card-2.png",
    dots: 4,
    activeDot: 1,
    accent: "from-violet-500/30 via-purple-600/20 to-transparent",
  },
  {
    brand: "Marc Dev®",
    buttonLabel: "Style",
    tagline: "Votre marque mérite une seconde chance.",
    title: "Portfolio",
    image: "/assets/card-3.png",
    dots: 4,
    activeDot: 2,
    accent: "from-zinc-500/20 via-zinc-600/10 to-transparent",
  },
  {
    brand: "Aura Store®",
    buttonLabel: "Achat",
    tagline: "Une boutique en ligne moderne et performante.",
    title: "Site e-commerce",
    image: "/assets/card-4.png",
    dots: 4,
    activeDot: 3,
    accent: "from-emerald-500/30 via-green-600/20 to-transparent",
  },
];

export default function BookmarkCards() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for entrance animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle cards
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % cards.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pt-4 pb-16 sm:pt-6 sm:pb-24 overflow-hidden"
      id="bookmark-cards"
    >
      <div
        className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* === CARDS AREA + BUTTONS BELOW === */}
        <div className="flex flex-col gap-4 w-full lg:w-[55%]">
          {/* Cards */}
          <div className="relative h-[190px] sm:h-[195px]">
            {cards.map((card, i) => {
              const isActive = i === active;
              const positions = [
                { left: "0%", zIndex: 40, scale: 1, opacity: 1 },
                { left: "26%", zIndex: 30, scale: 0.90, opacity: 0.9 },
                { left: "48%", zIndex: 20, scale: 0.81, opacity: 0.8 },
                { left: "68%", zIndex: 10, scale: 0.72, opacity: 0.65 },
              ];
              const order = ((i - active) + cards.length) % cards.length;
              const pos = positions[order];

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="absolute top-0 cursor-pointer"
                  style={{
                    left: pos.left,
                    zIndex: pos.zIndex,
                    transform: `scale(${pos.scale})`,
                    transformOrigin: "top left",
                    opacity: pos.opacity,
                    transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                    width: "220px",
                  }}
                >
                  <div
                    className="relative rounded-2xl overflow-visible"
                    style={{
                      background: "rgba(15,15,20,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: isActive
                        ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)"
                        : "0 16px 40px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="relative w-full h-[110px] rounded-t-2xl overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top"
                        style={{
                          filter: isActive ? "brightness(1)" : "brightness(0.7)",
                          transition: "filter 0.5s ease",
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.accent} pointer-events-none`} />
                    </div>
                    <div className="px-4 pt-3 pb-4">
                      <h3
                        className="font-heading text-white/90 leading-none tracking-tight truncate"
                        style={{ fontSize: isActive ? "1.35rem" : "1.05rem", transition: "font-size 0.4s ease" }}
                      >
                        {card.title}
                      </h3>
                      <div className="flex gap-1 mt-3">
                        {Array.from({ length: card.dots }).map((_, d) => (
                          <span
                            key={d}
                            className="rounded-full transition-all duration-300"
                            style={{
                              width: d === card.activeDot ? 16 : 6,
                              height: 6,
                              background: d === card.activeDot
                                ? "rgba(255,255,255,0.85)"
                                : "rgba(255,255,255,0.25)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selector buttons — below cards, horizontal */}
          <div className="flex flex-row gap-2 flex-wrap sm:flex-nowrap">
            {cards.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{
                  background: active === i ? "rgba(255,255,255,0.12)" : "transparent",
                  border: active === i ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(255,255,255,0.08)",
                  color: active === i ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                }}
              >
                {c.buttonLabel}
              </button>
            ))}
          </div>
        </div>

        {/* === TEXT CONTENT === */}
        <div className="lg:w-[45%] flex flex-col gap-5">
          {/* Tag */}
          <span className="inline-flex items-center self-start px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-wide backdrop-blur-sm">
            Réalisations clients
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Des sites qui<br />
            parlent d'eux-mêmes.
          </h2>

          <p className="font-body text-zinc-400 text-base leading-relaxed max-w-md">
            Chaque projet est conçu sur-mesure, illustration, typographie premium et expérience utilisateur soignée.
          </p>
        </div>
      </div>
    </section>
  );
}
