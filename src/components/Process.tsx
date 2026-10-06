import { useReveal } from "@/hooks/use-reveal";
import { MessageSquare, Pencil, Code, Rocket, type LucideIcon } from "lucide-react";

interface Step {
  subtitle: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    subtitle: "Étape 01",
    title: "Brief",
    desc: "On échange sur vos besoins et objectifs.",
    icon: MessageSquare,
  },
  {
    subtitle: "Étape 02",
    title: "Design",
    desc: "Maquettes & identité visuelle sur-mesure.",
    icon: Pencil,
  },
  {
    subtitle: "Étape 03",
    title: "Développement",
    desc: "Votre maquette prend vie, avec un code soigné et optimisé.",
    icon: Code,
  },
  {
    subtitle: "Étape 04",
    title: "Livraison",
    desc: "Votre site clé en main en ligne.",
    icon: Rocket,
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="py-16 sm:py-24 bg-black relative" ref={ref}>
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          {/* Header Title Preserved */}
          <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent reveal" style={{ transitionDelay: "0ms" }}>
            Comment ça marche ?
          </h2>

          <div className="relative grid grid-cols-12 gap-0 overflow-hidden w-full">
            {steps.map((step, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-3 reveal" style={{ transitionDelay: `${100 + idx * 150}ms` }}>
                <div className="group relative rounded-lg p-4 xl:p-8">
                  <div className="flex flex-row gap-4 md:gap-6 xl:flex-col xl:items-center xl:text-center">
                    <div className="relative xl:w-full">
                      {/* Connecting Line */}
                      <div className="absolute bg-zinc-800 max-xl:left-2/4 max-xl:h-[calc(100%+40px)] max-xl:w-0.5 xl:-inset-x-10 xl:top-2/4 xl:h-0.5" />
                      
                      {/* Icon Circle Container - Glass White, No Glow */}
                      <div className="relative z-20 mx-auto inline-flex bg-black p-2 rounded-2xl">
                        <div
                          className="relative size-12 rounded-xl md:size-14 bg-zinc-900/90 border border-white/15 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-zinc-800 group-hover:border-white/30"
                        >
                          <step.icon className="size-5 stroke-2 md:size-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col gap-3 xl:items-center xl:gap-4 xl:text-center">
                      <div className="flex flex-col gap-1 xl:items-center">
                        <h3 className="text-lg font-heading font-bold text-white sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed font-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

