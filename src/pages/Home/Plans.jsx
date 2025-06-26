import bg from "../../assets/banner.jpg";
import six from "../../assets/60.jpeg";
import twenty from "../../assets/120.jpg";
import three from "../../assets/300.jpg";
import ten from "../../assets/10.jpg";

const Plans = () => {
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 250, 205, 0.1), rgba(255, 250, 150, 0.5)),url(${bg})`,
        borderImageRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#263524] lg:px-[350px] mx-auto md:px-32 px-5">
        plans for the <br /> best solutions
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-10 font-medium text-sm mt-2 text-gray-700">
        We understand the value of your time, which is why we offer faster
        solution to any technical issues you may encounter. Our customer service
        team is available 24/7 to provide you with quick and effective solution
        to any problems you may have.
      </p>

      {/* cards section */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 mt-10 w-11/12 mx-auto">
      {/* card div 1 */}
        <div className="flex flex-row justify-center items-center gap-3 lg:w-80 w-full">
        {/* card 1 */}
          <div className="card bg-white md:w-80 w-full shadow-sm group">
            <figure className="relative overflow-hidden">
              <img
                src={six}
                alt="Shoes"
                className="group-hover:scale-75 scale-90 duration-500"
              />
              <span className="badge badge-xs bg-[#b9c9b8] px-2 absolute top-3 right-3">
                Most Popular
              </span>
            </figure>
            <div className="card-body">
              <div className="flex justify-between -mt-2">
                <h2 className="text-xl font-bold capitalize dark:text-black">
                  60 MBPS
                </h2>
                <span className="text-xl dark:text-gray-600">৳2250/mo</span>
              </div>
              <ul className="mt-2 flex flex-col gap-2 text-xs dark:text-gray-700">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
              </ul>
              <div className="mt-3">
                <button className="btn btn-primary btn-block bg-[#1f352d] hover:bg-[#2b463c]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* extra card  */}
          <div className="card bg-white md:w-80 w-full shadow-sm group md:block hidden lg:hidden">
            <figure className="relative overflow-hidden flex-shrink-0">
              <img
                src={ten}
                alt="Shoes"
                className="w-[75%] object-cover group-hover:scale-110 duration-500"
              />
              <span className="badge badge-xs bg-[#b9c9b8] px-2 absolute top-3 right-3">
                Most Popular
              </span>
            </figure>
            <div className="card-body">
              <div className="flex justify-between -mt-2">
                <h2 className="text-xl font-bold capitalize dark:text-black00">10 MBPS</h2>
                <span className="text-xl dark:text-gray-700">৳2250/mo</span>
              </div>
              <ul className="mt-2 flex flex-col gap-2 text-xs  dark:text-gray-700">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
              </ul>
              <div className="mt-3">
                <button className="btn btn-primary btn-block bg-[#1f352d] hover:bg-[#2b463c]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card div 2 */}
        <div className="flex flex-col items-center gap-3">
          {/* card 2 */}
          <div className="card md:card-side bg-white shadow-sm md:h-56 w-full group">
            <figure className="overflow-hidden">
              <img
                src={twenty}
                alt="Movie"
                className="group-hover:scale-95 scale-90 duration-500"
              />
            </figure>
            <div className="card-body pr-10 md:-mt-0 -mt-6 z-10">
              <span className="badge badge-xs bg-[#b9c9b8] px-2 -mt-2">
                Platinum
              </span>
              <div className="flex justify-between items-center md:-mt-1 mt-1">
                <h2 className="text-3xl font-bold dark:text-black">120 MBPS</h2>
                <span className="text-lg dark:text-gray-700">$29/mo</span>
              </div>
              <ul className="mt- flex flex-col gap-1 text-xs dark:text-gray-700">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
              </ul>
              <div className="mt-2">
                <button className="py-1 text-white font-bold rounded-md btn-block bg-[#1f352d] hover:bg-[#2b463c]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="card md:card-side bg-white shadow-sm md:h-56 group">
            <figure className="overflow-hidde">
              <img
                src={three}
                alt="Movie"
                className="md:w-full w-[80%] group-hover:scale-105 z-0 duration-500"
              />
            </figure>
            <div className="card-body pr-10 md:-mt-0 -mt-6 z-10">
              <span className="badge badge-xs bg-[#b9c9b8] px-2 -mt-2">
                Most Popular
              </span>
              <div className="flex justify-between items-center md:-mt-1 mt-1">
                <h2 className="text-3xl font-bold dark:text-black">300 MBPS</h2>
                <span className="text-lg dark:text-gray-700">$29/mo</span>
              </div>
              <ul className="flex flex-col gap-1 text-xs dark:text-gray-700">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    60 MBPS is the limit of the connection
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="capitalize">
                    no cost fiber line connection
                  </span>
                </li>
              </ul>
              <div className="mt-2">
                <button className="py-1 text-white font-bold rounded-md btn-block bg-[#1f352d] hover:bg-[#2b463c]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="card bg-white md:w-80 w-full shadow-sm group lg:block md:hidden block">
          <figure className="relative overflow-hidde">
            <img
              src={ten}
              alt="Shoes"
              className="w-[75%] object-fill group-hover:scale-110 duration-500"
            />
            <span className="badge badge-xs bg-[#b9c9b8] px-2 absolute top-3 right-3">
              Most Popular
            </span>
          </figure>
          <div className="card-body md:-mt-0 -mt-5">
            <div className="flex justify-between -mt-2">
              <h2 className="text-xl font-bold capitalize dark:text-black">10 MBPS</h2>
              <span className="text-xl dark:text-gray-700">৳2250/mo</span>
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-xs dark:text-gray-700">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="capitalize">
                  no cost fiber line connection
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="capitalize">
                  60 MBPS is the limit of the connection
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="capitalize">
                  no cost fiber line connection
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="capitalize">
                  60 MBPS is the limit of the connection
                </span>
              </li>
            </ul>
            <div className="mt-3">
              <button className="btn btn-primary btn-block bg-[#1f352d] hover:bg-[#2b463c]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
