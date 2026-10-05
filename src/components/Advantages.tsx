import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  {
    step: "01",
    stat: "7 Jours",
    icon: Zap,
    title: "Livraison rapide",
    desc: "Site livré sous 7 jours, prêt à l'emploi.",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    isHighlight: false,
  },
  {
    step: "02",
    stat: "100%",
    icon: PenSquare,
    title: "Design sur-mesure",
    desc: "Un design unique adapté à votre identité.",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
    isHighlight: false,
  },
  {
    step: "03",
    stat: "Multi-écran",
    icon: Smartphone,
    title: "100% Responsive",
    desc: "Parfait sur mobile, tablette et desktop.",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    isHighlight: false,
  },
  {
    step: "04",
    stat: "#1 Google",
    icon: Search,
    title: "SEO optimisé",
    desc: "Visible sur Google dès le lancement.",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    iconColor: "text-teal-400",
    isHighlight: false,
  },
  {
    step: "05",
    stat: "IA Native",
    icon: Sparkles,
    title: "Propulsé par l'IA",
    desc: "Technologies IA pour un résultat optimal.",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
    isHighlight: false,
  },
  {
    step: "06",
    stat: "Inclus",
    icon: Headphones,
    title: "Support inclus",
    desc: "Accompagnement après la livraison.",
    bg: "bg-zinc-900",
    border: "border-white",
    iconColor: "text-zinc-900",
    isHighlight: true,
  },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 sm:py-32 bg-black relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Left Aligned matching reference screenshot */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight mb-4">
            Pourquoi Marc Dev ?
          </h2>
          <p className="font-body text-zinc-400 text-lg sm:text-xl leading-relaxed">
            Des engagements clairs et des technologies modernes pour propulser votre présence en ligne.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative pt-6 pb-16">
          {/* Dashed Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[140px] left-0 right-0 h-[1px] border-t-2 border-dashed border-zinc-800 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {advantages.map((a, i) => {
              const isStaggered = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className={`reveal relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 group cursor-default ${
                    isStaggered ? "lg:translate-y-10" : "lg:translate-y-0"
                  } ${
                    a.isHighlight
                      ? "bg-white text-zinc-950 shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
                      : "bg-[#0b0c10] border border-zinc-800/80 text-white hover:border-zinc-700 hover:bg-[#11131a] hover:scale-[1.02]"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Card Header: Step & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-semibold tracking-wider ${
                          a.isHighlight ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        {a.step}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                          a.isHighlight
                            ? "bg-zinc-100 border-zinc-300 text-zinc-900"
                            : `${a.bg} ${a.border}`
                        }`}
                      >
                        <a.icon className={`w-4 h-4 ${a.isHighlight ? "text-zinc-900" : a.iconColor}`} />
                      </div>
                    </div>

                    {/* Stat / Big Callout */}
                    <div
                      className={`font-heading font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight ${
                        a.isHighlight ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      {a.stat}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-heading font-bold text-lg mb-2 ${
                        a.isHighlight ? "text-zinc-900" : "text-zinc-100 group-hover:text-white"
                      }`}
                    >
                      {a.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        a.isHighlight ? "text-zinc-600" : "text-zinc-400"
                      }`}
                    >
                      {a.desc}
                    </p>
                  </div>

                  {/* Node Dot at bottom for Timeline aesthetic */}
                  <div className="hidden lg:flex justify-center mt-6 pt-4 border-t border-dashed border-zinc-800/40">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        a.isHighlight ? "bg-white border-2 border-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-zinc-600 border-2 border-black"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

