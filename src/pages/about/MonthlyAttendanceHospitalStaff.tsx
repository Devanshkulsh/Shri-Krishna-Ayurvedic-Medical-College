const pdfUrl = "/TeachingStaff/MonthlyAttendanceHospital.pdf";

export default function MonthlyAttendanceHospitalStaff() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(170deg,#f3fbf4_0%,#ffffff_45%,#f8fcf8_100%)] px-4 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(15,175,59,0.15),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(139,195,74,0.14),transparent_34%),radial-gradient(circle_at_84%_84%,rgba(15,175,59,0.1),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="rounded-4xl border border-primary/15 bg-white/85 p-5 shadow-[0_20px_56px_rgba(26,26,26,0.1)] backdrop-blur sm:p-7 md:p-10">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Faculty Records
          </span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-dark sm:text-3xl md:text-5xl">
            Monthly Attendance Of Hospital Staff
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-dark/75 md:text-base">
            View the official monthly attendance PDF in-page or open it in a new tab.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              Open PDF
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Download PDF
            </a>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-4xl border border-primary/15 bg-white shadow-[0_18px_46px_rgba(26,26,26,0.1)]">
          <div className="border-b border-primary/15 bg-light px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
            PDF Preview
          </div>
          <iframe
            src={pdfUrl}
            title="Monthly Attendance Of Hospital Staff PDF"
            className="h-[60vh] min-h-[380px] w-full sm:min-h-[480px] md:h-[72vh] md:min-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
