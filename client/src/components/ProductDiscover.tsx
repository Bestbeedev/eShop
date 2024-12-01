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
  title: String;
};

export const ProductDiscover: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium border-b pb-5">{title}</h1>
      <div className="grid grid-cols-2 items-center gap-x-80 overflow-x-scroll my-5  has-scrollbar gap-3">
        {data.map((item) => (
          <div className="items-center" key={item.id}>
            <div className="flex space-x-2 px-2 py-3 w-72 b items-center rounded-lg border ">
              <img className="size-16" src={item.avatar} alt="" />
              <div className="flex flex-col space-y-1">
                <p className="font-medium text-sm  text-gray-500">{item.title}...</p>
                <p className="flex text-sm w-full">{item.category}</p>
                <div className="flex  items-center space-x-2">
                  <p className="text-lg text-red-300">{item.price}</p>
                  <p className="text-sm">{item.reduction}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
