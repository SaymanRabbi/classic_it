import React from 'react';
import './Slider.css'

const Slide = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative">
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
          <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
            {mainTitle}
          </h2>
  
          <h3 className="text-[24px] text-gray-500">
            starting at{" "}
            <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
            .00
          </h3>
          <div className="cursor-pointer bg-[#335dff] text-[16px] text-white font-[500] py-[9px] px-[25px] rounded-[25px] relative button_hover overflow-hidden w-[130px] z-[0]">
            Shop Now
          </div>
        </div>
  
        <img
          className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
          src={img}
          alt="banner"
        />
      </div>
    );
};

export default Slide;