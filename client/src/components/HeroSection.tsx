import React from "react";
import Slider from "react-slick";
import { HeroData } from "../data/HeroData";

export const HeroSection: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
  };

  return (
    <div className="px-10  max-sm:px-0  max-md:mt-5  w-screen has-scrollbar  overflow-x-scroll">
      <div className="">
        <Slider {...settings}>
          {HeroData.map((item) => (
            <div
              className="w-full  rounded-lg h-[26rem] max-sm:h-64 flex relative"
              key={item.id}
            >
              {/* Image */}
              <div className="w-full h-full">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={item.avatar}
                  alt=""
                />
              </div>

              {/* Text overlay */}
              <div className="absolute left-20 max-sm:top-4 max-sm:left-8 top-14 z-10">
                <div className="flex flex-col  space-y-4 max-sm:space-y-3  max-sm:bg-white max-sm:bg-opacity-50 p-4 rounded-lg">
                  <h1 className="font-medium max-sm:text-lg text-xl max-sm:font-medium  text-rose-500">
                    {item.category}
                  </h1>
                  <h1 className="text-4xl max-sm:text-xl font-bold max-sm:w-[70%] w-1/2">
                    {item.title}
                  </h1>
                  <div className="flex items-center">
                    <p className="font-semibold max-sm:font-medium  max-sm:text-lg text-gray-500 text-xl">
                      Starting at
                    </p>
                    <span className="px-2 flex space-x-1 items-center ">
                      <h1 className="font-bold flex w-full text-3xl max-sm:text-xl max-sm:font-medium object-cover">
                        ${item.price}
                      </h1>
                      <h1 className="text-xl text-gray-500 max-sm:text-sm font-semibold">
                        00
                      </h1>
                    </span>
                  </div>
                  <div>
                    <button className="bg-red-400 animate-bounce p-2 text-white max-sm:text-sm max-sm:font-medium  mt-2 font-semibold px-3 rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
