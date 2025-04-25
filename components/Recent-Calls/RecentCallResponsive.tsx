"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";
import { finalItems } from "./RecentCallsItems";
import { RecentCallTypes } from "./RecentCallsItems";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import Image2 from "@/public/assets/3InfluencerImg2.png";
import Image3 from "@/public/assets/3InfluencerImg3.png";

const imageCycle = [Image1, Image2, Image3];

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RecentCallResponsiveDetails = ({
  data,
  isOpen,
  toggleDropdown,
  index,
}: RecentCallTypes & { index: number }) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-3 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">{index + 1}</h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start ml-4 xsm:ml-1">
        <div className="flex items-center">
          <Image
            src={imageCycle[index % 3]}
            alt="Influencer Avatar"
            className="w-[26px] h-[26px] hidden xs:flex"
          />
          <p className="text-[12px] text-mainColor ml-2">{data.influencer}</p>
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
            { label: "Token", value: `${data.token} ` },
            { label: "Date and Time (UTC)", value: `${data.dateTime} ` },
            { label: "Buy Volume", value: data.buyVolume },
            { label: "Call Market Cap", value: data.marketCap },
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

const RecentCallResponsive = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-8 container w-full h-auto">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-[18px] text-mainColor font-semibold">
          Recent Calls
        </h2>
        <span>
          <RiArrowRightSLine className=" text-[#6E62E5]" size={22} />
        </span>
      </div>

      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-3 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-mainColor text-start flex items-center justify-center">
          S No
        </h3>
        <h3 className="w-full xs:w-[231px] text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0">
          Influencer
        </h3>
      </div>

      {finalItems.map((call, index) => (
        <RecentCallResponsiveDetails
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

export default RecentCallResponsive;
