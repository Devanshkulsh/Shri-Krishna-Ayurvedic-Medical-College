import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

const contact = {
  address: "Raunakhurda, Cholapur, Varanasi, Uttar Pradesh 221101",
  phone: "+919250625541",
  email: "shrikrishnaamc@gmail.com",
  hours: "Mon - Sat: 10:00 AM - 5:00 PM",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.3221125285986!2d83.02961766242548!3d25.46091752744851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e29ed3fffffff%3A0x2e23e9a02e4ad4bc!2sShri%20Krishna%20Ayurvedic%20Medical%20College%20%26%20Hospital%20-%20Best%20NEET%20Ayurvedic%20Medical%20College%20BAMS!5e0!3m2!1sen!2sin!4v1776760664478!5m2!1sen!2sin",
};

const socialMedia = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Shri-krishna-ayurvedic-medical-college-100063722478729/",
    videoSrc: "/icons/facebook.webm",
    fallback: "f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/skamc_varanasi/",
    videoSrc: "/icons/insta.webm",
    fallback: "ig",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@shrikrishnaayurvedicmedica5941",
    videoSrc: "/icons/youtube.webm",
    fallback: "yt",
  },
];

const locationParagraphs = [
  "The institute is surrounded by three rivers Ganga, Gomati & Varuna in the East, North & South. Holy River GANGA is on its East. Most of the Ayurvedic herbs, shrubs and trees are found growing naturally here. The scenario of agricultural land and vegetation is itself health and education promoting. It is a beautiful place with pleasant and pollution free climate throughout the year.",
  "Varanasi itself a pilgrim city well known for education & spiritual knowledge is also institute city. Banaras Hindu University, one of the best university of India situated 20 KM from this institute. SARNATH an international tourist place situated 15 KM from this Institute. This prestigious college well connected with both road and rail and situated in the Varanasi district at Rauna Khurd. The Varanasi railway station one of the major railway station of country is just 15 km away from it. Proper and regular transport and auto play in good frequency. Institute is connected with National Highway no 7, 29 & 233 to MP, Ghazipur City, Azamgarh.",
  "Lal Bahadur Shastri International Airport is just 20 KM from the institute.",
];

const locationPoints = [
  "Banaras Hindu University, one of the best university of India situated 20 KM from this institute.",
  "Lal Bahadur Shastri International Airport is just 20 KM from the institute.",
  "SARNATH an international tourist place situated 15 KM from this Institute.",
  "The Varanasi railway station one of the major railway station of country is just 15 km away from it.",
];

export default function Contact() {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contact.email}`;

  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Reach Shri Krishna Campus"
          description="Visit us, call us, or write to us for admissions, healthcare and general enquiries."
        />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="h-72 overflow-hidden rounded-3xl border border-primary/20 bg-white p-1.5 shadow-[0_20px_55px_rgba(26,26,26,0.12)] sm:h-96 sm:p-2 lg:h-full lg:min-h-144">
            <iframe
              title="Krishna College Location"
              src={contact.mapSrc}
              className="h-full w-full rounded-[1.2rem] border-0 sm:rounded-[1.6rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex h-full flex-col rounded-3xl border border-primary/20 bg-white p-5 shadow-[0_20px_55px_rgba(26,26,26,0.1)] sm:p-7 md:p-8 lg:min-h-144">
            <h2 className="text-2xl font-bold text-dark">Contact Details</h2>
            <p className="mt-2 text-sm leading-relaxed text-dark/70">
              We are available to help with admissions, appointments and campus
              guidance.
            </p>

            <div className="mt-6 grid gap-4">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                    Address
                  </p>
                  <p className="mt-1 text-sm font-medium text-dark/85">
                    {contact.address}
                  </p>
                </div>
              </a>

              <a
                href={phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-dark/85">
                    {contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={emailHref}
                className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-dark/85">
                    {contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-secondary/20 bg-secondary/10 p-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-white">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                    Working Hours
                  </p>
                  <p className="mt-1 text-sm font-medium text-dark/85">
                    {contact.hours}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                  Social Media
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {socialMedia.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-800 text-gray-300 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                    >
                      {item.videoSrc ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source
                            src={item.videoSrc}
                            type={
                              item.videoSrc.endsWith(".webm")
                                ? "video/webm"
                                : "video/mp4"
                            }
                          />
                        </video>
                      ) : (
                        <span className="text-[10px] font-bold uppercase">
                          {item.fallback}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="mt-10 rounded-3xl border border-dark/10 bg-white p-5 shadow-[0_16px_40px_rgba(26,26,26,0.08)] md:p-8">
          <h3 className="text-xl font-bold text-dark md:text-2xl">
            Location & Connectivity
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-dark/80 md:text-base">
            {locationParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {locationPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-medium leading-relaxed text-dark/85"
              >
                {point}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
