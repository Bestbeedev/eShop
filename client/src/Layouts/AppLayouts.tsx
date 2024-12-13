import React, { useState } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { NavMobile } from "../components/NavMobile";
import { Sidebar } from "../components/Sidebar";

export const AppLayouts: React.FC = () => {
  const [showSidebar,setShowSidebar]=useState<boolean>(false)
  const toggleSidebar=()=>{
    setShowSidebar(!showSidebar)
  }
  return (
    <div className="w-screen  ">
      <Header/>
      <Outlet/>   
      <div className="relative">
        <Sidebar isOpen={showSidebar} hideSidebar={toggleSidebar}/>
        <NavMobile onClick={toggleSidebar}/>
        </div>   
    </div>
  );
};
