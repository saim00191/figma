import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

interface FeatureItemProps {
  index: number;
  completed: number;
  variant?: "basic" | "premium";
  total: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ index, completed, variant = "basic" }) => {
  const isCross = variant === "premium" ? index === 2 || index === 4 : index >= completed;
  const bgColor = isCross ? "bg-[#FF0000]" : variant === "premium" ? "bg-white" : "bg-[#6E62E5]";
  const icon = isCross ? (
    <RxCross1 className="w-2.5 h-2.5 text-white" />
  ) : (
    <FaCheck className={`w-2.5 h-2.5 ${variant === "premium" ? "text-[#9262E5]" : "text-white"}`} />
  );

  return (
    <div className="flex items-center justify-between w-full h-[18px]">
      <span className={`flex items-center justify-center h-[18px] w-[18px] rounded-full ${bgColor}`}>
        {icon}
      </span>
      <p className={`text-[${variant === "premium" ? "16px" : "13px"}] text-[#AEAEAE]`}>
        Create personal dashboard.
      </p>
    </div>
  );
};

export default FeatureItem;
