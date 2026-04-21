import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex h-screen min-h-150 w-full items-center overflow-hidden bg-dark">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero.png"
          className="h-full w-full object-cover object-center"
        >
          <source src="hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/65 to-black/45" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(139,195,74,0.22),transparent_45%)]" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:pl-2 lg:pr-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md"
        >
          <Leaf className="h-3.5 w-3.5 text-secondary" />
          Holistic Excellence Since 2014
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl text-left text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Reviving{" "}
          <span className="text-secondary drop-shadow-[0_0_15px_rgba(139,195,74,0.5)]">
            Ancient Wisdom
          </span>{" "}
          <br />
          with Modern Healthcare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-2xl text-left text-base font-medium text-gray-200 sm:text-lg md:text-xl"
        >
          Experience pure Ayurveda at our premium medical college and hospital.
          We cultivate tomorrow's leading doctors with holistic expertise and
          innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <button className="group relative overflow-hidden rounded-full border border-transparent bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(15,175,59,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Apply Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="group relative overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
            Book Counselling
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {[
            { label: "NAAC Focused", value: "Premium Campus" },
            { label: "Clinical Training", value: "Hands-on Learning" },
            { label: "BAMS Journey", value: "Future Doctors" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-md"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-300">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
