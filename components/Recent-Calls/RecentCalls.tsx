import React from "react";
import { finalItems, tableHeaders } from "./RecentCallsItems";
import Image from "next/image";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import Image2 from "@/public/assets/3InfluencerImg2.png";
import Image3 from "@/public/assets/3InfluencerImg3.png";

const imageCycle = [Image1, Image2, Image3];

const RecentCalls = () => {

  return (
    <div className="mt-2 py-6 m-auto max-w-[1440px] px-4 md:px-6 hidden mdl:block relative">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] text-mainColor py-3 font-semibold">Recent Calls</h2>
        <input
          type="text"
          className="w-[191px] h-[40px] bg-[#111736] outline-none bg-transparent border border-[#383838] rounded-[6px] px-4 text-mainColor text-[13px]"
          placeholder="Search..."
        />
      </div>

      <div className="mt-2 max-w-[1440px] h-[570px] mx-auto w-full flex flex-col gap-[2px]">
        <div className="rounded-[7px] grid grid-cols-6 items-center h-[77px] bg-[#111736] justify-between">
          {tableHeaders.map((header, i) => (
            <div key={i} className="flex items-center justify-center text-white p-[10px] w-full h-[77px] lgll:-ml-4">{header}</div>
          ))}
        </div>

        <div className="flex gap-[1px] flex-col overflow-y-scroll scrollbar-custom">
          {finalItems.map((call, i) => (
            <div key={i} className="grid grid-cols-6 items-center justify-between bg-[#111736]">
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">{i + 1}</div>
              <div className="flex items-center justify-center text-mainColor text-[14px] p-[10px] h-[59px] w-full lg:w-[189px]">
                {call.token} <span className={call.changeColor}>{call.change}</span>
              </div>
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full">{call.dateTime}</div>
              <div className="flex items-center justify-center text-white p-[10px] h-[59px] w-full">
                <div className="flex items-center gap-1">
                  <Image src={imageCycle[i % 3]} alt="Influencer Image" className="w-[35px] h-[35px]" />
                  <p className="text-mainColor text-[14px] font-normal">{call.influencer}</p>
                </div>
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">{call.buyVolume}</div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">{call.marketCap}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCalls;
