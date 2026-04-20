import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Daily OPD Patients", value: 450, suffix: "+" },
  { label: "Successful Treatments", value: 12000, suffix: "+" },
  { label: "Expert Doctors", value: 50, suffix: "+" },
  { label: "Years of Trust", value: 15, suffix: "" },
];

function Counter({
  from,
  to,
  duration = 2,
  inView,
}: {
  from: number;
  to: number;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) {
      setCount(from);
      return;
    }

    let startTime: number | null = null;
    let rafId = 0;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / (duration * 1000), 1);

      // Easing out function
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);
      setCount(Math.floor(from + (to - from) * easeOut));

      if (progressRatio < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
}

export default function HospitalStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <section className="relative bg-primary py-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight md:text-6xl text-accent">
                <Counter
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  inView={isInView}
                />
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm font-medium tracking-wide uppercase text-white/80 md:mt-4 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
