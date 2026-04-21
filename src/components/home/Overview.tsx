import { motion, type Variants } from "framer-motion";
import { Leaf, Eye, Target } from "lucide-react";
import DeferredVideo from "../shared/DeferredVideo";

export default function Overview() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative z-20 -mt-6 bg-light px-4 py-14 shadow-[0_-20px_60px_rgba(26,26,26,0.1)] sm:-mt-10 sm:rounded-t-[50px] sm:py-18 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content Side */}
          <div className="order-2 space-y-8 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
                About our Institution
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark md:text-5xl lg:leading-[1.1]">
                Where <span className="text-primary">tradition</span> meets{" "}
                <br />
                <span className="text-secondary">innovation.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-dark/70 sm:text-lg md:text-xl">
                Shri Krishna Ayurvedic Medical College & Hospital is located in
                the heart of Chhatarpur, Madhya Pradesh. Our institution is
                dedicated to the ancient science of Ayurveda, combined with the
                rigor of modern medical education.
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <motion.div
                variants={itemVariants}
                className="group rounded-2xl border border-primary/15 bg-primary/5 p-6 transition-colors hover:bg-light hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Eye size={20} />
                </div>
                <h4 className="mt-4 text-lg font-bold text-dark">Our Vision</h4>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  Generate quality education in Ayurvedic and herbal treatment,
                  provide proper training and practice in Ayurveda, and support
                  this with modern laboratory, pharmacy, and departmental
                  technology.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group rounded-2xl border border-secondary/20 bg-secondary/10 p-6 transition-colors hover:bg-light hover:shadow-xl hover:shadow-secondary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white">
                  <Target size={20} />
                </div>
                <h4 className="mt-4 text-lg font-bold text-dark">
                  Our Mission
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  Produce trained Ayurvedic graduates with deep scientific and
                  fundamental knowledge, practical exposure, and capabilities in
                  teaching, research, and development of the Indian System of
                  Medicine.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Media Side */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Background Decorative Element */}
              <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl border border-secondary/20 shadow-2xl shadow-dark/20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <DeferredVideo
                    src="/hero_video.mp4"
                    type="video/mp4"
                    poster="/hero.png"
                    alt="Shri Krishna Ayurvedic Medical College campus"
                    rootMargin="150px"
                    delayMs={150}
                    mediaClassName="h-80 w-full object-cover sm:h-96 md:h-125"
                  />
                </motion.div>

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 right-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl border border-white/30 bg-light/85 p-3 backdrop-blur-md shadow-lg sm:bottom-6 sm:right-6 sm:max-w-none sm:p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/25 text-primary sm:h-12 sm:w-12">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-dark/60">
                      Trusted Legacy
                    </p>
                    <p className="text-lg font-bold text-dark sm:text-xl">
                      Since 2011
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
