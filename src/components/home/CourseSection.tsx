import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Stethoscope } from "lucide-react";

const course = {
  code: "BAMS",
  title: "Bachelor of Ayurvedic Medicine and Surgery",
  description:
    "Krishna College offers one flagship program: BAMS. The curriculum is designed to build strong Ayurvedic foundations with practical clinical exposure and modern healthcare understanding.",
  highlights: [
    "Single Dedicated Program",
    "Ayurveda + Clinical Learning",
    "Professional Medical Training",
  ],
};

export default function CourseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(255,255,255,1),rgba(15,175,59,0.06),rgba(139,195,74,0.1))] px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(15,175,59,0.14),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(139,195,74,0.18),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:gap-2 sm:px-4 sm:text-xs">
            <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Courses Offered
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:mt-5 sm:text-4xl md:text-5xl">
            Our Academic Program
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-dark/70 sm:mt-4 sm:text-base md:text-lg">
            We are fully focused on one professional course to ensure depth,
            quality, and excellence in Ayurvedic medical education.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          className="relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-white p-5 shadow-[0_22px_60px_rgba(26,26,26,0.12)] sm:rounded-4xl sm:p-8 md:rounded-[2.2rem] lg:p-10"
        >
          <div className="pointer-events-none absolute -top-20 right-10 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-sm">
                Only Course: {course.code}
              </span>

              <h3 className="mt-4 text-2xl font-bold leading-tight text-dark sm:mt-5 sm:text-3xl md:text-4xl">
                {course.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-dark/75 sm:mt-5 sm:text-base md:text-lg">
                {course.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                {course.highlights.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-dark/80 sm:px-3 sm:text-xs"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-primary/20 bg-dark p-5 text-white shadow-[0_18px_45px_rgba(26,26,26,0.25)] sm:rounded-3xl sm:p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-secondary sm:h-12 sm:w-12">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                      Program Focus
                    </p>
                    <p className="text-base font-bold sm:text-lg">BAMS</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:mt-6 sm:rounded-2xl sm:p-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-secondary sm:h-5 sm:w-5" />
                    <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
                      A focused path for students aiming to build a career in
                      Ayurveda with strong academic and clinical grounding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
