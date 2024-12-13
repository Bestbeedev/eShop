import React from "react";
import { HomeNavbar } from "../components/HomeNavbar";
import { HeroSection } from "../components/HeroSection";
import { CategoryProductStock } from "../components/CategoryProductStock";
import { ProductDiscover } from "../components/ProductDiscover";
import { DealOfDay } from "../components/DealOfDay";
import { NewProducts } from "../components/NewProducts";
import { newProducts } from "../data/DataProduct1/NewProducts";
import { dealOfDayData } from "../data/DataProduct1/DealOfDaydata";
import { trendingData } from "../data/DataProduct1/Trending";
import { topRatedData } from "../data/DataProduct1/TopRated";
import { newArrivalData } from "../data/DataProduct1/NewArrival";
import { Category } from "../components/Category";
import { categories } from "../data/DataProduct1/Categories";

const Home: React.FC = () => {
  return (
    <div className="w-full ">
      <HomeNavbar />
      <HeroSection />
      <CategoryProductStock />
      <div className="product-container w-full px-10 max-sm:px-6">
        <div className="relative flex items-start gap-7 mb-7 ">
          <div className="fixed top-0 left-[-100%] bottom-0 w-full max-w-[320px] p-7 overflow-y-scroll overscroll-contain invisible bg-white transition ease-in-out duration-500 z-20 lg:sticky lg:top-7 lg:left-0 lg:p-0 lg:min-w-[calc(25%-15px)] lg:mb-7 lg:visible lg:overflow-y-auto lg:overscroll-auto lg:z-0">
            <Category data={categories} title={"Categories"} />
          </div>
          <div className="w-full lg:min-w-[calc(75%-15px)]">
            <div className="mb-30 lg:mb-20 md:flex md:flex-wrap md:justify-center md:gap-4">
              <ProductDiscover title={"New Arrivals"} data={newArrivalData} />
              <ProductDiscover title={"Trending"} data={topRatedData} />
              <ProductDiscover title={"Top Rated"} data={trendingData} />
            </div>
            <div className="w-full">
              <NewProducts title={"New Products"} data={newProducts} />
              <DealOfDay title={"Today's Deal"} data={dealOfDayData} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 max-w-full md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px]">
        <div className="flex flex-wrap items-stretch gap-8 lg:gap-[30px]">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
