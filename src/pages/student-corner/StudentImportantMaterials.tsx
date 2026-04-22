import SectionHeading from "../../components/shared/SectionHeading";

type MaterialPdf = {
  year: string;
  title: string;
  file: string;
};

const importantMaterials: MaterialPdf[] = [
  {
    year: "1st Year",
    title: "1st Year Syllabus",
    file: "/student-corner/syllabus/1st year Syllabus.pdf",
  },
  {
    year: "2nd Year",
    title: "2nd Year Syllabus",
    file: "/student-corner/syllabus/2nd Year syllabus.pdf",
  },
  {
    year: "3rd Year",
    title: "3rd Year Syllabus",
    file: "/student-corner/syllabus/3rd year syllabus.pdf",
  },
  {
    year: "4th Year",
    title: "4th Year Syllabus",
    file: "/student-corner/syllabus/4th year syllabus.pdf",
  },
];

export default function StudentImportantMaterials() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Student Corner"
          title="Important Materials"
          description="Year-wise syllabus PDFs are available below for quick access."
        />

        <div className="mt-8 rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(26,26,26,0.06)] sm:p-5">
          <p className="text-sm text-dark/80 md:text-base">
            Total syllabus documents available:{" "}
            <span className="font-semibold text-dark">
              {importantMaterials.length}
            </span>
          </p>
        </div>

        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_12px_30px_rgba(26,26,26,0.08)] sm:rounded-3xl">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left text-xs text-dark/85 sm:text-sm">
              <thead className="bg-primary/10">
                <tr>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Sr. No.
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Year
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Material
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {importantMaterials.map((material, index) => (
                  <tr key={material.file} className="border-t border-dark/10">
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">
                      {material.year}
                    </td>
                    <td className="min-w-35 px-3 py-3 sm:px-4">
                      {material.title}
                    </td>
                    <td className="px-3 py-3 sm:px-4">
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <a
                          href={encodeURI(material.file)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-9 w-full items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-secondary sm:w-auto"
                        >
                          Open
                        </a>
                        <a
                          href={encodeURI(material.file)}
                          download
                          className="inline-flex min-h-9 w-full items-center justify-center rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
                        >
                          Download
                        </a>
                      </div>
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
