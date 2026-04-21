import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Placeholder gallery images using high-quality nature/healing unspash images
const galleryImages = [
  "https://images.unsplash.com/photo-1542841791-1925b02a2bf8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582560469796-03bfac245ce6?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334089648-b0a9cd0b33fb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512438259656-78712217cba7?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533036814041-e94d8d1e4343?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-18 sm:pt-20">
      
      {/* Header */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 text-center text-white sm:py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
            Visual Story<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-sm text-white/80 sm:mt-6 sm:text-lg">
            A glimpse into the life, infrastructure, and serene environment at Shri Krishna Ayurvedic Medical College & Hospital.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-6 sm:space-y-6 md:columns-3">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <div className="translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 text-white/50 transition-colors hover:text-white sm:top-6 sm:right-6"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Lightbox large view"
              className="max-h-[82vh] max-w-[92vw] rounded-xl object-contain shadow-2xl ring-1 ring-white/10 sm:max-h-[90vh] sm:max-w-[90vw]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
