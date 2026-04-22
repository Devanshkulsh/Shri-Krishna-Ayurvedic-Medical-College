import SectionHeading from "../../components/shared/SectionHeading";

type TableRow = {
  sno: number;
  item: string;
  status: string;
};

type DepartmentTable = {
  department: string;
  rows: TableRow[];
};

const toRows = (items: string[]): TableRow[] =>
  items.map((item, index) => ({
    sno: index + 1,
    item,
    status: "Available",
  }));

const opdDepartments: DepartmentTable[] = [
  {
    department: "Kaya Chikitsa",
    rows: toRows([
      "X-Ray View Box",
      "BP Apparatus",
      "Stethoscope",
      "Examination Table",
      "Thermometer",
      "Tongue depressor",
      "Torch",
      "Gloves",
      "Measuring tape",
      "Weight and height measuring stand",
      "Knee Hammer",
    ]),
  },
  {
    department: "Shalya Tantra",
    rows: toRows([
      "Minor OT",
      "Instruments for anorectal examination",
      "Examination Table",
      "BP Apparatus",
      "Thermometer",
      "Surgical Blades",
      "X-Ray Viewing Box",
      "Stethoscope",
      "Cheetle's forceps",
      "Torch",
    ]),
  },
  {
    department: "Shalakya Tantra",
    rows: toRows([
      "Tuning forks",
      "Ophthalmoscope/fundoscope",
      "Auroscope",
      "Examination Table",
      "X-Ray Viewing Box",
      "BP Apparatus",
      "Stethoscope",
      "Thermometer",
      "ENT kit",
      "Torch",
      "Bull's lamp",
    ]),
  },
  {
    department: "Prasuti Tantra & Stri Roga",
    rows: toRows([
      "Weighing machine",
      "Sim's speculum",
      "Thermometer",
      "Cusco's speculum",
      "Examination Table",
      "Lamp stand",
      "Torch",
      "X-Ray Viewing Box",
      "BP Apparatus",
      "Stethoscope",
      "Measuring tape",
    ]),
  },
  {
    department: "Bal Roga",
    rows: toRows([
      "Scale",
      "Weighing machine",
      "Torch",
      "View Box",
      "Thermometer",
      "BP Apparatus",
      "Stethoscope",
      "Examination table",
    ]),
  },
  {
    department: "Panchkarma",
    rows: toRows([
      "X-Ray View Box",
      "BP Apparatus",
      "Stethoscope",
      "Examination Table",
      "Thermometer",
      "Tongue depressor",
      "Torch",
      "Measuring tape",
      "Weight and height measuring stand",
      "Knee Hammer",
      "Gloves",
    ]),
  },
  {
    department: "Yoga Section (Swasthya Rakhshan)",
    rows: toRows([
      "Facilities available (Equipment, Instrument, Furniture etc)",
    ]),
  },
  {
    department: "Casualty",
    rows: toRows([
      "Facilities available (Equipment, Instrument, Furniture etc)",
    ]),
  },
];

