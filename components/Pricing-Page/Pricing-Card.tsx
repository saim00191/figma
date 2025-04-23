import React from "react";
import FeatureItem from "./Feature-Item";

interface PricingCardProps {
  title: string;
  price: string;
  featuresCount: number;
  completed: number;
  variant?: "basic" | "premium";
  buttonText: string;
  highlight?: boolean;
  showMonthlyLabel?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  featuresCount,
  completed,
  variant = "basic",
  buttonText,
  highlight = false,
  showMonthlyLabel = false,
}) => {
  return (
    <div
      className={`${
        highlight
          ? "w-full xs:w-[328px] h-[480px] bg-[#4E42C6] rounded-[30px] border border-white/30"
          : "w-full xs:w-[306px] h-[442px] border-2 border-[#6E62E5] rounded-[20px]"
      } flex flex-col justify-between items-center py-6`}
    >
      <div className="flex flex-col justify-center items-center gap-1 h-[79px]">
        <h3 className="text-white text-[30px] font-semibold">{title}</h3>
        <p className="text-[24px] font-medium text-white flex items-center gap-1">
          {price}
          {showMonthlyLabel && (
            <span className="text-[12px] text-white/50">/month</span>
          )}
        </p>
      </div>

      {highlight && <span className="bg-[#7365F7] w-[248px] h-[1px]" />}

      <div
        className={`${
          highlight ? "w-[235px] h-[200px]" : "w-[205px] h-[170px]"
        } flex flex-col justify-between`}
      >
        {Array.from({ length: featuresCount }).map((_, index) => (
          <FeatureItem
            key={index}
            index={index}
            completed={completed}
            variant={variant}
            total={featuresCount}
          />
        ))}
      </div>

      <button className="w-[236px] h-[46px] bg-[#6E62E5] rounded-[6px] p-2.5 text-[16px] font-medium text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
