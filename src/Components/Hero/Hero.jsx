import React from "react";
import { MdPayments, MdAccessibility } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { FiUserX, FiList, FiHome, FiPackage } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="">
      <div className="mt-5 sm:mt-36 px-3 sm:flex flex-col items-center justify-center">
        <p className="text-3xl text-slate-400 uppercase py-3">Our Services</p>
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:w-2/4">
          <div className="border-2 border-black  flex flex-col items-center">
            <p>Pay Rent</p>
            <i className="text-4xl">
              <MdPayments />
            </i>
          </div>
          <div className="border-2 border-black flex flex-col items-center">
            <p>Maintenance</p>
            <i className="text-4xl">
              <GrHostMaintenance />
            </i>
          </div>
          <div className="border-2 border-black  flex flex-col items-center">
            <p>Maps</p>
            <i className="text-4xl">
              <SiGooglemaps />
            </i>
          </div>

          <div className="border-2 border-black  flex flex-col items-center">
            <p>Flexibility</p>
            <i className="text-4xl">
              <MdAccessibility />
            </i>
          </div>
        </div>
      </div>

      <div className=" mt-5  ">
        <p className="text-3xl uppercase font-semibold  py-3 text-slate-400 ">
          Why we use no brokers
        </p>

        <div className="md:flex md:items-center md:justify-between mt-10">
          <div className="services">
            <i className="text-4xl">
              <FiUserX />
            </i>
            <h2>Avoid brokers</h2>
            <p className="services-content">
              We will directly contact you using our services
            </p>
          </div>

          <div className="services">
            <i className="text-4xl">
              <FiList />
            </i>
            <h3>Free Listing</h3>
            <p className="services-content">Easy Listing process</p>
          </div>
          <div className="services">
            <i className="text-4xl">
              <FiHome />
            </i>
            <h3>Rental Agreement</h3>
            <p className="services-content">
              We Assist in creating rental agreement and paper work
            </p>
          </div>
          <div className="services">
            <i className="text-4xl">
              <FiPackage />
            </i>
            <h3>Package and movers</h3>
            <p className="services-content">
              We Assist in Packaging and moving of the items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
