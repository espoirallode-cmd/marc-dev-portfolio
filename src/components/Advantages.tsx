import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  { icon: Zap, title: "Livraison rapide", desc: "Site livré sous 7 jours, prêt à l'emploi.", bg: "bg-cyan-500/10", border: "border-cyan-500/30", iconColor: "text-cyan-400", shadow: "shadow-[0_0_25px_rgba(6,182,212,0.3)]" },
  { icon: PenSquare, title: "Design sur-mesure", desc: "Un design unique adapté à votre identité.", bg: "bg-orange-500/10", border: "border-orange-500/30", iconColor: "text-orange-400", shadow: "shadow-[0_0_25px_rgba(249,115,22,0.3)]" },
  { icon: Smartphone, title: "100% Responsive", desc: "Parfait sur mobile, tablette et desktop.", bg: "bg-emerald-500/10", border: "border-emerald-500/30", iconColor: "text-emerald-400", shadow: "shadow-[0_0_25px_rgba(16,185,129,0.3)]" },
  { icon: Search, title: "SEO optimisé", desc: "Visible sur Google dès le lancement.", bg: "bg-teal-500/10", border: "border-teal-500/30", iconColor: "text-teal-400", shadow: "shadow-[0_0_25px_rgba(20,184,166,0.3)]" },
  { icon: Sparkles, title: "Propulsé par l'IA", desc: "Technologies IA pour un résultat optimal.", bg: "bg-rose-500/10", border: "border-rose-500/30", iconColor: "text-rose-400", shadow: "shadow-[0_0_25px_rgba(244,63,94,0.3)]" },
  { icon: Headphones, title: "Support inclus", desc: "Accompagnement après la livraison.", bg: "bg-sky-500/10", border: "border-sky-500/30", iconColor: "text-sky-400", shadow: "shadow-[0_0_25px_rgba(14,165,233,0.3)]" },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-white via-zinc-200 to-rose-500 bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(229,0,36,0.5)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="reveal relative bg-zinc-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(229,0,36,0.15)] cursor-default group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 ${a.bg} ${a.border} ${a.shadow}`}>
                <a.icon className={`w-7 h-7 ${a.iconColor}`} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-3 tracking-wide group-hover:text-rose-400 transition-colors">{a.title}</h3>
              <p className="font-body text-zinc-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

