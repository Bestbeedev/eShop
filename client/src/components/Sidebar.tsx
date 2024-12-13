import React from "react";
type Props = {
  isOpen: boolean;
  hideSidebar:()=>void
};
export const Sidebar: React.FC<Props> = ({isOpen,hideSidebar}) => {

  return (
    <div>
      <div
        onClick={hideSidebar}
        className={`fixed top-0 inset-0 right-0 bg-opacity-60 z-50  transition-opacity duration-500 bg-black ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-opacity-100 z-50  bg-slate-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="bg-slate-300 rounded">
            <h1>tom</h1>
        </div>
      </div>
    </div>
  );
};
