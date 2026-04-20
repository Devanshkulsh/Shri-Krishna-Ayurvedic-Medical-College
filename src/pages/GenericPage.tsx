import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function GenericPage({ title }: { title: string }) {
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-10">
      {/* Hero simple */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-primary px-4">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          {title}
        </motion.h1>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
        >
          <p className="lead text-xl text-gray-600">
            Welcome to the {title} page of Shri Krishna Ayurvedic Medical College & Hospital.
            This section is currently under development.
          </p>
          <p className="mt-4 text-gray-600">
            {hash ? `You linked directly to section: ${hash}` : "Explore our navigation menu to discover more."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
