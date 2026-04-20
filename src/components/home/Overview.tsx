import { motion, type Variants } from "framer-motion";
import { Leaf, Eye, Target } from "lucide-react";

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
    <section className="relative z-20 -mt-12 bg-light px-4 py-18 shadow-[0_-20px_60px_rgba(26,26,26,0.1)] sm:rounded-t-[50px] md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
        >
          {/* Left Content Side */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
                About our Institution
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark md:text-5xl lg:leading-[1.1]">
                Where <span className="text-primary">tradition</span> meets{" "}
                <br />
                <span className="text-secondary">innovation.</span>
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-dark/70">
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
                  fundamental knowledge, practical exposure, and capabilities
                  in teaching, research, and development of the Indian System
                  of Medicine.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Image Side */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Background Decorative Element */}
              <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl border border-secondary/20 shadow-2xl shadow-dark/20">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1542841791-1925b02a2bf8?q=80&w=2070&auto=format&fit=crop"
                  alt="Ayurveda Herbs"
                  className="h-125 w-full object-cover"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-white/30 bg-light/85 p-4 backdrop-blur-md shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/25 text-primary">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-dark/60">
                      Trusted Legacy
                    </p>
                    <p className="text-xl font-bold text-dark">Since 2011</p>
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
