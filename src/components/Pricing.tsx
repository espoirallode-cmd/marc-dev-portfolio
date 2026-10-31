import { motion } from "motion/react";
import { MailCheck, CheckCircle2, Layout, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Je vous fais un devis",
    description:
      "On échange sur vos besoins, votre activité et vos objectifs. Je vous prépare ensuite un devis clair et personnalisé sans engagement.",
    icon: MailCheck,
  },
  {
    number: "02",
    title: "Vous validez",
    description:
      "Vous acceptez le devis et on lance le projet ensemble. Un planning détaillé vous est envoyé dès le départ pour suivre l'avancement.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Je conçois votre site",
    description:
      "Je crée votre site de A à Z : design sur-mesure, développement, optimisation et mise en ligne. Votre site est livré clé en main.",
    icon: Layout,
  },
];

export default function Pricing() {
  return (
    <section id="offres" className="py-16 sm:py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          {/* Header with Fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto"
          >
            <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Mes offres
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg max-w-xl">
              Chaque projet avec son tarif
            </p>
          </motion.div>

          {/* Cards Stack with Fade-in on Scroll */}
          <div className="w-full flex flex-col gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                className="relative"
              >
                {/* Main Card */}
                <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-950/90 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    {/* Header for Mobile (< sm): Number + Icon */}
                    <div className="flex items-center justify-between sm:hidden w-full">
                      <span className="font-heading font-extrabold text-4xl text-white tracking-tight">
                        {step.number}
                      </span>
                      <div className="size-12 rounded-full border border-[#E60029]/30 bg-[#E60029]/5 flex items-center justify-center text-[#E60029]">
                        <step.icon className="size-6 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Left: Number on Desktop (sm+) */}
                    <div className="hidden sm:flex flex-shrink-0 w-20 lg:w-24 items-center justify-center">
                      <span className="font-heading font-black text-5xl lg:text-6xl text-white tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    {/* Middle: Title in white, Description */}
                    <div className="flex-1 min-w-0 flex flex-col gap-2">
                      <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-white tracking-wider uppercase">
                        {step.title}
                      </h3>
                      <p className="font-body text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Right: Icon on Desktop (sm+) */}
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center">
                      <div className="size-16 rounded-full border border-[#E60029]/30 bg-[#E60029]/5 flex items-center justify-center text-[#E60029] transition-transform duration-300 hover:scale-105">
                        <step.icon className="size-8 stroke-[1.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Downward Connector Tab (only between cards) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex justify-center">
                      <svg width="40" height="14" viewBox="0 0 40 14" fill="none">
                        <path d="M0 0 H40 V4 L20 14 L0 4 Z" fill="#E60029" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
