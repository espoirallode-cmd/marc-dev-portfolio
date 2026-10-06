import { useEffect, useRef, useState } from "react";
import { FolderOpen, Clock, Smile, type LucideIcon } from "lucide-react";

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
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
      {target === 100 ? count + "%" : "+" + count}
      {suffix}
    </span>
  );
}

interface Stat {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

export default function Stats() {
  const stats: Stat[] = [
    { icon: FolderOpen, value: 10, label: "Projets réalisés" },
    { icon: Clock,      value: 7,  label: "Délai moyen (jours)", suffix: "" },
    { icon: Smile,      value: 100, label: "Clients satisfaits" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 border border-white/15 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-[0_0_60px_rgba(255,255,255,0.04)] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-3 p-4 ${
                i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              {/* Icon — white glass */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-1">
                <s.icon className="w-6 h-6 text-white" />
              </div>

              {/* Number — heading font, white */}
              <AnimatedCounter target={s.value} suffix={s.suffix} />

              {/* Label */}
              <span className="font-body text-white/60 font-medium text-sm sm:text-base">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
