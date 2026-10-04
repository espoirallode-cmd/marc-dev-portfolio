import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ChevronDown, Clock, RefreshCw, CreditCard, Rocket, Sliders, ShieldCheck, Sparkles, Globe } from "lucide-react";

const faqs = [
  { 
    q: "Quel est le délai de livraison ?", 
    a: "Le délai varie selon l'offre choisie : entre 5 et 10 jours ouvrés en moyenne. Vous recevez un planning détaillé dès le début du projet.",
    icon: Clock,
    color: "#38bdf8"
  },
  { 
    q: "Combien de révisions sont incluses ?", 
    a: "Chaque offre inclut 2 tours de révisions. Des modifications supplémentaires peuvent être réalisées sur devis.",
    icon: RefreshCw,
    color: "#f97316"
  },
  { 
    q: "Quels moyens de paiement acceptez-vous ?", 
    a: "Pour le moment vous serez dirigé vers mon site Comeup pour terminer votre commande en toute sécurité.",
    icon: CreditCard,
    color: "#4ade80"
  },
  { 
    q: "Que se passe-t-il après la livraison ?", 
    a: "Vous recevez tous les accès à votre site. Et un mois de suivi inclus pour toute mise à jour complémentaire.",
    icon: Rocket,
    color: "#2dd4bf"
  },
  { 
    q: "Puis-je modifier mon site moi-même après livraison ?", 
    a: "Oui, selon la solution technique choisie, vous pouvez modifier les contenus de manière autonome. Une formation rapide est incluse.",
    icon: Sliders,
    color: "#a3e635"
  },
  { 
    q: "Et si l'IA se trompe ?", 
    a: "C'est pour ça que je suis là. Je valide, je corrige, je teste sur tous les appareils. Je suis votre filtre de qualité. Vous n'achetez pas une IA — vous m'achetez moi, avec l'IA comme outil.",
    icon: ShieldCheck,
    color: "#38bdf8"
  },
  { 
    q: "Mais c'est fait par une IA, c'est pas du vrai travail ?", 
    a: "L'outil n'est pas le problème. Ce qui compte, c'est ce qu'on en fait.\nUn architecte utilise AutoCAD, un photographe utilise Lightroom. L'outil ne remet pas en cause la qualité du travail — c'est l'expertise derrière qui fait la différence.\nJ'utilise l'IA comme levier : elle me permet d'aller plus vite, et cette rapidité je vous la répercute en tarif et en délai. Ce que vous payez, c'est mon jugement et ma capacité à transformer vos besoins en un site qui convertit.\nLa vraie question n'est pas 'est-ce que c'est fait par une IA' — c'est : est-ce que votre site va vous ramener des clients ? Et là, ma réponse est oui.",
    icon: Sparkles,
    color: "#c084fc"
  },
  { 
    q: "Est-il possible d'avoir un site multilingue ?", 
    a: "Absolument. Je peux intégrer plusieurs langues à votre site selon vos besoins — français, anglais, espagnol et bien d'autres. Un site multilingue, c'est plus de visibilité, plus de clients potentiels, et une image encore plus professionnelle. Il suffit juste de le mentionner après votre commande.",
    icon: Globe,
    color: "#f43f5e"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="faq" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-4 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Questions fréquentes
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(229,0,36,0.5)]" />

        <div className="reveal space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-zinc-950/80 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/80 group/card shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Background glow effect */}
              <div 
                className="absolute top-0 right-0 bottom-0 w-32 md:w-64 opacity-10 pointer-events-none transition-opacity duration-300 group-hover/card:opacity-20"
                style={{
                  background: `linear-gradient(to left, ${faq.color}, transparent)`
                }}
              />

              <button
                className="w-full relative z-10 flex items-center justify-between gap-5 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4 sm:gap-5 flex-1">
                  {/* Colored Icon Wrapper */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover/card:scale-105"
                    style={{ 
                      backgroundColor: `${faq.color}1A`,
                      borderColor: `${faq.color}4D`,
                      boxShadow: `0 0 20px -3px ${faq.color}4D`
                    }}
                  >
                    <faq.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" style={{ color: faq.color }} />
                  </div>

                  {/* Question */}
                  <span className="font-heading font-bold text-base sm:text-lg text-white group-hover/card:text-rose-300 transition-colors">
                    {faq.q}
                  </span>
                </div>

                {/* Dropdown Chevron */}
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:bg-white/10 transition-colors ml-2">
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-rose-400" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className="overflow-hidden transition-all duration-300 relative z-10"
                style={{
                  maxHeight: openIndex === i ? "600px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-5 pb-6 pt-0 ml-[4.25rem] sm:ml-[4.75rem]">
                  <p className="font-body text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
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

