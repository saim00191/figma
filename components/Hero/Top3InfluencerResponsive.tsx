import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Top3InfluencerResponsive = () => {
  return (
    <div className="mt-8 container w-full h-auto">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-[18px] text-mainColor font-semibold">
          Top 3 influencers
        </h2>
        <span>
          <RiArrowRightSLine className=" text-[#6E62E5]" size={22} />
        </span>
      </div>
      <div className="mt-2">
        <input
          type="text"
          className="w-full h-[46px] rounded-[6px] bg-[#111736] outline-none px-5 text-[14px] text-[#BCBCBC]"
          placeholder="@username......"
        />
        <button className="w-full h-[46px] rounded-[6px] bg-[#6E62E5] text-mainColor text-[18px] font-medium mt-4">
          Add Influenser
        </button>
      </div>
    </div>
  );
};

export default Top3InfluencerResponsive;
