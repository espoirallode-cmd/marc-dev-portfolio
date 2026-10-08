import { useReveal } from "@/hooks/use-reveal";
import { MailCheck, CheckCircle2, Layout, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Je vous fais un devis",
    subtitle: "Étape 01",
    description:
      "On échange sur vos besoins, votre activité et vos objectifs. Je vous prépare ensuite un devis clair et personnalisé sans engagement.",
    icon: MailCheck,
  },
  {
    number: "02",
    title: "Vous validez",
    subtitle: "Étape 02",
    description:
      "Vous acceptez le devis et on lance le projet ensemble. Un planning détaillé vous est envoyé dès le départ pour suivre l'avancement.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Je conçois votre site",
    subtitle: "Étape 03",
    description:
      "Je crée votre site de A à Z : design sur-mesure, développement, optimisation et mise en ligne. Votre site est livré clé en main.",
    icon: Layout,
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="overflow-hidden py-16 sm:py-24 bg-black relative" ref={ref}>
      {/* Ambient background glow behind the roadmap */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-b from-white/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-12 sm:gap-16">

          {/* Header — preserved untouched */}
          <div
            className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto reveal"
            style={{ transitionDelay: "0ms" }}
          >
            <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Mes offres
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg max-w-xl">
              Chaque projet avec son tarif
            </p>
          </div>

          {/* Roadmap Timeline Container */}
          <div className="relative max-w-5xl mx-auto w-full">

            {/* Desktop Serpentine Dotted Line SVG */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 820"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Top starting decorative dot */}
              <circle cx="500" cy="20" r="4.5" fill="#ffffff" opacity="0.8" />
              <circle cx="500" cy="20" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

              {/* Dotted serpentine path connecting node 1 (x: 520, y: 150) -> node 2 (x: 480, y: 410) -> node 3 (x: 520, y: 670) */}
              <path
                d="M 500 28 C 500 70, 520 100, 520 150 C 520 250, 480 310, 480 410 C 480 510, 520 570, 520 670 C 520 740, 500 765, 500 795"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="2.5"
                strokeDasharray="5 7"
                strokeLinecap="round"
              />

              {/* Bottom ending decorative dot */}
              <circle cx="500" cy="800" r="4" fill="#ffffff" opacity="0.8" />
              <circle cx="505" cy="815" r="2.5" fill="#ffffff" opacity="0.5" />
            </svg>

            {/* Steps Container */}
            <div className="relative z-10 flex flex-col gap-10 lg:gap-14">

              {/* STEP 01: Card on Left, Node in Center, STEP 01 on Right */}
              <div
                className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8"
                style={{ transitionDelay: "100ms" }}
              >
                {/* Mobile step label (< lg) */}
                <div className="lg:hidden flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full border-2 border-white/80 bg-black/90 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      <div className="size-2 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Étape 01
                    </span>
                  </div>
                  <span className="text-3xl font-heading font-black text-white">01</span>
                </div>

                {/* Left: Capsule White Glass Card */}
                <div className="flex justify-end w-full">
                  <div className="group relative w-full max-w-lg rounded-3xl sm:rounded-full p-5 sm:p-6 sm:pr-4 sm:pl-8 bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.13] hover:border-white/35 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_16px_48px_rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                    {/* Text Details */}
                    <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                        {steps[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-body">
                        {steps[0].description}
                      </p>
                    </div>

                    {/* Circular White Glass Orb with Pointer */}
                    <div className="relative flex-shrink-0">
                      <div className="size-16 sm:size-20 rounded-full p-1 bg-gradient-to-br from-white/40 via-white/10 to-transparent border border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18)] flex items-center justify-center">
                        <div className="size-full rounded-full bg-gradient-to-br from-white/30 via-white/15 to-white/5 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                          <MailCheck className="size-7 sm:size-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]" />
                        </div>
                      </div>

                      {/* Right-pointing pointer towards the node */}
                      <div
                        className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-white/60 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Center: Concentric Node */}
                <div className="hidden lg:flex items-center justify-center w-12 relative z-20">
                  <div className="size-7 sm:size-8 rounded-full border-2 border-white/80 bg-black/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_16px_rgba(255,255,255,0.5)]">
                    <div className="size-2.5 sm:size-3 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  </div>
                </div>

                {/* Right: STEP 01 Typography */}
                <div className="hidden lg:flex flex-col justify-center items-start pl-4 xl:pl-8">
                  <span className="text-sm font-extrabold tracking-[0.25em] text-white/60 uppercase font-heading">
                    STEP
                  </span>
                  <span className="text-6xl xl:text-7xl font-black font-heading text-white tracking-tight drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
                    {steps[0].number}
                  </span>
                </div>
              </div>

              {/* STEP 02: STEP 02 on Left, Node in Center, Card on Right */}
              <div
                className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8"
                style={{ transitionDelay: "250ms" }}
              >
                {/* Mobile step label (< lg) */}
                <div className="lg:hidden flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full border-2 border-white/80 bg-black/90 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      <div className="size-2 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Étape 02
                    </span>
                  </div>
                  <span className="text-3xl font-heading font-black text-white">02</span>
                </div>

                {/* Left: STEP 02 Typography */}
                <div className="hidden lg:flex flex-col justify-center items-end pr-4 xl:pr-8 text-right">
                  <span className="text-sm font-extrabold tracking-[0.25em] text-white/60 uppercase font-heading">
                    STEP
                  </span>
                  <span className="text-6xl xl:text-7xl font-black font-heading text-white tracking-tight drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
                    {steps[1].number}
                  </span>
                </div>

                {/* Center: Concentric Node */}
                <div className="hidden lg:flex items-center justify-center w-12 relative z-20">
                  <div className="size-7 sm:size-8 rounded-full border-2 border-white/80 bg-black/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_16px_rgba(255,255,255,0.5)]">
                    <div className="size-2.5 sm:size-3 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  </div>
                </div>

                {/* Right: Capsule White Glass Card */}
                <div className="flex justify-start w-full">
                  <div className="group relative w-full max-w-lg rounded-3xl sm:rounded-full p-5 sm:p-6 sm:pl-4 sm:pr-8 bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.13] hover:border-white/35 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_16px_48px_rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                    {/* Circular White Glass Orb with Pointer */}
                    <div className="relative flex-shrink-0 order-2 sm:order-1">
                      {/* Left-pointing pointer towards the node */}
                      <div
                        className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[7px] border-y-transparent border-r-[10px] border-r-white/60 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        aria-hidden="true"
                      />

                      <div className="size-16 sm:size-20 rounded-full p-1 bg-gradient-to-br from-white/40 via-white/10 to-transparent border border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18)] flex items-center justify-center">
                        <div className="size-full rounded-full bg-gradient-to-br from-white/30 via-white/15 to-white/5 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                          <CheckCircle2 className="size-7 sm:size-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]" />
                        </div>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 flex flex-col gap-2 text-center sm:text-left order-1 sm:order-2">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                        {steps[1].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-body">
                        {steps[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 03: Card on Left, Node in Center, STEP 03 on Right */}
              <div
                className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8"
                style={{ transitionDelay: "400ms" }}
              >
                {/* Mobile step label (< lg) */}
                <div className="lg:hidden flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full border-2 border-white/80 bg-black/90 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      <div className="size-2 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Étape 03
                    </span>
                  </div>
                  <span className="text-3xl font-heading font-black text-white">03</span>
                </div>

                {/* Left: Capsule White Glass Card */}
                <div className="flex justify-end w-full">
                  <div className="group relative w-full max-w-lg rounded-3xl sm:rounded-full p-5 sm:p-6 sm:pr-4 sm:pl-8 bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.13] hover:border-white/35 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_16px_48px_rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                    {/* Text Details */}
                    <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                        {steps[2].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-body">
                        {steps[2].description}
                      </p>
                    </div>

                    {/* Circular White Glass Orb with Pointer */}
                    <div className="relative flex-shrink-0">
                      <div className="size-16 sm:size-20 rounded-full p-1 bg-gradient-to-br from-white/40 via-white/10 to-transparent border border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18)] flex items-center justify-center">
                        <div className="size-full rounded-full bg-gradient-to-br from-white/30 via-white/15 to-white/5 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                          <Layout className="size-7 sm:size-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]" />
                        </div>
                      </div>

                      {/* Right-pointing pointer towards the node */}
                      <div
                        className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-white/60 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Center: Concentric Node */}
                <div className="hidden lg:flex items-center justify-center w-12 relative z-20">
                  <div className="size-7 sm:size-8 rounded-full border-2 border-white/80 bg-black/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_16px_rgba(255,255,255,0.5)]">
                    <div className="size-2.5 sm:size-3 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  </div>
                </div>

                {/* Right: STEP 03 Typography */}
                <div className="hidden lg:flex flex-col justify-center items-start pl-4 xl:pl-8">
                  <span className="text-sm font-extrabold tracking-[0.25em] text-white/60 uppercase font-heading">
                    STEP
                  </span>
                  <span className="text-6xl xl:text-7xl font-black font-heading text-white tracking-tight drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
                    {steps[2].number}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
