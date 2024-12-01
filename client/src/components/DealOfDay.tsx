import React from "react";
import { BiCart } from "react-icons/bi";
type dataItem = {
  id: number;
  avatar: string;
  title: string;
  content: string;
  price: number;
  reduction: number;
  sold: number;
  total: number;
};

type Props = {
  data: dataItem[];
  title: string;
};


export const DealOfDay: React.FC<Props> = ({ data, title }) => {

  return (
    <div className=" w-[70vw]">
      <h1 className="text-xl font-medium border-b pb-3">{title}</h1>
      <div className="flex flex-1 space-x-2 items-center  overflow-x-auto my-5  has-scrollbar gap-3 ">
        {data.map((item) => (
          <div className="flex w-full" key={item.id}>
            <div className="flex space-x-5 p-8  w-[70vw] items-center rounded-lg border">
              <div>
                <img className="" src={item.avatar} alt="" />
              </div>
              <div className="flex space-y-4 flex-col">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="w-full text-sm font-light">{item.content}</p>
                <div className="flex items-center my-2 space-x-3">
                  <span className="text-xl font-medium">${item.price}.00</span>
                  <span className="text-xl font-light">
                    ${item.reduction}.00
                  </span>
                </div>
                <span className="bg-rose-400 font-medium flex space-x-2 items-center w-fit text-white rounded-md p-2 px-4">
                  <BiCart />
                  <button className="">ADD TO CART</button>
                </span>
                <div className="flex  text-sm justify-between">
                  <div className="flex space-x-2">
                    <h2>ALREADY SOLD:</h2>
                    <h2 className="font-semibold">{item.sold}</h2>
                  </div>
                  <div className="flex space-x-2">
                    <h2>TOTAL STOCK:</h2>
                    <h2 className="font-semibold">{item.total}</h2>
                  </div>
                </div>
                <div className="rounded-md w-full items-center flex">
                  <progress
                    className="rounded-md w-full h-6 "
                    max={item.total}
                    value={item.sold}
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