const labourRoomRows = toRows([
  "Shadow less Lamp",
  "Suction Machine (Neonatal)",
  "Oxygen Cylinder and Mask",
  "Foetal Toco Cardiograph",
  "Radient Warmer",
  "Phototherapy Unit",
  "Weighing Machine (Paediatric)",
  "Patient trolley",
  "Anaesthesia trolley",
  "Infantometer",
  "Vacuum extractor",
  "Foetal Doppler",
  "Low cavity forceps",
  "Steriliser",
  "Macintosh rubber sheet",
  "Catguts and Thread",
  "Instruments for labour and Episiotomy (Scissors, forceps, needle, holder etc.)",
  "Baby tray",
  "HIV kit for emergency patients",
  "Plain and Hole towels",
  "Nebuliser",
  "Foetoscope",
  "Autoclave",
  "Drums",
  "Instrumental Trolley",
  "OT tables with head up and head low facility",
  "Pulse Oxymeter",
  "Resuscitation kit",
  "Boyle's apparatus",
  "Electrocautery",
  "MTP Suction Machine",
  "Anaesthesia Kit",
  "Blunt and Sharp Curettes",
  "Dilators set (Hegar's, Hawkins)",
  "Sim's Speculum",
  "Anterior Vaginal Wall retractor",
  "Cysco's Speculum",
  "Uterine sound",
  "Volsellum",
  "MTP Suction Curette",
  "Needles",
  "Needle holders",
  "Sponge holding forcep's",
  "Towel Clips",
  "Retractors abdominal (Doyne's etc.)",
  "Green armytage forceps",
  "Uterus holding forceps",
  "Kocher's forceps",
  "Artery forceps (Long, short, Mosquito)",
  "Scissors- different sizes",
  "Forceps obstetrics",
  "Endotracheal tubes",
  "B.P. apparatus",
  "Cord Cutting appliances",
  "I.U.C.D. removing hook",
  "Bladder Sound",
]);

const shalyaOperationTheatreRows = toRows([
  "Spot light (Shadowless ceiling fitted)",
  "Needle holding Forceps (big-medium-small)",
  "Dressing drums of Assorted size",
  "Drum stand",
  "IV Stand",
  "X-ray View Box (double)",
  "Cheetles Forceps",
  "Mosquito forceps",
  "Scissors straight (Tailor)",
  "Scissors curved of different sizes",
  "Stich removal scissors",
  "Dissection forceps",
  "Sinus Forceps",
  "Probes - Assorted size",
  "Pointed scissors",
  "Abdominal Retractors",
  "Tissue Forceps",
  "Bob Kock's Forceps",
  "Kocher's Forceps",
  "Urethral Dilators",
  "Rubber catheters of Assorted size",
  "Metal Cathetors",
  "Corrugatedrubber drain",
  "Suturing Needle (straight/curved) of Assorted size",
  "Surgical Thread",
  "Sponge holding forceps",
  "Right Angle cholecystectomy Forceps",
  "Stone holding forceps",
  "Allies Forceps small",
  "Allies Forceps Big",
  "Artery Forceps small",
  "Artery Forceps big",
  "Artery Forceps Medium",
  "Sigmoidoscope Rigid/flexible",
  "Barron Pile's Gun",
  "Laryngoscope Pediatric/Adult",
  "Boyles Apparatus",
  "Multiparameter Monitor",
  "Ambu Bag",
  "Suction machine Electrical or Manual",
  "Emergency power back up facility",
  "Emergency light",
  "Fire Extinguisher",
  "Skin grafting knife with handle",
  "Surgical blades of different size",
  "BP Handle of different size",
  "Vertical BP Instrument",
  "Self-Retaining Retractor",
  "Bone cutter",
  "Giggly Saw",
  "Scoop",
  "Periasteum elevator",
  "Maggler Forceps",
  "High Pressure Autoclave",
  "Fumigator",
  "Refrigerator",
  "Nitrous Oxide Cylinder",
  "Hydrolic Operation Table",
  "Boyle's Apparatus",
  "Instrument Trolley",
  "Endotracheal Tube",
  "Proctoscope with or without illumination",
  "Revolving Stool",
  "Gabrial Syringe",
  "Strecher with trolley",
  "Needle holder",
  "BP Apparatus",
  "Suction Machine",
]);

