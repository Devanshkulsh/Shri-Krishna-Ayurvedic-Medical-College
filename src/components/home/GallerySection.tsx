import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const galleryItems = [
  { src: "/facilities/gym.webp", title: "Gym" },
  { src: "/facilities/hostel.webp", title: "Hostel" },
  { src: "/facilities/library.webp", title: "Library" },
  { src: "/facilities/gym.webp", title: "Gym" },
  { src: "/facilities/panchkarma.webp", title: "Panchakarma" },
  { src: "/facilities/clinical-facilities.webp", title: "Clinical Facilities" },
  { src: "/facilities/hostel.webp", title: "Hostel" },
  { src: "/facilities/clinical-facilities.webp", title: "Clinical Facilities" },
  { src: "/facilities/panchkarma.webp", title: "Panchakarma" },
  { src: "/facilities/library.webp", title: "Library" },
];

export default function GallerySection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,rgba(15,175,59,0.06),rgba(255,255,255,1),rgba(139,195,74,0.08))] px-4 py-16 md:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 mb-12 text-center md:mb-20">
          <span className="mb-6 inline-block rounded-full border border-primary/25 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
            Campus Gallery
          </span>
          <h2 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-dark sm:text-4xl md:text-6xl">
            A Glimpse of <span className="text-primary">Campus Life</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-dark/70 md:text-lg">
            Discover the spaces where learning, healing, and student life come
            together every day at Krishna College.
          </p>
        </div>

        <div className="group/nav relative px-2">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                coverflowEffect: {
                  depth: 60,
                  modifier: 1.2,
                },
              },
              768: {
                coverflowEffect: {
                  depth: 100,
                  modifier: 2,
                },
              },
            }}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full overflow-visible pb-20!"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide
                key={`${item.title}-${index}`}
                className="max-w-[15.5rem] sm:max-w-75 md:max-w-105"
              >
                <div className="group relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-light shadow-[0_20px_50px_rgba(26,26,26,0.16)] transition-all duration-500">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-dark/85 via-dark/20 to-transparent" />

                  <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-8 md:p-10">
                    <p className="mb-2 text-lg font-bold leading-tight tracking-tight text-white sm:text-xl md:text-2xl">
                      {item.title}
                    </p>
                    <div className="h-1.5 w-10 origin-left scale-x-0 rounded-full bg-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute right-0 bottom-0 left-0 z-20 flex translate-y-3 items-center justify-center gap-4 sm:gap-8">
            <button
              className="gallery-prev flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-dark shadow-xl transition-all hover:-translate-x-1 hover:bg-primary hover:text-white active:scale-95 sm:h-14 sm:w-14"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              className="gallery-next flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-dark shadow-xl transition-all hover:translate-x-1 hover:bg-primary hover:text-white active:scale-95 sm:h-14 sm:w-14"
              aria-label="Next slide"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
