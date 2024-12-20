"use client";

import React, { useState } from "react";
import Image1 from "@/public/assets/RecentCallImg1.png";
import Image2 from "@/public/assets/RecentCallImg2.png";
import Image3 from "@/public/assets/RecentCallImg3.png";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CallDetails = ({ data, isOpen, toggleDropdown }) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-3 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">
          {data.token}{" "}
          <span className={data.isPlus ? "text-[#16B967]" : "text-[#E53E3E]"}>
            {data.isPlus || data.isMinus}
          </span>
        </h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start ml-4 xsm:ml-1">
        <div className="flex items-center">
          <Image
            src={data.image}
            alt="Influencer Avatar"
            className="w-[26px] h-[26px] hidden xs:flex"
          />
          <p className="text-[12px] text-mainColor ml-2">{data.Influencer}</p>
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
            { label: "Date and Time (UTC)", value: `${data.Date} ${data.Time}` },
            { label: "Buy Volume", value: data.BuyVloume },
            { label: "Sell Volume", value: data.SellVolume },
            { label: "Call Market Cap", value: data.CallMarketcap },
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
  const recentCalls = [
    {
      token: "$M87",
      isPlus: "+23%",
      Date: "20 May 2024",
      Time: "22:00:30",
      image: Image1,
      Influencer: "@IncomeSharks",
      BuyVloume: "$75,000",
      SellVolume: "$75,000",
      CallMarketcap: "$486m",
    },
    {
      token: "$PNUT",
      isMinus: "-23%",
      Date: "20 May 2024",
      Time: "21:45:22",
      image: Image2,
      Influencer: "@EricCryptoman",
      BuyVloume: "$97,234",
      SellVolume: "$97,234",
      CallMarketcap: "$1.4b",
    },
    {
      token: "$SPEC",
      isPlus: "+48%",
      Date: "20 May 2024",
      Time: "21:01:06",
      image: Image3,
      Influencer: "@GemsOfRa",
      BuyVloume: "$97,234",
      SellVolume: "$97,234",
      CallMarketcap: "$52m",
    },
  ];

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
      </div>

      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-3 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-mainColor text-start flex items-center justify-center">
          Token
        </h3>
        <h3 className="w-full xs:w-[231px] text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0">
          Influencer
        </h3>
      </div>

      {recentCalls.map((call, index) => (
        <CallDetails
          key={index}
          data={call}
          isOpen={openIndexes.includes(index)}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
    </div>
  );
};

export default RecentCallResponsive;
