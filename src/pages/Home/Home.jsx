import Banner from "./Banner";
import CoverageForm from "./CoverageForm";
import OurServices from "./OurServices";
import Plans from "./Plans";
import TeamMembers from "./TeamMembers";
import WhoWeAre from "./WhoWeAre";
import Dum from "../../components/Dum";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";

const Home = () => {
  // 1f2235
  return (
    <div className="bg-[#ecf5e9]">
      <Banner />
      <OurServices />
      <CoverageForm />
      <WhoWeAre />
      <Plans />
      <TeamMembers />
      <Testimonial/>
      <Newsletter/>
      {/* <Dum /> */}
    </div>
  );
};

export default Home;
