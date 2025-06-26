import team_grp from "../assets/team_grp.png";
import member1 from "../assets/telecom.jpeg";

const TeamMembers = () => {
  return (
    <div className="pt-16 relative bg-gradient-to-b from-[#f8faf8] to-[#e4f0e1] pb-40 md:pb-0 overflow-hidden">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-3xl text-[#1a2e22] lg:px-[350px] mx-auto md:px-32 px-5 drop-shadow-lg">
        our <span className="text-[#3a7d54]">team members</span>
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-5 font-medium text-sm mt-4 text-gray-700 leading-relaxed">
        We understand the value of your time, which is why we offer faster
        solution to any technical issues you may encounter. Our customer service
        team is available 24/7 to provide you with quick and effective solution
        to any problems you may have.
      </p>

      {/* Team circle - hidden on mobile */}
      <div className="relative mt-10 md:mt-20 hidden md:block">
        <img 
          src={team_grp} 
          className="mx-auto pl-20 opacity-20 blur-[1px] transform scale-110" 
          alt="" 
        />
        
        <div className="flex justify-center absolute top-[30%] left-[43%]">
          <div className="w-44 h-44 text-center p-2 bg-gradient-to-br from-[#1f352d] to-[#3a7d54] text-2xl font-bold text-white rounded-full pt-12 shadow-xl border-4 border-white/20 hover:scale-105 transition-all duration-300">
            Team Members
          </div>
        </div>
      </div>

      {/* Mobile team circle - visible only on mobile */}
      <div className="flex justify-center mt-10 md:hidden">
        <div className="w-32 h-32 text-center p-2 bg-gradient-to-br from-[#1f352d] to-[#3a7d54] text-lg font-bold text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/20">
          Team Members
        </div>
      </div>

      {/* Desktop members layout */}
      <div className="hidden md:block">
        {/* member 1 */}
        <div className="absolute top-[40%] left-14 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg font-bold">
            Anne Johnson <span className="block text-sm font-normal text-gray-600">UI/UX Designer</span>
          </p>
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
        </div>

        {/* member 2 */}
        <div className="absolute top-[40%] right-14 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
          <p className="text-lg font-bold">
            Anne Johnson <span className="block text-sm font-normal text-gray-600">Frontend Developer</span>
          </p>
        </div>

        {/* member 3 */}
        <div className="absolute top-[63%] left-5 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg font-bold">
            Anne Johnson <span className="block text-sm font-normal text-gray-600">Backend Engineer</span>
          </p>
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
        </div>

        {/* member 4 */}
        <div className="absolute -bottom-11 left-14 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg font-bold">
            Anne Johnson <span className="block text-sm font-normal text-gray-600">Project Manager</span>
          </p>
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
        </div>

        {/* member 5 */}
        <div className="absolute top-[63%] right-5 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
          <p className="text-lg font-bold">
            Anna Johnson <span className="block text-sm font-normal text-gray-600">QA Specialist</span>
          </p>
        </div>

        {/* member 6 */}
        <div className="absolute -bottom-11 right-14 w-[500px] px-4 rounded-l-full flex justify-between items-center rounded-r-full bg-white/90 text-black text-center shadow-2xl backdrop-blur-sm border border-white/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img src={member1} className="rounded-full w-[35%] border-4 border-[#3a7d54]/50 hover:border-[#3a7d54] transition-all duration-300" alt="" />
          <p className="text-lg font-bold">
            Anne Johnson <span className="block text-sm font-normal text-gray-600">DevOps Engineer</span>
          </p>
        </div>
      </div>

      {/* Mobile members layout */}
      <div className="md:hidden mt-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* member 1 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <p className="text-base font-bold">
              Anne Johnson <span className="block text-xs font-normal text-gray-600">UI/UX Designer</span>
            </p>
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
          </div>

          {/* member 2 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
            <p className="text-base font-bold">
              Anne Johnson <span className="block text-xs font-normal text-gray-600">Frontend Developer</span>
            </p>
          </div>

          {/* member 3 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <p className="text-base font-bold">
              Anne Johnson <span className="block text-xs font-normal text-gray-600">Backend Engineer</span>
            </p>
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
          </div>

          {/* member 4 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <p className="text-base font-bold">
              Anne Johnson <span className="block text-xs font-normal text-gray-600">Project Manager</span>
            </p>
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
          </div>

          {/* member 5 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
            <p className="text-base font-bold">
              Anna Johnson <span className="block text-xs font-normal text-gray-600">QA Specialist</span>
            </p>
          </div>

          {/* member 6 */}
          <div className="w-full px-4 py-3 rounded-full flex justify-between items-center bg-white/90 text-black text-center shadow-lg backdrop-blur-sm border border-white/30">
            <img src={member1} className="rounded-full w-16 h-16 border-2 border-[#3a7d54]/50" alt="" />
            <p className="text-base font-bold">
              Anne Johnson <span className="block text-xs font-normal text-gray-600">DevOps Engineer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;