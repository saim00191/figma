import { StaticImageData } from "next/image";



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