type CampRecord = {
  sno: string;
  nature: string;
  date: string;
  place: string;
  disease: string;
  patients: number;
};

type CampYearGroup = {
  year: number;
  records: CampRecord[];
};

const campData: CampYearGroup[] = [
  {
    year: 2017,
    records: [
      {
        sno: "1",
        nature: "HEALTH CHECKUP CAMP",
        date: "08.01.2017",
        place: "BELA",
        disease: "GENERAL",
        patients: 258,
      },
      {
        sno: "2",
        nature: "EYE CHECKUP CAMP",
        date: "28.02.2017",
        place: "TIWARIPUR",
        disease: "EYE DISORDERS",
        patients: 115,
      },
      {
        sno: "3",
        nature: "SURGERY CAMP",
        date: "30.03.2017",
        place: "TADI, CHOLAPUR, VARANASI",
        disease: "GENERAL SURGERY",
        patients: 45,
      },
      {
        sno: "4",
        nature: "HEALTH PROMOTION CAMP",
        date: "21.06.2017",
        place: "TEKARI",
        disease: "HEALTH PROMOTION THROUGH AYURVEDA & YOGA",
        patients: 386,
      },
      {
        sno: "5",
        nature: "METABOLIC DISORDER",
        date: "25.07.2017",
        place: "PANDEYPUR",
        disease: "OBESITY RELATED DISORDER",
        patients: 72,
      },
      {
        sno: "6",
        nature: "SEASONAL DISEASE PREVENTION",
        date: "28.08.2017",
        place: "KATHALGANJ",
        disease: "SEASONAL DISEASE PREVENTION BY AYURVEDA",
        patients: 167,
      },
      {
        sno: "7",
        nature: "GENERAL JOINT PAIN RELATED",
        date: "27.09.2017",
        place: "RAUNA KALA",
        disease: "ARTHRITIS AND ITS TREATMENT THROUGH AYURVEDA",
        patients: 187,
      },
      {
        sno: "8",
        nature: "PREVENTION OF DIABETES",
        date: "17.10.2017",
        place: "RAUNA KHURD",
        disease: "PREVENTIVE MEASURE OF DIABETES ON WORLD AYURVEDA DAY",
        patients: 179,
      },
      {
        sno: "9",
        nature: "SPECIFIC FOR HAEMMORHOID & FISTULA",
        date: "28.11.2017",
        place: "AJAGARA",
        disease: "TREATMENT OF HEMORRHOID AND FISTULA BY KSHARSUTRA",
        patients: 103,
      },
    ],
  },
  {
    year: 2018,
    records: [
      {
        sno: "1",
        nature: "HEALTH CHECKUP CAMP",
        date: "13.01.2018",
        place: "BELA",
        disease: "GENERAL",
        patients: 305,
      },
      {
        sno: "2",
        nature: "EYE CHECKUP CAMP",
        date: "26.02.2018",
        place: "TIWARIPUR",
        disease: "EYE DISORDERS",
        patients: 90,
      },
      {
        sno: "3",
        nature: "SURGERY CAMP",
        date: "31.03.2018",
        place: "MOHAV",
        disease: "GENERAL SURGERY",
        patients: 39,
      },
      {
        sno: "4",
        nature: "HEALTH PROMOTION CAMP",
        date: "16.06.2018",
        place: "TEKARI",
        disease: "HEALTH PROMOTION THROUGH AYURVEDA & YOGA",
        patients: 450,
      },
      {
        sno: "5",
        nature: "METABOLIC DISORDER",
        date: "27.07.2018",
        place: "SARNATH",
        disease: "OBESITY RELATED DISORDER",
        patients: 66,
      },
      {
        sno: "6",
        nature: "SEASONAL DISEASE PREVENTION",
        date: "18.08.2018",
        place: "KATHALGANJ",
        disease: "SEASONAL DISEASE PREVENTION BY AYURVEDA",
        patients: 230,
      },
      {
        sno: "7",
        nature: "GENERAL JOINT PAIN RELATED",
        date: "24.09.2018",
        place: "RAUNA KALA",
        disease: "ARTHRITIS AND ITS TREATMENT THROUGH AYURVEDA",
        patients: 157,
      },
      {
        sno: "8",
        nature: "PREVENTION OF DIABETES",
        date: "23.10.2018",
        place: "MUNARI",
        disease: "PREVENTIVE MEASURE OF DIABETES MELLITUS",
        patients: 185,
      },
      {
        sno: "9",
        nature: "SPECIFIC FOR HAEMMORHOID & FISTULA",
        date: "30.11.2018",
        place: "AJAGARA",
        disease: "TREATMENT OF HEMORRHOID AND FISTULA BY KSHARSUTRA",
        patients: 90,
      },
    ],
  },
  {
    year: 2019,
    records: [
      {
        sno: "1",
        nature: "HEALTH CHECKUP CAMP",
        date: "20.01.2019",
        place: "BELA",
        disease: "GENERAL",
        patients: 217,
      },
      {
        sno: "2",
        nature: "EYE CHECKUP CAMP",
        date: "17.02.2019",
        place: "NIYAR",
        disease: "EYE DISORDERS",
        patients: 77,
      },
      {
        sno: "3",
        nature: "SURGERY CAMP",
        date: "24.03.2019",
        place: "SARNATH",
        disease: "GENERAL SURGERY",
        patients: 25,
      },
      {
        sno: "4",
        nature: "HEALTH PROMOTION CAMP",
        date: "14.06.2019",
        place: "RAUNA KALA",
        disease: "HEALTH PROMOTION THROUGH AYURVEDA & YOGA",
        patients: 241,
      },
      {
        sno: "5",
        nature: "METABOLIC DISORDER",
        date: "24.07.2019",
        place: "MOHAV",
        disease: "OBESITY RELATED DISORDER",
        patients: 52,
      },
      {
        sno: "6",
        nature: "SEASONAL DISEASE PREVENTION",
        date: "25.08.2019",
        place: "TIWARIPUR",
        disease: "SEASONAL DISEASE PREVENTION BY AYURVEDA",
        patients: 185,
      },
      {
        sno: "7",
        nature: "GENERAL JOINT PAIN RELATED",
        date: "22.09.2019",
        place: "TEKARI",
        disease: "ARTHRITIS AND ITS TREATMENT THROUGH AYURVEDA",
        patients: 164,
      },
      {
        sno: "8",
        nature: "PREVENTION OF DIABETES",
        date: "20.10.2019",
        place: "BABIYAW",
        disease: "PREVENTIVE MEASURE OF DIABETES MELLITUS",
        patients: 175,
      },
      {
        sno: "9",
        nature: "SPECIFIC FOR HAEMMORHOID & FISTULA",
        date: "17.11.2019",
        place: "AJAGARA",
        disease: "TREATMENT OF HEMORRHOID AND FISTULA BY KSHARSUTRA",
        patients: 43,
      },
    ],
  },
  {
    year: 2020,
    records: [
      {
        sno: "1",
        nature: "HEALTH CHECKUP CAMP",
        date: "20.01.2020",
        place: "BELA",
        disease: "GENERAL FEVER COUGH AND MALARIA",
        patients: 217,
      },
      {
        sno: "2",
        nature: "GENERAL SURGERY",
        date: "17.02.2020",
        place: "NIYAR",
        disease: "GENERAL SURGERY",
        patients: 77,
      },
      {
        sno: "3",
        nature: "PREVENTIVE MEASURE OF CORONA AND ITS CURE",
        date: "20.10.2020",
        place: "BABIYAW",
        disease: "PREVENTIVE MEASURE OF CORONA AND ITS CURE",
        patients: 175,
      },
      {
        sno: "4",
        nature: "SPECIFIC FOR HAEMMORHOID & FISTULA",
        date: "17.11.2020",
        place: "AJAGARA",
        disease: "TREATMENT OF HEMORRHOID AND FISTULA BY KSHARSUTRA",
        patients: 43,
      },
    ],
  },
  {
    year: 2021,
    records: [
      {
        sno: "1",
        nature: "GENERAL HELATH CHECK UP",
        date: "18.01.2021",
        place: "AJAGARA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 65,
      },
      {
        sno: "2",
        nature: "CHILD & MATERNAL",
        date: "16.06.2021",
        place: "TIWARIPUR",
        disease: "CHILD & MATERNAL",
        patients: 40,
      },
      {
        sno: "3",
        nature: "POST COVID AWARENESS & HEALTH CHECKUP",
        date: "20.07.2021",
        place: "MUNARI",
        disease: "POST COVID AWARENESS & HEALTH CHECKUP",
        patients: 70,
      },
      {
        sno: "4",
        nature: "HYPERGLYCAEMIA & HYPERTENSION AWARENESS & CHECKUP",
        date: "14.08.2021",
        place: "CHUMKUNI",
        disease: "HYPERGLYCAEMIA & HYPERTENSION AWARENESS & CHECKUP",
        patients: 45,
      },
      {
        sno: "5",
        nature: "JOINT PAIN AWARENESS & CHECKUP",
        date: "30.12.2021",
        place: "",
        disease: "JOINT PAIN AWARENESS & CHECKUP",
        patients: 90,
      },
    ],
  },
  {
    year: 2022,
    records: [
      {
        sno: "1",
        nature: "GENERAL HELATH CHECK UP",
        date: "30.03.2022",
        place: "RAUNA KALA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 108,
      },
      {
        sno: "2",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "02.04.2022",
        place: "PARANAPATTI, CHOLAPUR",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 210,
      },
      {
        sno: "3",
        nature: "GENERAL JOINT PAIN",
        date: "06.04.2022",
        place: "TIWARIPUR",
        disease: "GENERAL JOINT PAIN",
        patients: 178,
      },
      {
        sno: "4",
        nature: "CHILD & MATERNAL CARE",
        date: "12.04.2022",
        place: "KATHALGANJ",
        disease: "CHILD & MATERNAL CARE",
        patients: 181,
      },
      {
        sno: "5",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "30.04.2022",
        place: "TADI",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 131,
      },
      {
        sno: "6",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "11.06.2022",
        place: "RAUNA KHURD",
        disease: "ANAEMIA",
        patients: 80,
      },
      {
        sno: "7",
        nature: "EYE CAMP",
        date: "09.07.2022",
        place: "MUNARI",
        disease: "EYE CAMP",
        patients: 60,
      },
      {
        sno: "8",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "26.07.2022",
        place: "BELA",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 60,
      },
      {
        sno: "9",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "25.09.2022",
        place: "BHAGATUA",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 70,
      },
    ],
  },
  {
    year: 2023,
    records: [
      {
        sno: "1",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "23.02.2023",
        place: "GADSARA",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 57,
      },
      {
        sno: "2",
        nature: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        date: "29.04.2023",
        place: "DHARAHARA",
        disease: "FREE HEALTH CHECKUP & MEDICINE DISTRIBUTION",
        patients: 143,
      },
    ],
  },
  {
    year: 2024,
    records: [
      {
        sno: "1",
        nature: "GENERAL HELATH CHECK UP",
        date: "05.04.2024",
        place: "AZAGARA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 113,
      },
      {
        sno: "2",
        nature: "KSHARSUTRA (BHAGANDAR)",
        date: "20.07.2024",
        place: "AILI",
        disease: "KSHARSUTRA (BHAGANDAR)",
        patients: 107,
      },
      {
        sno: "3",
        nature: "GENERAL HELATH CHECK UP",
        date: "12.09.2024",
        place: "RAUNAKALA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 108,
      },
      {
        sno: "4",
        nature: "GENERAL HELATH CHECK UP",
        date: "21.10.2024",
        place: "PARANAPATTI",
        disease: "GENERAL HELATH CHECK UP",
        patients: 155,
      },
      {
        sno: "5",
        nature: "GENERAL HELATH CHECK UP",
        date: "12.11.2024",
        place: "RAUNAKHURD",
        disease: "GENERAL HELATH CHECK UP",
        patients: 57,
      },
      {
        sno: "6",
        nature: "EYE CAMP",
        date: "09.12.2024",
        place: "TADI",
        disease: "EYE CAMP",
        patients: 128,
      },
    ],
  },
  {
    year: 2025,
    records: [
      {
        sno: "1",
        nature: "GENERAL HELATH CHECK UP",
        date: "28.01.2025",
        place: "MUNARI",
        disease: "GENERAL HELATH CHECK UP",
        patients: 122,
      },
      {
        sno: "2",
        nature: "SHALAKYA (EYE)",
        date: "11.04.2025",
        place: "AZAGARA",
        disease: "SHALAKYA (EYE)",
        patients: 119,
      },
      {
        sno: "3",
        nature: "GENERAL HELATH CHECK UP",
        date: "06.06.2025",
        place: "MUNARI",
        disease: "GENERAL HELATH CHECK UP",
        patients: 105,
      },
      {
        sno: "4",
        nature: "GENERAL HELATH CHECK UP",
        date: "22.07.2025",
        place: "BELA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 80,
      },
      {
        sno: "5",
        nature: "SHALAKYA (EYE)",
        date: "16.09.2025",
        place: "CHHITAMPUR",
        disease: "SHALAKYA (EYE)",
        patients: 65,
      },
      {
        sno: "6",
        nature: "GENERAL HELATH CHECK UP",
        date: "20.09.2025",
        place: "RAUNA KALA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 83,
      },
      {
        sno: "7",
        nature: "GENERAL HELATH CHECK UP",
        date: "12.10.2025",
        place: "DHARAHARA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 120,
      },
      {
        sno: "8",
        nature: "GENERAL HELATH CHECK UP",
        date: "20.11.2025",
        place: "HAZIPUR",
        disease: "GENERAL HELATH CHECK UP",
        patients: 75,
      },
      {
        sno: "9",
        nature: "SHALAKYA (EYE)",
        date: "22.12.2025",
        place: "RAUNA KHURD",
        disease: "SHALAKYA (EYE)",
        patients: 81,
      },
    ],
  },
  {
    year: 2026,
    records: [
      {
        sno: "01",
        nature: "GENERAL HELATH CHECK UP",
        date: "24.01.2026",
        place: "RAUNA KALA",
        disease: "SHALAKYA (EYE)",
        patients: 123,
      },
      {
        sno: "02",
        nature: "GENERAL HELATH CHECK UP",
        date: "23.02.2025",
        place: "BELA",
        disease: "GENERAL HELATH CHECK UP",
        patients: 107,
      },
    ],
  },
];

