import MessagePanel from "../../components/shared/MessagePanel";

const principalMessage = [
  "It is our dreams, which is gradually unfolding. Endeavors are there to build up institute which may stand alone for its quality of education and service.",
  "Presently, this institute is the first of its type to provide degree in Ayurveda Course in Varanasi districts. The Institute along with its faculty members is determined to be best in Uttar Pradesh. Keeping with its objective of providing the best possible medical education, the Institute has built up a strong infrastructure.",
  "This comprises of highly knowledgeable and experienced faculty with advanced facilities that enable students to gain a contemporary education. The college is committed to upgrade the quality of its education and practical experience actively involved in different fields of development to remain on the cutting edge. The College through its continuous up-gradation is endeavoring to become a ‘Continuous education centre’, where new knowledge pertaining to the medical field is generated on a regular basis.",
  "Our vision for future is to bring Ayurveda to international standards, to emerge as one of the leading Ayurvedic Institution of world fame and lastly to serve the humanity by keeping a holistic approach. Our team and faculty members are fully devoted towards the development of this ancient system of medicine. Lastly, I appreciate your concern with us and thanks for believing on us. I wish all the successes.",
];

export default function PrincipalDesk() {
  return (
    <MessagePanel
      heading="Principal's Desk"
      name="Principal"
      role="Shri Krishna Ayurvedic Medical College & Hospital"
      imageSrc="/principal.webp"
      imageAlt="Principal"
      message={principalMessage}
    />
  );
}
