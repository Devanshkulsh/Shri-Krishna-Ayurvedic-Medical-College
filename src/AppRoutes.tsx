import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import Gallery from "./pages/Gallery";
import GenericPage from "./pages/GenericPage";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Fallback pattern for sub-pages since content wasn't explicitly provided */}
          <Route path="/about" element={<GenericPage title="About Us" />} />
          <Route path="/faculty" element={<GenericPage title="Faculty" />} />
          <Route path="/student-corner" element={<GenericPage title="Student Corner" />} />
          <Route path="/college-hostel" element={<GenericPage title="College & Hostel" />} />
          <Route path="/message" element={<GenericPage title="Message" />} />
          <Route path="/ayurveda" element={<GenericPage title="Ayurveda" />} />
          <Route path="/contact" element={<GenericPage title="Contact Us" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
