import MeraPartnersImageCardOne from '~/images/MeraPartners/MeraPartnersImageCardOne.jpg';
import MeraPartnersImageCardTwo from '~/images/Merapartners/MeraPartnersImageCardTwo.jpg';
import MeraPartnersImageCardThree from '~/images/Merapartners/MeraPartnersImageCardThree.jpg';
import Floyd from '~/images/MeraPartners/Partners/FloydMiles.svg';

export const MeraPartners = [
  {
    content: '1.Lorem Ipsum',
    image: MeraPartnersImageCardOne,
  },
  {
    content: '2.Lorem Ipsum',
    image: MeraPartnersImageCardTwo,
  },
  {
    content: '3.Lorem Ipsum',
    image: MeraPartnersImageCardThree,
  },
];

export const PartnerReviews = [
  {
    icon: <Floyd width={60} height={60} />,
    rating: 5,
    partner: 'Floyd Miles',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];
