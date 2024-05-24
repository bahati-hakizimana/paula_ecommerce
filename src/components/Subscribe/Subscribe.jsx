import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-purple-400 dark:bg-gray-800 text-white "
    // style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Arrival
          </h1>
          <div className=" flex flex-col md:flex-row md:justify-center md:items-center md:gap-2 justify-center gap-2">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3"
            />
            <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Substcibe</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subscribe;
