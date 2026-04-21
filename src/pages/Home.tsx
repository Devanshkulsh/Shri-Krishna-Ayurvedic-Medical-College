import { lazy, Suspense } from "react";
import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import CourseSection from "../components/home/CourseSection";

const JourneyTimeline = lazy(() => import("../components/home/JourneyTimeline"));
const FacilitiesCards = lazy(() => import("../components/home/FacilitiesCards"));
const HospitalStats = lazy(() => import("../components/home/HospitalStats"));
const GallerySection = lazy(() => import("../components/home/GallerySection"));
const ChairmanMessage = lazy(() => import("../components/home/ChairmanMessage"));
const Testimonials = lazy(() => import("../components/home/Testimonials"));
const ContactSection = lazy(() => import("../components/home/ContactSection"));

export default function Home() {
  return (
    <div className="relative w-full bg-white">
      <Hero />
      <Overview />
      <CourseSection />
      <Suspense fallback={null}>
        <JourneyTimeline />
        <HospitalStats />
        <FacilitiesCards />
        <Testimonials />
        <ChairmanMessage />
        <GallerySection />
        <ContactSection />
      </Suspense>
    </div>
  );
}
