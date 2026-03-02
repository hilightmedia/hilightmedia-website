import BrandsTrustSection from "./components/brands";
import CinematicCollections from "./components/cinematicCollections";
import CtaBanner from "./components/ctaBanner";
import FormSection from "./components/formSection";
import Founders from "./components/founders";
import HeroSection from "./components/hero";
import ValuesSection from "./components/ourValues";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import TopPicks from "./components/topPicks";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <Services />
      <Testimonials />
      <BrandsTrustSection />
      <CinematicCollections />
      <FormSection/>
      <Founders/>
      <ValuesSection />
      <CtaBanner/>
      <TopPicks/>
    </div>
  );
}
