import { StaticImageData } from "next/image";

type CallDetailData = {
  SNo: number; 
  Influencer: string;
  image: string | StaticImageData; 
  isPlus?: boolean; 
  isMinus?: boolean;
  AverageBuyVolume: string; 
  HighestBuyvolume: string; 
  AverageXs: string; 
  HighestXs: string; 
  AverageFollowup: string;
  HighestFollowup: string; 
  NumberofCalls: string;
};

type CallDetailsProps = {
  data: CallDetailData; 
  isOpen: boolean; 
  toggleDropdown: () => void; 
};

export default CallDetailsProps