import React from "react";
import Image1 from "@/public/assets/3InfluencerImg1.png";
import Image2 from "@/public/assets/3InfluencerImg2.png";
import Image3 from "@/public/assets/3InfluencerImg3.png";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const Top3Influencer = () => {
  return (
    <div className="mt-3 px-4 h-full">
      <div className="max-w-[1392px] mx-auto gap-x-[50px] w-full   h-auto  ">
        <h2 className="text-[20px] text-[#f1f1f1] font-semibold">
          Top 3 influencers
        </h2>
        <div className="grid grid-cols-2 lgl:grid-cols-4  gap-8 mt-6 ">
          <div className="flex items-center justify-center h-[107px] bg-[#111736] rounded-[7px] xxl:w-[343px]">
            <div className="w-full xxl:w-[302px] h-[52px]  justify-center flex items-center gap-4">
              <Image src={Image1} alt="Image1" className="xxl:w-[52px] w-[42px] h-[42px] xxl:h-[52px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p className="xxl:text-[18px] text-[14px] text-mainColor font-medium">IncomeSharks</p>
                <p className="text-[#BCBCBC] text-[10px] xxl:text-[14px]">Average Volume: $89,575</p>
              </div>
              <div className="h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#111723]">
                  <MdArrowForwardIos size={14} className="text-[#6E62E5]"/>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-[107px] bg-[#111736] rounded-[7px] xxl:w-[343px]">
            <div className="w-full xxl:w-[302px] px-2  h-[52px] justify-center  flex items-center gap-4">
              <Image src={Image2} alt="Image1" className="xxl:w-[52px] w-[42px] h-[42px] xxl:h-[52px] rounded-full" />
              <div className="flex flex-col gap-1 w-36  ">
                <p className="xxl:text-[18px] text-[14px] text-mainColor font-medium xxl:w-[176px] ">WIZZ📷 ( beware scammers )</p>
                <p className="text-[#BCBCBC] text-[10px] xxl:text-[14px]">Average Volume: $85,350</p>
              </div>
              <div className="h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#111723]">
                  <MdArrowForwardIos size={14} className="text-[#6E62E5]"/>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-[107px] bg-[#111736] rounded-[7px] xxl:w-[343px] ">
            <div className="w-full xxl:w-[302px] px-2   h-[52px] justify-center  flex items-center gap-4">
              <Image src={Image3} alt="Image3" className="xxl:w-[52px] w-[42px] h-[42px] xxl:h-[52px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p className="xxl:text-[18px] text-[14px] text-mainColor font-medium ">Alex Becker 📷📷📷</p>
                <p className="text-[#BCBCBC] text-[10px] xxl:text-[14px]">Average Volume: $77,875</p>
              </div>
              <div className="h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#111723]">
                  <MdArrowForwardIos size={14} className="text-[#6E62E5]"/>
              </div>
              </div>
            </div>
          <div className="h-[107px]  flex flex-col items-center justify-between w-full lgl:w-[243px] xxl:w-[343px]  rounded-[7px]">
            <input type="text" className="w-full h-[46px]  border border-[#383838] rounded-[6px] outline-none bg-[#111736] text-[14px] text-mainColor px-4 " placeholder="@username......" />
            <button className="w-full h-[46px] bg-[#6E62E5] rounded-[6px] text-[16px] font-medium">Add Influencer</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Top3Influencer;