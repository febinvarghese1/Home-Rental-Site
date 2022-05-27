import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  // useEffect(()=>{
    
  // },[toggle])


  return (
    <div className="bg-gray-500 flex justify-between items-center w-screen">
      {/* logo  */}
      <img
        className="w-11 h-11 object-contain"
        alt=""
        src={
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669"
        }
      />

      {/* sidebar toggle */}
      <div
        className="px-5 lg:hover:animate-bounce"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i className="text-2xl">{toggle ? <GrClose /> : <GrMenu />}</i>
      </div>
      {/* menu bar */}
      <ul
        className={` transition-all ease-in-out duration-500  bg-gray-300 items-center flex-col absolute top-11 w-36 h-screen right-0   ${
          toggle ? "opacity-100" : "opacity-0"
        }`}
      >
        <li className="sidebar-menu">Home</li>
        <li className="sidebar-menu">Housing</li>
        <li className="sidebar-menu">About</li>
        <li className="sidebar-menu">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
