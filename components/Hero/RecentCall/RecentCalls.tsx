import React from "react";
import callData from "./callData";
import Image from "next/image";

const RecentCalls = () => {
  const tableHeaders = [
    "Token",
    "Date and Time (UTC)",
    "Influencer",
    "Buy volume",
    "Sell Volume",
    "Call Market Cap",
  ];

  return (
    <div className="mt-2 py-6 m-auto max-w-[1440px] px-4 md:px-6 hidden mdll:block relative">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] text-mainColor py-3 font-semibold">
          Recent Calls
        </h2>
        <p className="text-[#6E62E5] text-[20px] font-semibold cursor-pointer hover:underline">
          See All
        </p>
      </div>

      <div className="mt-2 max-w-[1440px] h-[252px] mx-auto w-full flex flex-col gap-[2px]">
        <div className="rounded-[7px] grid grid-cols-6 items-center h-[77px] bg-[#111736] justify-between">
          {tableHeaders.map((header, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-white p-[10px] w-full h-[77px] lgll:-ml-4"
            >
              {header}
            </div>
          ))}
        </div>

        <div className="flex gap-[1px] flex-col overflow-y-scroll scrollbar-custom ">
          {callData.map((call, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center justify-between bg-[#111736]"
            >
              <div className="flex items-center justify-center text-mainColor text-[14px] p-[10px] h-[59px] w-full lg:w-[189px]">
                {call.token}{" "}
                <span className={call.changeColor}> {call.change}</span>
              </div>
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full">
                {call.dateTime}
              </div>
              <div className="flex items-center justify-center lgll:justify-start text-white p-[10px] h-[59px] w-full">
                <div className="flex items-center gap-1">
                  <Image
                    src={call.influencer.image}
                    alt="Influencer Image"
                    className="w-[35px] hidden lg:block h-[35px]"
                  />
                  <p className="text-mainColor text-[14px] font-normal">
                    {call.influencer.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {call.buyVolume}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {call.sellVolume}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {call.marketCap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCalls;
