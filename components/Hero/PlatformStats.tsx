import React from "react";
import TokenStatsPanelItems from "./TokenStatsPanelItems";

const PlatformStats = () => {
  return (
    <div className="py-6 container w-full h-auto ">
      <h2 className="text-[20px] font-semibold text-mainColor whitespace-nowrap">
        Platform stats
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-7 mt-6">
        {TokenStatsPanelItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[76px] bg-[#111736] rounded-[6px] w-full"
          >
            <div className="flex items-center justify-start px-2 gap-3 w-[160px] ">
              <div
                style={{ backgroundColor: item.backgroundColor }}
                className={`h-[40px] w-[40px] rounded-[9px] flex items-center justify-center`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-mainColor font-semibold">
                  {item.number}
                </p>
                <p className="text-[10px]  font-semibold text-[#BCBCBC]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformStats;
