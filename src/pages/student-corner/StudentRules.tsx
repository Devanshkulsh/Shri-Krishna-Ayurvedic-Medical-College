import SectionHeading from "../../components/shared/SectionHeading";

const rulesAndRegulations = [
  "Although discipline cannot be contained in a few words, the following rules are set to guide what can, should, or must be done to maintain discipline.",
  "Students should be clean and neatly dressed whether in or outside the college.",
  "Students who are without uniform and whose general appearance does not reflect regulations may be detained from attending classes.",
  "Unauthorized absence or irregularity, habitual late coming, disobedience, or objectionable behavior of any kind may result in expulsion of the student from the college.",
  "Care should be taken to keep the surroundings clean; waste paper and litter should be consigned to dustbin. Defacing walls is prohibited.",
  "Damaging or destroying College & Hospital property, either willfully or negligently, shall attract severe punishment and reparation of damage by the parents concerned. The Principal or the Managing authority may also impose collective fine on students to make good the loss.",
  "Chewing gum, bubble gum, pan or pan masala, smoking, consumption of liquor, and spitting on the floor are strictly prohibited.",
  "At home, students are expected to be helpful to parents, grandparents, and elders. They should be polite to servants and remember that Ayurveda is a way of life.",
  "The decisions taken by the Managing Body or the Principal will be final in matters not covered above. Students are required to abide by their orders and follow instructions issued by C.C.I.M., New Delhi, and MGKVP, Varanasi, from time to time.",
  "The inmates of hostels are required to follow rules and regulations issued by their warden.",
  "Girl students seeking admission from outside Varanasi will have to opt for hostel facility within college premises. Separate hostels are available for boys and girls. This option may be relaxed if they live with a local guardian appointed by their parents, with written undertaking from parents discharging college responsibility for movement of such day-scholars.",
  "Hostellers will be allowed to go out strictly under permission by the Warden. Violation may result in a fine of Rs. 500/- in the first instance and expulsion on further violation.",
  "Hostellers can meet relatives or visitors in the common room during visiting hours and days set by the warden. No visitor may overstay or stay inside the hostel without express permission of the warden.",
  "The warden has sole power to refuse permission to meet a hosteller. No hosteller or visitor will challenge it before any forum or authority; parents are an exception.",
  "The warden/college authorities are authorized to issue order for vacating the hostel with immediate effect without disclosing reasons.",
  "The management reserves the right to cancel any admission form and refuse admission without assigning any reason.",
  "Ragging by students is strictly prohibited and is a legally punishable offence. Any offender will be liable to pay a fine decided by Anti-Ragging Committee and/or expulsion from the college.",
  "Submission of the admission form will be treated as acceptance of all rules and regulations mentioned in this folder.",
  "Female guests are not permitted in the boys' hostel. For other guests also, permission of the warden is required. Class fellows and friends cannot stay as guests in the hostel.",
  "The hostel door will be closed at 9:00 PM in winters and 10:00 PM in summer. Those coming late will be fined automatically. The door will open at 6:00 AM in winter and 5:00 AM in summer. Reasons for opening the door at odd timings should be entered in the register maintained by security personnel/warden.",
  "All admissions shall be provisional. Original certificates of qualifying examination are subject to scrutiny and verification. If certificates are found fake or eligibility is not in order, admission will be canceled forthwith irrespective of stage at which error is discovered.",
  "No candidate enrolled in this college course will pursue another course run by any other college/university simultaneously without proper permission.",
  "Dues/fees once deposited will not be refunded or adjusted.",
];

const withdrawalLeaveAndAbsenceRules = [
  "In case parents/guardians seek to withdraw their ward in the midst of a session, they will give one month's prior written intimation to the Principal. They will also be liable to pay fees for remaining part of duration and obtain clearance from departments after paying outstanding dues, if any.",
  "A student shall be withdrawn or asked to leave the college on grounds of indiscipline and misconduct, abetting criminal behavior like smoking, stealing, using drugs, gambling, and being a habitual offender.",
  "A student may also be withdrawn for non-payment of dues in time, damaging college property, cheating in examination, or unauthorized absence from college for more than 10 consecutive days.",
  "Leave of absence will be granted only on prior written application endorsed by guardian for a valid reason.",
  "A student returning to college after illness shall produce physician's certificate of fitness.",
];

const studentRuleImages = [
  {
    src: "/facilities/hostel.webp",
    title: "Hostel Discipline",
  },
  {
    src: "/facilities/library.webp",
    title: "Academic Environment",
  },
  {
    src: "/facilities/clinical-facilities.webp",
    title: "Clinical Conduct",
  },
];

export default function StudentRules() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Student Corner"
          title="Rules & Regulation"
          description="Code of conduct and hostel rules to maintain discipline, safety and academic focus."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studentRuleImages.map((photo) => (
            <figure
              key={photo.title}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_12px_30px_rgba(26,26,26,0.08)]"
            >
              <div className="h-52 overflow-hidden bg-primary/5">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-dark/85">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-primary/15 bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.08)] sm:p-6 md:p-8">
          <h2 className="text-xl font-bold text-dark md:text-2xl">
            Rules and Regulations
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-dark/85 md:text-base">
            {rulesAndRegulations.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>

        <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.08)] sm:p-6 md:p-8">
          <h2 className="text-xl font-bold text-dark md:text-2xl">
            Other Rules and Regulations
          </h2>
          <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary md:text-base">
            Rules Relating to Withdrawal, Leave and Absence
          </h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-dark/85 md:text-base">
            {withdrawalLeaveAndAbsenceRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
