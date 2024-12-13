import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { useUserStore } from "../store/UserStore";

export const Header: React.FC = () => {
  const {user}=useUserStore()
  return (
    <header className="">
      <div className="header-top border-b border-b-gray-200   ">
        <div className=" flex p-5 px-10 items-center justify-between ">
          <ul className="header-social-container  max-md:hidden  flex space-x-2 ">
            <li className="p-2 bg-blue-500 rounded-md">
              <a href="#" className="social-link">
                <FaFacebookF className="text-white" />
              </a>
            </li>
            <li className="p-2 bg-blue-500 rounded-md">
              <a href="#" className="social-link">
                <FaTwitter className="text-white " />
              </a>
            </li>
            <li className="p-2 bg-blue-500 rounded-md">
              <a href="#" className="social-link">
                <FaInstagram className="text-white " />
              </a>
            </li>
            <li className="p-2 bg-blue-500 rounded-md">
              <a href="#" className="social-link">
                <FaLinkedin className="text-white " />
              </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions   max-md:hidden flex space-x-2">
            <select
              className="p-2 bg-red-400 text-white  rounded-lg"
              name="currency"
            >
              <option className="" value="usd">
                USD $
              </option>
              <option value="eur">EUR €</option>
            </select>
            <select
              className="p-2 bg-red-400  text-white rounded-lg"
              name="language"
            >
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main flex border-b border-b-gray-200 ">
        <div className=" flex justify-between max-sm:flex-col  max-md:space-x-10 max-sm:space-x-0 items-center p-5 px-10 w-full">
          <Link to="/" className="header-logo flex">
            <h1 className="text-4xl ">Anon</h1>
          </Link>
          <div className="header-search-container flex  max-md:flex-1  gap-1 px-5 p-2 w-1/2 max-sm:w-full max-sm:mt-2 border border-gray-200 rounded-md  ">
            <input
              className="border-none placeholder:text-sm outline-none bg-inherit"
              type="search"
              name="search"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="header-user-actions  max-md:hidden flex space-x-4">
            <button className="action-btn p-2 bg-blue-500 text-white rounded-md relative">
              {user ? (
                user.username.slice(0, 3).toLocaleUpperCase()
              ) : (
                <FaUser />
              )}
            </button>
            <button className="action-btn p-2 bg-blue-500 text-white rounded-md relative">
              <FaHeart />
              <span className="count absolute -top-1 flex justify-center items-center -right-3 bg-rose-400 text-sm rounded-full p-[3px] size-5 ">
                0
              </span>
            </button>
            <button className="action-btn p-2 bg-blue-500 text-white rounded-md relative">
              <FaShoppingBag />
              <span className="count absolute -top-1 flex justify-center items-center -right-3 bg-rose-400 text-sm rounded-full p-[3px] size-5 ">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
 