"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703396445/banner-2_q9qyrr.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703396445/banner-1_uhl6rf.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703396445/banner-3_kuor6y.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="w-[100%] pt-6 lg:pt-0 mx-auto">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
