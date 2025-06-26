// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
      message:
        "This service completely transformed our workflow. The team delivered beyond expectations.",
      rating: 5,
      company: "Stellar Solutions",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
      message:
        "Understood our complex requirements and implemented solutions that saved us countless hours.",
      rating: 5,
      company: "TechNova",
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200",
      message:
        "Delivered exactly what we needed at a price we could afford. Exceptional value!",
      rating: 5,
      company: "Wilson & Co",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
      message:
        "Implementation was seamless and the training was excellent. Team was up and running instantly.",
      rating: 5,
      company: "Digital Horizon",
    },
  ];

  return (
    <section className="lg:pt-36 pt-16 dark:bg-gray-100 dark:text-gray-800">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#1a2e22] lg:px-[350px] mx-auto md:px-32 px-5 drop-shadow-lg">
        our <span className="text-[#3a7d54]">customers feedback</span>
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-10 font-medium text-sm mt-4 text-gray-700 leading-relaxed">
        We understand the value of your time, which is why we offer faster
        solution to any technical issues you may encounter. Our customer service
        team is available 24/7 to provide you with quick and effective solution
        to any problems you may have.
      </p>
      {/* testimonial cards with swiperJs */}
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{delay: 3000}}
          className="mySwiper"
        >
          {testimonials.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-5 mt-10">
                <div className="lg:h-[380px] -mr-7">
                  <img src={data.avatar} className="lg:w-full md:w-[40vw] lg:-ml-0 -ml-3 md:h-[20vh] lg:h-full object-fill" alt="" />
                </div>
                <div className="flex lg:h-[380px] flex-col md:max-w-xs w-full mx-4 my-6 shadow-lg">
                  <div className="px-4 lg:h-[380px] py-12 rounded-t-lg sm:px-8 md:px-10 dark:bg-gray-50">
                    <p className="relative py-1 text-lg italic text-center dark:text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-[#516b51]"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {data.message}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-[#516b51]"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#7f957e] dark:text-gray-50">
                    <div className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-[#5e725d] flex justify-center">
                        <div className="w-10 h-10 mb-2 mt-3 border border-black bg-center bg-cover rounded-full bg-white"></div>
                    </div>
                    <p className="text-xl font-semibold leading-tight">
                      {data.name}
                    </p>
                    <p className="text-sm uppercase">{data.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
