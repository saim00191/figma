"use client";

import React, { useState } from "react";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FollowUpCallsDetails , repeatedItems} from "./FollowUpCallsItems";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FollowUpCallDetails = ({
  data,
  isOpen,
  toggleDropdown,
  index,
}: FollowUpCallsDetails & { index: number }) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-3 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">{index + 1}</h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start ">
        <div className="flex items-center">
          <Image
            src={Image1}
            alt="Influencer Avatar"
            className="w-[26px] h-[26px] hidden xs:flex"
          />
          <p className="text-[12px] text-mainColor ml-2">@IncomeSharks</p>
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
              label: "Token",
              value: data.token,
            },
            { label: "Buy Volume", value: data.buyVloume },
            { label: "Market Cap", value: "$175,000" },
            { label: "Volume on First Call", value: "$65000" },
            {
              label: "Price Change from first call",
              value: data.PriceChangeFromFirstCall,
            },
            {
              label: "Mentions",
              value: Math.floor(Math.random() * 40 + 1),
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-3 py-2">
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

const FolllowUpCallResponsive = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-8 container w-full h-auto py-2 ">
      <div className="flex flex-col xs:flex-row gap-3 items-start xs:items-center xs:justify-between py-4">
        <h2 className="text-[18px] py-4 text-mainColor font-semibold xs:whitespace-nowrap">
          Follow Up Calls
        </h2>
      </div>

      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-3 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-mainColor text-start flex items-center justify-center">
          S/N
        </h3>
        <h3 className="w-full xs:w-[231px] text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0">
          Influencer
        </h3>
      </div>

      {repeatedItems.slice(0, 15).map((call, index) => (
        <FollowUpCallDetails
          key={index}
          index={index}
          data={call}
          isOpen={openIndexes.includes(index)}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
    </div>
  );
};

export default FolllowUpCallResponsive;
