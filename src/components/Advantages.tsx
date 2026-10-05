import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles } from "lucide-react";

const advantages = [
  {
    year: "2022",
    stat: "7 Jours",
    icon: Zap,
    title: "Livraison rapide",
    desc: "Votre site web livré clé en main sous 7 jours, prêt à convertir vos premiers clients.",
    isHighlight: false,
    isLow: false,
  },
  {
    year: "2023",
    stat: "100%",
    icon: PenSquare,
    title: "Design sur-mesure",
    desc: "Un design unique, élégant et entièrement adapté à l'image et l’identité de votre marque.",
    isHighlight: false,
    isLow: true,
  },
  {
    year: "2024",
    stat: "3-en-1",
    icon: Smartphone,
    title: "100% Responsive",
    desc: "Affichage parfait et ultra-fluide sur tous les écrans : mobile, tablette et ordinateur.",
    isHighlight: false,
    isLow: false,
  },
  {
    year: "2025",
    stat: "#1",
    icon: Search,
    title: "SEO optimisé",
    desc: "Optimisation pour Google afin de capter l'attention de vos visiteurs et générer du trafic.",
    isHighlight: false,
    isLow: true,
  },
  {
    year: "2026",
    stat: "IA+",
    icon: Sparkles,
    title: "Support & IA inclus",
    desc: "Propulsé par les dernières technologies IA avec accompagnement et suivi personnalisé.",
    isHighlight: true,
    isLow: false,
  },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 sm:py-32 bg-[#090a0f] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20 max-w-2xl">
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            Pourquoi Marc Dev ?
          </h2>
          <p className="font-body text-zinc-400 text-lg sm:text-xl font-normal leading-relaxed">
            Des engagements clairs et des résultats mesurables pour propulser votre présence en ligne.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-4 pb-20">

          {/* Desktop Dotted Connecting Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            {/* Horizontal line under low cards */}
            <div className="absolute top-[320px] left-[10%] right-[10%] border-b border-dashed border-zinc-700/60" />
            {/* Vertical connector line under 5th card to node dot */}
            <div className="absolute top-[260px] right-[10%] bottom-[40px] border-r border-dashed border-zinc-700/60" />
            {/* End Node Dot at bottom right */}
            <div className="absolute bottom-[28px] right-[10%] translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#090a0f] shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </div>

          {/* 5 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10 items-start">
            {advantages.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`reveal flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 group ${
                    item.isLow ? "lg:translate-y-16" : "lg:translate-y-0"
                  } ${
                    item.isHighlight
                      ? "bg-white text-zinc-950 shadow-[0_25px_60px_rgba(255,255,255,0.18)] hover:scale-[1.02]"
                      : "bg-[#12141d] border border-zinc-800/70 text-white hover:border-zinc-700 hover:bg-[#171924] hover:scale-[1.02]"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    {/* Top Row: Tag / Year & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs sm:text-sm font-semibold ${item.isHighlight ? "text-zinc-400" : "text-zinc-500"}`}>
                        {item.year}
                      </span>
                      <item.icon className={`w-4 h-4 ${item.isHighlight ? "text-zinc-400" : "text-zinc-500"}`} />
                    </div>

                    {/* Giant Number / Stat */}
                    <div className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-4xl mb-4 tracking-tight ${item.isHighlight ? "text-zinc-950" : "text-white"}`}>
                      {item.stat}
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold text-base sm:text-lg mb-2 ${item.isHighlight ? "text-zinc-900" : "text-white"}`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-body text-xs sm:text-sm leading-relaxed ${item.isHighlight ? "text-zinc-600" : "text-zinc-400"}`}>
                      {item.desc}
                    </p>
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

