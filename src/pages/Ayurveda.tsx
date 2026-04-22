import SectionHeading from "../components/shared/SectionHeading";

const ayurvedaParagraphs = [
  "Ayurveda, 'The Science of Life', considered to be one of the upavedas, has been serving the mankind for more than 4000 years and still survives just because of its sheer therapeutic value. In the scientific findings, which have proved that ayurvedic medicines cure the diseases by strengthening the body immune system now considered to be the most scientific approach towards health, the relevancy of ayurvedic remedies become proved significant.",
  'The greatness of Ayurveda can be summed up with the help of a single Shloka in Sanskrit pertaining to the definition of "Swasthya" disease less state.',
  'This means that the human being is considered to be completely healthy only when the body constituents namely tridoshas, seven dhathus, effluents like three "malas", athma, Panchendriyas and manas are all in equilibrium state.',
  "This shows that ayurveda has given equal importance to mind, body and soul while treating the patient.",
  'As you know truth is always very simple. Likewise, the basic principles of ayurveda are very simple to understand. According to ayurveda, the whole universe is made up of "Pancha Mahabhutas", namely, Prithvi, Aap, Teja, Vayu and Akasha. That means even the human body and the plant kingdom are made up of the same basic constituents, and human body is controlled by 3 basic principles or "Tri-Doshas" namely, Vata, Pitta and Kapha. The balanced state of these tridoshas (dosha samya) is called health. On the other hand, the imbalance state of these tridoshas (dosha vaishamya) causes disease.',
  "In aggravated conditions of Vata, Pita and Kapha doshas, ayurveda suggested Vatahara (hara=pacify), Pittahara and Kaphahara plants. On the other hand in decreased conditions of Vata, Pitta and Kapha doshas, ayurveda suggests Vatakara (kara=enhance), Pittakara and Kafakara plants.",
];

const ayurvedaPhotos = [
  {
    title: "Ayurvedic Care",
    image: "/facilities/clinical-facilities.webp",
  },
  {
    title: "Panchakarma Therapy",
    image: "/panchakarma.png",
  },
  {
    title: "Medicinal Herbs",
    image: "/facilities/herbal-garden.webp",
  },
];

export default function Ayurveda() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Ayurveda"
          title="The Science of Life"
          description="Timeless principles of health, balance and healing through Ayurveda."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-4 text-sm leading-relaxed text-dark/85 md:text-base">
            <p>{ayurvedaParagraphs[0]}</p>
            <p>{ayurvedaParagraphs[1]}</p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 md:p-5">
              <p className="text-base font-semibold leading-relaxed text-dark md:text-lg">
                "Sama Dosha Sama Agnischa Sama Dhathu Mala Kriyaha Prasanna
                Atmendriya Manah Swasthya ithyabhideyate"
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_14px_35px_rgba(26,26,26,0.08)]">
            <img
              src="/panchakarma.png"
              alt="Ayurveda and Panchakarma"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-dark/85 md:text-base">
          {ayurvedaParagraphs.slice(2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ayurvedaPhotos.map((photo) => (
            <figure
              key={photo.title}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_12px_30px_rgba(26,26,26,0.08)]"
            >
              <div className="h-56 overflow-hidden bg-primary/5">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-dark/85">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
