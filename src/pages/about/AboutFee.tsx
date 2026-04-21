import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  CircleDollarSign,
  FileCheck2,
  GraduationCap,
  Hotel,
  School,
  Users,
} from "lucide-react";

const feeBreakdown = [
  {
    title: "Tuition Fee",
    amount: "Rs. 2,69,800/- per year",
    note: "Academic tuition for B.A.M.S.",
  },
  {
    title: "Hostel Fee + Bus (3 Seater Non-AC)",
    amount: "Rs. 1,10,000/- per year",
    note: "Includes mess (4-time meal VEG + NON-VEG) and transportation.",
  },
  {
    title: "Hostel Fee + Bus (2 Seater AC)",
    amount: "Rs. 2,00,000/- per year",
    note: "Includes mess (4-time meal VEG + NON-VEG) and transportation.",
  },
  {
    title: "Caution Money",
    amount: "Rs. 50,000/- (one time at the time of admission)",
    note: "Payable once during admission.",
  },
];

const documents = [
  "Transfer Certificate (T.C): No admission allowed without a valid T.C. duly countersigned by competent educational authority.",
  "Character Certificate: The applicant must submit a Character Certificate from the institution last attended.",
  "Certificate of Date of Birth (Copy of High School Certificate).",
  "Migration Certificate: Applicable to students coming from other State / University.",
  "Passport size Photographs (3 Copies).",
  "All certificates of examinations passed (Only original Certificate/Marks sheet/documents will be produced at the time of admission).",
  "Aadhar Card (attached mobile number should be on for OTP).",
  "Bank Passbook.",
  "Neet Admit Card.",
  "Neet Score Card.",
  "Registration Copy of Counselling.",
  "Counselling Letter.",
  "Allotment Letter.",
];

const quickFacts = [
  {
    label: "Course of Study",
    value: "B.A.M.S",
    icon: GraduationCap,
  },
  {
    label: "Duration",
    value: "4 1/2 years + 1 year Internship",
    icon: CalendarDays,
  },
  {
    label: "Examining Body",
    value: "Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur",
    icon: School,
  },
  {
    label: "Intake Capacity",
    value: "60 students per year permitted by NCISM",
    icon: Users,
  },
];

export default function AboutFee() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(155deg,#f5fff7_0%,#fcfef4_52%,#ffffff_100%)] px-4 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(15,175,59,0.14),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(139,195,74,0.15),transparent_30%),radial-gradient(circle_at_84%_84%,rgba(15,175,59,0.1),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full border border-primary/20 bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-14 h-64 w-64 rounded-full border border-secondary/20 bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-4xl border border-primary/15 bg-white/90 p-7 shadow-[0_20px_56px_rgba(26,26,26,0.1)] backdrop-blur md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <CircleDollarSign className="h-4 w-4" />
            Fee & Admission
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-dark md:text-5xl">
            B.A.M.S Fee Structure &amp; Hostel Facilities
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-dark/75 md:text-base">
            Modes and schedule of fees are applicable as per the rules of NCISM,
            New Delhi and the UP Government.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {quickFacts.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="rounded-2xl border border-primary/15 bg-light p-5"
                >
                  <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-dark md:text-base">
                    {item.value}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
          <article className="rounded-4xl border border-primary/15 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.08)] lg:col-span-7 md:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <BadgeCheck className="h-4 w-4" />
              Fee Breakdown
            </div>

            <div className="space-y-4">
              {feeBreakdown.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-primary/10 bg-light p-4 md:p-5"
                >
                  <p className="text-sm font-bold text-dark md:text-base">
                    {item.title}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-primary md:text-lg">
                    {item.amount}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-dark/70">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-5">
            <article className="rounded-4xl border border-primary/15 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.08)] md:p-7">
              <div className="flex items-center gap-2">
                <Hotel className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-dark md:text-xl">
                  Hostel Facilities
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-dark/75">
                Available facilities in the college campus as study bedrooms in
                apartments of double/triple occupation with shared bathroom and
                w.c.
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-primary/10 bg-primary/5 p-3 text-sm text-dark/80">
                  3 Seater Non-AC Hostel + Bus: Rs. 1,10,000/- per year
                </div>
                <div className="rounded-xl border border-primary/10 bg-secondary/10 p-3 text-sm text-dark/80">
                  2 Seater AC Hostel + Bus: Rs. 2,00,000/- per year
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_12px_30px_rgba(26,26,26,0.08)]">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-dark">
                  Admission Assistance
                </h2>
              </div>
              <p className="mt-2 text-sm text-dark/70">
                Need help with eligibility or fee clarification?
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_10px_20px_rgba(15,175,59,0.3)]"
              >
                Contact Admissions
              </Link>
            </article>
          </aside>
        </div>

        <article className="mt-10 rounded-4xl border border-primary/15 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.08)] md:p-10">
          <div className="flex items-center gap-2">
            <FileCheck2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-dark md:text-3xl">
              Necessary Documents
            </h2>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {documents.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-primary/10 bg-light p-4 text-sm leading-relaxed text-dark/80"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
