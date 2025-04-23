import React from "react";
import PricingCard from "./Pricing-Card";

const PricingPage = () => {
  return (
    <div className="w-full py-24 flex items-center justify-center px-4">
      <div className="w-full max-w-[1081px] flex flex-col mdl:flex-row items-center justify-center mdl:justify-between gap-6">
        <PricingCard
          title="Basic"
          price="Free"
          featuresCount={5}
          completed={2}
          buttonText="Choose this plan"
        />
        <PricingCard
          title="Premium"
          price="0.1 ETH"
          featuresCount={6}
          completed={6}
          buttonText="Subscribe"
          variant="premium"
          highlight
          showMonthlyLabel
        />
        <PricingCard
          title="Premium +"
          price="0.25 ETH"
          featuresCount={5}
          completed={5}
          buttonText="Subscribe"
          showMonthlyLabel
        />
      </div>
    </div>
  );
};

export default PricingPage;
