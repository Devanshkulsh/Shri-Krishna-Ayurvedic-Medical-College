import { motion } from "framer-motion";

const timelineEvents = [
  { year: "2010", title: "Inception", desc: "Foundation stone laid with a vision to blend Ayurveda and modern care." },
  { year: "2014", title: "First Batch", desc: "Welcomed our first batch of BAMS students." },
  { year: "2018", title: "Hospital Expansion", desc: "Opened a state-of-the-art Panchakarma center." },
  { year: "2023", title: "Excellence Award", desc: "Recognized as the premier Ayurvedic institution in MP." },
];

export default function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">Our History</span>
          <h2 className="mt-2 text-2xl font-bold text-dark sm:text-3xl md:text-5xl">Journey of Healing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A legacy built on the foundations of ancient wisdom and modern medical science.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line connecting timeline */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-100 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-24">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative flex flex-col items-stretch justify-between md:flex-row md:items-center">
                
                {/* Year Badge at Center */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-lg">
                  {event.year}
                </div>

                {/* Content Blocks */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex w-full flex-col rounded-2xl border border-gray-50 bg-white p-5 shadow-sm sm:p-6 md:w-5/12 ${idx % 2 === 0 ? "md:text-right" : "md:ml-auto md:text-left"}`}
                >
                   <div className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary md:hidden">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-dark sm:text-2xl">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.desc}</p>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
