import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import businessMan from "../../assets/businessMan.jpg";
import telecom_guy from "../../assets/telecom.jpeg";
import { Autoplay } from "swiper/modules";

const WhoWeAre = () => {
  return (
    <div className="pb-96">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#263524] lg:px-[350px] mx-auto md:px-32 px-5">
        who we are
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-10 font-medium text-sm mt-2 text-gray-700">
        We understand the value of your time, which is why we offer faster
        solution to any technical issues you may encounter. Our customer service
        team is available 24/7 to provide you with quick and effective solution
        to any problems you may have.
      </p>

      {/* contents */}
      <div className="text-black pt-12 relative">
        <div className="bg-white rounded-md px-3 py-2 flex justify-between items-center lg:w-2/6 md:w-3/6 h-12 absolute lg:left-24 md:left-16 lg:top-20 md:top-28 left-8 w-5/6">
          <p className="font-semibold">Interested?</p>
          <button className="capitalize font-bold rounded-full bg-[#1f352d] hover:bg-[#2b463c] hover:cursor-pointer px-3 py-2 text-white text-xs">
            contact us
          </button>
        </div>
        <img
          src={businessMan}
          className="absolute lg:right-24 md:right-14 top-16 lg:w-[22%] md:w-[30%] md:block hidden z-10"
          alt="businessMan"
        />
        {/* swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, pauseOnMouseEnter:true }}
          slidesPerView={1}
          className="mySwiper absolute md:top-[150px] top-20 px-20 lg:left-0 md:-left-24 md:w-[500px] w-4/5"
        >
          <SwiperSlide>
            <h2 className="font-bold lg:text-4xl text-3xl mb-2">
              international recognition of our brand
            </h2>
            <p>
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="font-bold lg:text-4xl text-3xl mb-2 lg:pr-0 md:pr-5">
              we have been providing this impactfull telecom service for long
              10+ years
            </h2>
            <p>
              Our prices are competitive, and we also offer promotions and
              discounts to ensure that you get the best value for your money
            </p>
          </SwiperSlide>
        </Swiper>
        <img
          src={telecom_guy}
          className="absolute lg:left-24 lg:top-48 top-[410px] lg:w-[20%] w-full lg:h-[150%] lg:block md:hidden block z-10"
          alt=""
        />

        <div className="absolute top-[165px] left-[33%] w-20 h-20 bg-green-200 rounded-full opacity-30 mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-32 left-[60%] w-8 h-8 bg-green-200 rounded-full opacity-30 mix-blend-multiply animate-pulse"></div>
        <div className="absolute md:-bottom-80 -bottom-[150%] md:right-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-30 mix-blend-multiply animate-pulse [animation-delay:2s] z-0"></div>
      </div>
    </div>
  );
};

export default WhoWeAre;
