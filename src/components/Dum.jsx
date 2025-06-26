import React from "react";

const Dum = () => {
  return (
    <div className="w-11/12 mx-auto h-[300px] md:h-[400px] rounded-xl mt-14 overflow-hidden relative shadow-2xl">
      {/* Background image covering full div */}
      <img
        // src={newslwtter}
        className="w-full h-full object-cover absolute inset-0"
        alt="Newsletter background"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content centered in the middle */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h2 className="capitalize font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 drop-shadow-lg">
          Join Our <span className="text-[#ff6b6b]">Newsletter</span>
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
          Stay updated with our latest news and offers
        </p>

        <div className="w-full max-w-md relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border-none bg-white/90 rounded-full py-3 px-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] shadow-lg"
          />
          <button className="absolute right-1 top-1 capitalize font-bold rounded-full bg-[#1f352d] hover:bg-[#ff6b6b] transition-all duration-300 cursor-pointer px-6 py-2 text-white text-sm shadow-lg">
            Subscribe
          </button>
        </div>

        <p className="text-white/80 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Dum;
