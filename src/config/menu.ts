export const navigationMenu = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Introduction", href: "/aboutintro" },
      { name: "Courses and Intake Capacity", href: "/aboutcourse" },
      { name: "Fee", href: "/aboutfee" },
      { name: "Affiliation/Permission", href: "/affiliation-permission" },
      { name: "Research Publication", href: "/about-research-publications" },
      { name: "Medical Camp", href: "/about-camp" },
    ],
  },
  {
    name: "Faculty",
    href: "/faculty",
    dropdown: [
      { name: "Teaching Staff", href: "/faculty#teaching" },
      {
        name: "Monthly Attendance Of Teaching Staff",
        href: "/monthly-attendance-teaching",
      },
      { name: "Non Teaching Staff", href: "/non-teaching-staff" },
      {
        name: "Monthly Attendance Of Non Teaching Staff",
        href: "/monthly-attendance-non-teaching",
      },
      { name: "Hospital Staff", href: "/hospital-staff" },
      {
        name: "Monthly Attendance Of Hospital Staff",
        href: "/monthly-attendance-hospital-staff",
      },
      { name: "College Council", href: "/college-council" },
    ],
  },
  {
    name: "Student Corner",
    href: "/student-corner",
    dropdown: [
      { name: "Rules & Regulation", href: "/student-corner-rules" },
      { name: "Eligibility & Fee", href: "/student-corner-feeandeligibility" },
      { name: "List of Student", href: "/student-corner-studentsList" },
      { name: "Monthly Attendance", href: "/student-corner-monthlyAttendance" },
      { name: "Result", href: "/student-corner-result" },
      { name: "Important Materials", href: "/student-corner-importantMaterials" },
    ],
  },
  {
    name: "College & Hostel",
    href: "/college-hostel",
    dropdown: [
      { name: "Facilities", href: "/college-hostel" },
      { name: "Infrastructure", href: "/college-infrastructure" },
      { name: "Opportunities", href: "/college-opportunities" },
      { name: "Uniform", href: "/college-uniform" },
    ],
  },
  {
    name: "Message",
    href: "/message",
    dropdown: [
      { name: "Chairman's Desk", href: "/message-chairman-desk" },
      { name: "Co-Chairperson's Desk", href: "/message-cochairperson-desk" },
      { name: "Principal's Desk", href: "/message-principal-desk" },
    ],
  },
  { name: "Ayurveda", href: "/ayurveda" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
  {
    name: "Hospital",
    href: "/hospital",
    dropdown: [
      { name: "Infrastructure", href: "/hospital-infrastructure" },
      {
        name: "Department wise Clinical Material and Facilities",
        href: "/hospital-department-wise-clinical-material-and-facilities",
      },
      {
        name: "Department wise Clinical Material and Facilitie Charges",
        href: "/hospital-department-wise-clinical-material-and-facilitie-charges",
      },
      {
        name: "Monthly Attendance of OPD Patients",
        href: "/hospital-monthly-attendance-opd-patients",
      },
      {
        name: "Monthly Attendance of IPD Patients",
        href: "/hospital-monthly-attendance-ipd-patients",
      },
      {
        name: "Monthly Attendance of OT & Labour Room Section",
        href: "/hospital-monthly-attendance-ot-labour-room-section",
      },
      {
        name: "Monthly Attendance of Panchkarma Section",
        href: "/hospital-monthly-attendance-panchkarma-section",
      },
      {
        name: "Monthly Attendance of Pathology Section",
        href: "/hospital-monthly-attendance-pathology-section",
      },
      {
        name: "Monthly Attendance of X-Ray/USG Section",
        href: "/hospital-monthly-attendance-xray-usg-section",
      },
    ],
  },
];
