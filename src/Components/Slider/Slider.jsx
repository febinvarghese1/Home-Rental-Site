import React,{useState,useEffect} from "react";
import { data } from "../../Data";
import SliderItem from "./SliderItem";
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";
const Slider = () => {
  let [slider,setSlider] = useState(0);

  const sliderHandlerLeft = () =>{
    setSlider(slider > 0 ? slider=slider-1 : slider=data.length-1);
  }

  
  const sliderHandlerRight = () =>{
    setSlider(slider < data.length-1 ? slider=slider+1 : slider=0);
  }
  useEffect(()=>{
      
  },[slider])

  return (
    <div className=" relative flex items-center w-screen h-56  md:mt-40 my-20  justify-between transition-all duration-700 ease-in">
      <button onClick={sliderHandlerLeft} className="border-2 border-white rounded-full bg-white absolute text-4xl cursor-pointer text-black z-20"><AiFillCaretLeft /></button>
      <SliderItem image={data[slider].image} />
      <button onClick={sliderHandlerRight} className="border-2 border-white rounded-full bg-white absolute text-4xl text-black cursor-pointer right-0 z-20"><AiFillCaretRight /></button>
    </div>
  );
};

export default Slider;
