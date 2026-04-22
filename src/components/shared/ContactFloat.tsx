import { Phone, X, Send } from "lucide-react";
import { useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.604 14.99c-.244-.123-1.446-.714-1.67-.795-.224-.082-.388-.123-.552.123-.163.245-.633.795-.776.959-.143.163-.286.184-.53.061-.245-.122-1.033-.38-1.968-1.213-.727-.648-1.217-1.45-1.36-1.694-.143-.245-.015-.378.108-.5.11-.109.244-.286.367-.428.123-.143.163-.245.245-.409.082-.163.041-.306-.02-.429-.062-.122-.551-1.326-.756-1.816-.2-.47-.402-.408-.552-.416l-.469-.01c-.163 0-.428.062-.652.307-.224.245-.857.836-.857 2.04 0 1.204.877 2.366 1 2.53.122.163 1.723 2.633 4.175 3.692.582.251 1.038.402 1.395.514.586.187 1.119.16 1.54.097.469-.07 1.446-.592 1.65-1.163.204-.571.204-1.061.143-1.163-.061-.102-.224-.163-.469-.286zM12.01 2.001c-5.523 0-10 4.477-10 10 0 1.762.46 3.453 1.334 4.94L2 22l5.2-1.335a9.955 9.955 0 0 0 4.81 1.24h.003c5.523 0 10-4.477 10-10s-4.477-10-10-10zm.003 18.37h-.003a8.354 8.354 0 0 1-4.431-1.27l-.318-.189-3.084.793.822-3.002-.208-.302a8.34 8.34 0 0 1-1.335-4.5c0-4.605 3.743-8.35 8.35-8.35 2.233 0 4.334.87 5.913 2.45a8.303 8.303 0 0 1 2.45 5.9c0 4.606-3.743 8.35-8.35 8.35z" />
    </svg>
  );
}

export default function ContactFloat() {
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const phoneNumber = "+919250625541";
  const prefilledMessage =
    "Hi, I am interested in BAMS admission at Shri Krishna Ayurvedic Medical College. Please share details.";

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-100 px-2 sm:px-3">
      <div className="flex w-full items-end justify-between">
        <a
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
          aria-label="Call Shri Krishna Admissions"
        >
          <Phone size={22} className="text-primary" />
        </a>

        <div className="pointer-events-auto relative flex flex-col items-end">
          {isWhatsappOpen ? (
            <div className="absolute bottom-16 right-0 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-2xl sm:bottom-20 sm:w-88">
              <div className="flex items-center justify-between bg-primary p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
                      <img
                        src="/logo3.png"
                        alt="Shri Krishna logo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary bg-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Admissions Team</p>
                    <p className="text-[10px] opacity-90">
                      Usually replies within a few minutes
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsWhatsappOpen(false)}
                  className="rounded-full p-1 transition hover:bg-white/10"
                  aria-label="Close WhatsApp chat popup"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="min-h-28 bg-primary/5 p-4">
                <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                  <p className="text-xs leading-relaxed text-dark/85">
                    Welcome. Need help with BAMS admission, fee details, or
                    eligibility? We are here to assist.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white p-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="group flex w-full items-center justify-between rounded-full bg-[#25D366] px-4 py-3 text-white transition-colors hover:bg-[#20bd5a]"
                >
                  <span className="text-sm font-semibold">Start WhatsApp Chat</span>
                  <Send size={16} />
                </button>
              </div>
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setIsWhatsappOpen((prev) => !prev)}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 sm:h-14 sm:w-14 ${
              isWhatsappOpen
                ? "rotate-90 bg-white text-slate-500"
                : "bg-[#25D366] text-white"
            }`}
            aria-label={
              isWhatsappOpen
                ? "Close WhatsApp contact"
                : "Open WhatsApp contact"
            }
          >
            {isWhatsappOpen ? (
              <X size={26} />
            ) : (
              <WhatsAppIcon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
