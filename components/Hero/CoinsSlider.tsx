import React from "react";
import Image1 from "@/public/assets/CoinSliderImg1.png";
import Image2 from "@/public/assets/CoinSliderImg2.png";
import Image from "next/image";

const CoinsSlider = () => {
  return (
    <div className="mt-2 px-4 md:px-6">
      <div className="container h-[46px] bg-[#111736] overflow-x-scroll flex items-center px-[1 py-[16px] gap-[18px] flex-shrink-0 rounded-[7px]">
        <div className=" h-[30px] flex items-center w-[359px] ">
            <div className="flex-shrink-0 px-[13px] py-[16px] bg-[#1D214D] h-[30px] flex items-center gap-[16px] rounded-[29px]">
            <div className="flex items-center">

          <Image
            src={Image1}
            alt="Image1"
            className="w-[17.1px] h-[16.94px] flex-shrink-0 rounded-[9.6px]"
          />
          <p className="text-[14px] px-0.5 font-medium text-mainColor leading-normal">
            ETHEREUM
          </p>
            </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M6.99982 9.0416C6.84663 9.04187 6.6949 9.01186 6.55335 8.9533C6.41179 8.89473 6.28321 8.80877 6.17499 8.70035L3.0874 5.61219L3.91224 4.78735L6.99982 7.87494L10.0874 4.78735L10.9122 5.61219L7.82465 8.69977C7.71648 8.80829 7.58792 8.89436 7.44636 8.95303C7.3048 9.01169 7.15305 9.04179 6.99982 9.0416Z"
              fill="#6E62E5"
            />
          </svg>
            </div>
        <div className="flex items-center justify-center  w-[270px] h-[17px] gap-1">
          <p className="text-mainColor text-[14px] font-medium leading-normal">
            ETH: $3,578.12 <span className="text-[#C2353E] px-0.5">-2.5%</span>{" "}
            24h
          </p>
        </div>
        </div>
        <div className="flex items-center justify-center w-[ h-[20px]  gap-[8px] py-[13px] px-[18px]">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #3
          </p>
          <Image
            src={Image2}
            alt="Image2"
            className="h-[20px] w-[20px] rounded-full border border-white"
          />
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            DUCKY
          </p>
          <p className="text-[#C2353E] font-normal text-[14px] leading-normal">
            -13.74%
          </p>
        </div>
        <div className="flex items-center justify-center w-[   h-[20px]  gap-[8px] ">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #4
          </p>
          <Image
            src={Image2}
            alt="Image2"
            className="h-[20px] w-[20px] rounded-full border border-white"
          />
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            Terra
          </p>
         <div className="flex items-center gap-1">
         <p className="text-[#16B967] flex items-center font-normal text-[14px] leading-normal">
            +113,536% 
          </p>
            <p className="text-[#FFC762] font-normal text-[14px]  "> I </p>
            <p className="text-[#FFC762] font-normal text-[14px]  "> 22h </p>
         </div>
          
        </div>
        <div className="flex items-center justify-center  h-[20px]  gap-[8px] py-[13px] px-[18px]">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #5
          </p>
          <Image
            src={Image2}
            alt="Image2"
            className="h-[20px] w-[20px] rounded-full border border-white"
          />
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            DEXT
          </p>
          <p className="text-[#C2353E] font-normal text-[14px] leading-normal">
            -2.52%
          </p>
        </div>
        <div className="flex items-center justify-center  h-[20px]  gap-[8px] py-[13px] px-[18px]">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #6
          </p>
          <Image
            src={Image2}
            alt="Image2"
            className="h-[20px] w-[20px] rounded-full border border-white"
          />
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            SLAP
          </p>
          <p className="text-[#16B967] font-normal text-[14px] leading-normal">
            +93.52%
          </p>
        </div>
        <div className="flex items-center justify-center  h-[20px]  gap-[8px] py-[13px] px-[18px]">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #6
          </p>
          <Image
            src={Image2}
            alt="Image2"
            className="h-[20px] w-[20px] rounded-full border border-white"
          />
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            SBR
          </p>
          <p className="text-[#C2353E] font-normal text-[14px] leading-normal">
            -2.52%
          </p>
        </div>
        <div className=" h-[20px] flex items-center gap-1 justify-center">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #7
          </p>
          <span className="w-5 h-5 rounded-full bg-[#6E62E5] flex items-center justify-center text-[13px] text-mainColor font-normal">
            ?
                  </span>
                  <p className="text-mainColor font-normal text-[14px] leading-normal">???</p>
        </div>
        <div className=" h-[20px] flex items-center gap-1 justify-center">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #8
          </p>
          <span className="w-5 h-5 rounded-full bg-[#6E62E5] flex items-center justify-center text-[13px] text-mainColor font-normal">
            ?
                  </span>
                  <p className="text-mainColor font-normal text-[14px] leading-normal">???</p>
        </div>
        <div className=" h-[20px] flex items-center gap-1 justify-center">
          <p className="text-mainColor font-normal text-[14px] leading-normal">
            #9
          </p>
          <span className="w-5 h-5 rounded-full bg-[#6E62E5] flex items-center justify-center text-[13px] text-mainColor font-normal">
            ?
                  </span>
                  <p className="text-mainColor font-normal text-[14px] leading-normal">???</p>
        </div>
        
      </div>
    </div>
  );
};

export default CoinsSlider;