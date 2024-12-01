import React from "react";
import Slider from "react-slick";
import { HeroData } from "../data/HeroData";

export const HeroSection: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay:true,
  };

  return (
    <div className="px-10  w-screen has-scrollbar  overflow-x-scroll">
      <div className="">
        <Slider {...settings}>
          {HeroData.map((item) => (
            <div className="w-full h-[26rem] flex relative" key={item.id}>
              {/* Image */}
              <div className="w-full h-full">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={item.avatar}
                  alt=""
                />
              </div>

              {/* Text overlay */}
              <div className="absolute left-20 top-14 z-10">
                <div className="flex flex-col space-y-4 bg-white bg-opacity-5 p-4 rounded-md">
                  <h1 className="font-semibold text-xl text-rose-500">
                    {item.category}
                  </h1>
                  <h1 className="text-4xl font-bold w-1/2">{item.title}</h1>
                  <div className="flex items-center">
                    <p className="font-semibold text-gray-500 text-xl">
                      Starting at
                    </p>
                    <span className="px-2 flex space-x-2 items-center ">
                      <h1 className="font-bold flex w-full text-3xl object-cover">
                        ${item.price}
                      </h1>
                      <h1 className="text-xl text-gray-500 font-semibold">
                        00
                      </h1>
                    </span>
                  </div>
                  <div>
                    <button className="bg-red-400 p-2 text-white font-semibold px-3 rounded-md">
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
