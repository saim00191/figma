export const FollowUpCallsItems = [
    { token: '$ARC', buyVloume : '$18,000' , PriceChangeFromFirstCall : '+275%' },
    { token: '$TRACK', buyVloume : '$12,550' , PriceChangeFromFirstCall : '+300%'},
    { token: '$CPAL', buyVloume : '$22,375' , PriceChangeFromFirstCall : '-45%' , isRed : true},
    { token: '$BUILD', buyVloume : '$34,823' , PriceChangeFromFirstCall : '-33%' , isRed : true},
    { token: '$ARC', buyVloume : '$15,533' , PriceChangeFromFirstCall : '+235%'},
    { token: '$TRACK', buyVloume : '$6,754' , PriceChangeFromFirstCall : '-35%', isRed : true},
    { token: '$CPAL', buyVloume : '$28,245' , PriceChangeFromFirstCall : '+136%', },
    { token: '$BUILD', buyVloume : '$28,245' , PriceChangeFromFirstCall : '-52%' ,  isRed : true},
]

type FollowUpCallsData = {
  token: string;
  buyVloume: string;
  PriceChangeFromFirstCall: string;
  isRed?: boolean;
}

export type FollowUpCallsDetails = {
  data: FollowUpCallsData; 
  isOpen: boolean; 
  toggleDropdown: () => void; 
};


export const repeatedItems = Array(5).fill(FollowUpCallsItems).flat();
