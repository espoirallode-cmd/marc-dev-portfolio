import { useReveal } from "@/hooks/use-reveal";

const categories = [
  {
    categoryTitle: "Conception & Vitesse",
    categoryBadge: "CATEGORIE 01",
    items: [
      {
        title: "⚡ LIVRAISON RAPIDE (7J)",
        desc: "Votre site web livré clé en main sous 7 jours, prêt à convertir.",
      },
      {
        title: "🎨 DESIGN SUR-MESURE",
        desc: "Un design unique et moderne adapté à votre identité de marque.",
      },
      {
        title: "🚀 CLÉ EN MAIN",
        desc: "Tout est pré-configuré pour un lancement direct et sans effort.",
      },
    ],
  },
  {
    categoryTitle: "Performance & SEO",
    categoryBadge: "CATEGORIE 02",
    items: [
      {
        title: "📱 100% RESPONSIVE",
        desc: "Affichage fluide et parfait sur mobile, tablette et desktop.",
      },
      {
        title: "🔍 SEO OPTIMISÉ",
        desc: "Optimisation Google maximale dès le premier jour.",
      },
      {
        title: "⚡ VITESSE MAXIMALE",
        desc: "Code optimisé pour des temps de chargement ultrarapides.",
      },
    ],
  },
  {
    categoryTitle: "Innovation & Suivi",
    categoryBadge: "CATEGORIE 03",
    items: [
      {
        title: "✨ PROPULSÉ PAR L'IA",
        desc: "Utilisation des meilleures technologies IA d'exception.",
      },
      {
        title: "🎧 SUPPORT INCLUS",
        desc: "Accompagnement et assistance complète après livraison.",
      },
      {
        title: "🛡️ SUIVI PERSONNALISÉ",
        desc: "Un interlocuteur dédié à l'écoute de tous vos besoins.",
      },
    ],
  },
];

export default function Advantages() {
  const ref = useReveal();

  return (
    <section id="avantages" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre préservé exactement */}
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Pourquoi Marc Dev ?
        </h2>

        {/* 3 Catégories en cartes accordéon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center w-full max-w-[340px]">
              {/* Badge & Titre de Catégorie */}
              <div className="text-center mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  {cat.categoryBadge}
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1">
                  {cat.categoryTitle}
                </h3>
              </div>

              {/* Accordion Card */}
              <div className="card">
                {cat.items.map((item, idx) => (
                  <p key={idx} className="group/item">
                    <span>{item.title}</span>
                    <span className="text-[11px] font-normal text-zinc-400 normal-case text-center mt-2 px-2 max-w-[260px] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {item.desc}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

