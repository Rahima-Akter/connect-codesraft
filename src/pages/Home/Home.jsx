import Dum from "../../components/Dum";
import Banner from "./Banner";
import CoverageForm from "./CoverageForm";
import OurServices from "./OurServices";
import Plans from "./Plans";
import TeamMembers from "./TeamMembers";
import WhoWeAre from "./WhoWeAre";


const Home = () => {
  // 1f2235
  return <div className="bg-[#ecf5e9] pb-[1000px]">
    <Banner/>
    <OurServices/>
    <CoverageForm/>
    <WhoWeAre/>
    <Plans/>
    <TeamMembers/>
    {/* <Dum/> */}
  </div>;
};

export default Home;
