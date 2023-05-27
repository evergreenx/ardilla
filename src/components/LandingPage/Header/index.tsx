import React from "react";
import { logo } from "../../../assets";
import Image from "next/image";

const index = () => {
  return (
    <nav className=" landingPageNav bg-cover lg:justify-normal justify-between bg- bg-no-repeat h-[140px] w-full flex items-center space-x-0 lg:space-x-[900px] lg:pl-[130px] p-4 py">
      <div className="logo__section">
        <Image src={logo} alt="logo" />
      </div>

      <div className="links font-sm text-[#fff] font-medium">Features</div>
    </nav>
  );
};

export default index;
