import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/Logo.png";
import { IoIosCopy } from "react-icons/io";
import UserImg from "@/public/assets/UserImg2.png";
import { Icon1, Icon3, Icon4, Icon5 } from "./TokenStatsItems";
import { Icon2 } from "./TokenStatsItems";
import Top10Influencers from "./Top10Influencers";

const TokenStats = () => {
  return (
    <>
    <div className="max-w-[1391px] mx-auto text-white mt-3 px-2 flex flex-col">
      <h2 className="text-[20px] font-semibold text-mainColor">Token Stats</h2>
      <div className="flex flex-wrap justify-between items-center h-full mt-3 gap-1">
        <div className="w-full sml:w-[300px] h-[162px] flex items-center justify-center bg-[#111736] rounded-[10px] border border-[#6E62E5]">
          <div className="w-[274px]  h-[89px] ">
            <div className="flex items-center justify-start w-full h-full px-2">
              <Image
                src={Logo}
                alt="Logo"
                className="h-[89px] w-[89px] rounded-full border border-[#C462E5]"
              />
              <div className="flex flex-col px-2">
                <h3 className="text-[18px] font-medium text-mainColor ">
                  Tracker AI
                </h3>
                <p className="text-[12px] text-[#BCBCBC]">$TRACK</p>
                <div className="flex items-center gap-1 mt-1">
                  <input
                    type="text"
                    className="w-[145px] h-[36px] outline-none bg-[#080622] rounded-[6px] text-[#BCBCBC] text-[12px] px-2"
                    placeholder="0xda5...7e6db"
                  />
                  <IoIosCopy className="w-[20px] h-[20px] text-[#6E62E5] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sml:w-[227px] h-[162px] bg-[#111736] rounded-[10px] border border-[#6E62E5] flex flex-col items-center justify-center gap-2">
          <div className="w-[137px] h-[115px] ">
            <Image
              src={UserImg}
              alt="UserImg"
              className="h-[57px] w-[57px] rounded-full "
            />

            <h4 className="text-[24px] font-semibold text-mainColor mt-1">
              @nevershill
            </h4>
            <p className="text-[12px] text-[#BCBCBC]">$44,000</p>
          </div>
        </div>

        <div className="w-full hidden sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  sml:flex items-center justify-center">
          <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
            <div className="bg-[#203756] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
              <Icon1 />
            </div>
            <h3 className=":text-[22px] font-semibold text-mainColor mt-">
              $870,000
            </h3>
            <p className="text-[12px] text-[#BCBCBC]">ATH MC</p>
          </div>
        </div>
        <div className="w-full sml:w-[135px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px] hidden sml:flex items-center justify-center">
          <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
            <div className="bg-[#202856] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
              <Icon2 />
            </div>
            <h3 className=":text-[22px] font-semibold text-mainColor mt-">
              $412,000
            </h3>
            <p className="text-[12px] text-[#BCBCBC]">Current MC</p>
          </div>
        </div>
        <div className="w-full sml:w-[140px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px] hidden sml:flex items-center justify-center">
          <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
            <div className="bg-[#372453] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
              <Icon3 />
            </div>
            <h3 className=":text-[22px] font-semibold text-mainColor mt-">
              39
            </h3>
            <p className="text-[12px] text-[#BCBCBC]">Influencers</p>
          </div>
        </div>
        <div className="flex gap-1 w-full sml:hidden">
          <div className="w-full sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  flex items-center justify-center">
            <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
              <div className="bg-[#203756] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
                <Icon1 />
              </div>
              <h3 className=":text-[22px] font-semibold text-mainColor mt-">
                $870,000
              </h3>
              <p className="text-[12px] text-[#BCBCBC]">ATH MC</p>
            </div>
          </div>
          <div className="w-full sml:w-[135px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  flex items-center justify-center">
            <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
              <div className="bg-[#202856] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
                <Icon2 />
              </div>
              <h3 className=":text-[22px] font-semibold text-mainColor mt-">
                $412,000
              </h3>
              <p className="text-[12px] text-[#BCBCBC]">Current MC</p>
            </div>
          </div>
          <div className="w-full sml:w-[140px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  flex items-center justify-center">
            <div className="flex flex-col h-[100px] w-full px-3 xs:px-0 xs:w-[105px] ">
              <div className="bg-[#372453] rounded-[4px] w-[56px] h-[56px] flex items-center justify-center">
                <Icon3 />
              </div>
              <h3 className=":text-[22px] font-semibold text-mainColor mt-">
                39
              </h3>
              <p className="text-[12px] text-[#BCBCBC]">Influencers</p>
            </div>
          </div>
        </div>

        <div className="w-full hidden sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  sml:flex items-center justify-center">
          <div className="w-[121px] h-[128px] ">
            <div className="flex items-center gap-1">
              <span className="h-[34px] flex items-center justify-center w-[34px] rounded-[4px] bg-[#203756]">
                <Icon4 />
              </span>
              <p className="text-[13px] font-medium text-mainColor">
                Best Influencer
              </p>
            </div>
            <div className="flex flex-col h-[83px] justify-between mt-1">
              <Image
                src={UserImg}
                alt="Best Influencer"
                className="h-[40px] w-[40px] rounded-full"
              />
              <p className="text-[14px] text-mainColor">@nevershill</p>
              <p className="text-[12px] text-[#C6C6C6]">$44,000</p>
            </div>
          </div>
        </div>
        <div className="w-full hidden sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  sml:flex items-center justify-center">
          <div className="w-[121px] h-[128px] ">
            <div className="flex items-center gap-1 ">
              <span className="h-[34px] bg-[#372453] flex items-center justify-center w-[34px] rounded-[4px] ">
                <Icon5 />
              </span>
              <p className="text-[13px] font-medium text-mainColor">
                Worst influencer
              </p>
            </div>
            <div className="flex flex-col h-[83px] justify-between mt-1">
              <Image
                src={UserImg}
                alt="Best Influencer"
                className="h-[40px] w-[40px] rounded-full"
              />
              <p className="text-[14px] text-mainColor">@KenzoIRO</p>
              <p className="text-[12px] text-[#C6C6C6]">$0</p>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-1 sml:hidden ">
          <div className="w-full sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  flex items-center justify-center">
            <div className="w-[121px] h-[128px] ">
              <div className="flex items-center gap-1">
                <span className="h-[34px] flex items-center justify-center w-[34px] rounded-[4px] bg-[#203756]">
                  <Icon4 />
                </span>
                <p className="text-[13px] font-medium text-mainColor">
                  Best Influencer
                </p>
              </div>
              <div className="flex flex-col h-[83px] justify-between mt-1">
                <Image
                  src={UserImg}
                  alt="Best Influencer"
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="text-[14px] text-mainColor">@nevershill</p>
                <p className="text-[12px] text-[#C6C6C6]">$44,000</p>
              </div>
            </div>
          </div>
          <div className="w-full sml:w-[139px] h-[162px] border border-[#6E62E5] bg-[#111736] rounded-[10px]  flex items-center justify-center">
            <div className="w-[121px] h-[128px] ">
              <div className="flex items-center gap-1 ">
                <span className="h-[34px] bg-[#372453] flex items-center justify-center w-[34px] rounded-[4px] ">
                  <Icon5 />
                </span>
                <p className="text-[13px] font-medium text-mainColor">
                  Worst influencer
                </p>
              </div>
              <div className="flex flex-col h-[83px] justify-between mt-1">
                <Image
                  src={UserImg}
                  alt="Best Influencer"
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="text-[14px] text-mainColor">@KenzoIRO</p>
                <p className="text-[12px] text-[#C6C6C6]">$0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <Top10Influencers/>
      </div>
    </>
  );
};

export default TokenStats;
