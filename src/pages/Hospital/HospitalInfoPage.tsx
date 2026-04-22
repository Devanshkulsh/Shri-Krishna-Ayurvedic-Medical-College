import SectionHeading from "../../components/shared/SectionHeading";

type HospitalInfoPageProps = {
  title: string;
  pdfSrc?: string;
  pdfLabel?: string;
};

export default function HospitalInfoPage({
  title,
  pdfSrc,
  pdfLabel,
}: HospitalInfoPageProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Hospital"
          title={title}
          description={
            pdfSrc
              ? "Official hospital document is attached below for viewing and download."
              : "This section has been created and is ready for your hospital data/content."
          }
        />

        {pdfSrc ? (
          <div className="mt-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(26,26,26,0.06)]">
              <a
                href={pdfSrc}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
              >
                Open PDF
              </a>
              <a
                href={pdfSrc}
                download
                className="rounded-lg border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Download PDF
              </a>
              <p className="text-sm text-dark/70">
                {pdfLabel ?? "Attached hospital document"}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-dark/10 bg-white p-1.5 shadow-[0_16px_40px_rgba(26,26,26,0.08)] sm:p-2">
              <iframe
                title={pdfLabel ?? title}
                src={pdfSrc}
                className="h-[70vh] w-full rounded-2xl border-0"
              />
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dark/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,26,26,0.08)] md:p-8">
            <p className="text-sm leading-relaxed text-dark/80 md:text-base">
              Page scaffold is complete. Share the exact table/data and we can
              plug it in directly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
