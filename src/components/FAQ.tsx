import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ChevronDown, Clock, RefreshCw, CreditCard, Rocket, Sliders, ShieldCheck, Sparkles, Globe } from "lucide-react";

const faqs = [
  { 
    q: "Quel est le délai de livraison ?", 
    a: "Le délai varie selon l'offre choisie : entre 5 et 10 jours ouvrés en moyenne. Vous recevez un planning détaillé dès le début du projet.",
    icon: Clock,
    color: "#219ebc"
  },
  { 
    q: "Combien de révisions sont incluses ?", 
    a: "Chaque offre inclut 2 tours de révisions. Des modifications supplémentaires peuvent être réalisées sur devis.",
    icon: RefreshCw,
    color: "#fb5607"
  },
  { 
    q: "Quels moyens de paiement acceptez-vous ?", 
    a: "Pour le moment vous serai dirigé vers mon site Comeup pour terminer votre commande.",
    icon: CreditCard,
    color: "#99d98c"
  },
  { 
    q: "Que se passe-t-il après la livraison ?", 
    a: "Vous recevez tous les accès à votre site. Et un mois de suivi inclus pour toute mise à jour complémentaire.",
    icon: Rocket,
    color: "#06d6a0"
  },
  { 
    q: "Puis-je modifier mon site moi-même après livraison ?", 
    a: "Oui, selon la solution technique choisie, vous pouvez modifier les contenus de manière autonome. Une formation rapide est incluse.",
    icon: Sliders,
    color: "#16db65"
  },
  { 
    q: "Et si l'IA se trompe ?", 
    a: "C'est pour ça que je suis là. Je valide, je corrige, je teste sur tous les appareils. Je suis votre filtre de qualité. Vous n'achetez pas une IA — vous m'achetez moi, avec l'IA comme outil.",
    icon: ShieldCheck,
    color: "#4cc9f0"
  },
  { 
    q: "Mais c'est fait par une IA, c'est pas du vrai travail ?", 
    a: "L'outil n'est pas le problème. Ce qui compte, c'est ce qu'on en fait.\nUn architecte utilise AutoCAD, un photographe utilise Lightroom. L'outil ne remet pas en cause la qualité du travail — c'est l'expertise derrière qui fait la différence.\nJ'utilise l'IA comme levier : elle me permet d'aller plus vite, et cette rapidité je vous la répercute en tarif et en délai. Ce que vous payez, c'est mon jugement et ma capacité à transformer vos besoins en un site qui convertit.\nLa vraie question n'est pas 'est-ce que c'est fait par une IA' — c'est : est-ce que votre site va vous ramener des clients ? Et là, ma réponse est oui.",
    icon: Sparkles,
    color: "#7209b7"
  },
  { 
    q: "Est-il possible d'avoir un site multilingue ?", 
    a: "Absolument. Je peux intégrer plusieurs langues à votre site selon vos besoins — français, anglais, espagnol et bien d'autres. Un site multilingue, c'est plus de visibilité, plus de clients potentiels, et une image encore plus professionnelle. Il suffit juste de le mentionner après votre commande.",
    icon: Globe,
    color: "#e50024"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="faq" className="py-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Questions fréquentes
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-16 rounded-full" />

        <div className="reveal space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl transition-all duration-300 hover:bg-white/[0.04] group/card"
            >
              {/* Subtle background glow effect */}
              <div 
                className="absolute top-0 right-0 bottom-0 w-32 md:w-64 opacity-10 pointer-events-none transition-opacity duration-300 group-hover/card:opacity-25"
                style={{
                  background: `linear-gradient(to left, ${faq.color}, transparent)`
                }}
              />

              <button
                className="w-full relative z-10 flex items-center justify-between gap-5 p-5 text-left cursor-pointer transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4 sm:gap-5 flex-1">
                  {/* Colored Icon Wrapper */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover/card:scale-105"
                    style={{ 
                      backgroundColor: `${faq.color}1A`, // 10% opacity
                      borderColor: `${faq.color}4D`, // 30% opacity
                      boxShadow: `0 0 20px -3px ${faq.color}4D`
                    }}
                  >
                    <faq.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" style={{ color: faq.color }} />
                  </div>

                  {/* Question */}
                  <span className="font-heading font-semibold text-[14.5px] sm:text-base text-white/90 group-hover/card:text-white transition-colors">
                    {faq.q}
                  </span>
                </div>

                {/* Dropdown Chevron */}
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/[0.05] group-hover/card:bg-white/[0.1] transition-colors ml-2">
                  <ChevronDown
                    className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className="overflow-hidden transition-all duration-300 relative z-10"
                style={{
                  maxHeight: openIndex === i ? "500px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-5 pb-6 pt-0 ml-[4.25rem] sm:ml-[4.75rem]">
                  <p className="font-body text-white/60 text-[13.5px] sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
