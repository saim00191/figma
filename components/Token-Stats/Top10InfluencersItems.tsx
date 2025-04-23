export const Top10InfluencersItems = [
  {
    date: "20 May 2024  22:00:30",
    Influenser: "@nevershill",
    Followers: "8k",
    PriceImpact: "4.5x",
    NumberofMentions: "12",
    CallMarketcap: "$175,000",
    VolumeGenerated: "$44,000",
  },
  {
    date: "24 May 2024  22:00:30",
    Influenser: "@AdamHODL",
    Followers: "65k",
    PriceImpact: "1.8x",
    NumberofMentions: "6",
    CallMarketcap: "$470,000",
    VolumeGenerated: "$17,500",
  },
  {
    date: "11 Mar 2024  22:00:30",
    Influenser: "@BernieFrogger",
    Followers: "10.5k",
    PriceImpact: "13.5x",
    NumberofMentions: "15",
    CallMarketcap: "$25,000",
    VolumeGenerated: "$16,500",
  },
  {
    date: "20 Apr 2024  22:00:30",
    Influenser: "Name Sername",
    Followers: "250k",
    PriceImpact: "5.5x",
    NumberofMentions: "79",
    CallMarketcap: "$25,000",
    VolumeGenerated: "$38,500",
  },
];

export const tableHeaders = [
  "Progress",
  "Date and Time ",
  "Influencer",
  "Followers",
  "Price Impact",
  "Number of Mentions",
  "Call Market Cap",
  "Volume Generated",
];

type InfluencerItem = {
  date: string;
  Influenser: string;
  Followers: string;
  PriceImpact: string;
  NumberofMentions: string;
  CallMarketcap: string;
  VolumeGenerated: string;
};

export interface Top10InfluencersType {
  data: InfluencerItem;
  isOpen: boolean;
  toggleDropdown: () => void;
}


export const repeatedItems: InfluencerItem[] = [
  ...Top10InfluencersItems,
  ...Array.from({ length: 11 }).flatMap(() => Top10InfluencersItems.slice(3)),
];
