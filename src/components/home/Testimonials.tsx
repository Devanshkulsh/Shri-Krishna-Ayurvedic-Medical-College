import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Singh",
    role: "BAMS Student, 3rd Year",
    quote:
      "The clinical exposure here is real and consistent. We get to observe, learn, and practice under mentors who genuinely care about our growth.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Intern Doctor",
    quote:
      "From OPD rounds to Panchakarma postings, every day feels meaningful. The campus environment keeps us disciplined, confident, and patient-focused.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    role: "BAMS Student, Final Year",
    quote:
      "What stands out most is the balance of classical Ayurveda with modern diagnostics. It prepares us for real-world healthcare practice.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Parent",
    quote:
      "We chose Krishna College for its academic discipline and supportive faculty. The progress in my child has been outstanding in both confidence and knowledge.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(145deg,rgba(15,175,59,0.08),rgba(255,255,255,1),rgba(139,195,74,0.1))] py-24 md:py-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_25%,rgba(15,175,59,0.16),transparent_28%),radial-gradient(circle_at_92%_75%,rgba(139,195,74,0.2),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
          <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Voices Of Trust
          </span>
          <h2 className="mt-5 text-3xl font-bold text-dark md:text-5xl">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-dark/70 md:text-lg">
            Real experiences from learners and families who are part of the
            Krishna College journey.
          </p>
        </div>

        <div className="relative rounded-[2.2rem] border border-primary/15 bg-white/75 p-6 shadow-[0_20px_50px_rgba(26,26,26,0.1)] backdrop-blur-sm md:p-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".testimonials-next", prevEl: ".testimonials-prev" }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              768: { slidesPerView: 1.25 },
              1024: { slidesPerView: 1.8 },
            }}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="h-full rounded-[1.8rem] border border-primary/15 bg-light p-6 shadow-[0_16px_36px_rgba(26,26,26,0.08)] md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-bold text-dark">{item.name}</p>
                      <p className="text-sm text-dark/65">{item.role}</p>
                    </div>
                    <Quote className="h-7 w-7 text-primary/75" />
                  </div>

                  <p className="text-base leading-relaxed text-dark/80 md:text-lg">
                    {item.quote}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={`${item.name}-star-${idx}`}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 flex items-center justify-center gap-4 md:justify-end">
            <button
              aria-label="Previous testimonial"
              className="testimonials-prev flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-dark shadow-md transition-all hover:-translate-x-1 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonial"
              className="testimonials-next flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-dark shadow-md transition-all hover:translate-x-1 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
