import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ExternalLink,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

const affiliationBodies = [
  {
    title: "NCISM",
    icon: Scale,
    logo: "/logos/ncism.webp",
    paragraphs: [
      "The Central Council of Indian Medicine is the statutory body constituted under the Indian Medicine Central Council Act, 1970 vide gazette notification extraordinary part (ii) section 3(ii) dated 10.8.71.",
      "Since its establishment in 1971, the Central Council has been framing on and implementing various regulations including the Curricula and Syllabii in Indian Systems of Medicine viz. Ayurved, Siddha and Unani Tibb at Under-graduate and Post-graduate level. The Sowa Rigpa System of Medicine is included in the Central Council of Indian Medicine from the year 2012 as per Gazette Notification No. 2345 dated 16.12.2011. Now, all the Colleges of Indian Systems of Medicine are affiliated to various Universities in the Country. These Colleges are following the minimum standards of education and Curricula and Syllabii, prescribed by Central Council.",
    ],
  },
  {
    title: "Ministry of AYUSH",
    icon: Landmark,
    logo: "/logos/ayush.webp",
    paragraphs: [
      "The Ministry of AYUSH was formed on 9th November 2014 to ensure the optimal development and propagation of AYUSH systems of health care.",
      "Earlier it was known as the Department of Indian System of Medicine and Homeopathy (ISM&H) which was created in March 1995 and renamed as Department of Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH) in November 2003, with focused attention for development of Education and Research in Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy.",
    ],
  },
  {
    title: "Mahayogi Guru Gorakhnath AYUSH University",
    icon: Building2,
    logo: "/logos/mggau.webp",
    paragraphs: [
      "It is a dream project of Hon'ble Chief Minister Yogi Adityanath. Presently Ayurveda colleges, Yoga and Naturopathy colleges, hospital centre and huts will be start in within university.",
      "The Mahayogi Guru Gorakhnath AYUSH University will be expanded in around fifty-two hectares to disseminate and advance knowledge in Ayurveda, Unani, Homeopathy, Yoga and naturopathy, Siddha and Sowa-rigpa, Nursing, Pharmacy, Paramedical Science and such other disciplines as may be prescribed from time to time and to ensure efficient and systematic instructions, teaching, training and research.",
    ],
  },
];

const permissionYears = [
  { year: "2014-2015", href: "/permissions/CCIMPERMISSION2014-15.pdf" },
  { year: "2015-2016", href: "/permissions/CCIMPERMISSION2015-16.pdf" },
  { year: "2016-2017", href: "/permissions/CCIMPERMISSION2016-17.pdf" },
  { year: "2017-2018", href: "/permissions/CCIMPERMISSION2017-18.pdf" },
  {
    year: "2018-2019",
    href: "/permissions/PERMISSION2018-19(MEDICAL COLLEGE).pdf",
  },
  {
    year: "2019-2020",
    href: "/permissions/CCIMPERMISSION19-20MEDICALCOLLEGE.pdf",
  },
  {
    year: "2020-2021",
    href: "/permissions/ShriKrishnaAMCCholapurVaranasiUP(CP)_1.pdf",
  },
  { year: "2021-2022", href: "/permissions/2122.pdf" },
  { year: "2022-2023", href: "/permissions/2223.pdf" },
  { year: "2023-2024", href: "/permissions/AYU0332.pdf" },
  { year: "2024-2025", href: "/permissions/Permission2024-25.pdf" },
  { year: "2025-2026", href: "/permissions/Permission2025-26.pdf" },
];

export default function AffiliationPermission() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 " />

      <div className="relative mx-auto max-w-7xl">
        <header className="border-b border-dark/10 pb-10 md:pb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            <BookOpenCheck className="h-4 w-4" />
            Affiliation & Permission
          </span>
          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-dark md:text-5xl">
              Regulatory Bodies & Annual Permission Letters
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-dark/75 md:ml-auto md:text-base">
              Institutional standards and operations are guided by statutory
              regulations, AYUSH policy development, and university-level
              academic governance.
            </p>
          </div>
        </header>

        <div className="mt-12 space-y-14 md:space-y-16">
          {affiliationBodies.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="grid gap-6 border-b border-dark/10 pb-12 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-10"
              >
                <div>
                  <div className="inline-flex items-center gap-3 text-primary">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Body {index + 1}
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-dark md:text-3xl">
                    {item.title}
                  </h2>
                  <div className="mt-5 inline-flex overflow-hidden rounded-xl border border-dark/10 bg-white p-2">
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className="h-14 w-14 object-contain md:h-16 md:w-16"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-dark/80 md:text-base">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <article className="mt-14 border-t border-dark/10 pt-10 md:pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Documents
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold text-dark md:text-3xl">
                Permission Letters (PDF)
              </h2>
            </div>
            <p className="text-sm text-dark/70 md:text-base">
              Session-wise permission letters from 2014-2015 to 2025-2026.
            </p>
          </div>

          <div className="mt-7 divide-y divide-dark/10 rounded-2xl border border-dark/10 bg-white/70">
            {permissionYears.map((item) => {
              const isAvailable = Boolean(item.href);

              if (!isAvailable) {
                return (
                  <div
                    key={item.year}
                    className="flex items-center justify-between gap-4 px-5 py-4 opacity-60 md:px-6"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-primary/70" />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary/80">
                          Academic Session
                        </p>
                        <p className="text-sm font-semibold text-dark md:text-base">
                          {item.year}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-dark/60">
                      Not uploaded
                    </span>
                  </div>
                );
              }

              return (
                <a
                  key={item.year}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-primary/5 md:px-6"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary/80" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary/80">
                        Academic Session
                      </p>
                      <p className="text-sm font-semibold text-dark md:text-base">
                        {item.year}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Open
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
