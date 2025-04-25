import React from "react";
import Image from "next/image";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import { FollowUpCallsItems , repeatedItems } from "./FollowUpCallsItems";


const FollowUpCalls = () => {
  return (
    <div className="hidden md:block mt-2 py-6 m-auto max-w-[1440px] px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] text-mainColor py-3 font-semibold">
            Follow Up Calls
          </h2>
        </div>
      </div>

      <div className="mt-2 max-w-[1440px] h-auto m-auto w-full flex flex-col gap-[2px]">
        <div className="flex items-center bg-[#111736] justify-between py-3 px-4">
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[60px] lg:w-[80px]">
            S/NO
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor  w-[150px] md:w-[186px]">
            Token
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[220px]">
            Influencer
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[184px]">
            Buy volume
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[177px]">
            Market Cap
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[160px]">
            Volume on First Call
          </div>
          <div className="text-center text-[14px] lgl:text-[14px] font-medium text-mainColor w-[150px] md:w-[147px]">
            Price Change{" "}
            <span className="hidden lgll:block">from first call</span>{" "}
          </div>
          <div className="text-center text-[14px] lgl:text-[14px] font-medium text-mainColor w-[150px] md:w-[147px]">
            Mentions
          </div>
        </div>

        <div className="flex flex-col gap-[1px] h-[600px] overflow-y-scroll scrollbar-custom">
          {repeatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#111736] justify-between py-2 px-4 text-slate-200 h-[57px] text-sm md:text-base"
            >
              <div className="text-center w-[60px] lg:w-[80px]">
                {index + 1}
              </div>
              <div className="text-center w-[150px] md:w-[186px] flex items-center justify-center">
                <p className="text-mainColor text-[15px]">{item.token}</p>
              </div>
              <div className="text-center w-[150px] md:w-[220px] flex items-center justify-center">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src={Image1}
                    alt="Influencer"
                    className="rounded-full w-[35px] h-[35px] hidden lgl:block"
                  />
                  <h4 className="text-mainColor text-[14px]">@Income Sharks</h4>
                </div>
              </div>

              <div className="text-center w-[150px] md:w-[184px]">
                <p className="text-mainColor text-[13px]">{item.buyVloume}</p>
              </div>
              <div className="text-center w-[150px] md:w-[177px]">
                <p className="text-mainColor text-[14px]">$175,000</p>
              </div>
              <div className="text-center w-[150px] md:w-[160px]">
                <p className="text-mainColor text-[14px]">$65,000</p>
              </div>
              <div className="text-center w-[150px] md:w-[147px]">
                <p
                  className={`${
                    item.isRed ? "text-[#C2353E]" : "text-[#16B967]"
                  } text-[14px]`}
                >
                  {item.PriceChangeFromFirstCall}
                </p>
              </div>
              <div className="text-center w-[150px] md:w-[147px]">
                <p className="text-mainColor text-[14px]">
                  {Math.floor(Math.random() * 40) + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowUpCalls;
