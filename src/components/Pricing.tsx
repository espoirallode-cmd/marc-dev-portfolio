import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    number: "1",
    title: "Je vous fais un devis",
    subtitle: "Étape 01",
    description:
      "On échange sur vos besoins, votre activité et vos objectifs. Je vous prépare ensuite un devis clair et personnalisé sans engagement.",
    gradient: "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 55%, #e11d48 100%)",
    badgeGradient: "linear-gradient(135deg, #e11d48, #7c3aed)",
    glow: "rgba(225, 29, 72, 0.35)",
  },
  {
    number: "2",
    title: "Vous validez",
    subtitle: "Étape 02",
    description:
      "Vous acceptez le devis et on lance le projet ensemble. Un planning détaillé vous est envoyé dès le départ pour suivre l'avancement.",
    gradient: "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 55%, #84cc16 100%)",
    badgeGradient: "linear-gradient(135deg, #a3e635, #16a34a)",
    glow: "rgba(132, 204, 22, 0.35)",
  },
  {
    number: "3",
    title: "Je conçois votre site",
    subtitle: "Étape 03",
    description:
      "Je crée votre site de A à Z : design sur-mesure, développement, optimisation et mise en ligne. Votre site est livré clé en main.",
    gradient: "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 55%, #0ea5e9 100%)",
    badgeGradient: "linear-gradient(135deg, #38bdf8, #6366f1)",
    glow: "rgba(14, 165, 233, 0.35)",
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="overflow-hidden py-16 sm:py-24 bg-black relative" ref={ref}>
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
          <div className="relative grid grid-cols-12 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="col-span-12 xl:col-span-4 reveal"
                style={{ transitionDelay: `${100 + idx * 150}ms` }}
              >
                {/* Gradient border wrapper */}
                <div
                  className="group relative rounded-2xl p-px transition-all duration-500"
                  style={{ background: step.gradient }}
                >
                  {/* Bottom glow */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 blur-sm rounded-full transition-all duration-500 group-hover:w-full group-hover:blur-md"
                    style={{ background: step.glow.replace("0.35", "0.7") }}
                  />

                  {/* Card inner — white glass */}
                  <div
                    className="relative rounded-2xl px-7 py-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    {/* Subtle inner glow at bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rounded-b-2xl"
                      style={{
                        background: `linear-gradient(to top, ${step.glow}, transparent)`,
                      }}
                    />

                    {/* Number badge */}
                    <div className="relative z-10">
                      <div
                        className="size-12 md:size-14 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{ background: step.badgeGradient }}
                      >
                        <span className="font-heading font-extrabold text-lg md:text-xl text-white drop-shadow">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="relative z-10 flex flex-col gap-4">
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
