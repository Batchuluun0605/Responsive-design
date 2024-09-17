import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="">
              <a
                href="#"
                className="flex items-center gap-2 text-2xl rounded-full sm:text-3xl font-bold"
              >
                <img src={Logo} alt="Foodie zone" className="w-20 bg-none" />
                Foodie
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-4 p-4 ">
                <li>
                  <a href="#" className="inline-block  hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block  hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block  hover:text-primary">
                    Concat
                  </a>
                </li>
              </ul>
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2  hover:scale-105 duration-300 rounded-full">
                Order
                <FaCartShopping className="text-xl cursor-pointer text-white drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
