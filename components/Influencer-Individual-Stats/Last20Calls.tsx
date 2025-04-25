import React from "react";

import { Last20CallsItems, tableHeaders } from "./20CallsItems";

const RecentCalls = () => {
  const repeatedItems = Array(5).fill(Last20CallsItems).flat();

  return (
    <div className="mt-2 py-6 m-auto max-w-[1392px] px-4 md:px-6  relative">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] text-mainColor py-3 font-semibold">
          Last 20 Calls
        </h2>
      </div>

      <div className="mt-2 max-w-[1392px] h-[400px] mx-auto w-full flex flex-col gap-[2px]">
        <div className="rounded-[7px] grid grid-cols-4 gap-2 px-4 items-center h-[77px] bg-[#111736] ">
          {tableHeaders.map((header, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-[10px] xs:text-[13px] text-center smx:text-[14px]  text-white p-[10px] w-full h-[77px] lgll:-ml-4"
            >
              {header}
            </div>
          ))}
        </div>

        <div className="flex gap-[1px] h-[400px] flex-col overflow-y-scroll scrollbar-custom ">
          {repeatedItems.map((call, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-2 items-center px-4 justify-between bg-[#111736]"
            >
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full">
                {index + 1}
              </div>
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full xl:-ml-4">
                {call.token}
              </div>

              <div className="flex items-center smx:-ml-2 sm:-ml-4 sml:-ml-6 md:-ml-9 mdl:-ml-12 lg:-ml-20 lgll:-ml-[110px] xl:-ml-[120px]  justify-center text-white p-[10px] h-[59px] w-full">
                {call.buyVolume}
              </div>
              <div
                className={`flex items-center justify-center p-[10px] h-[59px] w-full ${
                  call.isRed ? "text-[#C2353E]" : "text-[#16B967]"
                }`}
              >
                {call.priceChange}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCalls;
