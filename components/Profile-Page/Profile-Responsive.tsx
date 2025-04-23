'use client'
import Image from "next/image";
import React, { useState } from "react";
import User from "@/public/assets/userImg.png";
const ProfileResponsive = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <div className="px-4 md:px-6  mt-8">
      <div className=" w-full  rounded-[10px] border-[3px] px-2 flex items-center justify-center border-[#111736] h-[177px] ">
        <div className="h-[137px] w-full xs:w-[302px] md:w-[375px] smx:w-[350px] flex justify-start ">
          <div className="h-[137px] w-[130px] flex flex-col gap-2 ">
            <Image
              src={User}
              alt="User"
              height={100}
              width={100}
              className="w-[100px] h-[100px] rounded-full border border-[#111736] "
            />
            <div className="w-[110px] h-[30px] bg-[#5746FB] rounded-[43px] flex items-center gap-2 justify-center">
              <span className="h-[14px] w-[14px] bg-[#F2D114] rounded-full" />
              <p className="text-[14px] text-white ">Premium +</p>
            </div>
          </div>
          <div className="flex flex-col justify-between ml-3 w-full">
            <div className="flex flex-col gap-1">
              <h2 className="xs:text-[20px] text-[17px] text-mainColor font-medium">
                @Solemn Captain
              </h2>
              <p className="text-[13px] text-[#BCBCBC]">Admin</p>
            </div>
            <button className="w-full smx:w-[180px] h-[31px] bg-[#6E62E5] text-white text-[14px] rounded-[6px] text-center">
              Upgrade
            </button>
            <div className="w-[100px] h-[22px]  mt-2 flex items-center justify-between cursor-pointer">
              <p className="text-[14px] text-mainColor">Ads</p>
              <div
                className={`bg-[#6e62e5] w-[60px] h-[26px]  rounded-[14px] px-1 flex ${
                  isOn && "flex-row-reverse"
                } items-center gap-1 justify-between`}
              >
                <div
                  onClick={handleToggle}
                  className="w-[22px] h-[22px] rounded-full bg-white"
                />
                <p className="text-[12px] text-mainColor">
                  {isOn ? "ON" : "OFF"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileResponsive;
