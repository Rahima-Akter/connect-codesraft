import bg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <img src={bg} alt="banner" className="block w-[100vw] lg:h-[100vh] md:h-[45vh] h-[85vh]" />

      {/* banner contents */}
      <div className="absolute top-32 md:left-5 text-black">
        <h1 className="uppercase font-extrabold text-center md:text-6xl text-4xl text-[#263524] lg:px-[350px] mx-auto md:px-0 px-5">we connect your business</h1>

        <p className="capitalize text-center lg:px-96 md:px-40 px-16 font-semibold mt-5 text-gray-700">welcome to our telecom website, where we provide <br/> hight-quality services to meet your communication needs. our company is comitted to offering the latest technology and the best prices in the market</p>

        <button className="capitalize font-bold rounded-full bg-[#1f352d] hover:bg-[#2b463c] hover:cursor-pointer px-6 py-3 text-white flex justify-center mx-auto mt-8">get started</button>
      </div>
    </div>
  );
};

export default Banner;
