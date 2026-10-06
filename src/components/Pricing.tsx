import React, { useState, useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Smartphone,
  Mail,
  Clock,
  Layers,
  Search,
  CreditCard,
  Shield,
  Link,
  PenTool,
  Calendar,
  MessageSquare,
  Send,
  Palette,
  RefreshCw,
  Star,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  recommended: boolean;
  features: Feature[];
  cta: string;
  theme: {
    border: string;
    shadow: string;
    flare: string;
    gradient: string;
    button: string;
  };
}

const plans: Plan[] = [
  {
    id: "essentielle",
    name: "Essentielle",
    subtitle: "Site vitrine 3 pages",
    description: "L'essentiel pour avoir une présence professionnelle en ligne et accueillir vos prospects.",
    recommended: false,
    features: [
      { icon: FileText, text: "3 pages : Accueil, À propos, Contact" },
      { icon: PenTool, text: "Design adapté à votre univers" },
      { icon: Mail, text: "Formulaire de contact intégré" },
      { icon: Smartphone, text: "Version mobile optimisée" },
      { icon: Link, text: "Intégration de vos liens existants" },
      { icon: Clock, text: "Livré en 5 à 7 jours" },
    ],
    cta: "DEMANDER UN DEVIS",
    theme: {
      border: "border-cyan-500/50 hover:border-cyan-400",
      shadow: "shadow-[0_0_30px_rgba(6,182,212,0.25)]",
      flare: "bg-cyan-500/30",
      gradient: "from-white to-cyan-300",
      button: "bg-white/10 hover:bg-cyan-500/20 text-white border-white/20 hover:border-cyan-400/50",
    },
  },
  {
    id: "pro",
    name: "Plus populaire",
    subtitle: "Site vitrine Pro — 5 pages",
    description: "Pour les coachs qui veulent convertir leurs visiteurs en prospects qualifiés.",
    recommended: true,
    features: [
      { icon: Layers, text: "5 pages : Accueil, À propos, Services, Témoignages, Contact" },
      { icon: Calendar, text: "Bouton de réservation Calendly intégré" },
      { icon: MessageSquare, text: "Section témoignages clients" },
      { icon: Search, text: "Optimisation SEO de base" },
      { icon: Smartphone, text: "Version mobile optimisée" },
      { icon: CreditCard, text: "Intégration lien de paiement" },
      { icon: Clock, text: "Livré en 7 à 10 jours" },
    ],
    cta: "DEMANDER UN DEVIS",
    theme: {
      border: "border-rose-500/90 hover:border-rose-400",
      shadow: "shadow-[0_0_40px_rgba(230,0,41,0.4)]",
      flare: "bg-[#e60029]/40",
      gradient: "from-white via-rose-200 to-rose-400",
      button: "bg-[#e60029] hover:bg-[#c2001f] text-white border-transparent shadow-[0_0_20px_rgba(230,0,41,0.5)]",
    },
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Site vitrine complet — 7 pages",
    description: "Le pack complet avec système de collecte d'emails et tunnel de vente intégré.",
    recommended: false,
    features: [
      { icon: Layers, text: "7 pages complètes sur-mesure" },
      { icon: Send, text: "Page de capture + formulaire email (Brevo)" },
      { icon: CreditCard, text: "Intégration outil de paiement (Stripe)" },
      { icon: Search, text: "Optimisation SEO complète" },
      { icon: Shield, text: "1 mois de support après livraison" },
      { icon: Mail, text: "Email automatique de bienvenue configuré" },
      { icon: Clock, text: "Livré en 10 à 14 jours" },
    ],
    cta: "DEMANDER UN DEVIS",
    theme: {
      border: "border-emerald-500/50 hover:border-emerald-400",
      shadow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      flare: "bg-emerald-500/30",
      gradient: "from-white to-emerald-300",
      button: "bg-white/10 hover:bg-emerald-500/20 text-white border-white/20 hover:border-emerald-400/50",
    },
  },
  {
    id: "identite",
    name: "Identité + Site",
    subtitle: "Charte graphique + site vitrine",
    description: "Vous n'avez pas encore d'identité visuelle ? Je crée votre charte complète puis votre site sur cette base.",
    recommended: false,
    features: [
      { icon: PenTool, text: "Logo professionnel (2 propositions)" },
      { icon: Palette, text: "Palette de couleurs + typographies" },
      { icon: FileText, text: "Fichier de charte graphique livré" },
      { icon: Smartphone, text: "Site vitrine Pro 5 pages inclus" },
      { icon: Link, text: "Cohérence visuelle totale site + réseaux" },
      { icon: RefreshCw, text: "2 révisions incluses sur la charte" },
      { icon: Clock, text: "Livré en 12 à 16 jours" },
    ],
    cta: "DEMANDER UN DEVIS",
    theme: {
      border: "border-amber-500/50 hover:border-amber-400",
      shadow: "shadow-[0_0_30px_rgba(245,158,11,0.25)]",
      flare: "bg-amber-500/30",
      gradient: "from-white to-amber-300",
      button: "bg-white/10 hover:bg-amber-500/20 text-white border-white/20 hover:border-amber-400/50",
    },
  },
];

