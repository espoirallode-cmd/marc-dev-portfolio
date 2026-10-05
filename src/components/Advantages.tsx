import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Livraison rapide",
    subtitle: "Site livré en 7 jours",
    desc: "Site livré sous 7 jours, prêt à l'emploi.",
  },
  {
    icon: PenSquare,
    title: "Design sur-mesure",
    subtitle: "Identité visuelle unique",
    desc: "Un design unique adapté à votre identité.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    subtitle: "Mobile, tablette & desktop",
    desc: "Parfait sur mobile, tablette et desktop.",
  },
  {
    icon: Search,
    title: "SEO optimisé",
    subtitle: "Visible sur Google",
    desc: "Visible sur Google dès le lancement.",
  },
  {
    icon: Sparkles,
    title: "Propulsé par l'IA",
    subtitle: "Technologies IA avancées",
    desc: "Technologies IA pour un résultat optimal.",
  },
  {
    icon: Headphones,
    title: "Support inclus",
    subtitle: "Accompagnement continu",
    desc: "Accompagnement après la livraison.",
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
              className="reveal relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-start text-left cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon box — white glass */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/10 border border-white/20 backdrop-blur-md">
                <a.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-white mb-1 tracking-wide">
                {a.title}
              </h3>

              {/* Uppercase white subtitle */}
              <p className="text-xs font-mono font-bold tracking-widest uppercase mb-4 text-white/50">
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
