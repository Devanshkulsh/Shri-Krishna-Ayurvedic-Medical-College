const aboutParagraphs = [
  `The Shri Krishna Ayurvedic Medical College & Hospital was established in 2011 by Dr. S. P. Yadav as "Shri Krishna Ayurvedic Chikitsalya & Shodh Sansthan" governed by "Gramin Evam Shahari Vikas Shiksha Samiti, House No. - S 25/265 K-3, Vrindavan Colony, Sarsoli, Cantt, Varanasi".`,
  `Shri Krishna Ayurvedic Chikitsalya & Shodh Samsthan is established for enrich the research knowledge about the Indian System of Medicine but after the certain time Management committee decide to open an ayurvedic college namely "Shri Krishna Ayurvedic Medical College & Hospital, Rauna Khurd, Cholapur, Varanasi, Uttar Pradesh Pin -221101".`,
  `The main objective of the Society is to promote the health awareness and care by Ayurvedic system of Medicine, because these are the ancient systems of medicine which are easily available & less side effect in comparison to the western system of medicine.`,
  `The Shri Krishna Ayurvedic Medical College & Hospital imparts Bachelor Degree Courses in Ayurvedic Medicines (B.A.M.S.). The courses have already been recognized by the National Commission for Indian System of Medicine (N.C.I.M) and affiliated with Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur, Uttar Pradesh.`,
];

const societyParagraphs = [
  `Gramin Evam Shahari Vikas Shiksha Samiti has been established to promote living standard in rural area including medical therapy to the vast majority of the human race with the expertise and knowledge gained in the field of Ayurvedic medicines over several centuries. It aims to provide comprehensive healthcare facilities across India. It also provides low cost medical treatment to the poor and the needy through its Shri Krishna Ayurvedic Chikitsalya & Shodh Sansthan.`,
  `The Society provides basic education in rural area by established "Shri Krishna Mahavidyalaya". Shri Krishna Mahavidyalaya provides education more than 3000 student each year in different courses with minimal fee. Shri Krishna Ayurvedic Chikitsalya & Shodh Samsthan intends to popularise Ayurveda by offering low cost healthcare to the common people by initially covering about 3 lakh beneficiaries.`,
];

const aimVisionParagraphs = [
  `The Aim of the college is to Produce graduate pf pro-formed scholarship having a depth scientific knowledge of Ayurveda in accordance the Ayurveda fundamentals associated with extensive practical training who would be efficient teachers, Research Scholars with sole object of receiving and developing the Indian System of Medicine.`,
  `College vision is to generate quality education of Ayurvedic & Herbal treatment of human to provide proper training & practicing in the field of Ayurveda. We have to provide latest technologies in Laboratory, Pharmacy and other department of college. We are also committed to provide clinical based study to our students and to carry out research and training in activities complimentary to practice of Ayurveda including yoga and Traditional arts and Culture.`,
];

const whyChooseUsPoints = [
  "Quality conscious with the potential to develop into a globally acclaimed Institution by virtue of the Cutting edge technology.",
  "College with Futuristic vision achieved phenomenal progress in a very short span and is commended as one among the top Ayurved Institutes of Uttar Pradesh.",
  "A well established Library with over 5000 traditional and modern Textbooks.",
  "Personal affectionate Parental care and Counseling for the students.",
  "Fully equipped, advanced Language Laboratory and Auditorium.",
  "Have live field exposure, hands on projects and Internship.",
  "College and Hospital equipped with State-of-the-art facilities, latest technological gadgets and traditional equipments.",
  "Experienced, highly qualified Teaching faculty raring to address and promote academic issues.",
  "Providing Hostel facilities in the ambient, spacious and green environment of Varanasi.",
  "Extra scope of progress in view of ensuing PG courses in various disciplines along with PG Entrance Test Preparation Programs.",
  "Proximity to GT Road felicitating rapid transport and easy access. Away from distraction of city.",
];

const leadershipCards = [
  {
    title: "Chairman",
    name: "Dr. S. P. Yadav",
    image: "/chairman.webp",
    description:
      "Founder leadership with a vision to advance Ayurvedic education, research, and healthcare access.",
  },
  {
    title: "Co-Chairperson",
    name: "Details Updating",
    image: "/co-chairperson.webp",
    description:
      "Supports institutional strategy, governance, and long-term academic development.",
  },
  {
    title: "Principal",
    name: "Name Here",
    image: "/principal.webp",
    description:
      "Academic and administrative leadership focused on quality teaching, discipline, and clinical excellence.",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-light px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-4xl border border-primary/15 bg-white p-7 shadow-[0_18px_45px_rgba(26,26,26,0.08)] md:p-10">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Shri Krishna Ayurvedic Medical College & Hospital
          </h1>

          <div className="mt-7 space-y-5 text-sm leading-relaxed text-dark/80 md:text-base">
            {aboutParagraphs.map((paragraph, idx) => (
              <p key={`about-${idx}`}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-dark md:text-3xl">
            Gramin Evam Shahari Vikas Shiksha Samiti
          </h2>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-dark/80 md:text-base">
            {societyParagraphs.map((paragraph, idx) => (
              <p key={`society-${idx}`}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-dark md:text-3xl">
            Aims &amp; Vision
          </h2>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-dark/80 md:text-base">
            {aimVisionParagraphs.map((paragraph, idx) => (
              <p key={`aim-vision-${idx}`}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-dark md:text-3xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm font-semibold text-dark/85 md:text-base">
            Why should you join Shri Krishna Ayurvedic Medical College &amp;
            Hospital
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChooseUsPoints.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-primary/10 bg-light p-4 text-sm leading-relaxed text-dark/80"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-7 text-center">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Leadership Team
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadershipCards.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_14px_35px_rgba(26,26,26,0.08)]"
              >
                <div className="mb-4 h-80 overflow-hidden rounded-2xl border border-primary/10 bg-primary/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.title}
                </p>
                <h3 className="mt-3 text-xl font-bold text-dark">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
