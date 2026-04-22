import SectionHeading from "../../components/shared/SectionHeading";

type ResultPdf = {
  session: string;
  title: string;
  file: string;
};

type ResultImage = {
  title: string;
  file: string;
};

const resultPdfs: ResultPdf[] = [
  {
    session: "2015-16",
    title: "Result Batch 2015-16",
    file: "/student-corner/result/Result Batch 2015-16.pdf",
  },
  {
    session: "2016-17",
    title: "Result Batch 2016-17",
    file: "/student-corner/result/Result Batch 2016-17.pdf",
  },
  {
    session: "2017-18",
    title: "Result Batch 2017-18",
    file: "/student-corner/result/Result Batch 2017-18.pdf",
  },
];

const resultImages: ResultImage[] = [
  {
    title: "Meritorious Students of Batch 2015-16 in 2nd Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2015-16 in 2nd PROFESSIONAL RESULT.jpg",
  },
  {
    title: "Meritorious Students of Batch 2016-17 in 2nd Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2016-17 in 2nd PROFESSIONAL RESULT.jpeg",
  },
  {
    title: "Meritorious Students of Batch 2016-17 in 3rd Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2016-17 in 3rd PROFESSIONAL RESULT.jpg",
  },
  {
    title: "Meritorious Students of Batch 2017-18 in 1st Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2017-18 in 1st PROFESSIONAL RESULT.jpeg",
  },
  {
    title: "Meritorious Students of Batch 2017-18 in 2nd Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2017-18 in 2nd PROFESSIONAL RESULT.jpg",
  },
  {
    title: "Meritorious Students of Batch 2018-19 in 1st Professional Result",
    file: "/student-corner/result/Meritorious Students of Batch 2018-19 in 1st PROFESSIONAL RESULT.jpg",
  },
];

export default function StudentResult() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Student Corner"
          title="Result"
          description="Batch-wise result PDFs and meritorious student highlights are available below."
        />

        <div className="mt-8 rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(26,26,26,0.06)] sm:p-5">
          <p className="text-sm text-dark/80 md:text-base">
            Total result PDFs available:{" "}
            <span className="font-semibold text-dark">{resultPdfs.length}</span>
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
                    Session
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Document
                  </th>
                  <th className="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultPdfs.map((pdf, index) => (
                  <tr key={pdf.file} className="border-t border-dark/10">
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">
                      {pdf.session}
                    </td>
                    <td className="min-w-35 px-3 py-3 sm:px-4">{pdf.title}</td>
                    <td className="px-3 py-3 sm:px-4">
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <a
                          href={encodeURI(pdf.file)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-9 w-full items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-secondary sm:w-auto"
                        >
                          Open
                        </a>
                        <a
                          href={encodeURI(pdf.file)}
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

        <div className="mt-8 rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(26,26,26,0.06)] sm:p-5">
          <p className="text-sm text-dark/80 md:text-base">
            Total meritorious-student images available:{" "}
            <span className="font-semibold text-dark">{resultImages.length}</span>
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resultImages.map((image) => (
            <a
              key={image.file}
              href={encodeURI(image.file)}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_12px_30px_rgba(26,26,26,0.08)]"
            >
              <div className="h-56 overflow-hidden bg-primary/5">
                <img
                  src={encodeURI(image.file)}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-3 text-sm font-semibold text-dark/85">
                {image.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
