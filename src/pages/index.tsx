import React from "react";
import { Header } from "../components";

const index = () => {
  return (
    <div className="">
      <Header />
      <section className="landing__hero h-[1000px] bg-cover flex  flex-col">
        <h1 className="text-[#fff] text-[100px] font-bold text-center">
          Your portal to more
        </h1>

        <p className="font-medium text-sm text-center text-landingParagraph mt-[54px] mb-[74px] w-[540px] tracking-tight  mx-auto">
          Wealth building is possible. You just need the right partner. With
          better financial tools, Ardilla has made it so much easier for you to
          start building wealth. Take advantage of the Ardilla platform by
          signing up with your email address.
        </p>



        <div className="access_more bg-[#fff] h-[65px]">


        </div>
      </section>
    </div>
  );
};

export default index;
