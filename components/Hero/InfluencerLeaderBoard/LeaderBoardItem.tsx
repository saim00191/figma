import Image1 from "@/public/assets/RecentCallImg1.png";
import Image2 from "@/public/assets/RecentCallImg2.png";
import Image3 from "@/public/assets/RecentCallImg3.png";
import Image4 from "@/public/assets/LeaderBoardImg4.png";
import Image5 from "@/public/assets/LeaderBoardImg5.png";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const LeaderboardItems = [
  {
    SNo: 1,
    Influencer: "@IncomeSharks",
    image: Image1,
    star: <FaRegStar size={27}/>,
    AverageBuyVolume: "$65000",
    HighestBuyvolume: "$81,000 - $TRAC",
    AverageXs: "7.5x",
    HighestXs: "23x-$M87",
    AverageFollowup: "$12,870",
    HighestFollowup: "$33,635 - $APES",
    NumberofCalls: "95",

  },
  {
    SNo: 2,
    Influencer: "@EricCryptoman",
    image: Image2,
    star: <FaStar size={27}/>,
    AverageBuyVolume: "$62,000",
    HighestBuyvolume: "$85,000-$WLF",
    AverageXs: "6x",
    HighestXs: "10.3x - $WLF",
    AverageFollowup: "$6,468",
    HighestFollowup: "$25,742 - $APES",
    NumberofCalls: "175",

  },
  {
    SNo: 3,
    Influencer: "GemsOfRa",
    image: Image3,
    star: <FaRegStar size={27}/>,
    AverageBuyVolume: "$48,000",
    HighestBuyvolume: "$65,000-$SECT",
    AverageXs: "5.5x",
    HighestXs: "22x - $SECT",
    AverageFollowup: "$17,743",
    HighestFollowup: "$12,945 - $APES",
    NumberofCalls: "160",
  },
  {
    SNo: 4,
    Influencer: "@nevershill",
    image: Image4,
    star: <FaRegStar size={27}/>,
    AverageBuyVolume: "$22,000",
    HighestBuyvolume: "$44,000-$TRACK",
    AverageXs: "8.8x",
    HighestXs: "35x - $STATS",
    AverageFollowup: "$8,826",
    HighestFollowup: "$43,357 - $APES",
    NumberofCalls: "82",
  },
  {
    SNo: 5,
    Influencer: "@elonmusk",
    image: Image5,
    star: <FaStar size={27}/>,
    AverageBuyVolume: "$20,000",
    HighestBuyvolume: "$87,000-$PNUT",
    AverageXs: "82.5x",
    HighestXs: "235x - $DOGE",
    AverageFollowup: "$18,346",
    HighestFollowup: "$12,638 - $APES",
    NumberofCalls: "15",
  },
  {
    SNo: 6,
    Influencer: "@IncomeSharks",
    image: Image1,
    star: <FaRegStar size={27}/>,
    AverageBuyVolume: "$65000",
    HighestBuyvolume: "$81,000-$TRAC",
    AverageXs: "7.5x",
    HighestXs: "23x - $M87",
    AverageFollowup: "$12,870",
    HighestFollowup: "$33,635 - $APES",
    NumberofCalls: "95",

    },
    {
        SNo: 7,
        Influencer: "@EricCryptoman",
        image: Image2,
        star: <FaStar size={27}/>,
        AverageBuyVolume: "$62,000",
        HighestBuyvolume: "$85,000-$WLF",
        AverageXs: "6x",
        HighestXs: "10.3x - $WLF",
        AverageFollowup: "$6,468",
        HighestFollowup: "$25,742 - $APES",
        NumberofCalls: "175",
    
      },
];

export default LeaderboardItems;