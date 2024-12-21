"use client";

import React, { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import statesPanelItems from "./TokenStatesPanelItem";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface CallDetailData {
  SNo: number;
  isPlus: boolean;
  isMinus: boolean;
  Ticker: string;
  NumberOfMentions: number;
  HighestVolume: string;
  influencer: string;
  FirstInfluencer: string;
  SecondInfluencer: string;
  ThirdInfluencer: string;
}

interface CallDetailsProps {
  data: CallDetailData;
  isOpen: boolean;
  toggleDropdown: () => void;
}


const CallDetails = ({ data, isOpen, toggleDropdown }:CallDetailsProps) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-4 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">
          {data.SNo}{" "}
          <span className={data.isPlus ? "text-[#16B967]" : "text-[#E53E3E]"}>
            {data.isPlus || data.isMinus}
          </span>
        </h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start">
        <p className="text-[14px] ml-6 xs:ml-0 xsm:ml-8 sm:ml-10 font-medium text-[#6E62E5] flex gap-1 items-center">
          {data.Ticker}
          <span>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 0.697173V7.4894C11.25 7.73636 11.0498 7.93657 10.8028 7.93657C10.5559 7.93657 10.3557 7.73636 10.3557 7.4894V1.77683L1.5134 10.6191C1.42606 10.7064 1.31165 10.75 1.19719 10.75C1.08274 10.75 0.968326 10.7064 0.880983 10.6191C0.706339 10.4444 0.706339 10.1613 0.880983 9.98662L9.72326 1.14435H4.0106C3.76364 1.14435 3.56343 0.944128 3.56343 0.697173C3.56343 0.450218 3.76364 0.25 4.0106 0.25H10.8028C11.0498 0.249979 11.25 0.450218 11.25 0.697173Z"
                fill="#6E62E5"
              />
            </svg>
          </span>
        </p>
      </div>
      <div className="w-full h-full flex ml-9 xs:ml-8 xsm:ml-8 sm:ml-14 items-center justify-start">
        <div className="flex items-center text-mainColor text-[12px] justify-center text-center ">
          {data.NumberOfMentions}
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
              label: "Highest volume",
              value: data.HighestVolume,
              influencer: data.influencer,
            },
            {
              label: "Top 3 Influencers",
              value: data.FirstInfluencer,
              value2: data.SecondInfluencer,
              value3: data.ThirdInfluencer,
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-3 py-2">
              <h2 className="text-[12px] font-bold text-mainColor">
                {item.label}
              </h2>
              <p
                className={`${nunitoSans.className} text-[12px] ml-6 xs:ml-4 xsm:-ml-4 md:-ml-7 xs:text-[14px] text-mainColor col-span-2 `}
              >
                <div className="flex flex-col gap-1">
                  {item.value}
                  {item.influencer && (
                    <div className="text-[14px] text-mainColor">
                      {item.influencer}
                    </div>
                  )}
                  {item.value2 && (
                    <div className="text-[14px] text-mainColor">
                      {item.value2}
                    </div>
                  )}
                  {item.value3 && (
                    <div className="text-[14px] text-mainColor">
                      {item.value3}
                    </div>
                  )}
                </div>
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
      <div className="flex flex-col xs:flex-row gap-3 items-start xs:items-center xs:justify-between py-4">
        <h2 className="text-[18px] text-mainColor font-semibold xs:whitespace-nowrap">
          Token stats panel
        </h2>
        <div className="flex items-center gap-2 justify-center xs:justify-end  w-full">
          <span className="h-[46px] w-[46px] rounded-full cursor-pointer bg-[#111736] flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_530_3599)">
                <path
                  d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                  fill="#6E62E5"
                />
                <path
                  d="M19.762 18.6117L15.1007 13.9505C14.7831 13.6329 14.2687 13.6329 13.9511 13.9505C13.6335 14.2678 13.6335 14.7828 13.9511 15.1001L18.6124 19.7614C18.7711 19.9201 18.979 19.9996 19.1872 19.9996C19.395 19.9996 19.6031 19.9201 19.762 19.7614C20.0796 19.444 20.0796 18.9291 19.762 18.6117Z"
                  fill="#6E62E5"
                />
              </g>
              <defs>
                <clipPath id="clip0_530_3599">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="h-[46px] w-[46px] rounded-full cursor-pointer bg-[#111736] flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_530_3608)">
                <path
                  d="M1.58252 4.20375H10.798C11.0858 5.53312 12.2697 6.5325 13.6839 6.5325C15.0981 6.5325 16.282 5.53312 16.5699 4.20375H18.4178C18.763 4.20375 19.0428 3.92391 19.0428 3.57875C19.0428 3.23359 18.763 2.95375 18.4178 2.95375H16.5699C16.282 1.62437 15.0981 0.625 13.6839 0.625C12.2697 0.625 11.0858 1.62437 10.798 2.95375H1.58252C1.23736 2.95375 0.95752 3.23359 0.95752 3.57875C0.95752 3.92391 1.23736 4.20375 1.58252 4.20375ZM13.6839 1.875C14.6235 1.875 15.3877 2.63937 15.3877 3.57875C15.3877 4.51812 14.6233 5.2825 13.6839 5.2825C12.7445 5.2825 11.9802 4.51812 11.9802 3.57875C11.9802 2.63937 12.7444 1.875 13.6839 1.875Z"
                  fill="#6E62E5"
                />
                <path
                  d="M18.4178 9.37562H9.20236C8.91455 8.04625 7.73064 7.04688 6.31643 7.04688C4.90221 7.04688 3.7183 8.04625 3.43049 9.37562H1.58252C1.23736 9.37562 0.95752 9.65547 0.95752 10.0006C0.95752 10.3458 1.23736 10.6256 1.58252 10.6256H3.43049C3.7183 11.955 4.90221 12.9544 6.31643 12.9544C7.73064 12.9544 8.91455 11.955 9.20236 10.6256H18.4178C18.763 10.6256 19.0428 10.3458 19.0428 10.0006C19.0428 9.65547 18.763 9.37562 18.4178 9.37562ZM6.31643 11.7044C5.37689 11.7044 4.61268 10.94 4.61268 10.0006C4.61268 9.06125 5.37705 8.29687 6.31643 8.29687C7.2558 8.29687 8.02017 9.06109 8.02017 10.0006C8.02017 10.9402 7.25596 11.7044 6.31643 11.7044Z"
                  fill="#6E62E5"
                />
                <path
                  d="M18.4178 15.7975H16.5699C16.282 14.4681 15.0981 13.4688 13.6839 13.4688C12.2697 13.4688 11.0858 14.4681 10.798 15.7975H1.58252C1.23736 15.7975 0.95752 16.0773 0.95752 16.4225C0.95752 16.7677 1.23736 17.0475 1.58252 17.0475H10.798C11.0858 18.3769 12.2697 19.3762 13.6839 19.3762C15.0981 19.3762 16.282 18.3769 16.5699 17.0475H18.4178C18.763 17.0475 19.0428 16.7677 19.0428 16.4225C19.0428 16.0773 18.763 15.7975 18.4178 15.7975ZM13.6839 18.1262C12.7444 18.1262 11.9802 17.3619 11.9802 16.4225C11.9802 15.4831 12.7445 14.7187 13.6839 14.7187C14.6233 14.7187 15.3877 15.4831 15.3877 16.4225C15.3877 17.3619 14.6235 18.1262 13.6839 18.1262Z"
                  fill="#6E62E5"
                />
              </g>
              <defs>
                <clipPath id="clip0_530_3608">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>

      <div className="h-[54px] mb-2 rounded-[7px] bg-[#111736] mt-3 px-[16px] grid grid-cols-4 py-2">
        <h3 className="w-full xs:w-[65px] h-full -ml-4 xs:-ml-0 text-[14px] text-mainColor text-start flex items-center justify-center">
          S/N
        </h3>
        <h3 className="w-full xs:w-[231px] text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0 text-[14px] xsm:ml-8 sm:ml-10">
          Ticker
        </h3>
        <h3 className="w-full  text-mainColor h-full flex items-center justify-start ml-6 xs:ml-0 xs:whitespace-nowrap text-[12px] xs:text-[14px] xsm:ml-8 sm:ml-10">
          Number of Nations
        </h3>
      </div>

      {statesPanelItems.slice(0, 2).map((call, index) => (
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

export default LeaderBoardResponsive;
