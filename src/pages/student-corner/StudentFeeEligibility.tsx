import SectionHeading from "../../components/shared/SectionHeading";

const courseDetails = [
  {
    title: "Course of Study",
    value: "B.A.M.S (Duration 4 1/2 years + 1 year Internship)",
  },
  {
    title: "Examining Body",
    value: "Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur",
  },
  {
    title: "Modes & Schedule of Fees",
    value: "As per the rules of NCISM, New Delhi & UP Government",
  },
  {
    title: "Intake Capacity",
    value: "60 students per year intake capacity permitted by NCISM",
  },
];

const feeRows = [
  {
    item: "Tuition Fee",
    amount: "Rs. 2,69,800/- per year",
  },
  {
    item: "Hostel Fee + Bus (3 seater Non-AC)",
    amount:
      "Rs. 1,10,000/- per year (including mess 4-time meal veg + non-veg + transportation)",
  },
  {
    item: "Hostel Fee + Bus (2 seater AC)",
    amount:
      "Rs. 2,00,000/- per year (including mess 4-time meal veg + non-veg + transportation)",
  },
  {
    item: "Caution Money",
    amount: "Rs. 50,000/- (one time at the time of admission)",
  },
];

const requiredDocuments = [
  "Transfer Certificate (T.C.): No admission allowed without a valid T.C. duly countersigned by competent educational authority.",
  "Character Certificate from the institution last attended.",
  "Certificate of Date of Birth (copy of High School Certificate).",
  "Migration Certificate: Applicable to students coming from other State/University.",
  "Passport size photographs (3 copies).",
  "All certificates of examinations passed (only original certificate/marksheet/documents will be produced at the time of admission).",
  "Aadhar Card (attached mobile number should be active for OTP).",
  "Bank Passbook.",
  "NEET Admit Card.",
  "NEET Score Card.",
  "Registration Copy of Counselling.",
  "Counselling Letter.",
  "Allotment Letter.",
];

export default function StudentFeeEligibility() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Student Corner"
          title="Eligibility & Fee"
          description="B.A.M.S course details, fee structure, hostel facilities and admission documents."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {courseDetails.map((detail) => (
            <article
              key={detail.title}
              className="rounded-2xl border border-primary/15 bg-white p-5 shadow-[0_10px_24px_rgba(26,26,26,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/80">
                {detail.title}
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-dark/85 md:text-base">
                {detail.value}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.08)] sm:p-6 md:p-8">
          <h2 className="text-xl font-bold text-dark md:text-2xl">
            Hostel Facilities
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-dark/80 md:text-base">
            Available facilities in the college campus include study bedrooms in
            apartments of double/triple occupation with shared bathroom and
            W.C.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-primary/20">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-dark/85">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Fee Head</th>
                    <th className="px-4 py-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row) => (
                    <tr key={row.item} className="border-t border-dark/10">
                      <td className="px-4 py-3 font-medium">{row.item}</td>
                      <td className="px-4 py-3">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.08)] sm:p-6 md:p-8">
          <h2 className="text-xl font-bold text-dark md:text-2xl">
            Necessary Documents
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-dark/85 md:text-base">
            {requiredDocuments.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
