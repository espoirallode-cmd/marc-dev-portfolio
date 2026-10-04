import { useReveal } from "@/hooks/use-reveal";
import { MessageSquare, Pencil, Code, Rocket, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: MessageSquare, title: "Brief", desc: "On échange sur vos besoins et objectifs." },
  { icon: Pencil, title: "Design", desc: "Maquettes & identité visuelle sur-mesure." },
  { icon: Code, title: "Développement", desc: "Intégration rapide propulsée par l'IA." },
  { icon: Rocket, title: "Livraison", desc: "Votre site clé en main en ligne." },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Comment ça marche ?
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-red-500/40 via-rose-500/40 to-red-500/40 border-t border-dashed border-rose-500/30" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal flex flex-col items-center text-center w-1/4 relative z-10 px-4 group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-white/15 flex items-center justify-center font-heading font-extrabold text-xl text-white mb-6 shadow-[0_0_25px_rgba(0,0,0,0.8)] group-hover:border-rose-500 group-hover:shadow-[0_0_30px_rgba(229,0,36,0.4)] group-hover:scale-110 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(229,0,36,0.5)]">
                  {i + 1}
                </span>
              </div>
              <s.icon className="text-rose-400 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-xl text-white mb-2 tracking-wide group-hover:text-rose-400 transition-colors">{s.title}</h3>
              <p className="font-body text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal flex gap-5 items-start bg-zinc-950/80 border border-white/10 p-6 rounded-2xl backdrop-blur-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white font-heading font-extrabold text-lg shrink-0 shadow-[0_0_20px_rgba(229,0,36,0.4)]">
                {i + 1}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <s.icon className="text-rose-400 w-5 h-5" />
                  <h3 className="font-heading font-bold text-lg text-white">{s.title}</h3>
                </div>
                <p className="font-body text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

