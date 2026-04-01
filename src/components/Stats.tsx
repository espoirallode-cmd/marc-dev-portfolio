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
    <span ref={ref} className="font-heading font-bold text-4xl sm:text-5xl text-primary">
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
    { icon: FolderOpen, value: 20, label: "Projets livrés" },
    { icon: Clock, value: 7, label: "Délai moyen (jours)", suffix: "" },
    { icon: Smile, value: 100, label: "Clients satisfaits" },
  ];

  return (
    <section className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i} className={`flex flex-col items-center gap-3 ${i < stats.length - 1 ? "md:border-r md:border-foreground/10" : ""}`}>
            <s.icon className="w-6 h-6 text-muted-foreground mb-2" />
            <AnimatedCounter target={s.value} suffix={s.suffix} />
            <span className="font-body text-muted-foreground text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
