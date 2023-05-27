import React from "react";
import { Header } from "../components";
import { rightHeroImage } from "../assets";
import Image from "next/image";

const index = () => {
  return (
    <section className="landing__hero h-[1000px]  bg-cover flex  flex-col w-full p-3 ">
      <Header />

      <h1 className="text-[#fff]  text-[57px] lg:text-[100px] font-bold text-center tracking-tighter leading-tight">
        Your portal
        <br />
        to {"  "} more
      </h1>

      <div className="slash__container flex justify-center -m-3   ">
        <svg
          width="283"
          height="36"
          viewBox="0 0 283 36"
          fill="none"
          className="hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 34C51.7161 14.0216 177.119 -17.1905 281 17.7881"
            stroke="#FDE047"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="163"
          height="22"
          viewBox="0 0 163 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden"
        >
          <path
            d="M1.58594 19.8699C29.9978 8.45267 101.663 -9.38448 161.029 10.6051"
            stroke="#FDE047"
            stroke-width="2.28593"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <p className="font-medium text-sm text-center text-landingParagraph lg:mt-[54px] mt-[50px]  lg:mb-[74px] mb-[47px]  w-full lg:w-[540px] tracking-tight  mx-auto">
        Wealth building is possible. You just need the right partner. With
        better financial tools, Ardilla has made it so much easier for you to
        start building wealth. Take advantage of the Ardilla platform by signing
        up with your email address.
      </p>

      <div className="access_more bg-[#fff] h-[65px] w-full lg:w-[509px] mx-auto rounded-[100px] flex items-center justify-between p-3">
        <input
          type="text"
          placeholder="Enter your email address"
          className=" h-[65px] rounded-[100px] text-[#000] font-normal text-sm pl-[20px] outline-none"
        />
        <button className="bg-[#8807F7] hover:bg-[#8707f7e6] text-[#fff] text-center justify-center  font-semibold text-sm rounded-[100px] w-[176px] h-[55px] flex items-center">
          Access more{" "}
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            className="ml-[3px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.813 4.69208L6.07872 1.31653C1.5444 -0.945033 -0.308512 0.907881 1.95865 5.43661L2.96068 7.43507L1.95865 9.43353C-0.308512 13.9623 1.55 15.8208 6.07872 13.5536L12.813 10.1892C15.8303 8.67221 15.8359 6.20352 12.813 4.69208ZM9.98048 7.8829L5.71486 7.8941C5.54692 7.8941 5.40137 7.82692 5.29501 7.72056C5.18865 7.6142 5.12148 7.46865 5.12148 7.30072C5.12148 6.97604 5.39018 6.70734 5.71486 6.70734L9.98048 6.69614C10.3052 6.69614 10.5739 6.96484 10.5739 7.28952C10.5739 7.6142 10.3052 7.8829 9.98048 7.8829Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="hero__image right-0 absolute lg:top-[283.21px] top-[67%] ">
        <Image
          src={rightHeroImage}
          alt="hero"
          className="lg:w-full w-[170px]"
        />
      </div>
    </section>
  );
};

export default index;
