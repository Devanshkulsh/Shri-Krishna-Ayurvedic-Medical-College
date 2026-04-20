import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-dark pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-lg font-bold text-primary">SK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Shri Krishna</span>
                <span className="text-[10px] text-accent">Ayurvedic Medical College</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Reviving Ancient Wisdom with Modern Healthcare. Affordable, holistic healthcare for all.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-accent">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-secondary hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary hover:underline">About Us</Link></li>
              <li><Link to="/hospital" className="hover:text-secondary hover:underline">Hospital</Link></li>
              <li><Link to="/ayurveda" className="hover:text-secondary hover:underline">Ayurveda</Link></li>
              <li><Link to="/contact" className="hover:text-secondary hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-accent">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>Village Chauka, NH-86, Sagar Road, Chhatarpur, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>info@skayurvedic.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-accent">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">Subscribe for health tips and college updates.</p>
            <div className="flex h-10 w-full overflow-hidden rounded-lg bg-gray-800 focus-within:ring-2 focus-within:ring-primary">
              <input
                type="email"
                placeholder="Email Address"
                className="h-full w-full bg-transparent px-4 text-sm text-white outline-none"
              />
              <button className="bg-primary px-4 font-semibold text-white transition-colors hover:bg-secondary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 py-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Shri Krishna Ayurvedic Medical College & Hospital. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
