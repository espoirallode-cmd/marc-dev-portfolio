import { useReveal } from "@/hooks/use-reveal";
import { MessageSquare, Pencil, Code, Rocket, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: MessageSquare, title: "Brief", desc: "On échange sur vos besoins" },
  { icon: Pencil, title: "Design", desc: "Maquette et choix visuels" },
  { icon: Code, title: "Développement", desc: "Création avec l'IA" },
  { icon: Rocket, title: "Livraison", desc: "Site en ligne clé en main" },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Comment ça marche ?
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-16 rounded-full" />

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12%] right-[12%] h-px border-t-2 border-dashed border-foreground/15" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal flex flex-col items-center text-center w-1/4 relative z-10"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg mb-4">
                {i + 1}
              </div>
              <s.icon className="text-muted-foreground w-5 h-5 mb-2" />
              <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal flex gap-5 items-start"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-12 border-l-2 border-dashed border-foreground/15 mt-2" />
                )}
              </div>
              <div>
                <s.icon className="text-muted-foreground w-5 h-5 mb-1" />
                <h3 className="font-heading font-semibold">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
