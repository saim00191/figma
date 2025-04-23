import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import { Nunito_Sans } from "next/font/google";

export interface Influencer {
    name: string;
    image: StaticImageData;
  }
  
  export interface CallData {
    token: string;
    change: string; 
    dateTime: string; 
    influencer: Influencer;
    buyVolume: string;
    sellVolume: string;
    marketCap: string;
    changeColor: string;
    isPlus?: boolean; 
    isMinus?: boolean; 
  }

export interface CallDetailsProps {
  data: CallData;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CallDetails = ({ data, isOpen, toggleDropdown }: CallDetailsProps) => (
  <div>
    <div className="h-[54px] w-full grid grid-cols-3 border-b border-b-[#262246] bg-[#111736]">
      <div className="w-full xs:w-[101px] h-full flex items-center justify-center">
        <h3 className="text-mainColor text-[12px]">
          {data.token}{" "}
          <span className={data.isMinus ? "text-[#E53E3E] " : "text-[#16B967]"}>
            {data.change || data.change}
          </span>
        </h3>
      </div>
      <div className="w-full xs:w-[194px] h-full flex items-center justify-start ml-4 xsm:ml-1">
        <div className="flex items-center">
          <Image
            src={data.influencer.image}
            alt="Influencer Avatar"
            className="w-[26px] h-[26px] hidden xs:flex"
          />
          <p className="text-[12px] text-mainColor ml-2">
            {data.influencer.name}
          </p>
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
            { label: "Date and Time (UTC)", value: `${data.dateTime} ` },
            { label: "Buy Volume", value: data.buyVolume },
            { label: "Sell Volume", value: data.sellVolume },
            { label: "Call Market Cap", value: data.marketCap },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-3 py-2">
              <h2 className="text-[12px] font-bold text-mainColor">
                {item.label}
              </h2>
              <p
                className={`${nunitoSans.className} text-[12px] xs:text-[14px] text-mainColor col-span-2 ml-4`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default CallDetails;