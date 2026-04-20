import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationMenu } from "../../config/menu";

// A single NavItem with MegaMenu support
const NavItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // slight delay to allow moving to submenu
  };

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href}
        className="group flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors hover:text-accent"
      >
        {item.name}
        {item.dropdown && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        )}
      </Link>

      {item.dropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute left-0 top-full z-50 mt-2 min-w-75 origin-top-left overflow-hidden rounded-2xl border border-white/20 bg-linear-to-b from-secondary/95 to-primary/90 p-3 shadow-2xl backdrop-blur-xl"
            >
              <ul className="space-y-1">
                {item.dropdown.map((subItem: any, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                  >
                    <Link
                      to={subItem.href}
                      className="block rounded-xl border border-transparent px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10 hover:pl-6"
                    >
                      {subItem.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/95 shadow-md backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner sm:h-12 sm:w-12">
            <img
              src="/logo.png"
              alt="Shri Krishna logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="hidden min-w-0 flex-col md:flex">
            <span className="text-lg font-bold leading-tight text-white">Shri Krishna</span>
            <span className="truncate text-xs font-medium text-accent">Ayurvedic Medical College & Hospital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center whitespace-nowrap lg:flex">
          {navigationMenu.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 hover:text-accent focus:outline-none"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setOpenMobileDropdown(null);
            }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/20 bg-primary/95 px-4 pb-6 pt-3 backdrop-blur-md lg:hidden"
          >
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/4 p-2 shadow-2xl">
              {navigationMenu.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: idx * 0.04 }}
                  className="overflow-hidden rounded-xl border border-transparent bg-white/2 hover:border-white/10"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      to={item.href}
                      className="block flex-1 px-3 py-3 text-base font-medium text-white transition-colors hover:text-accent"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.name} submenu`}
                        className="mr-2 rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-accent"
                        onClick={() =>
                          setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)
                        }
                      >
                        <motion.span
                          animate={{ rotate: openMobileDropdown === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="block"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                    )}
                  </div>

                  {item.dropdown && (
                    <AnimatePresence initial={false}>
                      {openMobileDropdown === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mx-2 mb-2 space-y-1 rounded-lg bg-white/3 p-2">
                            {item.dropdown.map((subItem, sIdx) => (
                              <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: sIdx * 0.04 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all hover:bg-secondary/60 hover:pl-4 hover:text-accent"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setOpenMobileDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
