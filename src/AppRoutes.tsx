import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CollegeOpportunities from "./pages/College-Hostel/CollegeOpportunities";
import CollegeUniform from "./pages/College-Hostel/CollegeUniform";
import ChairmanDesk from "./pages/message/ChairmanDesk";
import CoChairpersonDesk from "./pages/message/CoChairpersonDesk";
import PrincipalDesk from "./pages/message/PrincipalDesk";
import Ayurveda from "./pages/Ayurveda";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import StudentRules from "./pages/student-corner/StudentRules";
import StudentFeeEligibility from "./pages/student-corner/StudentFeeEligibility";
import StudentList from "./pages/student-corner/StudentList";
import StudentMonthlyAttendance from "./pages/student-corner/StudentMonthlyAttendance";
import StudentResult from "./pages/student-corner/StudentResult";
import StudentImportantMaterials from "./pages/student-corner/StudentImportantMaterials";
import ScrollToTop from "./components/shared/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Hospital = lazy(() => import("./pages/Hospital"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CollegeFacilities = lazy(
  () => import("./pages/College-Hostel/CollegeFacilities"),
);
const CollegeInfrastructure = lazy(
  () => import("./pages/College-Hostel/CollegeInfrastructure"),
);
const AboutIntro = lazy(() => import("./pages/about/AboutIntro"));
const AboutCourse = lazy(() => import("./pages/about/AboutCourse"));
const AboutFee = lazy(() => import("./pages/about/AboutFee"));
const AffiliationPermission = lazy(
  () => import("./pages/about/AffiliationPermission"),
);
const AboutResearchPublications = lazy(
  () => import("./pages/about/AboutResearchPublications"),
);
const AboutCamp = lazy(() => import("./pages/about/AboutCamp"));
const MonthlyAttendanceTeaching = lazy(
  () => import("./pages/about/MonthlyAttendanceTeaching"),
);
const MonthlyAttendanceNonTeaching = lazy(
  () => import("./pages/about/MonthlyAttendanceNonTeaching"),
);
const MonthlyAttendanceHospitalStaff = lazy(
  () => import("./pages/about/MonthlyAttendanceHospitalStaff"),
);
const CollegeCouncil = lazy(() => import("./pages/about/CollegeCouncil"));
const NonTeachingStaff = lazy(() => import("./pages/about/NonTeachingStaff"));
const HospitalStaff = lazy(() => import("./pages/about/HospitalStaff"));
const HospitalInfrastructure = lazy(
  () => import("./pages/Hospital/HospitalInfrastructure"),
);
const HospitalDepartmentWiseClinicalMaterialAndFacilities = lazy(
  () =>
    import("./pages/Hospital/HospitalDepartmentWiseClinicalMaterialAndFacilities"),
);
const HospitalDepartmentWiseClinicalMaterialAndFacilitieCharges = lazy(
  () =>
    import("./pages/Hospital/HospitalDepartmentWiseClinicalMaterialAndFacilitieCharges"),
);
const HospitalMonthlyAttendanceOpdPatients = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendanceOpdPatients"),
);
const HospitalMonthlyAttendanceIpdPatients = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendanceIpdPatients"),
);
const HospitalMonthlyAttendanceOtLabourRoomSection = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendanceOtLabourRoomSection"),
);
const HospitalMonthlyAttendancePanchkarmaSection = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendancePanchkarmaSection"),
);
const HospitalMonthlyAttendancePathologySection = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendancePathologySection"),
);
const HospitalMonthlyAttendanceXrayUsgSection = lazy(
  () => import("./pages/Hospital/HospitalMonthlyAttendanceXrayUsgSection"),
);

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[40vh] bg-white" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route
              path="/hospital-infrastructure"
              element={<HospitalInfrastructure />}
            />
            <Route
              path="/hospital-department-wise-clinical-material-and-facilities"
              element={<HospitalDepartmentWiseClinicalMaterialAndFacilities />}
            />
            <Route
              path="/hospital-department-wise-clinical-material-and-facilitie-charges"
              element={
                <HospitalDepartmentWiseClinicalMaterialAndFacilitieCharges />
              }
            />
            <Route
              path="/hospital-monthly-attendance-opd-patients"
              element={<HospitalMonthlyAttendanceOpdPatients />}
            />
            <Route
              path="/hospital-monthly-attendance-ipd-patients"
              element={<HospitalMonthlyAttendanceIpdPatients />}
            />
            <Route
              path="/hospital-monthly-attendance-ot-labour-room-section"
              element={<HospitalMonthlyAttendanceOtLabourRoomSection />}
            />
            <Route
              path="/hospital-monthly-attendance-panchkarma-section"
              element={<HospitalMonthlyAttendancePanchkarmaSection />}
            />
            <Route
              path="/hospital-monthly-attendance-pathology-section"
              element={<HospitalMonthlyAttendancePathologySection />}
            />
            <Route
              path="/hospital-monthly-attendance-xray-usg-section"
              element={<HospitalMonthlyAttendanceXrayUsgSection />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/college-hostel" element={<CollegeFacilities />} />
            <Route
              path="/college-infrastructure"
              element={<CollegeInfrastructure />}
            />
            <Route
              path="/college-opportunities"
              element={<CollegeOpportunities />}
            />
            <Route path="/college-uniform" element={<CollegeUniform />} />
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
            <Route path="/message-chairman-desk" element={<ChairmanDesk />} />
            <Route
              path="/message-cochairperson-desk"
              element={<CoChairpersonDesk />}
            />
            <Route path="/message-principal-desk" element={<PrincipalDesk />} />
            <Route path="/student-corner-rules" element={<StudentRules />} />
            <Route path="/student-corner-feeandeligibility" element={<StudentFeeEligibility />} />
            <Route path="/student-corner-studentsList" element={<StudentList />} />
            <Route path="/student-corner-monthlyAttendance" element={<StudentMonthlyAttendance />} />
            <Route path="/student-corner-result" element={<StudentResult />} />
            <Route path="/student-corner-importantMaterials" element={<StudentImportantMaterials />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/ayurveda" element={<Ayurveda />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
