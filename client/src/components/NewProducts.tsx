import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

type dataItem = {
  id: number;
  category: string;
  price: number;
  type: string;
  reduction: number;
  detailProducts: categoryDetailType[];
};
type categoryDetailType = {
  avatar: string;
  name: string;
};
type Props = {
  data: dataItem[];
  title: string;
};

export const NewProducts: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="w-full max-md:w-full ">
      <h1 className="text-xl  font-medium border-b pb-3">{title}</h1>
      <div className="grid grid-cols-3   max-sm:grid-cols-2 max-md:grid-cols-2 my-6 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative   rounded-lg overflow-hidden group shadow- border  hover:border-gray-300"
          >
            {/* Images avec hover */}
            <div className="relative  bg-slate-5  rounded-lg w-full items-center ">
              <img
                src={item.detailProducts[0].avatar}
                alt={item.detailProducts[0].name}
                className="w-52 h-52 mx-auto object-cover rounded-lg transition-opacity duration-300  group-hover:opacity-10"
              />
              <img
                src={item.detailProducts[1].avatar}
                alt={item.detailProducts[1].name}
                className="w-52 h-52 mx-auto rounded-lg flex justify-center items-center object-cover absolute top-0 transform -translate-x-1/2 left-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              {/* Options sur hover */}
              <div className="absolute inset- right-3 flex flex-col  items-center top-3 gap-3  opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="p-2  rounded-md bg-slate-50 border">
                  <FaHeart
                    size={16}
                    className="text-gray-400  text-xl cursor-pointer hover:scale-110"
                  />
                </div>
                <div className="p-2 rounded-md bg-slate-50 border">
                  <FaShoppingCart
                    size={16}
                    className="text-gray-400  text-xl cursor-pointer hover:scale-110"
                  />
                </div>
                <div className="p-2 rounded-md bg-slate-50 border">
                  <FaSearch
                    size={16}
                    className="text-gray-400 text-xl cursor-pointer hover:scale-110"
                  />
                </div>
              </div>
            </div>
            {/* Catégorie */}
            <div className="pb-6 h-full w-full">
              <div className=" px-4 flex flex-col my-3 text-sm">
                {item.category}
                <div className="w-full flex space-x-2 my-3">
                  <h1 className="text-sm cursor-pointer  text-red-300">
                    {item.detailProducts[0].name}
                  </h1>
                  <h1 className="text-sm cursor-pointer  text-red-300">
                    {item.detailProducts[1].name}
                  </h1>
                </div>
              </div>
              {/* Prix et réduction */}
              <div className="flex items-center justify-between px-5 space-x-2 mt-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-800">${item.price}</span>
                  <span className="text-red-500">${item.reduction}</span>
                </div>
                {item.type && (
                  <span className="bg-rose-500 p-2 text-white px-4 rounded-md ">
                    {item.type}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
