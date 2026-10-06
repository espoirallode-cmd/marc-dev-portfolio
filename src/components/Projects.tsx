import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {
  ExternalLink,
  Search,
  SearchX,
  RotateCcw,
  Globe,
} from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  displayUrl: string;
  image: string;
  category: string;
  color: string;
}

const glass = cn(
  "border bg-black/60",
  "border-white/10",
  "backdrop-blur-md",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-12px_rgba(0,0,0,0.5)]"
);

const projects: Project[] = [
  {
    id: "01",
    slug: "marcos-portfolio",
    title: "Marco's Portfolio",
    description: "Portfolio interactif & moderne avec animations dynamiques et interface fluide.",
    url: "https://marcos-portfolio-main.vercel.app",
    displayUrl: "marcos-portfolio-main.vercel.app",
    image: "/assets/project-1.png",
    category: "Portfolio",
    color: "#38bdf8",
  },
  {
    id: "02",
    slug: "aurelie",
    title: "Aurélie",
    description: "Plateforme de coaching & hub de transformation personnelle sur-mesure.",
    url: "https://la-transformation-hub.vercel.app",
    displayUrl: "la-transformation-hub.vercel.app",
    image: "/assets/project-2.png",
    category: "Coaching",
    color: "#f97316",
  },
  {
    id: "03",
    slug: "negos-food",
    title: "Négo's Food",
    description: "Site e-commerce & vitrine gourmande avec menu interactif et commande rapide.",
    url: "https://negos-food.vercel.app",
    displayUrl: "negos-food.vercel.app",
    image: "/assets/project-3.png",
    category: "Restauration",
    color: "#4ade80",
  },
  {
    id: "04",
    slug: "el-elias-fashion",
    title: "El Elias Fashion",
    description: "Boutique de mode haut de gamme réactive aux tendances contemporaines.",
    url: "https://el-elias-fashion.vercel.app",
    displayUrl: "el-elias-fashion.vercel.app",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    category: "Mode",
    color: "#2dd4bf",
  },
  {
    id: "05",
    slug: "artprintly",
    title: "ArtPrintly",
    description: "Service d'impression artistique personnalisée et galerie d'œuvres numériques.",
    url: "https://artprintly.vercel.app",
    displayUrl: "artprintly.vercel.app",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    category: "Art & Print",
    color: "#a3e635",
  },
  {
    id: "06",
    slug: "chez-hoovi-bouffe",
    title: "Chez Hoovi Bouffe",
    description: "Restaurant local authentique avec réservation et commande en ligne.",
    url: "https://chez-hoovi-bouffe.vercel.app",
    displayUrl: "chez-hoovi-bouffe.vercel.app",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    category: "Restauration",
    color: "#c084fc",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group mb-0 flex h-full flex-col overflow-hidden rounded-2xl border-white/10 bg-zinc-950/80 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60">
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
        />
        <Badge
          variant="outline"
          className={cn(
            glass,
            "absolute top-3 right-3 border-white/20 font-semibold text-white bg-black/60 backdrop-blur-md"
          )}
        >
          {project.category}
        </Badge>
        {/* Number badge - White Glass */}
        <span className="absolute top-3 left-3 font-mono font-bold text-xs px-2.5 py-1 rounded-full bg-white/15 border border-white/30 text-white backdrop-blur-md shadow-sm">
          {project.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-x-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Globe aria-hidden="true" className="size-3.5 text-zinc-400" />
            {project.displayUrl}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-white">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
          {project.description}
        </p>

        <div className="relative z-10 mt-auto">
          <Button
            asChild
            variant="secondary"
            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Voir le projet <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useReveal();

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.displayUrl.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <section id="realisations" className="bg-black py-16 sm:py-24 relative" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-16 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Mes récentes réalisations
        </h2>

        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row md:mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer",
                  activeCategory === category
                    ? "text-white"
                    : "border border-white/10 bg-zinc-950 text-zinc-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="active-project-category"
                    className="absolute inset-0 rounded-full bg-white/20 border border-white/30 backdrop-blur-md"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64 md:w-80">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400"
            />
            <Input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-full pl-9 bg-zinc-950 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-white/20"
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={project.slug}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-white/10 border border-white/10">
                <SearchX aria-hidden="true" className="size-10 text-zinc-400" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Aucun projet trouvé
              </h3>
              <p className="mb-8 max-w-lg text-zinc-400">
                Aucun projet ne correspond à &ldquo;
                <strong className="text-white">{searchQuery}</strong>
                &rdquo;. Essayez de modifier votre recherche.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  onClick={resetFilters}
                  className="h-12 rounded-full px-6 bg-white text-black hover:bg-zinc-200 cursor-pointer"
                >
                  <RotateCcw aria-hidden="true" className="mr-2 size-4" />
                  Réinitialiser la recherche
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
