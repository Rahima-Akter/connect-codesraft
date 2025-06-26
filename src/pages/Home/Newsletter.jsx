import newslwtter from "../../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <div className="w-11/12 mx-auto h-[400px] rounded-xl mt-16 overflow-hidden relative shadow-2xl">
      {/* bg image covering div */}
      <img
        src={newslwtter}
        className="w-full h-full absolute inset-0"
        alt="Newsletter image"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex-col flex justify-center items-center text-center px-6">
        <h2 className="capitalize font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 drop-shadow-lg">
          join our <span className="text-[#ff6b6b] text-left">Newsletter</span>to stay
          updated
        </h2>
        <p className="text-white text-lg md:text-left mb-6 max-w-2xl drop-shadow-lg">
            Stay updated with our latest news and offers
        </p>
        <div className="w-full max-w-md relative">
          <input
            type="email"
            name=""
            id=""
            placeholder="enter your email address"
            className="w-full border-none bg-white/90 rounded-full py-3 px-6 text-gray-800 focus:outline-none focus:right-2 focus:ring-[#ff6b6b] shadow-lg"
          />
          <button className="absolute right-1 top-1.5 capitalize font-bold rounded-full bg-[#1f352d] hover:bg-[#2b463c] hover:cursor-pointer px-6 py-2 transition-all duration-300 text-white text-sm shadow-lg">
            subscribe
          </button>
        </div>
        <p className="text-white/80 text-xs mt-4">We respect your privacy. Unsubscribe at any time</p>
      </div>
    </div>
  );
};

export default Newsletter;
