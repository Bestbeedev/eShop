import {
  ComponentIcon,
  HeartIcon,
  Menu,
  ShoppingCart,
} from "lucide-react";
import React from "react";

type Props = {
  onClick: () => void;
};

export const NavMobile: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="w-screen lg:hidden flex justify-evenly p-3 border px-12 bg-slate-50 rounded-md  bottom-0 fixed">
      <div className="p-2 border  hover:cursor-pointer  rounded-lg bg-slate-100">
        <Menu onClick={onClick} />
      </div>
      <div className="p-2 hover:cursor-pointer border rounded-lg bg-slate-100">
        <HeartIcon />
      </div>
      <div className="p-2 border  hover:cursor-pointer rounded-lg bg-slate-100">
        <ShoppingCart />
      </div>
      <div className="p-2 border  hover:cursor-pointer  rounded-lg bg-slate-100">
        <ComponentIcon />
      </div>
    </div>
  );
};
