import { MessageSquare, Pencil, Code, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    title: "Brief",
    subtitle: "Étape 01",
    colorClass: "bg-pink-500/10 text-pink-400",
    borderColor: "bg-pink-500/60",
    icon: MessageSquare,
    description:
      "On échange sur vos besoins et objectifs pour définir ensemble le projet idéal.",
  },
  {
    title: "Design",
    subtitle: "Étape 02",
    colorClass: "bg-sky-500/10 text-sky-400",
    borderColor: "bg-sky-500/60",
    icon: Pencil,
    description:
      "Maquettes & identité visuelle sur-mesure, pensées pour impressionner dès le premier regard.",
  },
  {
    title: "Développement",
    subtitle: "Étape 03",
    colorClass: "bg-violet-500/10 text-violet-400",
    borderColor: "bg-violet-500/60",
    icon: Code,
    description:
      "Intégration rapide propulsée par l'IA pour un site performant, fluide et optimisé.",
  },
  {
    title: "Livraison",
    subtitle: "Étape 04",
    colorClass: "bg-lime-500/10 text-lime-400",
    borderColor: "bg-lime-500/60",
    icon: Rocket,
    description:
      "Votre site clé en main mis en ligne, prêt à conquérir vos visiteurs dès le premier jour.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="overflow-hidden py-24 sm:py-32 bg-black relative" ref={ref}>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:gap-16">

          {/* Header */}
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <div className="rounded-full py-1.5 text-white/50">
              <span className="text-sm font-semibold tracking-widest uppercase">— Process</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Comment ça marche ?
            </h2>
            <p className="max-w-xl text-zinc-400 text-base leading-relaxed">
              Un process clair et structuré pour transformer votre vision en un site web professionnel, rapide et sur-mesure.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-12 gap-6 overflow-hidden">
            {steps.map((step, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-3">
                <div className="group relative rounded-lg px-5 xl:px-8 py-2">
                  {/* Left colored border */}
                  <div
                    className={`absolute inset-y-0 left-0 z-20 w-0.5 ${step.borderColor} rounded-full`}
                  />

                  <div className="relative z-30 flex flex-col gap-5 md:gap-6">
                    {/* Icon */}
                    <div className="xl:w-full">
                      <div className="z-20 mx-auto inline-flex">
                        <div
                          className={
                            "relative size-12 rounded-xl md:size-14 " +
                            step.colorClass +
                            " flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110"
                          }
                        >
                          <step.icon className="size-5 stroke-2 md:size-6" />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg font-heading font-bold text-white sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {step.description}
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
