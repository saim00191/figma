
import FavouriteInfluencerResponsive from "./FavouriteInfluencerResponsive";
import DesktopFavouriteInfluencer from "./Desktop-Favourite-Influencer";


const Leaderboard = () => (
  <>
    <div className="sml:hidden block">
    <FavouriteInfluencerResponsive />
    </div>
    <div className="hidden sml:block">
      <DesktopFavouriteInfluencer/>
 </div>
  </>
);

export default Leaderboard;
