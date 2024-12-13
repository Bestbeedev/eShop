import React from "react";

type dataItem = {
  id: number;
  category: string;
  title: string;
  reduction: string;
  price: string;
  avatar: string;
};

type Props = {
  data: dataItem[];
  title: string;
};

export const ProductDiscover: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="mb-2 w-full min-w-[calc(50%-10px)] md:mb-2 md:w-[calc(50%-10px)] md:min-w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] lg:min-w-[calc(33.33%-14px)] grow">
      <h1 className="text-xl font-[600] border-b pb-5">{title}</h1>
      <div className="flex my-5  has-scrollbar items-center overflow-x-auto overscroll-contain  md:gap-2 snap-x snap-mandatory">
        <div className="showcase-container space-y-4 gap-x-4 min-w-full  sm:min-w-1/2 md:min-w-full  scroll-snap-align-start">
          {data.map((item) => (
            <div
              className="showcase flex items-center justify-start px-6  border  gap-4  border-cultured p-4 rounded-lg hover:border-slate-300 hover:bg-slate-50 hover:cursor-pointer "
              key={item.id}
            >
              <img
                className="w-20 h-20 object-cover rounded-md mb-4"
                src={item.avatar}
                alt=""
              />
              <div className="flex flex-col space-y-1">
                <p className="font-medium text-[1rem] text-gray-600">
                  {item.title}...
                </p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg text-red-500">{item.price}</p>
                  <p className="text-sm text-gray-500">{item.reduction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
