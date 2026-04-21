import { motion } from "framer-motion";

type Facility = {
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

const facilities: Facility[] = [
  {
    title: "Clinical Facility (OPD/IPD)",
    description:
      "A 62-bed hospital with eight OPD units, male and female wards, pathology lab, X-ray, ECG, USG, operation theatre, physiotherapy, and Panchakarma with Kerala special treatments.",
    image: "/facilities/clinical-facilities.webp",
    highlights: ["62 Beds", "8 OPD Units", "X-ray, ECG, USG"],
  },
  {
    title: "Panchakarma Unit",
    description:
      "A complete Panchakarma setup under the Department of Panchakarma for treatment and student clinical training in traditional Ayurvedic therapies.",
    image: "/facilities/panchkarma.webp",
    highlights: [
      "Dedicated Department",
      "Clinical Training",
      "Ayurvedic Therapies",
    ],
  },
  {
    title: "Laboratories",
    description:
      "Well-equipped labs for Physiology, Pathology, Anatomy, Toxicology, Dravyaguna, Rasashastra, and other subjects to support strong scientific learning.",
    image: "/facilities/labs.webp",
    highlights: ["Subject-Wise Labs", "Modern Equipment", "Hands-on Learning"],
  },
  {
    title: "Library & Reading Room",
    description:
      "Central library with 5,842 books, department libraries, journals, magazines, and periodicals, with reading space for 100 students at a time.",
    image: "/facilities/library.webp",
    highlights: ["5,842 Books", "Medical Journals", "100-Seat Reading Room"],
  },
  {
    title: "Pharmacy",
    description:
      "A CCIM-norms pharmacy supervised by experts. Quality Ayurvedic medicines are manufactured and supplied to OPD, with separate student practical training support.",
    image: "/facilities/pharmacy.webp",
    highlights: [
      "CCIM Norms",
      "Medicine Manufacturing",
      "Student Practical Training",
    ],
  },
  {
    title: "Herbal Garden",
    description:
      "A one-acre herbal garden with around 150 medicinal species, scientifically labeled for identification, pharmacopoeia study, and practical learning.",
    image: "/facilities/herbal-garden.webp",
    highlights: ["1 Acre", "150 Species", "Scientific Labeling"],
  },
  {
    title: "Hostels",
    description:
      "Well-furnished boys and girls hostels with 50 beds each, comfortable mess facilities, and supervised meal quality for student well-being.",
    image: "/facilities/hostel.webp",
    highlights: ["50 Beds Boys", "50 Beds Girls", "Mess Facility"],
  },
  {
    title: "Gym, Games & Extra Curricular",
    description:
      "Well-equipped gymnasium for physical and yogic exercises, plus indoor and outdoor games including football, cricket, badminton, volleyball, and table tennis.",
    image: "/facilities/gym.webp",
    highlights: [
      "Indoor & Outdoor Games",
      "Yoga & Physical Training",
      "Tournaments & Awards",
    ],
  },
  {
    title: "Computer Center & Internet",
    description:
      "University-guided computer training center to build essential digital skills, supported by unlimited internet access for students and staff.",
    image: "/facilities/computer-center.webp",
    highlights: [
      "Basic Computer Training",
      "Recognized Agency Support",
      "Unlimited Internet",
    ],
  },
  {
    title: "Residential Flats & AV Aids",
    description:
      "Residential family and single flats for teachers within campus, with classroom LCD/overhead projectors, sound systems, charts, and models for teaching.",
    image: "/facilities/residential-flats.webp",
    highlights: [
      "Teacher Flats",
      "LCD & OHP Support",
      "Classroom Teaching Aids",
    ],
  },
];

export default function FacilitiesCards() {
  return (
    <section className="relative overflow-hidden bg-light py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(15,175,59,0.12),transparent_30%),radial-gradient(circle_at_85%_90%,rgba(139,195,74,0.15),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Campus Infrastructure
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark md:text-5xl">
            Our Facilities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-dark/70 md:text-lg">
            Built for quality education, strong clinical exposure, and complete
            student development through modern resources and Ayurvedic
            tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility, idx) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_14px_35px_rgba(26,26,26,0.08)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(15,175,59,0.15)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-dark/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {facility.title}
                </h3>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-dark/75">
                  {facility.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {facility.highlights.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-dark"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
