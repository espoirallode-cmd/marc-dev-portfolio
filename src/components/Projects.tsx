import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink } from "lucide-react";

const projects = [
  { id: "01", name: "Marco's Portfolio", url: "marcos-portfolio-main.vercel.app", color: "#38bdf8" },
  { id: "02", name: "Aurélie", url: "la-transformation-hub.vercel.app", color: "#f97316" },
  { id: "03", name: "Négo's Food", url: "negos-food.vercel.app", color: "#4ade80" },
  { id: "04", name: "El Elias Fashion", url: "el-elias-fashion.vercel.app", color: "#2dd4bf" },
  { id: "05", name: "ArtPrintly", url: "artprintly.vercel.app", color: "#a3e635" },
  { id: "06", name: "Chez Hoovi Bouffe", url: "chez-hoovi-bouffe.vercel.app", color: "#c084fc" },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="realisations" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-white via-zinc-200 to-rose-500 bg-clip-text text-transparent">
          Mes récentes réalisations
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(229,0,36,0.5)]" />

        {/* Main Wrapper */}
        <div className="bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative overflow-hidden w-full">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col gap-4 relative z-10">
            {projects.map((project, i) => (
              <a
                key={i}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-start sm:items-center px-6 sm:px-8 py-5 sm:py-[1.35rem] bg-black/60 border border-white/10 rounded-[1.25rem] hover:bg-zinc-900/90 hover:border-rose-500/40 hover:shadow-[0_0_25px_rgba(229,0,36,0.2)] transition-all duration-300 w-full cursor-pointer hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 sm:gap-4 font-body">
                  <span className="font-bold text-[17px] sm:text-lg shrink-0" style={{ color: project.color, textShadow: `0 0 15px ${project.color}90` }}>{project.id}.</span>
                  <span className="text-white font-bold text-[17px] sm:text-lg transition-colors group-hover:text-rose-300 leading-none tracking-wide">{project.name}</span>
                </div>
                
                <span className="hidden sm:inline-block text-zinc-600 px-3">—</span>
                
                <span className="text-zinc-400 font-medium text-[15px] sm:text-base transition-colors group-hover:text-zinc-200 sm:ml-0 ml-10 mt-1 sm:mt-0">
                  {project.url}
                </span>
                
                {/* External link icon */}
                <div className="sm:ml-auto absolute top-6 right-6 sm:relative sm:top-0 sm:right-0 mt-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

