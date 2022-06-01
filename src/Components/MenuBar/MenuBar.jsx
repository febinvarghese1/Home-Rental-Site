import React from "react";
import { FaSearchLocation } from "react-icons/fa";
const MenuBar = () => {
  return (
    <div className="">
      <div className="flex flex-col px-4">
        <h1 className="text-6xl font-bold text-rose-500 lg:text-8xl">Spartans</h1>
        <h3 className="text-2xl text-rose-700 italic mt-2 lg:text-4xl">House Rental</h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 ">
        <div className="">
          <p className="uppercase text-xl font-thin mt-5">India's Top House Rental Site</p>
        </div>
        <div className="mt-4 flex items-center justify-between relative">
          <input
            placeholder="Search"
            type="text"
            className="border-slate-700  border-2 px-3 rounded-xl"
          />
          <i className="absolute right-3 opacity-70">
            <FaSearchLocation />
          </i>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
