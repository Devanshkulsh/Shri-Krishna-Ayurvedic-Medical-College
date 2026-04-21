import { motion } from "framer-motion";
import { Quote, GraduationCap } from "lucide-react";

const chairman = {
  name: "Dr. S. P. Yadav",
  role: "chairman, Krishna Ayurvedic Medical College & Hospital",
  qualification: "BAMS, MD (Ayurveda)",
  image: "/chairman.webp",
  message:
    "At Krishna College, we do not just train doctors; we shape compassionate healers rooted in Ayurvedic wisdom and ready for modern clinical realities. Every classroom, ward, and laboratory here is designed to cultivate discipline, empathy, and lifelong learning.",
};

export default function ChairmanMessage() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,195,74,0.28),transparent_32%),radial-gradient(circle_at_90%_82%,rgba(15,175,59,0.25),transparent_30%)]" />
      {/* <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full border border-white/20" /> */}
      <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-4xl border border-white/15 bg-white/5 backdrop-blur-sm" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-12">
            <div className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-4 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              <GraduationCap className="h-4 w-4" />
              chairman Message
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              From The <span className="text-secondary">chairman's Desk</span>
            </h2>

            <div className="mt-8 rounded-2xl border border-white/12 bg-black/20 p-6 md:p-8">
              <Quote className="h-7 w-7 text-secondary/90" />
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                {chairman.message}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/12 pt-5 text-sm text-white/75">
              <span className="font-semibold text-white">{chairman.name}</span>
              <span>{chairman.qualification}</span>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <div className="relative mx-auto h-72 w-full max-w-70 overflow-hidden rounded-[1.8rem] border border-white/20 bg-[linear-gradient(160deg,rgba(15,175,59,0.35),rgba(0,0,0,0.3),rgba(139,195,74,0.35))]">
              <img
                src={chairman.image}
                alt={chairman.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-white">{chairman.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {chairman.role}
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
