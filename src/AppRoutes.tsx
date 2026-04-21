import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import Gallery from "./pages/Gallery";
// import GenericPage from "./pages/GenericPage";
import CollegeFacilities from "./pages/College-Hostel/CollegeFacilities";
import CollegeInfrastructure from "./pages/College-Hostel/CollegeInfrastructure";
import AboutIntro from "./pages/about/AboutIntro";
import AboutCourse from "./pages/about/AboutCourse";
import AboutFee from "./pages/about/AboutFee";
import AffiliationPermission from "./pages/about/AffiliationPermission";
import AboutResearchPublications from "./pages/about/AboutResearchPublications";
import AboutCamp from "./pages/about/AboutCamp";
import MonthlyAttendanceTeaching from "./pages/about/MonthlyAttendanceTeaching";
import MonthlyAttendanceNonTeaching from "./pages/about/MonthlyAttendanceNonTeaching";
import MonthlyAttendanceHospitalStaff from "./pages/about/MonthlyAttendanceHospitalStaff";
import CollegeCouncil from "./pages/about/CollegeCouncil";
import NonTeachingStaff from "./pages/about/NonTeachingStaff";
import HospitalStaff from "./pages/about/HospitalStaff";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/college-hostel" element={<CollegeFacilities />} />
          <Route
            path="/college-infrastructure"
            element={<CollegeInfrastructure />}
          />
          {/* Fallback pattern for sub-pages since content wasn't explicitly provided */}
          <Route path="/aboutintro" element={<AboutIntro />} />
          <Route path="/aboutcourse" element={<AboutCourse />} />
          <Route path="/aboutfee" element={<AboutFee />} />
          <Route
            path="/about-research-publications"
            element={<AboutResearchPublications />}
          />
          <Route path="/about-camp" element={<AboutCamp />} />
          <Route
            path="/monthly-attendance-teaching"
            element={<MonthlyAttendanceTeaching />}
          />
          <Route
            path="/monthly-attendance-non-teaching"
            element={<MonthlyAttendanceNonTeaching />}
          />
          <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
          <Route path="/hospital-staff" element={<HospitalStaff />} />
          <Route
            path="/monthly-attendance-hospital-staff"
            element={<MonthlyAttendanceHospitalStaff />}
          />
          <Route path="/college-council" element={<CollegeCouncil />} />
          <Route
            path="/affiliation-permission"
            element={<AffiliationPermission />}
          />
          {/* <Route path="/faculty" element={<GenericPage title="Faculty" />} />
          <Route path="/student-corner" element={<GenericPage title="Student Corner" />} />
          <Route path="/college-hostel" element={<GenericPage title="College & Hostel" />} />
          <Route path="/message" element={<GenericPage title="Message" />} />
          <Route path="/ayurveda" element={<GenericPage title="Ayurveda" />} />
          <Route path="/contact" element={<GenericPage title="Contact Us" />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}
