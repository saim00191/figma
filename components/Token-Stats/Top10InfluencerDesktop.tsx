import Image from 'next/image'
import React from 'react'
import { repeatedItems, tableHeaders } from './Top10InfluencersItems'
import UserImg from '@/public/assets/UserImg2.png'
const Top10InfluencerDesktop = () => {
  return (
    <div className="mt-2 max-w-[1440px] h-[450px] mx-auto w-full hidden sml:flex px-2 flex-col gap-[2px]">
        <div className="rounded-[7px] grid grid-cols-8 items-center h-[77px] bg-[#111736] justify-between">
          {tableHeaders.map((header, index) => (
            <div
              key={index}
              className="flex text-center sml:text-[13px] md:text-[14px] items-center justify-center text-white p-[10px] w-full h-[77px] lgll:-ml-4"
            >
              {header}
            </div>
          ))}
        </div>

        <div className="flex gap-[1px] flex-col overflow-y-scroll scrollbar-custom ">
          {repeatedItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-8 items-center justify-between bg-[#111736]"
            >
              <div className="flex items-center  justify-center -ml-4 text-[#7265F2] text-[14px] p-[10px] h-[59px] w-full lg:w-[189px]">
                {index + 1}{" "}
              </div>
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full">
                {item.date}
              </div>
              <div className="flex items-center justify-center lgll:justify-start text-white p-[10px] h-[59px] w-full">
                <div className="flex items-center gap-1">
                  <Image
                    src={UserImg}
                    alt="Influencer Image"
                    className="w-[35px] hidden lg:block h-[35px]"
                  />
                  <p className="text-mainColor text-[14px] font-normal">
                    {item.Influenser}
                  </p>
                </div>
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {item.Followers}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {item.PriceImpact}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {item.NumberofMentions}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {item.CallMarketcap}
              </div>
              <div className="flex items-center lgll:-ml-3 justify-center text-white p-[10px] h-[59px] w-full">
                {item.VolumeGenerated}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Top10InfluencerDesktop