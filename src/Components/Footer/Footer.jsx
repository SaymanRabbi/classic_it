import React from "react";

const Footer = () => {
  return (
    <div className=" text-gray-500 text-center py-4 pb-16 md:pb-4 bg-[#EFFCFC] max-w-[1170px] mx-auto rounded-sm shadow">
      Copyright © Classic-It <br /> All Rights Reserved {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
