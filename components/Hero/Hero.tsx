import React from "react";
import CoinsSlider from "./CoinsSlider";
import DisplayAds from "./DisplayAds";
import Top3Influencer from "./Top3IInfluencer";
import Top3InfluencerResponsive from "./Top3InfluencerResponsive";
import PlatformStats from "./PlatformStats";
import RecentCallMain from "./RecentCall/RecentCallMain";
import LeaderBoardMain from "./InfluencerLeaderBoard/LeaderBoardMain";
import TokenStatePanelMainPage from "./TokenStatesPanel/TokenStatePanelMainPage";

const Hero = () => {
  return (
    <div>
      <CoinsSlider />
      <DisplayAds />
      <div className="md:hidden">
        <Top3InfluencerResponsive />
      </div>
      <div className="md:block hidden">
        <Top3Influencer />
      </div>
      <RecentCallMain />
      <LeaderBoardMain />
      <TokenStatePanelMainPage />
      <div className="mdll:hidden ">
        <PlatformStats />
      </div>
    </div>
  );
};

export default Hero;
