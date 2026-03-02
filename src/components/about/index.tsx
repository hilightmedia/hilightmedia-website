import BrandsTrustSection from "../home/components/brands";
import CinematicCollections from "../home/components/cinematicCollections";
import Hero from "./components/hero";
import Founders from "./components/meetFounders";
import MissionSection from "./components/mission";
import Visibility from "./components/visibility";


export default function About() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero/>
      <MissionSection />
      <Founders />
      <BrandsTrustSection />
      <CinematicCollections />
      <Visibility/>
    </div>
  );
}
