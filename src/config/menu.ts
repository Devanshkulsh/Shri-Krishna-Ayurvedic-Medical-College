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
      { name: "Rules & Regulation", href: "/student-corner#rules" },
      { name: "Eligibility & Fee", href: "/student-corner#eligibility" },
      { name: "List of Student", href: "/student-corner#students" },
      { name: "Monthly Attendance", href: "/student-corner#attendance" },
      { name: "Result", href: "/student-corner#result" },
      { name: "Important Materials", href: "/student-corner#materials" },
    ],
  },
  {
    name: "College & Hostel",
    href: "/college-hostel",
    dropdown: [
      { name: "Facilities", href: "/college-hostel" },
      { name: "Infrastructure", href: "/college-infrastructure" },
    ],
  },
  { name: "Message", href: "/message" },
  { name: "Ayurveda", href: "/ayurveda" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
  { name: "Hospital", href: "/hospital" },
];
