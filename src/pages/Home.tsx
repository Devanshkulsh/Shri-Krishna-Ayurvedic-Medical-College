import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import JourneyTimeline from "../components/home/JourneyTimeline";
import FacilitiesCards from "../components/home/FacilitiesCards";
import HospitalStats from "../components/home/HospitalStats";

export default function Home() {
  return (
    <div className="relative w-full bg-white">
      <Hero />
      <Overview />
      <JourneyTimeline />
      <HospitalStats />
      <FacilitiesCards />
    </div>
  );
}
