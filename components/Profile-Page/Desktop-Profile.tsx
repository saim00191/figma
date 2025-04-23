'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import User from "@/public/assets/userImg.png";
const DesktopProfile = () => {
 const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className=" mt-8 hidden mdl:block">
      <div className="w-[195px] h-[362px]  bg-[#111736] border-[3px] rounded-[10px] border-[#6E62E5]  flex justify-center items-center ">
        <div className="w-[145px] h-[310px]  flex flex-col items-center justify-between">
          <div className="w-[110px] h-[30px] bg-[#3E3C2F] rounded-[43px] flex items-center gap-2 justify-center">
            <span className="h-[14px] w-[14px] bg-[#F2D114] rounded-full" />
            <p className="text-[14px] text-white ">Premium +</p>
          </div>
          <div className="w-[145px] flex flex-col justify-between h-[185px] ">
            <Image
              src={User}
              alt="User"
              width={135}
              height={135}
              className="rounded-full border-2 border-[#6E62E5] "
            />
            <h3 className="font-medium text-[18px] text-mainColor">
              Solemn Captain
            </h3>
            <p className="text-[#CAC8C8] text-[12px] text-center">Admin</p>
          </div>
          <button className="w-[97px] h-[31px] bg-[#6E62E5] text-white text-[14px] rounded-[6px] text-center">
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
  )
}

export default DesktopProfile