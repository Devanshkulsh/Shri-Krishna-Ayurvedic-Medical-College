import SectionHeading from "../../components/shared/SectionHeading";

type AttendancePdf = {
  session: string;
  title: string;
  file: string;
};

const attendancePdfs: AttendancePdf[] = [
  {
    session: "2018-19",
    title: "Monthly Attendance Batch 2018-19",
    file: "/student-corner/monthly-attendance/batch2018-19.pdf",
  },
  {
    session: "2019-20",
    title: "Monthly Attendance Batch 2019-20",
    file: "/student-corner/monthly-attendance/batch2019-20.pdf",
  },
  {
    session: "2020-21",
    title: "Monthly Attendance Batch 2020-21",
    file: "/student-corner/monthly-attendance/batch2020-21.pdf",
  },
  {
    session: "2021-22",
    title: "Monthly Attendance Batch 2021-22",
    file: "/student-corner/monthly-attendance/batch2021-22.pdf",
  },
  {
    session: "2022-23",
    title: "Monthly Attendance Batch 2022-23",
    file: "/student-corner/monthly-attendance/batch2022-23.pdf",
  },
];

export default function StudentMonthlyAttendance() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Student Corner"
          title="Monthly Attendance"
          description="Batch-wise monthly attendance PDFs are available below for quick access."
        />

        <div className="mt-8 rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(26,26,26,0.06)] sm:p-5">
          <p className="text-sm text-dark/80 md:text-base">
            Total monthly-attendance documents available:{" "}
            <span className="font-semibold text-dark">{attendancePdfs.length}</span>
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
                {attendancePdfs.map((pdf, index) => (
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
      </div>
    </section>
  );
}
