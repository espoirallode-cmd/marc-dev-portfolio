import { Fragment } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    num: "01",
    title: "Livraison rapide",
    desc: "Site livré sous 7 jours, prêt à l'emploi.",
    rotate: "-rotate-2",
    side: "left",
  },
  {
    icon: PenSquare,
    num: "02",
    title: "Design sur-mesure",
    desc: "Un design unique adapté à votre identité.",
    rotate: "rotate-1",
    side: "right",
  },
  {
    icon: Smartphone,
    num: "03",
    title: "100% Responsive",
    desc: "Parfait sur mobile, tablette et desktop.",
    rotate: "-rotate-1",
    side: "left",
  },
  {
    icon: Search,
    num: "04",
    title: "SEO optimisé",
    desc: "Visible sur Google dès le lancement.",
    rotate: "rotate-2",
    side: "right",
  },
  {
    icon: Sparkles,
    num: "05",
    title: "Propulsé par l'IA",
    desc: "Technologies IA pour un résultat optimal.",
    rotate: "-rotate-2",
    side: "left",
  },
  {
    icon: Headphones,
    num: "06",
    title: "Support inclus",
    desc: "Accompagnement après la livraison.",
    rotate: "rotate-1",
    side: "right",
  },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-20 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>

        {/* Staggered sticky-note layout */}
        <div className="flex flex-col">
          {advantages.map((a, i) => (
            <Fragment key={i}>
              {/* Card row */}
              <div
                className={`reveal flex w-full ${a.side === "right" ? "justify-end" : "justify-start"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`relative w-64 sm:w-72 bg-zinc-950 border border-white/10 rounded-2xl px-6 pt-8 pb-6 shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[1.03] ${a.rotate}`}
                >
                  {/* Pin — white glass */}
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white/20 border border-white/40 backdrop-blur-md shadow-[0_2px_10px_rgba(255,255,255,0.15)] z-10"
                  />

                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-white/25 tracking-widest">
                      {a.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <a.icon className="w-4 h-4 text-white/60" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                    {a.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-zinc-400 text-sm leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>

              {/* Curved dashed connector between this card and the next */}
              {i < advantages.length - 1 && (
                <div className="hidden sm:block w-full" style={{ height: "72px" }}>
                  <svg
                    viewBox="0 0 700 72"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    fill="none"
                  >
                    <path
                      d={
                        a.side === "left"
                          ? "M 144 0 C 250 72, 450 0, 556 72"
                          : "M 556 0 C 450 72, 250 0, 144 72"
                      }
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="1.5"
                      strokeDasharray="7 5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
