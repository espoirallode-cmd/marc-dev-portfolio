import { useReveal } from "@/hooks/use-reveal";

const projects = [
  { id: "01", name: "Marco's Portfolio", url: "marcos-portfolio-main.vercel.app", color: "#219ebc" },
  { id: "02", name: "Aurélie", url: "la-transformation-hub.vercel.app", color: "#fb5607" },
  { id: "03", name: "Négo's Food", url: "negos-food.vercel.app", color: "#99d98c" },
  { id: "04", name: "El Elias Fashion", url: "el-elias-fashion.vercel.app", color: "#06d6a0" },
  { id: "05", name: "ArtPrintly", url: "artprintly.vercel.app", color: "#16db65" },
  { id: "06", name: "Chez Hoovi Bouffe", url: "chez-hoovi-bouffe.vercel.app", color: "#7209b7" },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="realisations" className="py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Mes récentes réalisations
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-16 rounded-full" />

        {/* Main Wrapper mimicking the mockup */}
        <div className="bg-[#0B0C15]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden w-full">
          
          {/* Subtle background glow from primary color to honor the site's dark glassmorphism theme */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col gap-4 relative z-10">
            {projects.map((project, i) => (
              <a
                key={i}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-start sm:items-center px-6 sm:px-8 py-5 sm:py-[1.35rem] bg-white/[0.015] border border-white/[0.04] rounded-[1rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 w-full cursor-pointer hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 sm:gap-4 font-body">
                  <span className="font-bold text-[17px] sm:text-lg shrink-0" style={{ color: project.color, textShadow: `0 0 12px ${project.color}60` }}>{project.id}.</span>
                  <span className="text-white font-bold text-[17px] sm:text-lg transition-colors leading-none tracking-wide">{project.name}</span>
                </div>
                
                <span className="hidden sm:inline-block text-white/20 px-3">—</span>
                
                <span className="text-white/40 font-medium text-[15px] sm:text-base transition-colors group-hover:text-white/60 sm:ml-0 ml-10 mt-1 sm:mt-0">
                  {project.url}
                </span>
                
                {/* Small external link icon that appears on hover */}
                <div className="sm:ml-auto absolute top-6 right-6 sm:relative sm:top-0 sm:right-0 mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: project.color, filter: `drop-shadow(0 0 8px ${project.color}80)` }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
