import React from "react";
import Home from "../pages/Home";
import { HomeNavbar } from "../components/HomeNavbar";
import { HeroSection } from "../components/HeroSection";
import { CategoryProductStock } from "../components/CategoryProductStock";
import { ProductDiscover } from "../components/ProductDiscover";
import { newArrivalData } from "../data/DataProduct1/NewArrival";
import { Category } from "../components/Category";
import { categories } from "../data/DataProduct1/Categories";
import { trendingData } from "../data/DataProduct1/Trending";
import { topRatedData } from "../data/DataProduct1/TopRated";
import { DealOfDay } from "../components/DealOfDay";
import { dealOfDayData } from "../data/DataProduct1/DealOfDaydt";
import { NewProducts } from "../components/NewProducts";
import { newProducts } from "../data/DataProduct1/NewProducts";

export const HomeLayouts: React.FC = () => {
  return (
    <div className="w-screen ">
      <Home />
      <HomeNavbar />
      <HeroSection />
      <CategoryProductStock />
      <div className="grid grid-cols-4 gap-x-4 px-10">
        <Category title={"Categories"} data={categories} />
        <div className="flex-col flex">
          <div className="flex space-x-5">
            <ProductDiscover title={"New Arrivals"} data={newArrivalData} />
            <ProductDiscover title={"Trending"} data={topRatedData} />
            <ProductDiscover title={"Top Rated"} data={trendingData} />
          </div>
          <div className="w-full has-scrollbar">
            <DealOfDay title={"Deal of Day"} data={dealOfDayData} />
            <NewProducts title={"New Products"} data={newProducts}/>
          </div>
        </div>
      </div>
    </div>
  );
};
