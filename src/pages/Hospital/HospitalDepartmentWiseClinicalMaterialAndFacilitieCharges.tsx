import SectionHeading from "../../components/shared/SectionHeading";

type ChargeRow = {
  srNo: number;
  facility: string;
  charge: string;
};

type ChargeSection = {
  title: string;
  rows: ChargeRow[];
};

const chargeSections: ChargeSection[] = [
  {
    title: "Hospital Charges",
    rows: [
      { srNo: 1, facility: "IPD ADMISSION FEE", charge: "20" },
      { srNo: 2, facility: "ECG", charge: "50" },
      { srNo: 3, facility: "KSHAR SHUTRA", charge: "500" },
      { srNo: 4, facility: "X-RAY", charge: "60/100/200" },
    ],
  },
  {
    title: "PANCHKARMA THERAPY CHARGES",
    rows: [
      { srNo: 5, facility: "SHIRODHAR", charge: "500" },
      { srNo: 6, facility: "KATIVASTHI", charge: "200" },
      { srNo: 7, facility: "SNEHAN", charge: "150" },
      { srNo: 8, facility: "SWEDAN", charge: "250" },
      { srNo: 9, facility: "VIRECHANA", charge: "50" },
      { srNo: 10, facility: "VAMANA", charge: "200" },
      { srNo: 11, facility: "BASTI", charge: "50" },
      { srNo: 12, facility: "NASHYA", charge: "20" },
      { srNo: 13, facility: "TARPANA", charge: "50" },
    ],
  },
  {
    title: "SHALYA-OT",
    rows: [
      { srNo: 14, facility: "PITTASHMARI (Cholicystotectomy)", charge: "5000" },
      { srNo: 15, facility: "ANTRAVRIDHHI (Herniorraphy)", charge: "2000" },
      { srNo: 16, facility: "MUTRAVRIDHHI (Eversion of Sac)", charge: "500/1000" },
      { srNo: 17, facility: "ANTTAPUCHHSODH (Appendicectomy)", charge: "3000" },
    ],
  },
  {
    title: "STRI PRASUTI-OT",
    rows: [
      { srNo: 18, facility: "YONI PICCHU", charge: "1000" },
      { srNo: 19, facility: "HYSTRECTOMY", charge: "3000" },
      { srNo: 20, facility: "MTP", charge: "1500" },
      { srNo: 21, facility: "DRAINAGE OF ABSCESS", charge: "1500" },
      { srNo: 22, facility: "BASTI for YONIKANDU", charge: "1500" },
      { srNo: 23, facility: "BASTI for YONIKANDU", charge: "1500" },
      { srNo: 24, facility: "BASTI for YONIKANDU", charge: "1500" },
      { srNo: 25, facility: "USG", charge: "250" },
      { srNo: 26, facility: "LABOUR CHARGE (NORAML DELIVERY)", charge: "500" },
      { srNo: 27, facility: "CAESAREAN DELIVERY", charge: "800" },
    ],
  },
  {
    title: "INVESTIGATION CHARGES",
    rows: [
      { srNo: 28, facility: "HAEMOGLOBIN", charge: "10" },
      { srNo: 29, facility: "TOTAL LEUCOCYTE COUNT", charge: "10" },
      { srNo: 30, facility: "DEFFERENTIAL LEUCOCYTE COUNT", charge: "10" },
      { srNo: 31, facility: "ESR", charge: "10" },
      { srNo: 32, facility: "COMPLETE BLOOD COUNT", charge: "150" },
      { srNo: 33, facility: "PACKED CELL VOLUME", charge: "20" },
      { srNo: 34, facility: "MEAN CORPUSCULAR VOLUME", charge: "20" },
      { srNo: 35, facility: "MEAN CORPUSCULAR HAEMOGLOBIN", charge: "20" },
      { srNo: 36, facility: "MEAN CORPUSCULAR HAEMOGLOBIN CONCENTRATION", charge: "20" },
      { srNo: 37, facility: "RBC COUNT", charge: "10" },
      { srNo: 38, facility: "PLATLET COUNT", charge: "40" },
      { srNo: 39, facility: "BLEEDING TIME", charge: "15" },
      { srNo: 40, facility: "CLOTTING TIME", charge: "15" },
      { srNo: 41, facility: "BLOOD GROUP", charge: "30" },
      { srNo: 42, facility: "WIDAL TEST", charge: "40" },
      { srNo: 43, facility: "MP TEST", charge: "40" },
      { srNo: 44, facility: "MOUNTOUX TEST", charge: "20" },
      { srNo: 45, facility: "AFB", charge: "30" },
      { srNo: 46, facility: "PLASMA SUGAR FASTING", charge: "50" },
      { srNo: 47, facility: "PLASMA SUGAR PP (2HRS AFTER MEAL)", charge: "50" },
      { srNo: 48, facility: "PLASMA SUGAR PP (2HRS AFTER ORAL 75gm GLUCOSE)", charge: "30" },
      { srNo: 49, facility: "PLASMA SUGAR RANDOM", charge: "30" },
      { srNo: 50, facility: "PLASMA SUGAR FASTING & PP", charge: "50" },
      { srNo: 51, facility: "LIVER FUNCTION TET (LFT)", charge: "200" },
      { srNo: 52, facility: "SERUM BILIRUBIN (TOTAL)", charge: "25" },
      { srNo: 53, facility: "SERUM BILIRUBIN (DIRECT)", charge: "25" },
      { srNo: 54, facility: "SERUM BILIRUBIN (INDIRECT)", charge: "30" },
      { srNo: 55, facility: "SGPT(ALT)", charge: "50" },
      { srNo: 56, facility: "SGOT (AST)", charge: "50" },
      { srNo: 57, facility: "SERUM ALKALINE PHOSPHATASE", charge: "50" },
      { srNo: 58, facility: "SERUM TOTAL PROTEIN", charge: "25" },
      { srNo: 59, facility: "SERUM ALBUMIN", charge: "50" },
      { srNo: 60, facility: "SERUM GLOBILIN", charge: "50" },
      { srNo: 61, facility: "SERUM GAMMA GLUTAMY TRANSFERASE (CGT)", charge: "50" },
      { srNo: 62, facility: "LIPID PROFILE", charge: "150" },
      { srNo: 63, facility: "THYROID PROFILE", charge: "200" },
      { srNo: 64, facility: "TOTAL T3", charge: "50" },
      { srNo: 65, facility: "TOTAL T4", charge: "50" },
      { srNo: 66, facility: "TSH", charge: "50" },
      { srNo: 67, facility: "FREE THYROXINE (FT4)", charge: "50" },
      { srNo: 68, facility: "SERUM URIC ACID (SUA)", charge: "30" },
      { srNo: 69, facility: "SERUM CREATININE", charge: "20" },
      { srNo: 70, facility: "BLOOD UREA", charge: "20" },
      { srNo: 71, facility: "URINE R/M", charge: "50" },
      { srNo: 72, facility: "URINE CULTURE", charge: "150" },
      { srNo: 73, facility: "HIV", charge: "200" },
      { srNo: 74, facility: "HBsAg", charge: "200" },
      { srNo: 75, facility: "STOOL R/M", charge: "30" },
      { srNo: 76, facility: "PREGNANCY TEST", charge: "30" },
      { srNo: 77, facility: "ELECTROLYTE", charge: "100" },
    ],
  },
];

function ChargesTable({ rows }: { rows: ChargeRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_10px_26px_rgba(26,26,26,0.06)]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-dark/85">
          <thead className="bg-primary/10 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">SR NO.</th>
              <th className="px-4 py-3 font-semibold">FACILITIES</th>
              <th className="px-4 py-3 font-semibold">CHARGE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.srNo}-${row.facility}`} className="border-t border-dark/10">
                <td className="whitespace-nowrap px-4 py-3">{row.srNo}</td>
                <td className="px-4 py-3">{row.facility}</td>
                <td className="whitespace-nowrap px-4 py-3">{row.charge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HospitalDepartmentWiseClinicalMaterialAndFacilitieCharges() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Hospital"
          title="Department wise Clinical Material and Facilitie Charges"
          description="Hospital facilities and treatment charges."
        />

        <div className="mt-10 space-y-10">
          {chargeSections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h3 className="text-xl font-semibold text-dark md:text-2xl">{section.title}</h3>
              <ChargesTable rows={section.rows} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