function DecorativeStars() {
  return (
    <div className="absolute left-1/2 w-screen -translate-x-1/2 pointer-events-none before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:border-t before:border-dashed before:border-zinc-800">
      <div className="relative container mx-auto h-full max-sm:w-[calc(100%-30px)]">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pt-1 pl-1 text-zinc-700">
          <Star className="size-10 text-zinc-700 fill-zinc-900 max-md:hidden" />
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 pt-1 pr-1 text-zinc-700">
          <Star className="size-10 text-zinc-700 fill-zinc-900 max-md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = plans.length;
  const ref = useReveal();

  const getPosition = (index: number) => {
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="offres" className="py-24 bg-black relative overflow-hidden" ref={ref}>
      <div className="relative container mx-auto border-x border-dashed border-zinc-800/80 py-8 sm:py-16 px-4 sm:px-6">
        <DecorativeStars />

        <div className="flex flex-col items-center gap-6 py-8 sm:gap-10 sm:py-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
            <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Mes offres
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg max-w-xl">
              Chaque projet avec son tarif
            </p>
          </div>

          {/* Carousel Section */}
          <div className="w-full flex flex-col gap-8">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full overflow-visible"
            >
              <CarouselContent className="-ml-4 sm:-ml-6 overflow-visible py-8">
                {plans.map((plan, index) => {
                  const position = getPosition(index);
                  const isRec = plan.recommended;

                  return (
                    <CarouselItem
                      key={plan.id}
                      className="basis-[85%] sm:basis-[50%] lg:basis-[32%] xl:basis-[28%] pl-4 sm:pl-6"
                    >
                      <div
                        className={cn(
                          "relative transition-all duration-500 ease-out h-full flex flex-col rounded-[2.5rem] bg-zinc-950/90 border-2 p-7 sm:p-8 text-center backdrop-blur-2xl overflow-hidden",
                          plan.theme.border,
                          plan.theme.shadow,
                          position === 0 && "z-50 scale-105 opacity-100 bg-zinc-900/90 shadow-2xl",
                          position === -1 && "z-40 -translate-x-4 scale-95 opacity-90",
                          position === 1 && "z-40 translate-x-4 scale-95 opacity-90",
                          Math.abs(position) > 1 && "z-30 scale-85 opacity-60"
                        )}
                      >
                        {/* Top glow flare effect */}
                        <div
                          className={`absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-24 rounded-[100%] blur-[40px] pointer-events-none ${plan.theme.flare}`}
                        />

                        {isRec && (
                          <span className="absolute top-4 right-4 bg-[#e60029] text-white font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md z-20">
                            RECOMMANDÉ
                          </span>
                        )}

                        {/* Title and Subtitle */}
                        <h3 className={`font-heading font-extrabold text-2xl bg-gradient-to-r ${plan.theme.gradient} bg-clip-text text-transparent mb-1 relative z-10`}>
                          {plan.name}
                        </h3>

                        <div className="mb-4 relative z-10">
                          <span className="font-semibold text-sm text-zinc-200">
                            {plan.subtitle}
                          </span>
                        </div>

                        <p className="text-[13px] text-zinc-400 mb-6 relative z-10 font-body leading-relaxed min-h-[40px]">
                          {plan.description}
                        </p>

                        {/* Features List */}
                        <div className="flex-1 w-full flex flex-col mb-8 relative z-10 justify-start">
                          <ul className="space-y-3.5 inline-block text-left w-full">
                            {plan.features.map((f, j) => (
                              <li key={j} className="flex items-start gap-3 text-[13.5px] font-medium text-zinc-300">
                                <f.icon className="text-rose-400 w-4 h-4 shrink-0 mt-0.5" />
                                <span>{f.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Link Button */}
                        <a
                          href={`https://wa.me/2290190107869?text=${encodeURIComponent(
                            `Bonjour ! Je souhaiterais obtenir un devis pour l'offre : ${plan.name}.\n\n` +
                            `Détails : ${plan.subtitle}\n` +
                            `${plan.description}\n\n` +
                            `Fonctionnalités incluses :\n` +
                            plan.features.map((f) => `- ${f.text}`).join("\n")
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "relative z-10 w-full px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer text-center block",
                            plan.theme.button
                          )}
                        >
                          {plan.cta}
                        </a>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Carousel Prev/Next Control Buttons */}
            <div className="flex justify-center gap-4 pt-2">
              <Button
                size="icon"
                className="size-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
                onClick={() => api?.scrollPrev()}
                aria-label="Offre précédente"
              >
                <ArrowLeft className="size-5" />
              </Button>

              <Button
                size="icon"
                className="size-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
                onClick={() => api?.scrollNext()}
                aria-label="Offre suivante"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <DecorativeStars />
      </div>
    </section>
  );
}
