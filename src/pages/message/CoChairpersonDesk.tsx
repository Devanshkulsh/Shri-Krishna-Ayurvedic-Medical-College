import MessagePanel from "../../components/shared/MessagePanel";

const coChairpersonMessage = [
  "Dr. Neetu Yadav is a well qualified & renowned Gynecologist of the Varanasi. He did M.B.B.S. (1997) and M.S. (2001) in Obstetrics & Gynaecology from Allahabad University and serving the people of Varanasi & its surrounding as Gynecologist by their “Shiv Surgical Nursing Home Pvt LTd”.",
  "Ayurveda is one of most important ancient gift of amity god to human of the world as depicted in various Vedas and other oldest texts of India. It is not only a medical Science but also teaches us to adopt a way of life that maintain and conserve health and promote longevity.",
  "At present scenario Ayurveda is becoming so popular day by day world-wide due to their acceptance for healthy life so keeping in this view management has established this institution to provide quality education to our students and health care facilities to the society. Our focus is to impart quality education with complete theoretical and practical knowledge, enhance clinical skills to mould students as better Ayurvedic Scholar.",
  "The teaching hospital of our institution is well equipped as per notified norms of AYUSH Department Govt. of India rendering selfless service for the sufferings with traditional practice backed up with Modern Medical Technologies. We are dedicated to give excellent education and patients care to mankind.",
];

export default function CoChairpersonDesk() {
  return (
    <MessagePanel
      heading="Co-Chairperson's Desk"
      name="Co-Chairperson"
      role="Shri Krishna Ayurvedic Medical College & Hospital"
      imageSrc="/co-chairperson.webp"
      imageAlt="Co-Chairperson"
      message={coChairpersonMessage}
    />
  );
}
