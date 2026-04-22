import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contact = {
  address: "Raunakhurda, Cholapur, Varanasi, Uttar Pradesh 221101",
  phone: "+919250625541",
  email: "shrikrishnaamc@gmail.com",
  hours: "Mon - Sat: 10:00 AM - 5:00 PM",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.3221125285986!2d83.02961766242548!3d25.46091752744851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e29ed3fffffff%3A0x2e23e9a02e4ad4bc!2sShri%20Krishna%20Ayurvedic%20Medical%20College%20%26%20Hospital%20-%20Best%20NEET%20Ayurvedic%20Medical%20College%20BAMS!5e0!3m2!1sen!2sin!4v1776760664478!5m2!1sen!2sin",
};

export default function ContactSection() {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contact.email}`;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(255,255,255,1),rgba(15,175,59,0.05),rgba(139,195,74,0.1))] px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(15,175,59,0.14),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(139,195,74,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-sm">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:mt-5 sm:text-4xl md:text-5xl">
            Reach Shri Krishna Campus
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-dark/70 sm:mt-4 sm:text-base md:text-lg">
            Visit us, call us, or write to us. We are always here to support
            students, parents, and patients.
          </p>
        </div>

        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex">
            <div className="h-64 w-full overflow-hidden rounded-3xl border border-primary/20 bg-white p-1.5 shadow-[0_20px_55px_rgba(26,26,26,0.12)] sm:h-90 sm:rounded-4xl sm:p-2 md:h-105 lg:h-full lg:min-h-128">
              <iframe
                title="Krishna College Location"
                src={contact.mapSrc}
                className="h-full w-full rounded-[1.2rem] border-0 sm:rounded-[1.6rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex h-full w-full flex-col rounded-3xl border border-primary/20 bg-white p-5 shadow-[0_20px_55px_rgba(26,26,26,0.1)] sm:rounded-4xl sm:p-7 md:p-9 lg:min-h-128">
              <h3 className="text-xl font-bold text-dark sm:text-2xl">
                Contact Information
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dark/70 sm:mt-3">
                Get in touch for admissions, hospital appointments, or general
                enquiries.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-7 sm:gap-4">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open address in Google Maps"
                  className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 sm:gap-4 sm:p-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-dark/60 sm:text-xs">
                      Address
                    </p>
                    <p className="mt-1 text-sm font-medium text-dark/85">
                      {contact.address}
                    </p>
                  </div>
                </a>

                <a
                  href={phoneHref}
                  aria-label={`Call ${contact.phone}`}
                  className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 sm:gap-4 sm:p-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-dark/60 sm:text-xs">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium text-dark/85">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={emailHref}
                  aria-label={`Send email to ${contact.email}`}
                  className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 sm:gap-4 sm:p-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-dark/60 sm:text-xs">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-medium text-dark/85 sm:wrap-break-word">
                      {contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/10 p-3.5 sm:gap-4 sm:p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-white">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-dark/60 sm:text-xs">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm font-medium text-dark/85">
                      {contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
