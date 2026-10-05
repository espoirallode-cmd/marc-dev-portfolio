import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    q: "Quel est le délai de livraison ?", 
    a: "Le délai varie selon l'offre choisie : entre 5 et 10 jours ouvrés en moyenne. Vous recevez un planning détaillé dès le début du projet.",
  },
  { 
    q: "Combien de révisions sont incluses ?", 
    a: "Chaque offre inclut 2 tours de révisions. Des modifications supplémentaires peuvent être réalisées sur devis.",
  },
  { 
    q: "Quels moyens de paiement acceptez-vous ?", 
    a: "Pour le moment vous serez dirigé vers mon site Comeup pour terminer votre commande en toute sécurité.",
  },
  { 
    q: "Que se passe-t-il après la livraison ?", 
    a: "Vous recevez tous les accès à votre site. Et un mois de suivi inclus pour toute mise à jour complémentaire.",
  },
  { 
    q: "Puis-je modifier mon site moi-même après livraison ?", 
    a: "Oui, selon la solution technique choisie, vous pouvez modifier les contenus de manière autonome. Une formation rapide est incluse.",
  },
  { 
    q: "Et si l'IA se trompe ?", 
    a: "C'est pour ça que je suis là. Je valide, je corrige, je teste sur tous les appareils. Je suis votre filtre de qualité. Vous n'achetez pas une IA — vous m'achetez moi, avec l'IA comme outil.",
  },
  { 
    q: "Mais c'est fait par une IA, c'est pas du vrai travail ?", 
    a: "L'outil n'est pas le problème. Ce qui compte, c'est ce qu'on en fait.\nUn architecte utilise AutoCAD, un photographe utilise Lightroom. L'outil ne remet pas en cause la qualité du travail — c'est l'expertise derrière qui fait la différence.\nJ'utilise l'IA comme levier : elle me permet d'aller plus vite, et cette rapidité je vous la répercute en tarif et en délai. Ce que vous payez, c'est mon jugement et ma capacité à transformer vos besoins en un site qui convertit.\nLa vraie question n'est pas 'est-ce que c'est fait par une IA' — c'est : est-ce que votre site va vous ramener des clients ? Et là, ma réponse est oui.",
  },
  { 
    q: "Est-il possible d'avoir un site multilingue ?", 
    a: "Absolument. Je peux intégrer plusieurs langues à votre site selon vos besoins — français, anglais, espagnol et bien d'autres. Un site multilingue, c'est plus de visibilité, plus de clients potentiels, et une image encore plus professionnelle. Il suffit juste de le mentionner après votre commande.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="faq" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Questions fréquentes
        </h2>

        <div className="reveal divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const numStr = String(i + 1).padStart(2, "0");

            return (
              <div key={i} className="py-6 transition-colors">
                <button
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    {/* Numbered Pill - White Glass Effect */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md shadow-sm ${
                      isOpen
                        ? "bg-white/25 border border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : "bg-white/10 border border-white/20 text-white/80 group-hover:bg-white/15 group-hover:border-white/30 group-hover:text-white"
                    }`}>
                      {numStr}
                    </div>

                    {/* Question Text */}
                    <span className="font-heading font-bold text-base sm:text-lg text-white transition-colors">
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle Button (+ / -) - White Glass Effect */}
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-sm ${
                    isOpen
                      ? "bg-white/25 border border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      : "bg-white/10 border border-white/20 text-white/80 group-hover:bg-white/15 group-hover:border-white/30 group-hover:text-white"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-14 sm:ml-[4.25rem] pl-4 sm:pl-5 border-l-2 border-white/20">
                      <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
