// import React, { useState } from "react";
// import { MenuCategory } from "../data/MenuCategory";
// import { Link, NavLink } from "react-router-dom";

// export const HomeNavbar: React.FC = () => {
//   const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setVisibleDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     setVisibleDropdown(null);
//   };

//   return (
//     <div className="flex w-full relative px-16  pb-5 justify-center  mt-5 space-x-10">
//       {MenuCategory.map((category, index) => (
//         <div
//           key={index}
//           className="flex flex-col space-y-2"
//           onClick={() => handleMouseEnter(index)}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div>
//             <NavLink
//               className={({ isActive }) =>
//                 ` font-medium ${
//                   isActive && visibleDropdown === index ? "text-rose-500" : ""
//                 }`
//               }
//               to={category.path}
//             >
//               {category.categoryName}
//             </NavLink>
//           </div>
//           {visibleDropdown === index && (
//             <div
//               className={`${
//                 category.children
//                   ? `bg-slate-50 shadow-sm rounded-md p-5 z-10 border 
//             absolute top-9 justify-center px-10 space-x-2 flex flex-col  space-y-1 ${
//               index === 1
//                 ? " w-[90%] transform -translate-x-1/2 left-1/2 "
//                 : "w-fit "
//             } `
//                   : "hidden"
//               } `}
//             >
//               <div className="flex justify-center w-full space-x-10 ">
//                 {category.children?.map((items, idx) => (
//                   <div className="flex flex-col" key={idx}>
//                     <div
//                       className={`flex font-semibold w-full ${
//                         items.name === "" ? "" : " mb-5 pb-4 border-b"
//                       } space-x-2`}
//                     >
//                       <h1 className="flex flex-col">{items?.name}</h1>
//                     </div>

//                     <div className="">
//                       <div className="flex flex-col space-y-1 text-gray-600">
//                         {items.options?.map((item, idx) => (
//                           <div key={idx}>
//                             <Link to={"/"}>{item.type}</Link>
//                           </div>
//                         ))}
//                       </div>
//                       <div>
//                         <img
//                           className={`my-5 rounded-md ${
//                             items.avatar === undefined && "hidden"
//                           }`}
//                           src={items.avatar}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };


import React, { useState, useEffect, useRef } from "react";
import { MenuCategory } from "../data/MenuCategory";
import { Link, NavLink } from "react-router-dom";

export const HomeNavbar: React.FC = () => {
  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for multiple dropdowns

  // Toggle the dropdown visibility
  const toggleDropdown = (index: number) => {
    setVisibleDropdown((prev) => (prev === index ? null : index));
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRefs.current.every(
        (ref) => ref && !ref.contains(event.target as Node)
      )
    ) {
      setVisibleDropdown(null);
    }
  };

  // Attach and detach the click event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full relative px-16 pb-5 justify-center mt-5 space-x-10">
      {MenuCategory.map((category, index) => (
        <div
          key={index}
          ref={(el) => (dropdownRefs.current[index] = el)} // Attach refs dynamically for each dropdown
          className="flex flex-col space-y-2 relative"
        >
          {/* Category title */}
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the event from bubbling to the document
              toggleDropdown(index);
            }}
          >
            <NavLink
              className={({ isActive }) =>
                `font-semibold text-gray-600 ${
                  isActive && visibleDropdown === index ? "text-rose-500" : ""
                }`
              }
              to={category.path}
            >
              {category.categoryName}
            </NavLink>
          </div>

          {/* Dropdown content */}
          {visibleDropdown === index && (
            <div
              className={`${
                category.children
                  ? `bg-slate-50 shadow-sm rounded-md p-5 z-10 border 
            absolute top-9 justify-center px-10 space-x-2 flex flex-col w-64  space-y-1 ${
              index === 1
                ? " w-[80vw] transform -translate-x-1/2 left-1/2 "
                : "w-fit "
            } `
                  : "hidden"
              } `}
            >
              <div className="flex justify-center w-full space-x-10">
                {category.children?.map((items, idx) => (
                  <div className="flex flex-col" key={idx}>
                    <div
                      className={`flex font-semibold w-full ${
                        items.name === "" ? "" : "mb-5 pb-4 border-b"
                      } space-x-2`}
                    >
                      <h1 className="flex flex-col">{items?.name}</h1>
                    </div>

                    <div>
                      <div className="flex flex-col space-y-1 text-gray-600">
                        {items.options?.map((item, idx) => (
                          <div key={idx}>
                            <Link to={"/"}>{item.type}</Link>
                          </div>
                        ))}
                      </div>
                      <div>
                        <img
                          className={`my-5 rounded-md ${
                            items.avatar === undefined && "hidden"
                          }`}
                          src={items.avatar}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
