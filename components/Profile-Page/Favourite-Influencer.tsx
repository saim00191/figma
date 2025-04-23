import React from "react";
import Image from "next/image";
import InfluencerImg from "@/public/assets/image.png";
import { FavouriteInfluencerItems } from "./FavouriteInfluencerItems";
import FavouriteInfluencerResponsive from "./FavouriteInfluencerResponsive";

type InfluencerItem = {
  influencer: string;
  followers: string;
  averageXS: string;
  NOC: number;
  AverageBuyVolume: string;
  HighestBuyVolume: string;
  BestCall: string;
};

const tableHeaders = [
  "Influencer",
  "Followers",
  "Average Xs",
  "Number of calls",
  "Average buy volume",
  "Highest buy volume",
  "Best Call",
];

const repeatedItems: InfluencerItem[] = [
  ...FavouriteInfluencerItems,
  ...Array.from({ length: 11 }).flatMap(() =>
    FavouriteInfluencerItems.slice(2)
  ),
];

const Leaderboard = () => (
  <>
    <div className="sml:hidden block">
    <FavouriteInfluencerResponsive />
    </div>
  <div className="mt-2 py-6 pb-20 m-auto w-full mdl:max-w-[1164px] px-4 md:px-6 hidden sml:block">
    <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-[2px]">
      <div className="flex justify-between items-center max-w-full mb-5">
        <h2 className="text-[20px] font-semibold text-mainColor">
          Favourite Influencers
        </h2>
        <div className="h-[46px] flex items-center gap-1.5">
          <input
            type="text"
            placeholder="@username..."
            className="text-[#BCBCBC] text-[14px] w-[251px] h-full rounded-[6px] border outline-none px-4 bg-transparent border-[#383838]"
          />
          <button className="w-[160px] h-full bg-[#6E62E5] text-white rounded-[6px]">
            Add Influencer
          </button>
        </div>
      </div>
      <div className="rounded-[7px] grid grid-cols-7 items-center bg-[#111736] justify-between">
        {tableHeaders.map((header, index) => (
          <div
            key={index}
            className="flex items-center text-center justify-center text-white p-[10px] w-full text-[13px] lg:text-[14px] h-[77px] lgll:-ml-4"
          >
            {header}
          </div>
        ))}
      </div>
      <div className="flex gap-[1px] flex-col max-h-[465px] overflow-y-auto scrollbar-custom">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-7 items-center justify-between px-2 bg-[#111736]"
          >
            <div className="flex items-center gap-2 w-full">
              <Image
                src={InfluencerImg}
                alt="Influencer"
                className="rounded-full w-[35px] h-[35px] hidden lgl:block"
              />
              <h4 className="text-mainColor text-[14px]">{item.influencer}</h4>
            </div>
            {[
              "followers",
              "averageXS",
              "NOC",
              "AverageBuyVolume",
              "HighestBuyVolume",
              "BestCall",
            ].map((key, idx) => (
              <div
                key={key}
                className={`flex items-center lgll:-ml-3 justify-center text-white p-[10px] text-[14px] h-[59px] w-full ${
                  idx < 2 ? "text-[12px]" : ""
                }`}
              >
                {/* Use key as a safe property of InfluencerItem */}
                {item[key as keyof InfluencerItem]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
);

export default Leaderboard;
