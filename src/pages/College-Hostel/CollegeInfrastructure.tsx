type InfraRow = {
  sno: string;
  name: string;
  area: string;
};

type InfraSection = {
  title: string;
  rows: InfraRow[];
};

const introParagraphs = [
  "Shri Krishna Ayurvedic Medical College is associated with a 60 bedded hospital with all required equipment and facilities. The campus has engaged a specialist doctor for medical aid 24x7. We also have arrangement with the nearby Shiv Surgical Nursing Homes (100 Bedded Modern Hospital)with all Modern facilities for emergencies treatment.",
  "A dedicated room has been provided in the campus with first aid facilities which functions as health center if and when immediate medical attention is required. Necessary treatment is provided at this center by trained persons.",
  "Hospital has 08 separate OPD of different specialties of Ayurveda with all required amenities. IPD facilities with 24X7 caring staff availability. Ambulance services available for promoting immediate action in cases of emergency, Hospital’s ambulances are equipped with the best of medical technology and a team of dedicated staff to transport the patient to higher centres if required. Hospital attached canteen serves sumptuous and hygienic food to staff, students & patients at reasonable prices.",
];

const infraSections: InfraSection[] = [
  {
    title: "Hospital Admin Block Details",
    rows: [
      { sno: "1", name: "Superintendent Room", area: "20" },
      { sno: "2", name: "Deputy Superintendent Room", area: "10" },
      {
        sno: "3",
        name: "Medical Officers Room (For 2 Resident Medical / Surgical Officer)",
        area: "15",
      },
      { sno: "4", name: "Matron Room", area: "10" },
      { sno: "5", name: "Assistant Matron Room (For 2)", area: "10" },
      { sno: "6", name: "Reception & Registration Room", area: "40" },
    ],
  },
  {
    title: "Hospital OPD Block Details",
    rows: [
      { sno: "1", name: "Kayachikitsa OPD", area: "20" },
      { sno: "2", name: "Shalya OPD", area: "20" },
      { sno: "3", name: "Shalakya OPD", area: "20" },
      { sno: "4", name: "Stree Roga Evam Prasuti Tantra OPD", area: "20" },
      { sno: "5", name: "Kaumarbhritya (Balroga)", area: "15" },
      { sno: "6", name: "Swastharakshan & Yoga OPD", area: "15" },
      { sno: "7", name: "Atyayik (Casualty) Section", area: "20" },
      {
        sno: "8",
        name: "Dressing & First-Aid Room, Ksharsutra Room",
        area: "20",
      },
      { sno: "9", name: "Dispensary", area: "20" },
      { sno: "10", name: "Waiting space for patients", area: "90" },
      { sno: "11", name: "Store", area: "10" },
      { sno: "12", name: "Male & Female Toilet for Patients", area: "30" },
    ],
  },
  {
    title: "Hospital IPD Block Details",
    rows: [
      { sno: "1", name: "Kayachikitsa Male Ward", area: "200" },
      { sno: "2", name: "Kayachikitsa Female Ward", area: "100" },
      { sno: "3", name: "Panchakarma Male Ward", area: "50" },
      { sno: "4", name: "Panchakarma Female Ward", area: "50" },
      { sno: "5", name: "Shalya Male Ward", area: "75" },
      { sno: "6", name: "Shalya Female Ward", area: "75" },
      { sno: "7", name: "Shalakya Tantra Ward", area: "75" },
      { sno: "8", name: "Prasooti evum Stri Roga Ward", area: "150" },
      { sno: "9", name: "Kaumar Bhritya (Balaroga) Ward", area: "50" },
      {
        sno: "10",
        name: "Doctors duty room one for each department",
        area: "25",
      },
      {
        sno: "11",
        name: "Nursing staff duty rooms, one in each ward",
        area: "25",
      },
      { sno: "12", name: "Store room for linen, etc.", area: "25" },
    ],
  },
  {
    title: "Operation Theatre Block Details",
    rows: [
      { sno: "1", name: "Major Operation Theatre", area: "30" },
      { sno: "2", name: "Minor Operation Theatre", area: "20" },
      { sno: "3", name: "Shalakya Operation Theatre", area: "10" },
      {
        sno: "4",
        name: "Labour Room with attached toilet and bath room",
        area: "20",
      },
      { sno: "5", name: "Neonatal care room", area: "15" },
      { sno: "6", name: "Central sterlisation/autoclave unit", area: "10" },
      { sno: "7", name: "Scrub room", area: "15" },
      { sno: "8", name: "Two Recovery room", area: "10" },
      {
        sno: "9",
        name: "Doctors duty room with attached toilet and bath room",
        area: "10",
      },
      {
        sno: "10",
        name: "Interns/house officer/resident doctors room with attached toilet and bath room",
        area: "10",
      },
      {
        sno: "11",
        name: "Nursing staff room with attached toilet and bath room",
        area: "10",
      },
    ],
  },
  {
    title: "Panchkarma Department Details",
    rows: [
      { sno: "1", name: "Snehana Kaksha (Male)", area: "15" },
      { sno: "2", name: "Snehana Kaksha (Female)", area: "15" },
      { sno: "3", name: "Swedana Kaksha(Male)", area: "15" },
      { sno: "4", name: "Swedana Kaksha(Female)", area: "15" },
      { sno: "5", name: "Shirodhara Kaksha(Male)", area: "15" },
      { sno: "6", name: "Shirodhara Kaksha(Female)", area: "15" },
      { sno: "7", name: "Vamana Kaksha(Male)", area: "10" },
      { sno: "8", name: "Vamana Kaksha(Female)", area: "10" },
      { sno: "9", name: "Virechana Kaksha(Male)", area: "10" },
      { sno: "10", name: "Virechana Kaksha(Female)", area: "10" },
      { sno: "11", name: "Basti Kaksha(Male)", area: "10" },
      { sno: "12", name: "Basti Kaksha(Female)", area: "10" },
      {
        sno: "13",
        name: "Rakta Mokshana, Jalaukavacharana, Agnikarma, Pracchanna etc Kaksha",
        area: "10",
      },
      { sno: "14", name: "Panchakarma therapist/Physicians room", area: "20" },
      { sno: "15", name: "Panchakarma store room", area: "10" },
      {
        sno: "16",
        name: "Four attached toilet-baths for males and four for females with wash basin and geyser facility in each. These will be in addition to the toilets of wards.",
        area: "20",
      },
    ],
  },
  {
    title: "Hospital Physiotherapy Unit Details",
    rows: [
      { sno: "1", name: "Physiotherapy Room", area: "50" },
      { sno: "2", name: "Physiotherapist Room", area: "25" },
    ],
  },
  {
    title: "Hospital Clinical Laboratory Details",
    rows: [
      {
        sno: "1",
        name: "Well-equipped and spacious area of hundred square meter with separate sections for Pathology, Biochemistry and Micro-biology",
        area: "75",
      },
      {
        sno: "2",
        name: "Attached toilet shall be there for collection of urine samples",
        area: "5",
      },
      { sno: "3", name: "Other diagnostic tools for ECG or TMT etc", area: "20" },
    ],
  },
  {
    title: "Hospital Radiology Block Details",
    rows: [
      { sno: "1", name: "Radiologist chamber", area: "5" },
      { sno: "2", name: "X-ray room", area: "15" },
      { sno: "3", name: "Dark room", area: "5" },
      { sno: "4", name: "Film drying room", area: "5" },
      { sno: "5", name: "Store room", area: "5" },
      { sno: "6", name: "Ultra Sonography Room", area: "5" },
      { sno: "7", name: "Patients waiting and dressing room", area: "5" },
      { sno: "8", name: "Reception or registration or report room", area: "5" },
    ],
  },
  {
    title: "Hospital Kitchen and Canteen Block Details",
    rows: [{ sno: "1", name: "Kitchen and Canteen", area: "100" }],
  },
  {
    title: "Hospital Store/Mortuary Block Details",
    rows: [{ sno: "1", name: "Store/Mortuary", area: "25" }],
  },
  {
    title: "Other Infrastructure Details",
    rows: [
      { sno: "1", name: "Ambulance Service", area: "Yes" },
      {
        sno: "2",
        name: "Sitting arrangement for internees/students in Various Out Patient Department",
        area: "Yes",
      },
    ],
  },
];

export default function CollegeInfrastructure() {
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
              Hospital Infrastructure
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-dark/75 md:ml-auto md:text-base">
              Department-wise infrastructure areas and core hospital support
              facilities.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-dark/80 md:text-base">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {infraSections.map((section) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-2xl border border-dark/10 bg-white"
            >
              <div className="border-b border-dark/10 bg-primary/10 px-5 py-4 md:px-6">
                <h2 className="text-lg font-bold text-dark md:text-xl">
                  {section.title}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        S.No
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Name of the Departments
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Available Area (in Sq. mtr.)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr
                        key={`${section.title}-${row.sno}-${row.name}`}
                        className="align-top transition-colors duration-200 even:bg-light/50 hover:bg-primary/5"
                      >
                        <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark">
                          {row.sno}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                          {row.name}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark/85">
                          {row.area}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

