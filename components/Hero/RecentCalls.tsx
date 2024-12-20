import React from "react";
import Image1 from "@/public/assets/RecentCallImg1.png";
import Image2 from "@/public/assets/RecentCallImg2.png";
import Image3 from "@/public/assets/RecentCallImg3.png";
import Image from "next/image";

const RecentCalls = () => {
  const tableHeaders = [
    "Token",
    "Date and Time (UTC)",
    "Influencer",
    "Buy volume",
    "Sell Volume",
    "Call Market Cap",
  ];

  const callData = [
    {
      token: "$M87",
      change: "+23%",
      dateTime: "20 May 2024 22:00:30",
      influencer: { name: "@IncomeSharks", image: Image1 },
      buyVolume: "$75000",
      sellVolume: "$75000",
      marketCap: "$466m",
      changeColor: "text-[#16B967]",
    },
    {
      token: "$PNUT",
      change: "-12%",
      dateTime: "20 May 2024 21:45:22",
      influencer: { name: "@EricCryptoman", image: Image2 },
      buyVolume: "$97,324",
      sellVolume: "$97,324",
      marketCap: "$1.4b",
      changeColor: "text-[#C2353E]",
    },
    {
      token: "$SPEC",
      change: "+48%",
      dateTime: "20 May 2024 21:01:06",
      influencer: { name: "GemsOfRa", image: Image3 },
      buyVolume: "$97,324",
      sellVolume: "$97,324",
      marketCap: "$52m",
      changeColor: "text-[#16B967]",
    },
    {
      token: "$M87",
      change: "+23%",
      dateTime: "20 May 2024 22:00:30",
      influencer: { name: "@IncomeSharks", image: Image1 },
      buyVolume: "$75000",
      sellVolume: "$75000",
      marketCap: "$466m",
      changeColor: "text-[#16B967]",
    },
    {
      token: "$PNUT",
      change: "-12%",
      dateTime: "20 May 2024 21:45:22",
      influencer: { name: "@EricCryptoman", image: Image2 },
      buyVolume: "$97,324",
      sellVolume: "$97,324",
      marketCap: "$1.4b",
      changeColor: "text-[#C2353E]",
    },
  ];

  return (
    <div className="mt-2 m-auto max-w-[1440px] px-4 md:px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] text-mainColor py-3 font-semibold">Recent Calls</h2>
        <p className="text-[#6E62E5] text-[20px] font-semibold cursor-pointer hover:underline">See All</p>
      </div>

      <div className="mt-2 max-w-[1440px] h-[252px] m-auto w-full flex flex-col gap-[2px]">

        <div className="rounded-[7px] grid grid-cols-6 items-center h-[77px] bg-[#111736] justify-between">
          {tableHeaders.map((header, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-white p-[10px] h-[77px] w-full lg:w-[189px]"
            >
              {header}
            </div>
          ))}
        </div>


        <div className="flex gap-[1px] flex-col overflow-y-scroll">
          {callData.map((call, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center justify-between bg-[#111736]"
            >
              <div className="flex items-center justify-center text-mainColor text-[14px] p-[10px] h-[59px] w-full lg:w-[189px]">
                {call.token} <span className={call.changeColor}> {call.change}</span>
              </div>
              <div className="flex items-center justify-start text-mainColor text-[12px] lg:text-[13px] lgl:text-[14px] p-[10px] h-[59px] w-full">
                {call.dateTime}
              </div>
              <div className="flex items-center justify-center text-white p-[10px] h-[59px] w-full">
                <div className="flex items-center gap-1">
                  <Image
                    src={call.influencer.image}
                    alt="Influencer Image"
                    className="w-[35px] hidden lg:block h-[35px]"
                  />
                  <p className="text-mainColor text-[14px] font-normal">{call.influencer.name}</p>
                </div>
              </div>
              <div className="flex items-center justify-center text-white p-[10px] h-[59px] w-full">
                {call.buyVolume}
              </div>
              <div className="flex items-center justify-center text-white p-[10px] h-[59px] w-full">
                {call.sellVolume}
              </div>
              <div className="flex items-center justify-center text-white p-[10px] h-[59px] w-full">
                {call.marketCap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCalls;
