
import Top10InfluencerDesktop from "./Top10InfluencerDesktop";
import Top10InfluencerResponsive from "./Top10InfluencersResponsive";

const Top10Influencers = () => {
  return (
    <>
      <h2 className="text-[20px]  max-w-[1390px] px-2  mx-auto text-mainColor font-semibold py-6">
        Top 10 Influencers
      </h2>
      <div className="hidden sml:block ">
        <Top10InfluencerDesktop />
      </div>
      <div className="sml:hidden">
        <Top10InfluencerResponsive />
      </div>
    </>
  );
};

export default Top10Influencers;
