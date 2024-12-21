import React from "react";
import Image from "next/image";
import LeaderboardItems from "./LeaderBoardItem";
import { CiSearch } from "react-icons/ci";

const Leaderboard = () => {
  return (
    <div className="mt-2 py-6 m-auto max-w-[1440px] px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] text-mainColor py-3 font-semibold">
            Influencers Leaderboard
          </h2>
          <div className="hidden lgll:flex items-center gap-3 w-[480px] h-[40px] ">
            <button className="bg-[#6E62E5] p-[10px] w-[111px] rounded-[98px] h-full text-white font-medium text-[12px]">
              All Time
            </button>
            <button className="bg-[#111736] hover:bg-[#6E62E5] p-[10px] w-[111px] rounded-[98px] h-full text-white font-medium text-[12px]">
              Last 7 days
            </button>
            <button className="bg-[#111736] hover:bg-[#6E62E5] p-[10px] w-[111px] rounded-[98px] h-full text-white font-medium text-[12px]">
              Last 30 days
            </button>
            <button className="bg-[#111736] hover:bg-[#6E62E5] p-[10px] w-[111px] rounded-[98px] h-full text-white font-medium text-[12px]">
              Last 3 months
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-[#383838] w-[172px] rounded-[8px] h-[40px] flex items-center justify-center">
            <div className="flex items-center justify-between  w-[148px] h-[17px]">
              <p className="text-[14px] text-mainColor">Average Volume</p>
              <span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00063 5.83368C4.82556 5.83398 4.65215 5.79969 4.49038 5.73276C4.3286 5.66583 4.18165 5.56759 4.05796 5.44368L0.529297 1.91435L1.47196 0.97168L5.00063 4.50035L8.5293 0.97168L9.47196 1.91435L5.9433 5.44301C5.81967 5.56704 5.67274 5.6654 5.51096 5.73245C5.34919 5.79949 5.17575 5.8339 5.00063 5.83368Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BCBCBC]" />
            <input
              type="text"
              placeholder="Search"
              className="w-[191px] h-[40px] bg-[#111736] rounded-[8px] outline-none border text-[#BCBCBC] text-[14px] border-[#383838] pl-8"
            />
          </div>
        </div>
      </div>

      <div className="mt-2 max-w-[1440px] h-auto m-auto w-full flex flex-col gap-[2px]">
        <div className="flex items-center bg-[#111736] justify-between py-3 px-4">
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[60px] lg:w-[80px]">
            S/NO
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[220px]">
            Influencer
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[186px]">
            Average Buy Volume
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[184px]">
            Highest Buy volume
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[177px]">
            Average Xs
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[160px]">
            Highest Xs
          </div>
          <div className="text-center text-[14px] lgl:text-[14px] font-medium text-mainColor w-[150px] md:w-[147px]">
            Average Follow up{" "}
            <span className="hidden lgll:block">Call Valume</span>{" "}
          </div>
          <div className="text-center text-[14px] lgl:text-[14px] font-medium text-mainColor w-[150px] md:w-[147px]">
            Highest Follow up{" "}
            <span className="hidden lgll:block">Call Valume</span>{" "}
          </div>
          <div className="text-center text-[14px] lgl:text-[15px] font-medium text-mainColor w-[150px] md:w-[147px]">
            Number of Calls
          </div>
        </div>

        <div className="flex flex-col gap-[1px] h-[275px] overflow-y-scroll scrollbar-custom">
          {LeaderboardItems.map((item) => (
            <div className="flex items-center bg-[#111736] justify-between py-2 px-4 text-slate-200 h-[57px] text-sm md:text-base">
              <div className="text-center w-[60px] lg:w-[80px]">{item.SNo}</div>
              <div className="text-center w-[150px] md:w-[220px] flex items-center justify-center">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src={item.image}
                    alt="Influencer"
                    className="rounded-full w-[35px] h-[35px] hidden lgl:block"
                  />
                  <h4 className="text-mainColor text-[14px]">
                    {item.Influencer}
                  </h4>
                  <span className="text-[#6E62E5] ">{item.star} </span>
                </div>
              </div>
              <div className="text-center w-[150px] md:w-[186px] flex items-center justify-center">
                <p className="text-mainColor text-[15px]">
                  {item.AverageBuyVolume}
                </p>
              </div>
              <div className="text-center w-[150px] md:w-[184px]">
                <p className="text-mainColor text-[13px]">
                  {item.HighestBuyvolume}
                </p>
              </div>
              <div className="text-center w-[150px] md:w-[177px]">
                <p className="text-mainColor text-[14px]">{item.AverageXs}</p>
              </div>
              <div className="text-center w-[150px] md:w-[160px]">
                <p className="text-mainColor text-[14px]">{item.HighestXs}</p>
              </div>
              <div className="text-center w-[150px] md:w-[147px]">
                <p className="text-mainColor text-[14px]">
                  {item.AverageFollowup}
                </p>
              </div>
              <div className="text-center w-[150px] md:w-[147px]">
                <p className="text-mainColor text-[14px]">
                  {item.HighestFollowup}
                </p>
              </div>
              <div className="text-center w-[150px] md:w-[147px]">
                {item.NumberofCalls}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
