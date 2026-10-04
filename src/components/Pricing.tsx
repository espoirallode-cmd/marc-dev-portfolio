import { useReveal } from "@/hooks/use-reveal";
import { FileText, Smartphone, Mail, Clock, Layers, Sparkles, Search, CreditCard, Shield, Link, PenTool, Calendar, MessageSquare, Send, Palette, RefreshCw, type LucideIcon } from "lucide-react";
import ShinyText from "./ShinyText";

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface Plan {
  name: string;
  subtitle?: string;
  description?: string;
  price: string;
  recommended: boolean;
  features: Feature[];
  cta: string;
  theme: {
    border: string;
    shadow: string;
    flare: string;
    gradient: string;
  };
}

const plans: Plan[] = [
  {
    name: "Essentielle",
    subtitle: "Site vitrine 3 pages",
    description: "L'essentiel pour avoir une présence professionnelle en ligne et accueillir vos prospects.",
    price: "",
    recommended: false,
    features: [
      { icon: FileText, text: "3 pages : Accueil, À propos, Contact" },
      { icon: PenTool, text: "Design adapté à votre univers" },
      { icon: Mail, text: "Formulaire de contact intégré" },
      { icon: Smartphone, text: "Version mobile optimisée" },
      { icon: Link, text: "Intégration de vos liens existants" },
      { icon: Clock, text: "Livré en 5 à 7 jours" },
    ],
    cta: "Demander un devis",
    theme: {
      border: "border-cyan-500/40",
      shadow: "shadow-[0_0_30px_rgba(6,182,212,0.2)]",
      flare: "bg-cyan-500/30",
      gradient: "from-white to-cyan-400"
    }
  },
  {
    name: "Plus populaire",
    subtitle: "Site vitrine Pro — 5 pages",
    description: "Pour les coachs qui veulent convertir leurs visiteurs en prospects qualifiés.",
    price: "",
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
    cta: "Demander un devis",
    theme: {
      border: "border-rose-500/90",
      shadow: "shadow-[0_0_40px_rgba(229,0,36,0.4)]",
      flare: "bg-rose-500/40",
      gradient: "from-white via-rose-300 to-rose-500"
    }
  },
  {
    name: "Premium",
    subtitle: "Site vitrine complet — 7 pages",
    description: "Le pack complet avec système de collecte d'emails et tunnel de vente intégré.",
    price: "",
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
    cta: "Demander un devis",
    theme: {
      border: "border-emerald-500/40",
      shadow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
      flare: "bg-emerald-500/30",
      gradient: "from-white to-emerald-400"
    }
  },
  {
    name: "Identité + Site",
    subtitle: "Charte graphique + site vitrine",
    description: "Vous n'avez pas encore d'identité visuelle ? Je crée votre charte complète puis votre site sur cette base.",
    price: "",
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
    cta: "Demander un devis",
    theme: {
      border: "border-amber-500/40",
      shadow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]",
      flare: "bg-amber-500/30",
      gradient: "from-white to-amber-400"
    }
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-[90rem] mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Mes offres
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          {plans.map((plan, i) => {
            const isRec = plan.recommended;
            return (
              <div
                key={i}
                className={`reveal relative flex flex-col items-center bg-zinc-950/90 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden mx-auto w-full max-w-sm border-2 ${plan.theme.border} ${plan.theme.shadow} ${isRec ? 'lg:scale-105 z-10 bg-zinc-900/90' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Top glow flare effect */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-24 rounded-[100%] blur-[40px] pointer-events-none ${plan.theme.flare}`} />

                {isRec && (
                  <span className="absolute top-4 right-4 bg-[#e60029] text-white font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    RECOMMANDÉ
                  </span>
                )}

                {/* Title and Subtitles */}
                <h3 className={`font-heading font-extrabold text-2xl bg-gradient-to-r ${plan.theme.gradient} bg-clip-text text-transparent mb-1 relative z-10`}>{plan.name}</h3>
                {plan.subtitle && (
                  <div className={`${plan.description ? 'mb-4' : 'mb-8'} relative z-10`}>
                    <ShinyText 
                      text={plan.subtitle} 
                      color="#ffffff" 
                      shineColor="#f43f5e" 
                      speed={2} 
                      className="font-semibold text-[15px]" 
                    />
                  </div>
                )}
                
                {plan.description && (
                  <p className="text-[13.5px] text-zinc-400 mb-8 relative z-10 font-body leading-relaxed">{plan.description}</p>
                )}

                {/* Features list */}
                <div className="flex-1 w-full flex flex-col mb-10 relative z-10 justify-start">
                  <ul className="space-y-4 inline-block text-left mx-auto">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-[14px] font-medium text-zinc-300">
                        <f.icon className="text-rose-400 w-4 h-4 shrink-0 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <a
                  href={`https://wa.me/2290190107869?text=${encodeURIComponent(
                    `Bonjour ! Je souhaiterais obtenir un devis pour l'offre : ${plan.name}.\n\n` +
                    `Détails : ${plan.subtitle}\n` +
                    `${plan.description}\n\n` +
                    `Fonctionnalités incluses :\n` +
                    plan.features.map(f => `- ${f.text}`).join('\n')
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-10 w-full px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase text-white transition-all duration-300 cursor-pointer text-center ${
                    isRec 
                      ? 'bg-[#e60029] hover:bg-[#c2001f]' 
                      : 'bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                  }`}
                >
                  {plan.cta}
                </a>

              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center reveal" style={{ transitionDelay: "400ms" }}>
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md shadow-[0_0_25px_rgba(245,158,11,0.2)] cursor-default">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-amber-200 font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
              Nom de domaine 1 an offert pour chaque offre
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

