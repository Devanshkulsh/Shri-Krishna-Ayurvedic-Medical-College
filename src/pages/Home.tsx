import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import JourneyTimeline from "../components/home/JourneyTimeline";
import FacilitiesCards from "../components/home/FacilitiesCards";
import HospitalStats from "../components/home/HospitalStats";
import GallerySection from "../components/home/GallerySection";
import ChairmanMessage from "../components/home/ChairmanMessage";
import Testimonials from "../components/home/Testimonials";
import CourseSection from "../components/home/CourseSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full bg-white">
      <Hero />
      <Overview />
      <CourseSection />
      <JourneyTimeline />
      <HospitalStats />
      <FacilitiesCards />
      <Testimonials />
      <ChairmanMessage />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
