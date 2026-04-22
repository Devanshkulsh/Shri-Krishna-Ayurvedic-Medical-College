type FacilityItem = {
  title: string;
  description: string;
  image: string;
};

const facilityItems: FacilityItem[] = [
  {
    title: "Clinical Facility",
    description:
      "A 62 Bed Hospital with adequate staff, pathological lab, X-ray and other equipment, Operation Theatrewith wards in the I.P.D. /O.P.D. is available for treatment of patients through ayurveda. A complete unit of Panchkarma is established under Dept. of Panchakarma.",
    image: "/facilities/clinical-facilities.webp",
  },
  {
    title: "Labs & Library",
    description:
      "All the Laboratories relating to their respective subjects namely Physiology, Pathology, Anatomy, Toxicology, Dravyaguna, Rasashastra etc. are well equipped. The library subscribes for a good number of medical journals, magazines and periodicals. It is well managed with books on Ayurveda and Modern. The Library has a capacity to accommodate hundred students and there is extra space available for reading room.",
    image: "/facilities/labs.webp",
  },
  {
    title: "Pharmacy",
    description:
      "The College has well established Pharmacy according to CCIM norms and is being run under the supervision of experts and experienced staff. Quality Ayurvedic medicines are regularly manufactured and supplied to the O.P.D. Students are also imparted knowledge about manufacturing processes of Ayurvedic medicines.",
    image: "/facilities/pharmacy.webp",
  },
  {
    title: "Herbal Garden",
    description:
      "Herbal garden provides herbs on a large scale for imparting knowledge about their identification and pharmacopoeia.",
    image: "/facilities/herbal-garden.webp",
  },
  {
    title: "Hostels",
    description:
      "Well furnished hostel for boys “BOYS HOSTEL” with a capacity of 50 beds and a girls hostel “GIRLS HOSTEL” with a capacity of 50 beds are situated in the varanasi city with comfortable mess, Good standard of meals are given under the supervision of the teachers and students.",
    image: "/facilities/hostel.webp",
  },
  {
    title: "Extra Curricular Activities",
    description:
      "This is a significant regular feature of the college and students are actively encouraged to take part in various sports and game. Outdoor and Indoor games are organized in the campus and students are encouraged to take part in the internal tournaments and their efforts are recognized and awarded suitably.",
    image: "/facilities/gym.webp",
  },
  {
    title: "Gym & Games",
    description:
      "A well equipped gymnasium for the performance of physical and yogic exercises are available within the campus.",
    image: "/facilities/gym.webp",
  },
  {
    title: "Computer Center",
    description:
      "Responding to the need of the time, a computer training center has been introduced under the instructions of University. All the students are required to acquire basic knowledge of working with computers in collaboration with a recognized agency.",
    image: "/facilities/computer-center.webp",
  },
  {
    title: "Residential Flats",
    description:
      "Residential family / Single flats for teachers have been built inside the college campus.",
    image: "/facilities/residential-flats.webp",
  },
  {
    title: "Hospital O.P.D and I.P.D",
    description:
      "Hospital O.P.D – Eight O.P.D units. I.P.D. – 62 beds There are separate male and female wards in the hospital. The Hospital is manged by sufficient and efficient medical and paramedical staff. There are facilities for Panchakarma and Kerala special treatments in the hospital. There is a physiotherapy unit in the hospital. There is an operation theatre to conduct Major/minor surgery and parasurgical procedures. The hospital is subsidized by the College and the charges levied are minimal. Apart from the wards single and double rooms are also available. Shri Krishna Ayurvedic Medical College and Hospital is renowned for its Ayurvedic excellence in all the fields. Students are trained in the Collegiate Hospital.",
    image: "/facilities/clinical-facilities.webp",
  },
  {
    title: "X-ray, ECG, USG",
    description: "X-ray, ECG, USG facilities also available in the hospital.",
    image: "/facilities/clinical-facilities.webp",
  },
  {
    title: "Pharmacy (Training Unit)",
    description:
      "Shri Krishna Pharmacy is situated inside the College premises and its supply for the requirement of medicines for the Hospital. Apart from this there is another pharmacy for the practical training of the students.",
    image: "/facilities/pharmacy.webp",
  },
  {
    title: "Herbal Garden (Detailed)",
    description:
      "The herb garden is of one acre. There are approx. 150 different species of plants in thee garden. The plants are scientifically labeled to aid the studies of the students.",
    image: "/facilities/herbal-garden.webp",
  },
  {
    title: "Library (Detailed)",
    description:
      "The central library has a stock of 5842 books. In addition to this there are department libraries in each department. The reading rooms can accommodate 100 students at a time.",
    image: "/facilities/library.webp",
  },
  {
    title: "Playgrounds etc",
    description:
      "There is a good playground to facilitate the play of football and cricket. Apart from this there are facilities for badminton and volleyball. The ladies’ hostel is also provided with a badminton ground. Apart from these facilities, there are provisions for indoor games including table tennis.",
    image: "/facilities/gym.webp",
  },
  {
    title: "Internet Facility",
    description:
      "Unlimited internet facility is open to the students and staff of the college.",
    image: "/facilities/computer-center.webp",
  },
  {
    title: "Audio Visual Aids",
    description:
      "Audio vision aids such as LCD projectors and overhead projectors are available in the classrooms. Sound amplification facilities are arranged in classes with 60 students. Sufficient number of charts and models are also available in the college.",
    image: "/facilities/library.webp",
  },
];

export default function CollegeFacilities() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <header className="border-b border-dark/10 pb-10 md:pb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            College & Hostel
          </span>
          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-dark md:text-5xl">
              College Facilities
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-dark/75 md:ml-auto md:text-base">
              Academic, clinical, residential and student support infrastructure
              at Shri Krishna Ayurvedic Medical College &amp; Hospital.
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {facilityItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_14px_35px_rgba(26,26,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(26,26,26,0.12)]"
            >
              <div className="h-60 overflow-hidden border-b border-primary/10 bg-primary/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-lg font-bold text-dark md:text-xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-dark/75 md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
