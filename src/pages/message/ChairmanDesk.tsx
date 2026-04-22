import MessagePanel from "../../components/shared/MessagePanel";

const chairmanMessage = [
  "Dr. S. P. Yadav is a well qualified & renowned Surgeon of the Varanasi. He did M.B.B.S. (1994) and M.S. (1998) in General Surgery from KGMC, Lucknow and serving the people of Varanasi & its surrounding as Surgeon by their “Shiv Surgical Nursing Home Pvt LTd”.",
  "Having a long history of serving humanity, Ayurveda which is still contributing in health management has been accepted in many countries across the world. Medical profession stands first among others in serving the society and enjoys very high respect and offers progressive future",
  "Indigenous systems of medicine like Ayurveda are accepted world wide as alternative systems of medicine serving people because of their amicability in approach. Indigenous systems do not usually incur much expenditure on the tools of diagnosis but offer gunshot cures in case such as Gastric Ulcers and offer better management in life style disorders like diabetes. Now-a-days all the countries globally are looking into the usage of herbs and non pharmacological approaches like Yoga, Panchakarma etc. in tackling health problems.",
  "The aim of this College is to produce graduates of profound scholarship having in depth scientific knowledge of ayurveda in accordance with the ayurvedic fundamentals associated with extensive practical training, who would be efficient teachers, research workers, Kayachikitaka (Physician) and Shalya Chikitsa (Surgery) with the sole object of reviving and developing the Indian System of Medicine.",
];

export default function ChairmanDesk() {
  return (
    <MessagePanel
      heading="Chairman's Desk"
      name="Chairman"
      role="Shri Krishna Ayurvedic Medical College & Hospital"
      imageSrc="/chairman.webp"
      imageAlt="Chairman"
      message={chairmanMessage}
    />
  );
}
