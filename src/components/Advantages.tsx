import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Livraison rapide",
    subtitle: "Site livré en 7 jours",
    desc: "Site livré sous 7 jours, prêt à l'emploi.",
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/40",
    iconColor: "text-cyan-400",
    subtitleColor: "text-cyan-400",
  },
  {
    icon: PenSquare,
    title: "Design sur-mesure",
    subtitle: "Identité visuelle unique",
    desc: "Un design unique adapté à votre identité.",
    bg: "bg-orange-500/15",
    border: "border-orange-500/40",
    iconColor: "text-orange-400",
    subtitleColor: "text-orange-400",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    subtitle: "Mobile, tablette & desktop",
    desc: "Parfait sur mobile, tablette et desktop.",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/40",
    iconColor: "text-emerald-400",
    subtitleColor: "text-emerald-400",
  },
  {
    icon: Search,
    title: "SEO optimisé",
    subtitle: "Visible sur Google",
    desc: "Visible sur Google dès le lancement.",
    bg: "bg-teal-500/15",
    border: "border-teal-500/40",
    iconColor: "text-teal-400",
    subtitleColor: "text-teal-400",
  },
  {
    icon: Sparkles,
    title: "Propulsé par l'IA",
    subtitle: "Technologies IA avancées",
    desc: "Technologies IA pour un résultat optimal.",
    bg: "bg-rose-500/15",
    border: "border-rose-500/40",
    iconColor: "text-rose-400",
    subtitleColor: "text-rose-400",
  },
  {
    icon: Headphones,
    title: "Support inclus",
    subtitle: "Accompagnement continu",
    desc: "Accompagnement après la livraison.",
    bg: "bg-sky-500/15",
    border: "border-sky-500/40",
    iconColor: "text-sky-400",
    subtitleColor: "text-sky-400",
  },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="reveal relative bg-[#0d1117]/80 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon box */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border backdrop-blur-md ${a.bg} ${a.border}`}>
                <a.icon className={`w-6 h-6 ${a.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-white mb-1 tracking-wide">
                {a.title}
              </h3>

              {/* Colored uppercase subtitle */}
              <p className={`text-xs font-mono font-bold tracking-widest uppercase mb-4 ${a.subtitleColor}`}>
                {a.subtitle}
              </p>

              {/* Description */}
              <p className="font-body text-zinc-400 text-sm leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
