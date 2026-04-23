import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";

export default function Admissions() {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const checkFormLoaded = () => {
      const target = document.getElementById("formsID7375");
      if (target && target.childElementCount > 0) {
        setFormLoaded(true);
      }
    };

    checkFormLoaded();
    const interval = window.setInterval(checkFormLoaded, 500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary/5 px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Admissions"
          title="Admission Enquiry Form"
          description="Fill in your details and our admission team will contact you."
        />

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-[0_14px_35px_rgba(26,26,26,0.08)]">
            <div className="border-b border-dark/10 bg-primary/5 px-6 py-5">
              <h2 className="text-xl font-bold text-dark sm:text-2xl">
                Admission Enquiry Form
              </h2>
              <p className="mt-1 text-sm text-dark/70">
                Fill in your details and our admission team will contact you.
              </p>
            </div>

            {!formLoaded ? (
              <div className="mx-6 mt-4 rounded-lg border border-accent/40 bg-accent/15 px-4 py-2">
                <p className="text-xs text-dark/75 sm:text-sm">
                  If the admission form does not appear below, please reload the
                  page.
                </p>
              </div>
            ) : null}

            <div className="admission-form-scope p-6">
              <div id="formsID7375" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
