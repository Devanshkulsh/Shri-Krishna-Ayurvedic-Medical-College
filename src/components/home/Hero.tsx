import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DeferredVideo from "../shared/DeferredVideo";

export default function Hero() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative -mt-20 flex min-h-dvh w-full items-center justify-center overflow-hidden bg-dark pb-12 pt-24 sm:mt-0 sm:min-h-192 sm:pt-20 lg:h-screen lg:min-h-150 lg:pt-0 lg:pb-12">
      {/* Parallax Background - Added -inset-2 to eliminate subpixel white line gaps */}
      <motion.div
        className="absolute -inset-2 z-0 bg-black"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <DeferredVideo
          src="/hero_video.mp4"
          type="video/mp4"
          poster="/hero.png"
          priority
          mediaClassName="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/65 to-black/45" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(139,195,74,0.22),transparent_45%)]" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
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
          className="max-w-4xl text-left text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Reviving{" "}
          <span className="text-secondary drop-shadow-[0_0_15px_rgba(139,195,74,0.5)]">
            Ancient Wisdom
          </span>{" "}
          <br className="hidden sm:block" />
          with Modern Healthcare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-2xl text-left text-base font-medium leading-relaxed text-gray-200 sm:mt-8 sm:text-lg md:text-xl"
        >
          Experience pure Ayurveda at our premium medical college and hospital.
          We cultivate tomorrow's leading doctors with holistic expertise and
          innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-transparent bg-primary px-6 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(15,175,59,0.5)] sm:w-auto sm:px-8">
            <span className="relative z-10 flex items-center gap-2">
              Apply Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:px-8">
            Book Counselling
          </button>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-4 sm:mt-14 md:grid-cols-3 lg:mb-12"
        >
          {[
            { label: "NAAC Focused", value: "Premium Campus" },
            { label: "Clinical Training", value: "Hands-on Learning" },
            { label: "BAMS Journey", value: "Future Doctors" },
          ].map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md ${
                idx === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 sm:text-[11px]">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
