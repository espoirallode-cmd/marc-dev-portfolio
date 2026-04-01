import { useReveal } from "@/hooks/use-reveal";
import { FileText, Smartphone, Mail, Clock, Layers, Sparkles, Search, MapPin, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Link, PenTool, Calendar, MessageSquare, Send, Palette, RefreshCw, type LucideIcon } from "lucide-react";
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
    price: "297 €",
    recommended: false,
    features: [
      { icon: FileText, text: "3 pages : Accueil, À propos, Contact" },
      { icon: PenTool, text: "Design adapté à votre univers" },
      { icon: Mail, text: "Formulaire de contact intégré" },
      { icon: Smartphone, text: "Version mobile optimisée" },
      { icon: Link, text: "Intégration de vos liens existants" },
      { icon: Clock, text: "Livré en 5 à 7 jours" },
    ],
    cta: "Je choisis Essentielle",
    theme: {
      border: "border-[#219ebc]/30",
      shadow: "shadow-[0_0_20px_0_rgba(33,158,188,0.15),inset_0_0_10px_0_rgba(33,158,188,0.1)]",
      flare: "bg-[#219ebc]/40",
      gradient: "to-[#219ebc]"
    }
  },
  {
    name: "Plus populaire",
    subtitle: "Site vitrine Pro — 5 pages",
    description: "Pour les coachs qui veulent convertir leurs visiteurs en prospects qualifiés.",
    price: "497 €",
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
    cta: "Je choisis cette offre",
    theme: {
      border: "border-[#fb5607]/80",
      shadow: "shadow-[0_0_35px_0_rgba(251,86,7,0.4),inset_0_0_20px_0_rgba(251,86,7,0.2)]",
      flare: "bg-[#fb5607]/80",
      gradient: "to-[#fb5607]"
    }
  },
  {
    name: "Premium",
    subtitle: "Site vitrine complet — 7 pages",
    description: "Le pack complet avec système de collecte d'emails et tunnel de vente intégré.",
    price: "797 €",
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
    cta: "Je choisis Premium",
    theme: {
      border: "border-[#99d98c]/30",
      shadow: "shadow-[0_0_20px_0_rgba(153,217,140,0.15),inset_0_0_10px_0_rgba(153,217,140,0.1)]",
      flare: "bg-[#99d98c]/40",
      gradient: "to-[#99d98c]"
    }
  },
  {
    name: "Identité + Site",
    subtitle: "Charte graphique + site vitrine",
    description: "Vous n'avez pas encore d'identité visuelle ? Je crée votre charte complète puis votre site sur cette base.",
    price: "997 €",
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
    cta: "Je choisis cette offre",
    theme: {
      border: "border-[#06d6a0]/30",
      shadow: "shadow-[0_0_20px_0_rgba(6,214,160,0.15),inset_0_0_10px_0_rgba(6,214,160,0.1)]",
      flare: "bg-[#06d6a0]/40",
      gradient: "to-[#06d6a0]"
    }
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="offres" className="py-24" ref={ref}>
      <div className="max-w-[90rem] mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Mes offres
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          {plans.map((plan, i) => {
            const isRec = plan.recommended;
            return (
              <div
                key={i}
                className={`reveal relative flex flex-col items-center bg-[#0B0C15]/60 backdrop-blur-xl rounded-[2.5rem] p-10 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden mx-auto w-full max-w-sm border-2 ${plan.theme.border} ${plan.theme.shadow} ${isRec ? 'lg:scale-105 z-10' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Top glow flare effect like in the image */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 rounded-[100%] blur-[35px] pointer-events-none ${plan.theme.flare}`} />

                {/* Title and Subtitles */}
                <h3 className={`font-heading font-bold text-2xl bg-gradient-to-r from-white ${plan.theme.gradient} bg-clip-text text-transparent mb-1 relative z-10`}>{plan.name}</h3>
                {plan.subtitle && (
                  <div className={`${plan.description ? 'mb-4' : 'mb-8'} relative z-10`}>
                    <ShinyText 
                      text={plan.subtitle} 
                      color="#ffffff" 
                      shineColor="#d1d5db" 
                      speed={2} 
                      className="font-semibold text-[15px]" 
                    />
                  </div>
                )}
                
                {plan.description && (
                  <p className="text-[13.5px] text-white/70 mb-8 relative z-10 font-body leading-relaxed">{plan.description}</p>
                )}

                {/* Features list */}
                <div className="flex-1 w-full flex flex-col mb-10 relative z-10 justify-start">
                  <ul className="space-y-4 inline-block text-left mx-auto">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-[14px] font-medium text-white/80">
                        <f.icon className="text-white w-4 h-4 shrink-0 drop-shadow-[0_0_8px_hsl(0_0%_100%/0.8)]" />
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Area */}
                <div className="mt-auto mb-6 relative z-10">
                  <p className={`font-heading font-extrabold text-[2.5rem] tracking-tight bg-gradient-to-r from-white ${plan.theme.gradient} bg-clip-text text-transparent flex items-center justify-center gap-1.5 leading-none`}>
                    {plan.price.replace(' €', '')}
                    {!plan.price.includes('devis') && <span className="text-xl font-semibold tracking-normal mt-1">€</span>}
                  </p>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="relative z-10 w-fit mx-auto px-5 sm:px-6 py-2.5 rounded-full font-bold text-[11px] tracking-wider whitespace-nowrap text-white transition-all cursor-pointer uppercase bg-white/[0.05] border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_0_10px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.2),inset_0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                >
                  {plan.cta}
                </a>

              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center reveal" style={{ transitionDelay: "400ms" }}>
          <div className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:bg-white/10 cursor-default">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-white/90 font-medium text-[10px] sm:text-[15px] tracking-wide whitespace-nowrap">
              Nom de domaine 1 an offert pour chaque offre
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
