import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight">
      {target === 100 ? `${count}%` : `+ ${count}`}
      {suffix}
    </span>
  );
}

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export default function Stats() {
  const stats: Stat[] = [
    { value: 10, label: "Projets réalisés" },
    { value: 7,  label: "Délai moyen (jours)" },
    { value: 100, label: "Clients satisfaits" },
  ];

  return (
    <section className="py-12 sm:py-20 bg-black relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Outer Card Container */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-white/10 bg-zinc-950/60 p-2.5 sm:p-3.5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#09090b] py-7 sm:py-9 px-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/40"
              >
                {/* Number */}
                <AnimatedCounter target={s.value} suffix={s.suffix} />

                {/* Pill Badge */}
                <span className="inline-flex items-center justify-center rounded-full bg-[#E60029] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(230,0,41,0.5)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
