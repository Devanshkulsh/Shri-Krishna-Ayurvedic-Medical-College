import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Waves, Activity, Stethoscope } from "lucide-react";

export default function Hospital() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-dark">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yBg }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary/80 to-transparent z-10" />
          <img 
            src="/panchakarma.png" 
            alt="Panchakarma Treatment" 
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-start px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
             <span className="mb-4 inline-block font-bold uppercase tracking-widest text-accent">Hospital Experience</span>
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
              Healing Rooted in <br/><span className="text-secondary">Nature</span>
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Our hospital combines pristine modern hygiene with centuries-old Ayurvedic therapeutic wisdom for ultimate rejuvenation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            
            {/* Panchakarma */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col rounded-3xl bg-gray-50 p-8 transition-colors hover:bg-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:text-secondary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Waves className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark group-hover:text-white">Panchakarma</h3>
              <p className="mb-8 text-gray-600 group-hover:text-white/80">
                A five-fold detoxification process designed to clear deep-rooted stress and illness-causing toxins from your system. Experince deep purification.
              </p>
              <button className="mt-auto flex w-fit items-center gap-2 font-bold text-primary group-hover:text-accent">
                Explore Therapies <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Diagnosis */}
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col rounded-3xl bg-gray-50 p-8 transition-colors hover:bg-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:text-secondary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark group-hover:text-white">Nadi Pariksha</h3>
              <p className="mb-8 text-gray-600 group-hover:text-white/80">
                Ancient pulse diagnosis method allows our expert doctors to accurately diagnose physical, mental, and emotional imbalances without invasive tests.
              </p>
              <button className="mt-auto flex w-fit items-center gap-2 font-bold text-primary group-hover:text-accent">
                Book Consultation <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Treatment */}
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="group flex flex-col rounded-3xl bg-gray-50 p-8 transition-colors hover:bg-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:text-secondary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark group-hover:text-white">Holistic Treatment</h3>
              <p className="mb-8 text-gray-600 group-hover:text-white/80">
                From herbal medicines grown in our own medicinal gardens to tailored diet and lifestyle plans, our treatments are customized for permanent healing.
              </p>
              <button className="mt-auto flex w-fit items-center gap-2 font-bold text-primary group-hover:text-accent">
                View Specialties <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Immersive Parallax Quote */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-primary"
        ></motion.div>
        
        <div className="absolute inset-0 z-10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]"></div>

        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-light italic leading-relaxed md:text-5xl"
          >
            "Ayurveda teaches us to cherish our innate nature – to love and honor who we are."
          </motion.p>
        </div>
      </section>
    </div>
  );
}
