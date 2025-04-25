export const RecentCallsItems = [
  {
    token: "$M87",
    change: "+23%",
    dateTime: "20 May 2024 22:00:30",
    influencer: "@IncomeSharks",
    buyVolume: "$75000",
    marketCap: "$466m",
    changeColor: "text-[#16B967]",
  },
  {
    token: "$PNUT",
    change: "-12%",
    dateTime: "20 May 2024 21:45:22",
    influencer: "@EricCryptoman",
    buyVolume: "$97,324",
    marketCap: "$1.4b",
    changeColor: "text-[#C2353E]",
    isMinus: true,
  },
  {
    token: "$SPEC",
    change: "+48%",
    dateTime: "20 May 2024 21:01:06",
    influencer: "GemsOfRa",
    buyVolume: "$97,324",
    sellVolume: "$97,324",
    marketCap: "$52m",
    changeColor: "text-[#16B967]",
  },
];

export const tableHeaders = [
  "S No",
  "Token",
  "Date and Time (UTC)",
  "Influencer",
  "Buy volume",
  "Call Market Cap",
];

export interface CallData {
  token: string;
  change: string;
  dateTime: string;
  influencer: string;
  buyVolume: string;
  marketCap: string;
  changeColor: string;
  isPlus?: boolean;
  isMinus?: boolean;
}

export interface RecentCallTypes {
  data: CallData;
  isOpen: boolean;
  toggleDropdown: () => void;
}

export const finalItems = [
  ...RecentCallsItems.slice(0, 2),
  ...Array.from(
    { length: 15 },
    (_, i) => RecentCallsItems.slice(2)[i % RecentCallsItems.slice(2).length]
  ),
];
