import { StaticImageData } from "next/image";



export interface Influencer {
    name: string;
    image: StaticImageData;
  }
  
  export interface CallData {
    token: string;
    change: string; // Representing change like "+23%" or "-12%"
    dateTime: string; // Combined Date and Time
    influencer: Influencer; // Updated to match the object structure
    buyVolume: string;
    sellVolume: string;
      marketCap: string;
    changeColor: string;
    isPlus?: boolean; // Optional property to determine if the change is positive
    isMinus?: boolean; // Optional property to determine if the change is negative
  }

export interface CallDetailsProps {
  data: CallData;
  isOpen: boolean;
  toggleDropdown: () => void;
}