import { useReveal } from "@/hooks/use-reveal";
import { Zap, PenSquare, Smartphone, Search, Sparkles, Headphones } from "lucide-react";

const advantages = [
  { icon: Zap, title: "Livraison rapide", desc: "Site livré sous 7 jours, prêt à l'emploi.", bg: "bg-[#219ebc]/10", border: "border-[#219ebc]/30", shadow: "shadow-[0_0_20px_-3px_rgba(33,158,188,0.3)]" },
  { icon: PenSquare, title: "Design sur-mesure", desc: "Un design unique adapté à votre identité.", bg: "bg-[#fb5607]/10", border: "border-[#fb5607]/30", shadow: "shadow-[0_0_20px_-3px_rgba(251,86,7,0.3)]" },
  { icon: Smartphone, title: "100% Responsive", desc: "Parfait sur mobile, tablette et desktop.", bg: "bg-[#99d98c]/10", border: "border-[#99d98c]/30", shadow: "shadow-[0_0_20px_-3px_rgba(153,217,140,0.3)]" },
  { icon: Search, title: "SEO optimisé", desc: "Visible sur Google dès le lancement.", bg: "bg-[#06d6a0]/10", border: "border-[#06d6a0]/30", shadow: "shadow-[0_0_20px_-3px_rgba(6,214,160,0.3)]" },
  { icon: Sparkles, title: "Propulsé par l'IA", desc: "Technologies IA pour un résultat optimal.", bg: "bg-[#16db65]/10", border: "border-[#16db65]/30", shadow: "shadow-[0_0_20px_-3px_rgba(22,219,101,0.3)]" },
  { icon: Headphones, title: "Support inclus", desc: "Accompagnement après la livraison.", bg: "bg-[#4cc9f0]/10", border: "border-[#4cc9f0]/30", shadow: "shadow-[0_0_20px_-3px_rgba(76,201,240,0.3)]" },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="reveal relative bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.05] box-border rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/[0.1] hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-transparent cursor-default group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-[1rem] flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 ${a.bg} ${a.border} ${a.shadow}`}>
                <a.icon className="w-6 h-6 text-white/90" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 tracking-wide">{a.title}</h3>
              <p className="font-body text-muted-foreground/80 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
