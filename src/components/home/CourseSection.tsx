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
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(255,255,255,1),rgba(15,175,59,0.06),rgba(139,195,74,0.1))] px-4 py-22 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(15,175,59,0.14),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(139,195,74,0.18),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <BookOpen className="h-4 w-4" />
            Courses Offered
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Our Academic Program
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-dark/70 md:text-lg">
            We are fully focused on one professional course to ensure depth,
            quality, and excellence in Ayurvedic medical education.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          className="relative isolate overflow-hidden rounded-[2.2rem] border border-primary/20 bg-white p-7 shadow-[0_22px_60px_rgba(26,26,26,0.12)] md:p-10"
        >
          <div className="pointer-events-none absolute -top-20 right-10 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/15 px-4 py-1 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Only Course: {course.code}
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-dark md:text-4xl">
                {course.title}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-dark/75 md:text-lg">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {course.highlights.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-dark/80"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-primary/20 bg-dark p-6 text-white shadow-[0_18px_45px_rgba(26,26,26,0.25)] md:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-secondary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Program Focus
                    </p>
                    <p className="text-lg font-bold">BAMS</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="mt-0.5 h-5 w-5 text-secondary" />
                    <p className="text-sm leading-relaxed text-white/85">
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
