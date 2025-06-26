import team_grp from "../../assets/team_grp.png";
import member1 from "../../assets/telecom.jpeg";

const TeamMembers = () => {
  return (
    <div className="pt-16 relative pb-14">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#1a2e22] lg:px-[350px] mx-auto md:px-32 px-5 drop-shadow-lg">
        our <span className="text-[#3a7d54]">team members</span>
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-10 font-medium text-sm mt-4 text-gray-700 leading-relaxed">
        We understand the value of your time, which is why we offer faster
        solution to any technical issues you may encounter. Our customer service
        team is available 24/7 to provide you with quick and effective solution
        to any problems you may have.
      </p>

      {/*  */}
      <div className="lg:relative mt-20 lg:block hidden">
        {/* bg image */}
        <img src={team_grp} className="mx-auto pl-20 opacity-20 blur-[2px]" alt="" />
        
        <div className="flex justify-center absolute top-[36%] left-[43%]">
          {/* team member text div */}
          <div className="w-44 h-44 text-center p-2 bg-gradient-to-br from-[#1f352d] to-[#3a7d54] text-2xl font-bold text-[#ecf5e9] rounded-full pt-12 shadow-xl border-4 border-white/20">
            Team Members
          </div>
        </div>
      </div>

      {/* members */}
      <div className="lg:mt-0 md:mt-20 mt-12 md:px-10 px-2 lg:px-0 md:space-y-7 space-y-4 lg:space-y-0">
        {/* member 1 */}
        <div className="lg:absolute lg:top-[40%] lg:left-14 lg:w-[500px] pl-3 rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="flex flex-col items-center pl-9 font-bold md:text-3xl text-2xl">
            Liam Anderson <span className="text-sm">Software Engineer</span>
          </p>
          <img src={member1} className="rounded-full w-[35%]" alt="" />
        </div>

        {/* member 2 */}
        <div className="lg:absolute lg:top-[40%] lg:right-14 lg:w-[500px] px- rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%]" alt="" />
          <p className="flex flex-col items-center pr-9 font-bold md:text-3xl text-2xl">
           Sofia Muller <span className="text-sm">Product Designer</span>
          </p>
        </div>

        {/* member 3 */}
        <div className="lg:absolute lg:top-[63%] lg:left-5 lg:w-[500px] px- rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="flex flex-col items-center pl-9 font-bold md:text-3xl text-2xl">
            Mateo Garcia <span className="text-sm">Backend Developer</span>
          </p>
          <img src={member1} className="rounded-full w-[35%]" alt="" />
        </div>

        {/* member 4 */}
        <div className="lg:absolute lg:-bottom-11 lg:left-14 lg:w-[500px] px- rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="flex flex-col items-center lg:pl-9 pr-9 font-bold md:text-3xl text-2xl lg:order-1 order-2">
            Chole Dabois <span className="text-sm">IT Supervisor</span>
          </p>
          <img src={member1} className="rounded-full w-[35%] lg:order-2 order-1" alt="" />
        </div>

        {/* member 5 */}
        <div className="lg:absolute lg:top-[63%] lg:right-5 lg:w-[500px] px- rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%] lg:order-1 order-2" alt="" />
          <p className="flex flex-col items-center lg:pr-9 pl-9 font-bold md:text-3xl text-2xl lg:order-2 order-1">
            Emma Johansson <span className="text-sm">Executive Director</span>
          </p>
        </div>

        {/* member 6 */}
        <div className="lg:absolute lg:-bottom-11 lg:right-14 lg:w-[500px] px- rounded-l-full flex justify-between items-center rounded-r-full bg-white/80 text-black text-center shadow-2xl backdrop-blur-sm border-2 border-[#3a7d54] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%]" alt="" />
          <p className="flex flex-col items-center pr-9 font-bold md:text-3xl text-2xl">
            Kenjie Tanaka <span className="text-sm">Technician</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
