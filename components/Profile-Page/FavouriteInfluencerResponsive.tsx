"use client";
import React, { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";
import { FavouriteInfluencerItems } from "./FavouriteInfluencerItems";

export interface FavouriteInfluencer {
  influencer: string;
  followers: string;
  averageXS: string;
  NOC: number;
  AverageBuyVolume: string;
  HighestBuyVolume: string;
  BestCall: string;
}

export interface FavouriteInfluencerType {
  data: FavouriteInfluencer;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const FavouriteInfluencerDetails = ({
  data,
  isOpen,
  toggleDropdown,
}: FavouriteInfluencerType) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-3 px-2 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">{data.influencer}</h3>
      </div>
      <div className="w-full text-mainColor xs:w-[194px] h-full flex items-center justify-center xs:justify-start ml-4 xsm:ml-1">
        {data.followers}
      </div>
      <div className="flex items-center justify-end ml-8 xs:ml-12 xsm:ml-20">
        <button
          onClick={toggleDropdown}
          className="w-full h-full flex justify-center items-center"
          aria-expanded={isOpen}
          aria-label="Toggle details"
        >
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-white" />
          ) : (
            <ChevronDown className="h-4 w-4 text-white" />
          )}
        </button>
      </div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-[#111736] px-4 py-3 text-mainColor"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: "Average XS", value: `${data.averageXS}` },
            { label: "Number of Calls", value: data.NOC },
            {
              label: "Average buy volume per call ",
              value: data.AverageBuyVolume,
            },
            { label: "Highest Buy Voulume", value: data.HighestBuyVolume },
            { label: "Best Calls", value: data.BestCall },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-3 py-2">
              <h2 className="text-[12px] font-bold text-mainColor">
                {item.label}
              </h2>
              <p
                className={`${nunitoSans.className} text-[12px] xs:text-[14px] text-mainColor col-span-2 ml-4`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FavouriteInflencerResponsive = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleDropdown = (i: number) =>
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((j) => j !== i) : [...prev, i]
    );

  return (
    <div className="mt-8 container w-full h-auto">
      <h2 className="text-[18px] py-4 text-mainColor font-semibold">
        Favourite Influencer
      </h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="h-[46px] border border-[#111736] text-[14px] rounded-[8px] bg-transparent outline-none text-mainColor px-4"
          placeholder="@username..."
        />
        <button className="h-[46px] bg-[#6E62E5] rounded-[8px] text-mainColor">
          Add Influencer
        </button>
      </div>

      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-3 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-mainColor text-start flex items-center justify-center">
          Influencer
        </h3>
        <h3 className="w-full xs:w-[231px] text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0">
          Followers
        </h3>
      </div>
      {FavouriteInfluencerItems.slice(0, 4).map((call, i) => (
        <FavouriteInfluencerDetails
          key={i}
          data={call}
          isOpen={openIndexes.includes(i)}
          toggleDropdown={() => toggleDropdown(i)}
        />
      ))}
    </div>
  );
};

export default FavouriteInflencerResponsive;
