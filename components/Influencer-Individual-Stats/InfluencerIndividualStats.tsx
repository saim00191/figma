import Image from "next/image";
import React from "react";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import Image2 from "@/public/assets/InfluencerIndividualStats1.png";
import {
  Icon1,
  Icon10,
  Icon2,
  Icon3,
  Icon4,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
} from "./InfluencerIndividualStatsItems";
import { FaUserAlt } from "react-icons/fa";
import { GiWatch } from "react-icons/gi";

const InfluencerIndividualStats = () => {
  return (
    <div className="max-w-[1390px] mx-auto mt-5">
      <h1 className="text-mainColor text-[20px] font-semibold py-6 px-4">
        Influencer individual stats
      </h1>
      <div className="flex flex-col w-full justify-between items-center gap-5 px-4">
        <div className="flex w-full flex-col xl:flex-row gap-5">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <div className="h-[173px] xl:w-[177px] px-2 w-full border border-[#6E62E5] rounded-[10px] bg-[#111736] flex items-center justify-center">
              <div className="w-[145px] h-[140px] flex flex-col justify-between items-center">
                <Image
                  src={Image1}
                  alt="Image1"
                  className="w-[95px] h-[95px] rounded-full"
                />
                <h4 className="text-[18px] text-mainColor font-medium">
                  @IncomeSharks
                </h4>
                <p className="text-[#BCBCBC] text-[12px]">@IncomeSharks</p>
              </div>
            </div>
            <div className="w-full xl:max-w-[446px] h-[173px] flex items-center justify-center gap-2 border border-[#6E62E5] rounded-[10px] bg-[#111736]">
              <Image
                src={Image2}
                alt="Image2"
                className="max-w-[213px] h-[143px]"
              />
              <div className="w-[149px] -ml-7 h-[97px] hidden xs:flex flex-col justify-start items-start gap-2.5">
                <h5 className="text-[15px] text-mainColor">
                  Market Cap of Calls
                </h5>
                {["Under $1m", "Over $1m (50m)", "Over $50m"].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-start gap-2"
                  >
                    <span
                      className={`w-[9px] h-[9px] rounded-full ${
                        ["bg-[#FFC904]", "bg-[#0ADD5B]", "bg-[#6E62E5]"][i]
                      }`}
                    />
                    <p className="text-white text-[12px]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2 md:gap-4 items-center">
            {[
              {
                Icon: Icon1,
                value: "$75,120",
                label: "Average buy volume per call",
              },
              {
                Icon: Icon2,
                value: "$89,575",
                label: "Average buy volume per call",
              },
              { Icon: Icon3, value: "30x", label: "Best Call" },
            ].map(({ Icon, value, label }, i) => (
              <div
                key={i}
                className="w-full xl:w-[213px] h-[173px] border flex items-center justify-center border-[#6E62E5] rounded-[10px] bg-[#111736]"
              >
                <div className="smx:w-[160px] h-[130px] flex flex-col px-2 justify-between">
                  <span className="w-[56px] h-[56px] rounded-[4px] bg-[#62C6E52E] flex items-center justify-center">
                    <Icon />
                  </span>
                  <h3 className="text-[22px] font-semibold text-mainColor">
                    {value}
                  </h3>
                  <p className="text-[#BCBCBC] text-[11px]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col xl:flex-row gap-5">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <div className="flex flex-col xsm:flex-row items-center gap-5 w-full">
              <div className="w-full xl:w-[136px] h-[148px] px-2 border border-[#6E62E5] rounded-[10px] bg-[#111736] flex items-center justify-center">
                <div className="h-[120px] flex flex-col justify-between items-center">
                  <span className="h-[56px] w-[56px] flex items-center justify-center rounded-[4px] bg-[#6E62E52E]">
                    <Icon4 />
                  </span>
                  <h4 className="text-[22px] text-mainColor font-semibold">
                    250k
                  </h4>
                  <p className="text-[12px] text-[#BCBCBC]">Followers</p>
                </div>
              </div>
              <div className="w-full xl:w-[293px] h-[148px] px-2 border border-[#6E62E5] rounded-[10px] bg-[#111736] flex items-center justify-center">
                <div className="xsm:w-[253px] w-full h-[110px] flex items-center justify-between">
                  <div className="h-full flex flex-col justify-between">
                    <h3 className="text-[20px] text-mainColor font-semibold">
                      Bottography
                    </h3>
                    {[
                      ["bg-[#C5CCED]", "20,000 (8%)"],
                      ["bg-[#D9DEFB]", "230,000 (92%)"],
                    ].map(([bg, text], i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span
                          className={`h-[30px] w-[30px] rounded-full ${bg} flex items-center justify-center`}
                        >
                          <i
                            className={`${[GiWatch, FaUserAlt][i]} text-white`}
                          />
                        </span>
                        <h3 className="text-white text-[16px]">{text}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between h-full items-center">
                    <span className="h-[52px] w-[52px]">
                      <Icon6 />
                    </span>
                    <h4 className="text-mainColor text-[22px] font-semibold">
                      Good!
                    </h4>
                    <p className="text-[#BCBCBC] text-[12px] text-center font-semibold">
                      Score
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 w-full">
              {[
                { Icon: Icon7, value: "250k", label: "Followers" },
                { Icon: Icon8, value: "79", label: "Number of Calls" },
              ].map(({ Icon, value, label }, i) => (
                <div
                  key={i}
                  className="w-full xl:w-[143px] h-[148px] px-2 border border-[#6E62E5] rounded-[10px] bg-[#111736] flex items-center justify-center"
                >
                  <div className="h-[120px] flex flex-col justify-between items-center">
                    <span className="h-[56px] w-[56px] flex items-center justify-center rounded-[4px] bg-[#62E5712E]">
                      <Icon />
                    </span>
                    <h4 className="text-[22px] text-mainColor font-semibold">
                      {value}
                    </h4>
                    <p className="text-[12px] text-[#BCBCBC]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col xsm:flex-row items-center gap-5">
            {[
              {
                Icon: Icon9,
                value: "$45,563 - $M87",
                label: "Average buy volume per call",
              },
              {
                Icon: Icon10,
                value: "$13,500",
                label: "Average Volume on Follow up Calls",
              },
            ].map(({ Icon, value, label }, i) => (
              <div
                key={i}
                className="w-full xl:max-w-[221px] xxl:w-[281px] h-[148px] px-2 border border-[#6E62E5] rounded-[10px] bg-[#111736] flex items-center justify-center"
              >
                <div className="h-[120px] flex flex-col justify-between items-center">
                  <span className="h-[56px] w-[56px] rounded-[4px] bg-[#D6E5622E] flex items-center justify-center">
                    <Icon />
                  </span>
                  <h4 className="text-mainColor text-[15px] xsm:text-[22px] font-semibold">
                    {value}
                  </h4>
                  <p className="text-[#BCBCBC] text-[12px]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerIndividualStats;
