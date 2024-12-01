import React from "react";
import { ProductFirst } from "../data/ProductFirst";

export const CategoryProductStock: React.FC = () => {
  return (
    <div className="w-screen flex  space-x-8 my-3 px-10 ">
      <div className="flex w-screen space-x-8 pb-5 has-scrollbar overflow-x-scroll">
        {ProductFirst.map((product, index) => (
          <div
            className="w-full flex relative space-x-20  border rounded-lg pl-3  pr-10 py-3"
            key={index}
          >
            <div className="flex space-x-3 w-full items-center">
              {/* Image container */}
              <div className=" items-center h-14 w-16 border p-3 bg-slate-100 rounded-md">
                <img
                  className="size-8 object-cover"
                  src={product.avatar}
                  alt={product.name}
                />
              </div>

              {/* Product details */}
              <div className="flex flex-col w-full space-y-2">
                <h4 className="font-semibold flex w-40 text-sm">
                  {product.name}
                </h4>
                <p className="text-sm text-red-300 ">Show All</p>
              </div>
            </div>

            {/* Total */}
            <span className="flex right-3 top-3 text-[12px] 
            rounded-md border px-3 py-2 bg-slate-50 absolute items-center font-medium text-gray-800">
              {product.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
