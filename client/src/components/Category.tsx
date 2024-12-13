import React, { useState, useEffect, useRef } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

type dataItem = {
  id: number;
  avatar: string;
  category: string;
  categoryDetails: categoryDetailType[];
};
type categoryDetailType = {
  type: string;
  total: number;
};
type Props = {
  data: dataItem[];
  title: string;
};

export const Category: React.FC<Props> = ({ data, title }) => {
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const toggleDetails = (index: number) => {
    setShowDetails((prev) => (prev === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      setShowDetails(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div
        ref={detailsRef}
        className="bg-gray-50 rounded-lg border my-5 md  p-8 w-full"
      >
        {data.map((item) => (
          <div
            className={`flex flex-col space-y-3 ${
              showDetails === item.id ? "mb-3" : ""
            }`}
            key={item.id}
          >
            <div
              onClick={(e) => {
                e.stopPropagation(); // Empêche la propagation vers le document
                toggleDetails(item.id);
              }}
              className={`flex items-center my-2 justify-between cursor-pointer space-x-3 ${
                showDetails === item.id ? "border-b pb-2" : ""
              }`}
            >
              <div className="flex items-center space-x-3 ">
                <img className="size-5" src={item.avatar} alt="" />
                <h1 className="text-lg">{item.category}</h1>
              </div>
              {showDetails === item.id ? <PiMinus /> : <PiPlus />}
            </div>
            {showDetails === item.id && (
              <div className="bg-slate-100 border  p-5 rounded-md ">
                {item.categoryDetails.map((details, index) => (
                  <div key={index}>
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-500 text-sm">{details.type}</p>
                        <p>{details.total}pcs</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
