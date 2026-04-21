import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

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

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="min-h-[40vh] bg-white" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/college-hostel" element={<CollegeFacilities />} />
            <Route
              path="/college-infrastructure"
              element={<CollegeInfrastructure />}
            />
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
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
