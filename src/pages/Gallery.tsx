import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import { galleryTabs, type GalleryImage } from "../data/galleryData";

function getCardSizeClass(size: GalleryImage["size"]) {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "wide":
      return "md:col-span-2";
    case "tall":
      return "md:row-span-2";
    default:
      return "";
  }
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(galleryTabs[0]?.id ?? "");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const selectedTab = useMemo(
    () => galleryTabs.find((tab) => tab.id === activeTab) ?? null,
    [activeTab],
  );

  const totalImages = selectedTab?.images.length ?? 0;
  const visibleImages = selectedTab?.images.slice(0, visibleCount) ?? [];
  const canSeeMore = visibleCount < totalImages;
  const selectedImage =
    selectedIndex !== null && selectedTab?.images[selectedIndex]
      ? selectedTab.images[selectedIndex]
      : null;

  useEffect(() => {
    setVisibleCount(10);
    setSelectedIndex(null);
  }, [activeTab]);

  useEffect(() => {
    if (selectedIndex === null || !selectedTab) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % selectedTab.images.length;
        });
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return 0;
          return (
            (prev - 1 + selectedTab.images.length) % selectedTab.images.length
          );
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, selectedTab]);

  if (!selectedTab) {
    return null;
  }

  const showPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + selectedTab.images.length) % selectedTab.images.length;
    });
  };

  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % selectedTab.images.length;
    });
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Visual Journey"
          description="Explore campus spaces, facilities and moments through curated image collections."
        />

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {galleryTabs.map((tab) => {
              const isActive = selectedTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                      : "border-dark/15 bg-white text-dark/80 hover:border-primary/35 hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mt-8 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 md:gap-5"
          >
            {visibleImages.map((image, idx) => (
              <motion.button
                key={`${selectedTab.id}-${image.src}-${idx}`}
                type="button"
                className={`group relative overflow-hidden rounded-3xl border border-primary/15 bg-white text-left shadow-[0_14px_35px_rgba(26,26,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(26,26,26,0.12)] ${getCardSizeClass(image.size)}`}
                onClick={() => setSelectedIndex(idx)}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={image.src}
                  alt="Gallery image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/15 to-transparent" />

                <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-dark/35 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {canSeeMore ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="rounded-full border border-primary/25 bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              See More
            </button>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-dark/90 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6 sm:p-3"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6 sm:p-3"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.figure
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              className="max-w-5xl px-10 sm:px-16"
              onClick={(event) => event.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  src={selectedImage.src}
                  alt="Gallery image"
                  className="max-h-[76vh] w-full rounded-2xl object-contain shadow-2xl ring-1 ring-white/10 sm:max-h-[82vh]"
                />
              </AnimatePresence>
              <figcaption className="mt-3 text-center text-sm text-white/85 md:text-base">
                {(selectedIndex ?? 0) + 1}/{selectedTab.images.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
