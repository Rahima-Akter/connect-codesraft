const CoverageForm = () => {
  return (
    <div className="lg:pb-20 py-12 w-11/12 mx-auto">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#263524] lg:px-72 mx-auto md:px-24 px-5 md:leading-14 leading-10">
        network coverage around your area
      </h1>

      <p className="text-center lg:px-72 md:px-[120px] px- font-medium text-sm mt-1 text-gray-700">
        Our company provide the higest coverage across the country, ensuring
        that our services are accessible to everyone.Our network covers both
        urban and rural areas, providing seamless communication services to
        everyone, regardless of their location.
      </p>

      {/* form */}
      <form>
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-3 mt-10">
          <div className="relative md:w-2/6 w-full">
            <input
              type="tel"
              required
              placeholder="1234567890"
              className="w-full border-2 border-[#263524] rounded-sm py-2 pr-4 pl-10 text-[#263524] bg-white font-medium"
            />
            <span className="absolute left-3 top-2.5 g grayscale-100">📞</span>
          </div>
          <div className="relative md:w-2/6 w-full">
            <input
              type="text"
              required
              placeholder="Location"
              className="w-full border-2 border-[#263524] rounded-sm py-2 pr-4 pl-10 text-[#263524] bg-white font-medium"
            />
            <span className="absolute left-3 top-2.5 g grayscale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="capitalize font-bold rounded-full bg-[#1f352d] hover:bg-[#2b463c] hover:cursor-pointer px-8 py-3 text-white flex justify-center mx-auto mt-8"
        >
          submit
        </button>
      </form>

      {/* building map */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 md:w-7/10 mx-auto mt-12">
        <div className="border-2 border-[#263524] py-6 px-2 bg-green-950 text-white font-medium text-xs relative group">
          <p>Ground Floor, Unit 6, Wellbrook Court, Girton Road</p>
          <div className="bg-[#ecf5e9] border-2 border-[#263524] absolute top-5 left-16 text-[#263524] w-72 px-5 py-6 hidden group-hover:block z-20">
            <h3 className="font-bold text-2xl">
              Ground Floor, Unit 6, Wellbrook Court, Girton Road
            </h3>
            <p className="text-sm font-medium">
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </div>
        </div>
        <div className="border-2 border-[#263524] py-6 px-2"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 lg:block hidden"></div>

        <div className="border-2 border-[#263524] py-6 px-2 bg-green-950 text-white font-medium text-xs relative group">
          <p>Ground Floor, Unit 6, Wellbrook Court, Girton Road</p>
          <div className="bg-[#ecf5e9] border-2 border-[#263524] absolute top-5 md:right-16 ring-2 text-[#263524] w-72 px-5 py-6 hidden group-hover:block">
            <h3 className="font-bold text-2xl">
              Ground Floor, Unit 6, Wellbrook Court, Girton Road
            </h3>
            <p className="text-sm font-medium">
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </div>
        </div>

        <div className="border-2 border-[#263524] py-6 px-2"></div>
        <div className="border-2 border-[#263524] py-6 px-2"></div>

        <div className="border-2 border-[#263524] py-6 px-2 bg-green-950 text-white font-medium text-xs relative group">
          <p>Ground Floor, Unit 6, Wellbrook Court, Girton Road</p>
          <div className="bg-[#ecf5e9] border-2 border-[#263524] absolute bottom-5 lg:left-6 md:-left-20 -left-28 text-[#263524] w-72 px-5 py-6 hidden group-hover:block">
            <h3 className="font-bold text-2xl">
              Ground Floor, Unit 6, Wellbrook Court, Girton Road
            </h3>
            <p className="text-sm font-medium">
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </div>
        </div>

        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 md:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 lg:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 lg:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2 lg:block hidden"></div>
        <div className="border-2 border-[#263524] py-6 px-2"></div>

        <div className="border-2 border-[#263524] py-6 px-2 bg-green-950 text-white font-medium text-xs relative group">
          <p>Ground Floor, Unit 6, Wellbrook Court, Girton Road</p>
          <div className="bg-[#ecf5e9] border-2 border-[#263524] absolute bottom-8 right-16 text-[#263524] w-72 px-5 py-6 hidden group-hover:block">
            <h3 className="font-bold text-2xl">
              Ground Floor, Unit 6, Wellbrook Court, Girton Road
            </h3>
            <p className="text-sm font-medium">
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoverageForm;
