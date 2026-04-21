import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="mt-16 bg-dark pt-14 text-white sm:mt-20 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner">
                <img
                  src="/logo.png"
                  alt="Shri Krishna logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold leading-tight">Shri Krishna</p>
                <p className="text-[10px] text-accent sm:text-[11px]">
                  Ayurvedic Medical College
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Reviving Ancient Wisdom with Modern Healthcare. Affordable,
              holistic healthcare for all.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-accent sm:mb-5 sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-secondary hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-secondary hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/hospital"
                  className="transition-colors hover:text-secondary hover:underline"
                >
                  Hospital
                </Link>
              </li>
              <li>
                <Link
                  to="/ayurveda"
                  className="transition-colors hover:text-secondary hover:underline"
                >
                  Ayurveda
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-secondary hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-accent sm:mb-5 sm:text-lg">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span className="leading-relaxed">
                  Raunakhurda, Cholapur, Varanasi, Uttar Pradesh 221101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>+91 9015235517</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>shrikrishnaamc@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-accent sm:mb-5 sm:text-lg">
              Admissions & Social
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Start your BAMS journey and connect with us on social media.
            </p>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              Apply Now
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-800 py-6 text-center text-xs text-gray-500 sm:text-sm md:mt-14 md:flex-row md:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} Shri Krishna Ayurvedic Medical
              College & Hospital. All rights reserved.
            </p>
          </div>
          <p className="font-semibold text-accent">
            Developed &amp; maintained by{" "}
            <a
              href="https://ntechzy.in"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-accent/70 underline-offset-2 transition-colors hover:text-white"
            >
              Ntechzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