export default function AboutCamp() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5fff6_0%,#ffffff_38%,#ffffff_100%)] px-4 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_14%_6%,rgba(15,175,59,0.15),transparent_44%),radial-gradient(circle_at_84%_12%,rgba(139,195,74,0.16),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="border-b border-dark/10 pb-10 md:pb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            About Us
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Medical Camp
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-dark/75 md:text-base">
            Annual medical camp records conducted by the college.
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-dark/10 bg-white p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                Institution ID
              </p>
              <p className="mt-1 text-base font-bold text-dark">AYU0332</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                Institution Name
              </p>
              <p className="mt-1 text-base font-bold text-dark">
                Shri Krishna Ayurvedic Medical College, Rauna Khurd, Cholapur,
                Varanasi
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {campData.map((group) => (
            <article
              key={group.year}
              className="overflow-hidden rounded-2xl border border-dark/10 bg-white"
            >
              <div className="border-b border-dark/10 bg-primary/10 px-5 py-4 md:px-6">
                <h2 className="text-lg font-bold text-dark md:text-xl">
                  Medical Camp Conducted by College - {group.year}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        S.No.
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Nature of the camp
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Date
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Place
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        General/Specific Disease
                      </th>
                      <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                        Number of Patients
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.records.map((row) => (
                      <tr
                        key={`${group.year}-${row.sno}-${row.date}`}
                        className="align-top transition-colors duration-200 even:bg-light/50 hover:bg-primary/5"
                      >
                        <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark">
                          {row.sno}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                          {row.nature}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                          {row.date}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                          {row.place || "-"}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                          {row.disease}
                        </td>
                        <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark">
                          {row.patients}
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

