import { Heebo } from "next/font/google";
import React from "react";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPostcard = () => {
  return (
    <div>
      <div className=" bg-white flex flex-col justify-evenly w-[100%] md:w-[483px] h-[356px]">
        <div className="w-[100%] md:w-[391px] h-[286px] m-auto flex flex-col items-center justify-evenly">
          <h2
            className={`${heebo.className} font-bold text-[20px] md:text-[26px]`}
          >
            Making a design system from scratch
          </h2>
          <div className=" p-2 pl-2 w-[100%] md:w-[301.28px] h-[42.12px] flex justify-between">
            <p
              className={`${heebo.className}text-[18px] font-normal text-black/70`}
            >
              12 Feb 2020
            </p>
            <p>|</p>
            <p
              className={`${heebo.className}text-[18px] font-normal text-black/70`}
            >
              Design, Pattern
            </p>
          </div>
          <p className="w-[100%] md:w-[391px] h-[129.7px] pt-6 ml-[3px] text-myBlack text-[18px] md:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentPostcard;
