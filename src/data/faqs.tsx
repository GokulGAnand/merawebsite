export interface FaqType {
  id: number;
  que: string;
  ans: string;
}

export const faqs = [
  {
    id: -7,
    que: 'Can I sell a car that has an ongoing loan on it?',
    ans: "Yes, you can sell your car even if it's still under a loan. We'll help manage the loan settlement as part of the sale process.",
  },
  {
    id: -6,
    que: 'Is the car owner required to be present at the time of car pick up & inspection?',
    ans: 'Yes, the car owner needs to be present during the pick up and inspection to verify ownership and discuss details.',
  },
  {
    id: -5,
    que: 'Do I need to be present at the RTO for RC transfer?',
    ans: "No, you don't need to be at the RTO. We handle all the paperwork and the RC transfer process for you.",
  },
  {
    id: -4,
    que: 'How long does the RC transfer take?',
    ans: "The RC transfer typically takes about 7 to 14 working days, depending on the RTO's processing time.",
  },
  {
    id: -3,
    que: 'MeraCars buy commercial cars?',
    ans: 'No, we do not buy commercial vehicles.',
  },
  {
    id: -2,
    que: 'Will Meracars handle/take care of the paperwork?',
    ans: 'Absolutely, we take care of all the necessary paperwork for you, making the process hassle-free.',
  },
  {
    id: -1,
    que: 'How long does it take during car inspection?',
    ans: 'The inspection usually takes about 30 minutes, during which we check various aspects of your car to ensure its condition.',
  },
];
