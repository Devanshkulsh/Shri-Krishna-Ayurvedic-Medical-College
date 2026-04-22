import SectionHeading from "../../components/shared/SectionHeading";

type OpportunityItem = {
  title: string;
  image: string;
};

const opportunityItems: OpportunityItem[] = [
  {
    title: "Medical Transcription",
    image: "/college-opportunities/medical-transcription.webp",
  },
  {
    title: "Medical Coding",
    image: "/college-opportunities/medical-coding.webp",
  },
  {
    title: "BPO Industry",
    image: "/college-opportunities/bpo-industry.webp",
  },
  {
    title: "Own Practice",
    image: "/college-opportunities/own-practice.webp",
  },
  {
    title: "State Government Postings",
    image: "/college-opportunities/state-government-postings.webp",
  },
  {
    title: "Central Government Postings",
    image: "/college-opportunities/central-government-postings.webp",
  },
  {
    title: "Posting in Pharmacy Industries",
    image: "/college-opportunities/posting-in-pharmacy-industries.webp",
  },
  {
    title: "Teaching Institutions etc.",
    image: "/college-opportunities/teaching-institutions.webp",
  },
];

export default function CollegeOpportunities() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="College & Hostel"
          title="College Opportunities"
          description="Clinical, academic and practical learning opportunities available for students at Shri Krishna Ayurvedic Medical College & Hospital."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {opportunityItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_14px_35px_rgba(26,26,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(26,26,26,0.12)]"
            >
              <div className="h-80 overflow-hidden border-b border-primary/10 bg-primary/5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-lg font-bold text-dark md:text-xl">
                  {item.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
