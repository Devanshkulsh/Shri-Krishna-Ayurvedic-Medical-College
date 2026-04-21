type StaffRow = {
  sno: number;
  zone: string;
  name: string;
  designation: string;
};

const nonTeachingStaff: StaffRow[] = [
  {
    sno: 1,
    zone: "Administrative zone",
    name: "Dr Rajesh Dutt Tiwari",
    designation: "Medical Superintendent",
  },
  {
    sno: 2,
    zone: "Administrative zone",
    name: "Dr Virendra Kr Yadav",
    designation: "Deputy Medical Superintendent",
  },
  {
    sno: 3,
    zone: "Administrative zone",
    name: "Dr. Manoj Kumar Yadav",
    designation: "Emergency medical officer",
  },
  {
    sno: 4,
    zone: "Administrative zone",
    name: "Dr Anshuman Yadav",
    designation: "Emergency medical officer",
  },
  {
    sno: 5,
    zone: "Administrative zone",
    name: "Anuradha Rai",
    designation: "Matron or nursing superintendent",
  },
  {
    sno: 6,
    zone: "Administrative zone",
    name: "Samiksha Yadav",
    designation: "Assistant matron",
  },
  {
    sno: 7,
    zone: "Administrative zone",
    name: "Naushin Nisar",
    designation: "Assistant matron",
  },
  {
    sno: 8,
    zone: "Administrative zone",
    name: "Shambhunath yadav",
    designation: "Office superintendent",
  },
  {
    sno: 9,
    zone: "Administrative zone",
    name: "Vivek Kumar",
    designation: "Clerks and accountants",
  },
  {
    sno: 10,
    zone: "Administrative zone",
    name: "Naveen Kumar Singh",
    designation: "Store keeper",
  },
  {
    sno: 11,
    zone: "Administrative zone",
    name: "Pooja Varma",
    designation: "Multi tasking Staff",
  },
  {
    sno: 12,
    zone: "Administrative zone",
    name: "Nandini Varma",
    designation: "Multi tasking Staff",
  },
  {
    sno: 13,
    zone: "Administrative zone",
    name: "Ranjana Maurya",
    designation: "Multi tasking Staff",
  },
  {
    sno: 14,
    zone: "Reception and Registration",
    name: "Sheet",
    designation: "Receptionist cum telephone operator",
  },
  {
    sno: 15,
    zone: "Reception and Registration",
    name: "Mrityunjay Yadav",
    designation: "Registration and billing clerks",
  },
  {
    sno: 16,
    zone: "Reception and Registration",
    name: "Vivekanand Yadav",
    designation: "Registration and billing clerks",
  },
  {
    sno: 17,
    zone: "Reception and Registration",
    name: "Vikas Yadav",
    designation: "Medical record technician",
  },
  {
    sno: 18,
    zone: "Reception and Registration",
    name: "Priyank Katiyar",
    designation: "Public relation officers",
  },
  {
    sno: 19,
    zone: "Out Patient Department Zone",
    name: "Omprakash",
    designation: "Nursing staff (Emergency)",
  },
  {
    sno: 20,
    zone: "Out Patient Department Zone",
    name: "Shipra",
    designation: "Nursing staff (Prasuti & Stri Roga)",
  },
  {
    sno: 21,
    zone: "Out Patient Department Zone",
    name: "Chandan Soni",
    designation: "Nursing staff (Shalya)",
  },
  {
    sno: 22,
    zone: "Out Patient Department Zone",
    name: "Daroga Prasad",
    designation: "Ward Boy/MTS",
  },
  {
    sno: 23,
    zone: "Out Patient Department Zone",
    name: "Vikas Rai",
    designation: "Ward Boy/MTS",
  },
  {
    sno: 24,
    zone: "Out Patient Department Zone",
    name: "Nirmala",
    designation: "Ward Boy/MTS",
  },
  {
    sno: 25,
    zone: "Dispensary",
    name: "Anand Kumar Bharti",
    designation: "Pharmacist",
  },
  {
    sno: 26,
    zone: "Dispensary",
    name: "Sandeep Yadav",
    designation: "Pharmacist",
  },
  {
    sno: 27,
    zone: "Diagnostic Zone",
    name: "Sunil Kr Giri",
    designation: "Lab technician",
  },
  {
    sno: 28,
    zone: "Diagnostic Zone",
    name: "Saurabh Mishra",
    designation: "Lab technician",
  },
  {
    sno: 29,
    zone: "Diagnostic Zone",
    name: "Radhana Sonkar",
    designation: "Lab attendant",
  },
  {
    sno: 30,
    zone: "Diagnostic Zone",
    name: "Shyam Narayan Prajapati",
    designation: "X-ray technician",
  },
  {
    sno: 31,
    zone: "Diagnostic Zone",
    name: "Nmrata Maurya",
    designation: "Dark room assistant",
  },
  {
    sno: 32,
    zone: "Diagnostic Zone",
    name: "Nandini Maurya",
    designation: "ECG (electro-cardio-gram) technician",
  },
  {
    sno: 33,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Sanjuli Yadav",
    designation: "Nursing staff (Morning)",
  },
  {
    sno: 34,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Neetu Yadav",
    designation: "Nursing staff (Morning)",
  },
  {
    sno: 35,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Rakesh Yadav",
    designation: "Nursing staff (Morning/Reliever)",
  },
  {
    sno: 36,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Kamlesh Yadav",
    designation: "Nursing staff (Evening)",
  },
  {
    sno: 37,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Anjali Paswan",
    designation: "Nursing staff  (Evening)",
  },
  {
    sno: 38,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Umesh Chandra yadav",
    designation: "Nursing staff (Night)",
  },
  {
    sno: 39,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Neha Pal",
    designation: "Nursing staff (Night)",
  },
  {
    sno: 40,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Sikander Yadav",
    designation: "MTS/Ward Boy",
  },
  {
    sno: 41,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Atul Kumar yadav",
    designation: "MTS/Ward Boy",
  },
  {
    sno: 42,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Dr Shivam Singh",
    designation: "RMO (Night Shift)",
  },
  {
    sno: 43,
    zone: "In-Patients Zone - Medical In-Patients Section",
    name: "Dr Ajeet yadav",
    designation: "RMO (Day Shift)",
  },
  {
    sno: 44,
    zone: "In-Patients Zone - Surgical In-Patients Section",
    name: "Chandrawati",
    designation: "MTS/Aaya",
  },
  {
    sno: 45,
    zone: "In-Patients Zone - Surgical In-Patients Section",
    name: "Hiramani",
    designation: "MTS/Aaya",
  },
  {
    sno: 46,
    zone: "In-Patients Zone - Surgical In-Patients Section",
    name: "Dr Yogesh Tripathi",
    designation: "Resident surgical officer",
  },
  {
    sno: 47,
    zone: "In-Patients Zone - Surgical In-Patients Section",
    name: "Dr Arvind Kumar Yadav",
    designation: "Resident surgical officer",
  },
  {
    sno: 48,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Minu Yadav",
    designation: "Nursing staff",
  },
  {
    sno: 49,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Mayank Yaav",
    designation: "Therapists (male)",
  },
  {
    sno: 50,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Amit Thakur",
    designation: "Therapists (male)",
  },
  {
    sno: 51,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Piyush Kr Yadav",
    designation: "Therapists (male)",
  },
  {
    sno: 52,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Priya Kushwaha",
    designation: "Therapists (female)",
  },
  {
    sno: 53,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Sonali yadav",
    designation: "Therapists (female)",
  },
  {
    sno: 54,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Gunja",
    designation: "Therapists (female)",
  },
  {
    sno: 55,
    zone: "Procedural Management Zone - Panchakarma",
    name: "Dr. Baby Chaturvedi",
    designation: "House officer /Senior Resident",
  },
  {
    sno: 56,
    zone: "Operation Theatre",
    name: "Manisha Chauhan",
    designation: "Nursing staff",
  },
  {
    sno: 57,
    zone: "Operation Theatre",
    name: "Vinod Kr Singh",
    designation: "Operation theatre attendants",
  },
  {
    sno: 58,
    zone: "Operation Theatre",
    name: "Priti yadav",
    designation: "Operation theatre attendants",
  },
  {
    sno: 59,
    zone: "Operation Theatre",
    name: "Balwant Pandey",
    designation: "Anushastra karma technician",
  },
  {
    sno: 60,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Savita Clement",
    designation: "Nursing staff",
  },
  {
    sno: 61,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Goldi Prajapati",
    designation: "Nursing staff",
  },
  {
    sno: 62,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Akanksha yadav",
    designation: "Nursing staff",
  },
  {
    sno: 63,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Chanda",
    designation: "MTS/Aaya",
  },
  {
    sno: 64,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Prabhawati Devi",
    designation: "MTS/Aaya",
  },
  {
    sno: 65,
    zone: "Labour Room including Prasuti and Stri rog procedural room",
    name: "Kumar Nisha Kharvar",
    designation: "MTS/Aaya",
  },
  {
    sno: 66,
    zone: "Physiotherapy",
    name: "Mohit Kumar Yadav",
    designation: "Attendant or MTS",
  },
  {
    sno: 67,
    zone: "Service Zone - Pathya Diet Section",
    name: "Dr Gopal Chaubey",
    designation: "In-charge",
  },
  {
    sno: 68,
    zone: "Service Zone - Pathya Diet Section",
    name: "Jaipal",
    designation: "Pathya cooks",
  },
  {
    sno: 69,
    zone: "Service Zone - Pathya Diet Section",
    name: "Vikas",
    designation: "Pathya cooks",
  },
  {
    sno: 70,
    zone: "Service Zone - Pathya Diet Section",
    name: "Ankush",
    designation: "Multi-tasking staff",
  },
  {
    sno: 71,
    zone: "Service Zone - Pathya Diet Section",
    name: "Pappu Yadav",
    designation: "Multi-tasking staff",
  },
];

export default function NonTeachingStaff() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52" />

      <div className="relative mx-auto max-w-7xl">
        <header className="border-b border-dark/10 pb-10 md:pb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            Faculty
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Non Teaching Staff
          </h1>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-dark/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse">
              <thead className="bg-primary/10">
                <tr>
                  <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    S.No.
                  </th>
                  <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    Zone
                  </th>
                  <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    Name
                  </th>
                  <th className="border-b border-dark/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    Designation
                  </th>
                </tr>
              </thead>
              <tbody>
                {nonTeachingStaff.map((item) => (
                  <tr
                    key={item.sno}
                    className="align-top transition-colors duration-200 even:bg-light/50 hover:bg-primary/5"
                  >
                    <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark">
                      {item.sno}
                    </td>
                    <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                      {item.zone}
                    </td>
                    <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                      {item.name}
                    </td>
                    <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/80">
                      {item.designation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
