import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#cbdcc7]">
      <div className="container px-6 pt-12 pb-4 mx-auto">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:ml-12">
          <div className="lg:block md:hidden block">
            <p className="font-bold text-[#20362f] text-lg">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#20362f] text-lg">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#20362f] text-lg">
              Services
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Translation
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                Content Creation
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#20362f] text-lg">
              Contact Us
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                +880 123456789
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold transition-colors duration-300 hover:scale-105 hover:underline"
              >
                example@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:mt-10 md:mb-3 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row lg:px-10">
          <a href="#" className="font-bold uppercase md:text-3xl text-4xl text-[#20362f]">
            connect.
          </a>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
