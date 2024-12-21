import React from "react";
import { CiSearch } from "react-icons/ci";
import TokenStatsPanelItems from "../TokenStatsPanelItems";
const header = [
  "S/N",
  "Ticker",
  ,
  "Highest Volume",
  "Top 3 Influencers",
  "Number of mentions",
];

export const statesPanelItems = [
  {
    SNo: 1,
    Ticker: "$TRAC",
    HighestVolume: "$81,000",
    influencer: "@IncomeSharks",
    FirstInfluencer: "@IncomeSharks",
    SecondInfluencer: "@AltcoinSensei",
    ThirdInfluencer: "@GemsOfRa",
    NumberOfMentions: 250,
  },
  {
    SNo: 2,
    Ticker: "$TRACK",
    HighestVolume: "$44,000",
    influencer: "@nevershill",
    FirstInfluencer: "@nevershill",
    SecondInfluencer: "@AdamHODL",
    ThirdInfluencer: "@Berniefrogger",
    NumberOfMentions: 120,
  },
  {
    SNo: 3,
    Ticker: "$TRACK",
    HighestVolume: "$44,000",
    influencer: "@nevershill",
    FirstInfluencer: "@nevershill",
    SecondInfluencer: "@AdamHODL",
    ThirdInfluencer: "@Berniefrogger",
    NumberOfMentions: 120,
  },
  {
    SNo: 4,
    Ticker: "$TRACK",
    HighestVolume: "$44,000",
    influencer: "@nevershill",
    FirstInfluencer: "@nevershill",
    SecondInfluencer: "@AdamHODL",
    ThirdInfluencer: "@Berniefrogger",
    NumberOfMentions: 120,
  },
];

const TokenStatsPanel = () => {
  return (
    <div className="mt-4 m-auto max-w-[1440px] px-4 md:px-6  relative">
      <div className="flex flex-col lgl:flex-row items-start justify-between pb-5">
        <div className="lgl:w-[809px] w-full h-auto xxl:h-[310px] ">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-semibold text-mainColor">
              Token stats panel
            </h2>
            <div className="flex items-center gap-4">
              <div className="border border-[#383838] w-[118px] bg-[#111736]  px-2  rounded-[8px] h-[40px] flex items-center justify-center">
                <div className="flex items-center justify-between  w-[148px] h-[17px]">
                  <p className="text-[14px] text-mainColor">Criteria</p>
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
          <div className="h-[77px] rounded-[7px] grid grid-cols-5 items-center  bg-[#111736] justify-between w-full mt-6">
            {header.map((header, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-white p-[10px] w-full h-[77px] lgll:-ml-4"
              >
                {header}
              </div>
            ))}
          </div>
          <div className="flex gap-[1px]  h-[170px] py-1 items-start justify-between flex-col  overflow-y-scroll">
            {statesPanelItems.map((item) => (
              <div key={item.SNo} className="w-full h-[100px]  justify-items-center grid grid-cols-5 bg-[#111736] justify-between rounded-[7px] py-1">
                <div className="flex items-center justify-center lgl:-ml-8">
                  <p className="text-[14px] text-mainColor">{item.SNo}</p>
                </div>
                <div className="flex items-center justify-center lgl:-ml-8">
                  <p className="text-[14px] font-medium text-[#6E62E5] flex gap-1 items-center">
                    {item.Ticker}{" "}
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
                <div className="flex items-center justify-center lgl:-ml-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-mainColor text-[14px]">
                      {item.HighestVolume}
                    </p>
                    <p className="text-mainColor text-[14px]">
                      {item.influencer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center lgl:-ml-10 py-1">
                  <div className="flex flex-col gap-3 text-center">
                    <p className="text-mainColor text-[12px]">
                      {item.FirstInfluencer}
                    </p>
                    <p className="text-mainColor text-[12px]">
                      {item.SecondInfluencer}
                    </p>
                    <p className="text-mainColor text-[12px]">
                      {item.ThirdInfluencer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center lgl:-ml-8">
                  <p className="text-[14px] text-mainColor">
                    {item.NumberOfMentions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lgl:w-[588px] w-full gap-[10px] h-auto  px-4 ">
          <h2 className="text-[20px] font-semibold text-mainColor">
            Platform stats
          </h2>
          <div className="flex items-center justify-center lgl:justify-start">
            <div className="grid-cols-4 lgl:grid-cols-3  xxl:grid-cols-4 grid gap-[12px] lgl:gap-x-[40px] gap-x-[120px] lg:gap-x-[150px] mt-6">
              {TokenStatsPanelItems.map((item, index) => (
                <div
                  key={index}
                  className="h-[118px] w-[128px] p-[15px] rounded-[6px] bg-[#111736]"
                >
                  <div className="flex flex-col gap-[10px]">
                    <div
                      style={{ backgroundColor: item.backgroundColor }}
                      className={`h-[40px] w-[40px]  rounded-[6px] flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <div className="h-[45px] w-[100px]  flex flex-col justify-between">
                      <h2 className="text-[18px] font-semibold text-mainColor">
                        {item.number}
                      </h2>
                      <p className="text-[10px] text-[#BCBCBC]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStatsPanel;