const shalakyaOperativeRows = toRows([
  "Ophthalmic Operation table with Head rest",
  "Sterilizing box/case with matts",
  "Lens insertion Forceps",
  "Keratome",
  "Desmarres lid retractors",
  "Cat-paw lacrimal retractor",
  "Mueller lacrimal sac retractor",
  "Dastoor iris retractor",
  "Meyrhoefer Chalazion currete",
  "Sinsky lens manipulating hook",
  "IOL Manipulator",
  "Foreign body spud",
  "Lewis lens loop (vectis)",
  "Cystotome and spoon",
  "Mule Evisceration spoon",
  "Iris repository (double-ended)",
  "Jameson muscle hook",
  "Wills cautery with copper ball-point",
  "Langs lacrimal sac dissector",
  "Kelly Glaucoma punch",
  "Elevator (double ended)",
  "Nasal speculum adult/child",
  "Wilder punctum Dilator",
  "Bowman lacrimal probes",
  "Hartman mosquito forceps",
  "Colibri forceps 1*2 teech",
  "Mc. person corneal forceps with tying platform",
  "Dressing forceps, serrated",
  "Moorfieldconjuctival forceps",
  "Fixation forceps",
  "Beer cilea (epilation) forceps",
  "Arruga capsular forceps",
  "Snellen Entropion clamp",
  "Chalazion clamps",
  "Vannas straight scissors",
  "Barraquer needle holder",
  "Air injection cannula",
  "Healon aspirating cannula",
  "AC was cannula",
  "Lacrimal cannula",
  "Hydrodialysis cannula",
  "J-loop cannula (Right/Left With silicon tubing)",
  "Simcok direct I/A cannula with silicon tubing",
  "Irrigating aspirating handle",
  "Lens dialer",
  "Superior Rectus forceps",
  "Eye wash glasses (for Tarpana Karma)",
  "Swimming Goggles (for Tarpana Karma)",
  "Aural Syringe",
  "Jobson's Aural Probe",
  "Eustachian Catheter",
  "Mastoid Retractor",
  "Mastoid Gouge",
  "Mallet",
  "Nasal Foreign Body hook",
  "Nasal packing forceps",
  "Nasal Snare",
  "Bayonet Shaped gouge",
  "Walshman's forceps",
  "Laryngeal forceps",
  "Tongue plate with throat suction",
  "Tonsil holding forceps",
  "Tonsillar suction",
  "Adenoid curette with cage",
  "Peritonsillarabcess draining forceps",
  "Fuller's Tracheostomy Tube",
  "Cheatel's Forceps",
  "Other consumable articles like gloves, syringes, bandages, sutras, etc.",
]);

function FacilityTable({ rows }: { rows: TableRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_10px_26px_rgba(26,26,26,0.06)]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-dark/85">
          <thead className="bg-primary/10 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">S. No.</th>
              <th className="px-4 py-3 font-semibold">
                Equipment, Instruments, Furniture
              </th>
              <th className="px-4 py-3 font-semibold">Available / Not Available</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.sno}-${row.item}`} className="border-t border-dark/10">
                <td className="whitespace-nowrap px-4 py-3">{row.sno}</td>
                <td className="px-4 py-3">{row.item}</td>
                <td className="whitespace-nowrap px-4 py-3">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HospitalDepartmentWiseClinicalMaterialAndFacilities() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Hospital"
          title="Department wise Clinical Material and Facilities"
          description="Instruments and equipment details for OPD, labour room and operation theatre sections."
        />

        <div className="mt-10 space-y-10">
          <section className="space-y-6">
            <h3 className="text-xl font-semibold text-dark md:text-2xl">
              Instruments and Equipment for OPD
            </h3>
            {opdDepartments.map((department) => (
              <div key={department.department} className="space-y-3">
                <h4 className="text-lg font-semibold text-dark/90">
                  {department.department}
                </h4>
                <FacilityTable rows={department.rows} />
              </div>
            ))}
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-dark md:text-2xl">
              Instruments and Equipment for LABOUR ROOM
            </h3>
            <FacilityTable rows={labourRoomRows} />
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-dark md:text-2xl">
              Shalya Operation Theatre
            </h3>
            <FacilityTable rows={shalyaOperationTheatreRows} />
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-dark md:text-2xl">
              Shalakya: Ophthalmic Equipment or Instruments for Operative Surgery
            </h3>
            <FacilityTable rows={shalakyaOperativeRows} />
          </section>
        </div>
      </div>
    </section>
  );
}
