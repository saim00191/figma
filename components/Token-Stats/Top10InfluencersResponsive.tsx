"use client";

import React, { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { repeatedItems, Top10InfluencersType } from "./Top10InfluencersItems";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CallDetails = ({
  data,
  isOpen,
    toggleDropdown,
    index
}: Top10InfluencersType & { index: number }) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-4 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">{index + 1}</h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start">
        <p className="text-[14px]  xs:ml-0 xsm:ml-8 sm:ml-10 font-medium text-[#6E62E5] flex gap-1 items-center">
          {data.Influenser}
        </p>
      </div>
      <div className="w-full h-full flex ml-9 xs:ml-8 xsm:ml-12 sm:ml-14 items-center justify-start">
        <div className="flex items-center text-mainColor text-[12px] justify-center text-center ">
          {data.Followers}
        </div>
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
            {
              label: "Date and Time (UTC)",
              value: data.date,
            },
            {
              label: "Price Impact",
              value: data.PriceImpact,
            },
            {
              label: "Number of Mentions",
              value: data.NumberofMentions,
            },
            {
              label: "Call Market Cap",
              value: data.CallMarketcap,
            },
            {
              label: "Call Volume Generated",
              value: data.VolumeGenerated,
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-3 py-2">
              <h2 className="text-[12px] font-bold text-mainColor">
                {item.label}
              </h2>
              <p
                className={`${nunitoSans.className} text-[12px] ml-6 xs:ml-4 xsm:-ml-4 md:-ml-7 xs:text-[14px] text-mainColor col-span-2 `}
              >
                <div className="flex flex-col gap-1">{item.value}</div>
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const LeaderBoardResponsive = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-8 container w-full h-auto ">
      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-4 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-[14px] text-mainColor text-start flex items-center justify-center">
          Progress
        </h3>
        <h3 className="w-full xs:w-[231px]  text-mainColor h-full flex items-center justify-start   text-[14px] xsm:ml-8 sm:ml-10">
          Influencer
        </h3>
        <h3 className="w-full  text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0 xs:whitespace-nowrap text-[12px] xs:text-[14px] xsm:ml-8 sm:ml-10">
          Followers
        </h3>
      </div>

      {repeatedItems.slice(0, 10).map((call, index) => (
          <CallDetails
              index={index}
          key={index}
          data={call}
          isOpen={openIndexes.includes(index)}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
    </div>
  );
};

export default LeaderBoardResponsive;
