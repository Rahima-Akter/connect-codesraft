import Banner from "./Banner";
import CoverageForm from "./CoverageForm";
import OurServices from "./OurServices";
import Plans from "./Plans";
import TeamMembers from "./TeamMembers";
import WhoWeAre from "./WhoWeAre";
import Dum from "../../components/Dum";
import Testimonial from "./Testimonial";

const Home = () => {
  // 1f2235
  return (
    <div className="bg-[#ecf5e9] pb-[1000px]">
      <Banner />
      <OurServices />
      <CoverageForm />
      <WhoWeAre />
      <Plans />
      <TeamMembers />
      <Dum />
      <Testimonial/>
    </div>
  );
};

export default Home;
