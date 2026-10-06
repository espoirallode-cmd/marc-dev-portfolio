import { useReveal } from "@/hooks/use-reveal";
import { Globe, Palette, Rocket } from "lucide-react";

const offers = [
  {
    title: "Site Vitrine",
    subtitle: "Présence professionnelle",
    colorClass: "bg-pink-500/10 text-pink-400",
    borderColor: "bg-pink-500/60",
    icon: Globe,
    description:
      "Un site vitrine soigné et sur-mesure pour présenter votre activité, attirer de nouveaux clients et affirmer votre image professionnelle.",
  },
  {
    title: "Landing Page",
    subtitle: "Conversion optimisée",
    colorClass: "bg-sky-500/10 text-sky-400",
    borderColor: "bg-sky-500/60",
    icon: Rocket,
    description:
      "Une page pensée pour convertir vos visiteurs en clients. Design percutant, message clair et appel à l'action irrésistible.",
  },
  {
    title: "Identité Visuelle",
    subtitle: "Charte graphique complète",
    colorClass: "bg-lime-500/10 text-lime-400",
    borderColor: "bg-lime-500/60",
    icon: Palette,
    description:
      "Logo, palette de couleurs, typographies et charte graphique sur-mesure pour une image de marque forte et cohérente sur tous vos supports.",
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="overflow-hidden py-24 sm:py-32 bg-black relative" ref={ref}>
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10 sm:gap-16">

          {/* Header — titre et sous-titre préservés */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
            <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Mes offres
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg max-w-xl">
              Chaque projet avec son tarif
            </p>
          </div>

          {/* Offers — Content15 layout */}
          <div className="relative grid grid-cols-12 gap-8 overflow-hidden">
            {offers.map((offer, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-4">
                <div className="group relative rounded-lg px-5 xl:px-10 py-2">
                  {/* Left colored border */}
                  <div
                    className={`absolute inset-y-0 left-0 z-20 w-0.5 rounded-full ${offer.borderColor}`}
                  />

                  <div className="relative z-30 flex flex-col gap-5 md:gap-6">
                    {/* Icon */}
                    <div className="xl:w-full">
                      <div className="z-20 inline-flex">
                        <div
                          className={
                            "relative size-12 rounded-xl md:size-14 " +
                            offer.colorClass +
                            " flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110"
                          }
                        >
                          <offer.icon className="size-5 stroke-2 md:size-6" />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg font-heading font-bold text-white sm:text-xl">
                          {offer.title}
                        </h3>
                        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                          {offer.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {offer.description}
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
