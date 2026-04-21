import { Link } from "react-router-dom";
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

const courseHighlights = [
  { label: "Course", value: "B.A.M.S." },
  { label: "Full Duration", value: "5.5 Years" },
  { label: "Intake Capacity", value: "60 Seats / Year" },
  { label: "Curriculum", value: "As per C.C.I.M. Recommendations" },
];

const keyBenefits = [
  {
    title: "Classical + Clinical Training",
    description:
      "Build a strong foundation in Ayurvedic principles alongside practical hospital-based learning.",
    icon: BookOpen,
  },
  {
    title: "Regulatory Aligned Curriculum",
    description:
      "Structured according to C.C.I.M. recommendations for academic depth and professional readiness.",
    icon: ShieldCheck,
  },
  {
    title: "Community Healthcare Orientation",
    description:
      "Develop care-focused skills with an emphasis on affordable and accessible healthcare delivery.",
    icon: HeartPulse,
  },
];

export default function AboutCourse() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#fffdf6_0%,#f6fff8_45%,#edf8ef_100%)] px-4 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(15,175,59,0.16),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(139,195,74,0.16),transparent_30%),radial-gradient(circle_at_82%_85%,rgba(15,175,59,0.1),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-16 top-1/4 h-48 w-48 rounded-full border border-primary/20 bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-56 w-56 rounded-full border border-secondary/20 bg-secondary/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
              <GraduationCap className="h-4 w-4" />
              Course Details
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-dark md:text-5xl">
              B.A.M.S
            </h1>
            <p className="mt-2 text-lg font-semibold text-dark/80 md:text-xl">
              Bachelor of Ayurveda Medicine &amp; Surgery
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-dark/75 md:text-base">
              The B.A.M.S. program at Shri Krishna Ayurvedic Medical College
              &amp; Hospital combines foundational Ayurvedic sciences with
              clinical exposure to prepare students for responsible, holistic,
              and community-oriented healthcare practice.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {courseHighlights.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-primary/15 bg-white/90 p-4 shadow-[0_10px_25px_rgba(26,26,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(26,26,26,0.1)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.08)] md:p-7">
              <h2 className="text-lg font-bold text-dark md:text-xl">
                What makes this course strong
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {keyBenefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-primary/10 bg-light p-4"
                    >
                      <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-dark md:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-dark/70">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-4xl border border-primary/20 bg-white p-3 shadow-[0_20px_55px_rgba(26,26,26,0.12)]">
              <img
                src="/BAMS.webp"
                alt="Ayurveda medical education"
                className="h-64 w-full rounded-[1.4rem] object-cover md:h-80"
              />
              <div className="mt-4 space-y-3 p-2">
                <div className="flex items-center gap-3 rounded-xl bg-primary/5 px-3 py-2 text-sm font-medium text-dark/80">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>Duration: 5.5 Years</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-secondary/10 px-3 py-2 text-sm font-medium text-dark/80">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Annual Intake: 60 Students</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-primary/5 px-3 py-2 text-sm font-medium text-dark/80">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>Curriculum aligned with C.C.I.M.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-white p-5 text-center shadow-[0_10px_28px_rgba(26,26,26,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
                Admission Help
              </p>
              <p className="mt-2 text-sm text-dark/70">
                For admission support and complete eligibility details:
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_10px_20px_rgba(15,175,59,0.3)]"
              >
                Contact Admissions
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
