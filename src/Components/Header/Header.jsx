import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import logoimg from "../images/logo.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  // useEffect(()=>{
    
  // },[toggle])


  return (
    <div className="bg-slate-300 flex justify-between items-center w-screen">
      {/* logo  */}
      <img
        className="w-11 h-11 object-contain"
        alt=""
        src={logoimg}
      />

      {/* sidebar toggle */}
      <div
        className="px-5 "
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i className="text-2xl">{toggle ? <GrClose /> : <GrMenu />}</i>
      </div>
      {/* menu bar */}
      <ul
        className={` z-30 transition-all ease-in-out duration-500  bg-gray-300 items-center flex-col absolute top-11 w-36 h-screen right-0   ${
          toggle ? "flex" : "hidden"
        }`}
      >
        <li className="sidebar-menu">Home</li>
        <li className="sidebar-menu">Housing</li>
        <li className="sidebar-menu">About</li>
        <li className="sidebar-menu">Login</li>
        <li className="sidebar-menu">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
