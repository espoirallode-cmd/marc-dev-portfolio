import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    number: "1",
    title: "Je vous fais un devis",
    subtitle: "Étape 01",
    description:
      "On échange sur vos besoins, votre activité et vos objectifs. Je vous prépare ensuite un devis clair et personnalisé sans engagement.",
  },
  {
    number: "2",
    title: "Vous validez",
    subtitle: "Étape 02",
    description:
      "Vous acceptez le devis et on lance le projet ensemble. Un planning détaillé vous est envoyé dès le départ pour suivre l'avancement.",
  },
  {
    number: "3",
    title: "Je conçois votre site",
    subtitle: "Étape 03",
    description:
      "Je crée votre site de A à Z : design sur-mesure, développement, optimisation et mise en ligne. Votre site est livré clé en main.",
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="overflow-hidden py-24 sm:py-32 bg-black relative" ref={ref}>
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10 sm:gap-16">

          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto reveal" style={{ transitionDelay: "0ms" }}>
            <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Mes offres
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg max-w-xl">
              Chaque projet avec son tarif
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-12 gap-8 overflow-hidden">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="col-span-12 xl:col-span-4 reveal"
                style={{ transitionDelay: `${100 + idx * 150}ms` }}
              >
                <div className="group relative rounded-lg px-5 xl:px-10 py-2">
                  {/* Left white border */}
                  <div className="absolute inset-y-0 left-0 z-20 w-0.5 rounded-full bg-white/40" />

                  <div className="relative z-30 flex flex-col gap-5 md:gap-6">
                    {/* Number badge — white glass */}
                    <div className="xl:w-full">
                      <div className="z-20 inline-flex">
                        <div className="relative size-12 rounded-xl md:size-14 bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/40">
                          <span className="font-heading font-extrabold text-lg md:text-xl text-white">
                            {step.number}
                          </span>
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
