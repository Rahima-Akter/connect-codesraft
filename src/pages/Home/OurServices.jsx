import speed_icon from "../../assets/speed-radar.png";
import antenna from "../../assets/antenna.png";
import cloude from "../../assets/cloude.png";
import low_cost from "../../assets/low-cost.png";
import solution from "../../assets/solution.png";
import video_conf from "../../assets/video-conf.png";

const OurServices = () => {
  const card_info = [
    {
      icon: speed_icon,
      heading: "we provide highest internet speed",
      description:
        "With our fiber optice network we provide the fastest download and upload speed. So you can get your work done quickly and efficiently",
    },
    {
      icon: low_cost,
      heading: "we give services at very low cost",
      description:
        "Our prices are competitive, and we also offer promotions and discounts to ensure that you get the best value for your money",
    },
    {
      icon: antenna,
      heading: "highest intenet coverage ever",
      description:
        "with our fiber optic network, we provide the fastest download and upload speeds, so you can get your work done quickly and efficiently.",
    },
    {
      icon: cloude,
      heading: "unlimited cloude- based solutions",
      description:
        "We offer cloude-based storage and backup solutions for customers to store important documents files",
    },
    {
      icon: video_conf,
      heading: "video conferencing solutions at ease",
      description:
        "Our prices are competitive, and we also offer promotions and discounts to ensure that you get the best value for your money",
    },
    {
      icon: solution,
      heading: "faster solutions to your problems",
      description:
        "with our fiber optic network, we provide the fastest download and upload speeds, so you can get your work done quickly and efficiently.",
    },
  ];
  return (
    <div className="lg:pt-24 py-12 w-11/12 mx-auto">
      <h1 className="uppercase font-extrabold text-center md:text-5xl text-4xl text-[#263524] lg:px-[350px] mx-auto md:px-32 px-5">
        why should chooose us
      </h1>

      <p className="text-center lg:px-80 md:px-52 px-10 font-medium text-sm mt-2 text-gray-700">
        We offer a variety of Services to our customers, including phone plans,
        internet packages. and TV bundles. Our phone plans offer unlimited talk
        and text, as well as varying amounts of data depending on your needs.
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-12">
        {card_info.map((card) => (
          <div key={card.icon} className="border-2 border-[#263524] py-6 px-5">
            <img
              src={card.icon}
              className="w-20 -mt-1"
              alt={card.icon}
            />
            <h2 className="font-bold uppercase text-3xl pb-3 pt-8">{card.heading}</h2>
            <p className="font-medium">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
