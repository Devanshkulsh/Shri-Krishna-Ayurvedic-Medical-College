export type GalleryImage = {
  src: string;
  size?: "base" | "wide" | "tall" | "large";
};

export type GalleryTab = {
  id: string;
  label: string;
  images: GalleryImage[];
};

export const galleryTabs: GalleryTab[] = [
  {
    id: "all",
    label: "All",
    images: [
      { src: "/gallery/farewell.jpg", size: "large" },
      { src: "/gallery/presentation.jpeg", size: "tall" },
      { src: "/gallery/trip.jpeg", size: "base" },
      { src: "/gallery/trip2.jpeg", size: "wide" },
      { src: "/gallery/awards/awards10.jpeg", size: "base" },
      { src: "/gallery/awards/awards11.jpg", size: "tall" },
      { src: "/gallery/awards/awards12.jpg", size: "base" },
      { src: "/gallery/awards/awards13.jpeg", size: "large" },
      { src: "/gallery/awards/awards14.jpeg", size: "tall" },
      { src: "/gallery/awards/awards15.jpg", size: "base" },
      { src: "/gallery/awards/awards16.jpg", size: "wide" },
      { src: "/gallery/awards/awards17.jpeg", size: "base" },
      { src: "/gallery/awards/awards18.jpg", size: "tall" },
      { src: "/gallery/awards/awards19.jpg", size: "base" },
      { src: "/gallery/awards/awards2.jpeg", size: "large" },
      { src: "/gallery/awards/awards20.jpg", size: "tall" },
      { src: "/gallery/awards/awards21.jpg", size: "base" },
      { src: "/gallery/awards/awards22.jpg", size: "wide" },
      { src: "/gallery/awards/awards23.jpg", size: "base" },
      { src: "/gallery/awards/awards24.jpeg", size: "tall" },
      { src: "/gallery/awards/awards25.jpg", size: "base" },
      { src: "/gallery/awards/awards26.jpg", size: "large" },
      { src: "/gallery/awards/awards27.jpg", size: "tall" },
      { src: "/gallery/awards/awards28.jpg", size: "base" },
      { src: "/gallery/awards/awards29.jpg", size: "wide" },
      { src: "/gallery/awards/awards3.jpeg", size: "base" },
      { src: "/gallery/awards/awards30.jpg", size: "tall" },
      { src: "/gallery/awards/awards31.jpg", size: "base" },
      { src: "/gallery/awards/awards32.jpg", size: "large" },
      { src: "/gallery/awards/awards33.jpeg", size: "tall" },
      { src: "/gallery/awards/awards34.jpg", size: "base" },
      { src: "/gallery/awards/awards35.jpg", size: "wide" },
      { src: "/gallery/awards/awards36.jpg", size: "base" },
      { src: "/gallery/awards/awards37.jpg", size: "tall" },
      { src: "/gallery/awards/awards38.jpeg", size: "base" },
      { src: "/gallery/awards/awards39.JPG", size: "large" },
      { src: "/gallery/awards/awards4.jpeg", size: "tall" },
      { src: "/gallery/awards/awards40.jpg", size: "base" },
      { src: "/gallery/awards/awards41.jpg", size: "wide" },
      { src: "/gallery/awards/awards42.JPG", size: "base" },
      { src: "/gallery/awards/awards43.JPG", size: "tall" },
      { src: "/gallery/awards/awards44.jpg", size: "base" },
      { src: "/gallery/awards/awards45.JPG", size: "large" },
      { src: "/gallery/awards/awards46.jpg", size: "tall" },
      { src: "/gallery/awards/awards47.jpg", size: "base" },
      { src: "/gallery/awards/awards48.jpg", size: "wide" },
      { src: "/gallery/awards/awards49.JPG", size: "base" },
      { src: "/gallery/awards/awards5.jpeg", size: "tall" },
      { src: "/gallery/awards/awards50.jpeg", size: "base" },
      { src: "/gallery/awards/awards51.jpeg", size: "large" },
      { src: "/gallery/awards/awards52.jpeg", size: "tall" },
      { src: "/gallery/awards/awards53.jpeg", size: "base" },
      { src: "/gallery/awards/awards54.jpg", size: "wide" },
      { src: "/gallery/awards/awards55.jpg", size: "base" },
      { src: "/gallery/awards/awards56.jpg", size: "tall" },
      { src: "/gallery/awards/awards57.jpg", size: "base" },
      { src: "/gallery/awards/awards58.jpg", size: "large" },
      { src: "/gallery/awards/awards6.jpg", size: "tall" },
      { src: "/gallery/awards/awards7.jpg", size: "base" },
      { src: "/gallery/awards/awards8.jpeg", size: "wide" },
      { src: "/gallery/awards/awards9.jpeg", size: "base" },
      {
        src: "/gallery/conference-seminar/conference-seminar2.jpg",
        size: "tall",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar3.jpg",
        size: "base",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar4.jpg",
        size: "large",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar5.jpg",
        size: "tall",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar6.jpg",
        size: "base",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar7.jpg",
        size: "wide",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar8.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education10.jpeg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education11.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education12.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education13.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education14.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education15.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education16.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education17.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education18.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education19.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education2.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education20.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education21.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education22.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education23.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education24.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education25.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education26.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education27.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education28.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education29.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education3.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education30.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education31.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education32.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education33.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education34.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education35.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education36.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education37.jpeg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education38.jpeg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education39.jpeg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education4.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education40.jpeg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education41.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education42.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education43.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education44.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education45.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education5.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education6.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education7.jpeg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education8.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education9.jpeg",
        size: "base",
      },
      { src: "/gallery/games/games10.JPG", size: "large" },
      { src: "/gallery/games/games11.JPG", size: "tall" },
      { src: "/gallery/games/games12.JPG", size: "base" },
      { src: "/gallery/games/games13.JPG", size: "wide" },
      { src: "/gallery/games/games14.JPG", size: "base" },
      { src: "/gallery/games/games2.JPG", size: "tall" },
      { src: "/gallery/games/games3.JPG", size: "base" },
      { src: "/gallery/games/games4.JPG", size: "large" },
      { src: "/gallery/games/games5.JPG", size: "tall" },
      { src: "/gallery/games/games6.JPG", size: "base" },
      { src: "/gallery/games/games7.JPG", size: "wide" },
      { src: "/gallery/games/games8.JPG", size: "base" },
      { src: "/gallery/games/games9.JPG", size: "tall" },
    ],
  },
  {
    id: "awards",
    label: "Awards",
    images: [
      { src: "/gallery/awards/awards10.jpeg", size: "large" },
      { src: "/gallery/awards/awards11.jpg", size: "tall" },
      { src: "/gallery/awards/awards12.jpg", size: "base" },
      { src: "/gallery/awards/awards13.jpeg", size: "wide" },
      { src: "/gallery/awards/awards14.jpeg", size: "base" },
      { src: "/gallery/awards/awards15.jpg", size: "tall" },
      { src: "/gallery/awards/awards16.jpg", size: "base" },
      { src: "/gallery/awards/awards17.jpeg", size: "large" },
      { src: "/gallery/awards/awards18.jpg", size: "tall" },
      { src: "/gallery/awards/awards19.jpg", size: "base" },
      { src: "/gallery/awards/awards2.jpeg", size: "wide" },
      { src: "/gallery/awards/awards20.jpg", size: "base" },
      { src: "/gallery/awards/awards21.jpg", size: "tall" },
      { src: "/gallery/awards/awards22.jpg", size: "base" },
      { src: "/gallery/awards/awards23.jpg", size: "large" },
      { src: "/gallery/awards/awards24.jpeg", size: "tall" },
      { src: "/gallery/awards/awards25.jpg", size: "base" },
      { src: "/gallery/awards/awards26.jpg", size: "wide" },
      { src: "/gallery/awards/awards27.jpg", size: "base" },
      { src: "/gallery/awards/awards28.jpg", size: "tall" },
      { src: "/gallery/awards/awards29.jpg", size: "base" },
      { src: "/gallery/awards/awards3.jpeg", size: "large" },
      { src: "/gallery/awards/awards30.jpg", size: "tall" },
      { src: "/gallery/awards/awards31.jpg", size: "base" },
      { src: "/gallery/awards/awards32.jpg", size: "wide" },
      { src: "/gallery/awards/awards33.jpeg", size: "base" },
      { src: "/gallery/awards/awards34.jpg", size: "tall" },
      { src: "/gallery/awards/awards35.jpg", size: "base" },
      { src: "/gallery/awards/awards36.jpg", size: "large" },
      { src: "/gallery/awards/awards37.jpg", size: "tall" },
      { src: "/gallery/awards/awards38.jpeg", size: "base" },
      { src: "/gallery/awards/awards39.JPG", size: "wide" },
      { src: "/gallery/awards/awards4.jpeg", size: "base" },
      { src: "/gallery/awards/awards40.jpg", size: "tall" },
      { src: "/gallery/awards/awards41.jpg", size: "base" },
      { src: "/gallery/awards/awards42.JPG", size: "large" },
      { src: "/gallery/awards/awards43.JPG", size: "tall" },
      { src: "/gallery/awards/awards44.jpg", size: "base" },
      { src: "/gallery/awards/awards45.JPG", size: "wide" },
      { src: "/gallery/awards/awards46.jpg", size: "base" },
      { src: "/gallery/awards/awards47.jpg", size: "tall" },
      { src: "/gallery/awards/awards48.jpg", size: "base" },
      { src: "/gallery/awards/awards49.JPG", size: "large" },
      { src: "/gallery/awards/awards5.jpeg", size: "tall" },
      { src: "/gallery/awards/awards50.jpeg", size: "base" },
      { src: "/gallery/awards/awards51.jpeg", size: "wide" },
      { src: "/gallery/awards/awards52.jpeg", size: "base" },
      { src: "/gallery/awards/awards53.jpeg", size: "tall" },
      { src: "/gallery/awards/awards54.jpg", size: "base" },
      { src: "/gallery/awards/awards55.jpg", size: "large" },
      { src: "/gallery/awards/awards56.jpg", size: "tall" },
      { src: "/gallery/awards/awards57.jpg", size: "base" },
      { src: "/gallery/awards/awards58.jpg", size: "wide" },
      { src: "/gallery/awards/awards6.jpg", size: "base" },
      { src: "/gallery/awards/awards7.jpg", size: "tall" },
      { src: "/gallery/awards/awards8.jpeg", size: "base" },
      { src: "/gallery/awards/awards9.jpeg", size: "large" },
    ],
  },
  {
    id: "conference-seminar",
    label: "Conference Seminar",
    images: [
      {
        src: "/gallery/conference-seminar/conference-seminar2.jpg",
        size: "large",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar3.jpg",
        size: "tall",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar4.jpg",
        size: "base",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar5.jpg",
        size: "wide",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar6.jpg",
        size: "base",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar7.jpg",
        size: "tall",
      },
      {
        src: "/gallery/conference-seminar/conference-seminar8.jpg",
        size: "base",
      },
    ],
  },
  {
    id: "continuos-medical-education",
    label: "Continuos Medical Education",
    images: [
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education10.jpeg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education11.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education12.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education13.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education14.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education15.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education16.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education17.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education18.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education19.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education2.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education20.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education21.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education22.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education23.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education24.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education25.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education26.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education27.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education28.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education29.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education3.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education30.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education31.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education32.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education33.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education34.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education35.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education36.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education37.jpeg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education38.jpeg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education39.jpeg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education4.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education40.jpeg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education41.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education42.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education43.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education44.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education45.jpg",
        size: "wide",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education5.jpg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education6.jpg",
        size: "tall",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education7.jpeg",
        size: "base",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education8.jpg",
        size: "large",
      },
      {
        src: "/gallery/continuos-medical-education/continuous-medical-education9.jpeg",
        size: "tall",
      },
    ],
  },
  {
    id: "games",
    label: "Games",
    images: [
      { src: "/gallery/games/games10.JPG", size: "large" },
      { src: "/gallery/games/games11.JPG", size: "tall" },
      { src: "/gallery/games/games12.JPG", size: "base" },
      { src: "/gallery/games/games13.JPG", size: "wide" },
      { src: "/gallery/games/games14.JPG", size: "base" },
      { src: "/gallery/games/games2.JPG", size: "tall" },
      { src: "/gallery/games/games3.JPG", size: "base" },
      { src: "/gallery/games/games4.JPG", size: "large" },
      { src: "/gallery/games/games5.JPG", size: "tall" },
      { src: "/gallery/games/games6.JPG", size: "base" },
      { src: "/gallery/games/games7.JPG", size: "wide" },
      { src: "/gallery/games/games8.JPG", size: "base" },
      { src: "/gallery/games/games9.JPG", size: "tall" },
    ],
  },
];
