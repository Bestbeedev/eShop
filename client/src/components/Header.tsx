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

export const Header: React.FC = () => {
  return (
    <header className="">
      <div className="header-top border-b border-b-gray-200   ">
        <div className=" flex p-5 px-10 items-center justify-between ">
          <ul className="header-social-container flex space-x-2 ">
            <li className="p-2 bg-gray-400 rounded-md">
              <a href="#" className="social-link">
                <FaFacebookF className="text-black" />
              </a>
            </li>
            <li className="p-2 bg-gray-400  rounded-md">
              <a href="#" className="social-link">
                <FaTwitter className="text-black " />
              </a>
            </li>
            <li className="p-2 bg-gray-400 rounded-md">
              <a href="#" className="social-link">
                <FaInstagram className="text-black " />
              </a>
            </li>
            <li className="p-2 bg-gray-400 rounded-md">
              <a href="#" className="social-link">
                <FaLinkedin className="text-black " />
              </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions flex space-x-2">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main flex border-b border-b-gray-200 ">
        <div className=" flex justify-between items-center p-5 px-10 w-full">
          <Link to="/" className="header-logo flex">
            <h1 className="text-4xl ">Anon</h1>
            {/* <img
              src="/assets/images/logo/logo.svg"
              alt="Anon Logo"
              width="120"
              height="36"
            /> */}
          </Link>
          <div className="header-search-container flex  gap-1 px-5 p-2 w-1/2  border border-gray-200 rounded-md  ">
            <input
              className="border-none outline-none bg-inherit"
              type="search"
              name="search"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="header-user-actions flex space-x-4">
            <button className="action-btn p-2 bg-slate-500 rounded-md relative">
              <FaUser />
            </button>
            <button className="action-btn p-2 bg-slate-500 rounded-md relative">
              <FaHeart />
              <span className="count absolute -top-2 -right-3 bg-blue-400 rounded-full p-[3px] size-7 ">
                0
              </span>
            </button>
            <button className="action-btn p-2 bg-slate-500 rounded-md relative">
              <FaShoppingBag />
              <span className="count absolute -top-2 -right-3 bg-blue-400 rounded-full p-[3px] size-7 ">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
 