import Vyshak from '~/svg/Vyshak.svg';
import Jamshad from '~/svg/Jamshad.svg';
import Derin from '~/svg/Derin.svg';
import Nighil from '~/svg/Nighil.svg';
import PlaceYourBid from '../../public/images/MeraPartners/PlaceYourBid.webp';
import DealClosed from '../../public/images/MeraPartners/DealClosed.webp';
import CarDelivered from '../../public/images/MeraPartners/CarDelivered.webp';
import PerfectQualityCars from '../../public/images/MeraPartners/PerfectQualityCars.png';
import TransparentBidding from '../../public/images/MeraPartners/TransparentBidding.png';
import HassleFreePayment from '../../public/images/MeraPartners/HassleFreePayment.png';

interface Testimonial {
  customer: string;
  comments: string;
  icon: React.ReactNode;
  rating: number;
}

export const meraPartners = [
  {
    content: 'Only Perfect Quality Cars Available',
    image: PerfectQualityCars,
  },
  {
    content: '100% Transparent Bidding Process',
    image: TransparentBidding,
  },
  {
    content: 'Hassle Free Delivery And Payment',
    image: HassleFreePayment,
  },
];

export const partnerReviews: Testimonial[] = [
  {
    icon: <Vyshak width={60} height={60} />,
    rating: 5,
    customer: 'Vyshak',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
  },
  {
    icon: <Jamshad width={60} height={60} />,
    rating: 5,
    customer: 'Jamshad',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
  },
  {
    icon: <Derin width={60} height={60} />,
    rating: 5,
    customer: 'Derin',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
  },
  {
    icon: <Nighil width={60} height={60} />,
    rating: 5,
    customer: 'Nighil',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
  },
];

export const downloadPartner = {
  header: 'Make your dealership a success',
  main_header: 'MeraPartners, Join Now!',
  content:
    'Join our trusted network of car dealers and access high-quality used cars with complete inspection reports from our certified inspectors.',
};

export const services = [
  {
    heading: 'Free car expert inspection',
    subHeading:
      'Our experts will come to your location and perfectly evaluate your car.',
    image: PlaceYourBid,
  },
  {
    heading: 'Receive the best price for your car',
    subHeading:
      'Get the best market price for your car based on the inspection report.',
    image: DealClosed,
  },
  {
    heading: 'Instant payment into your bank account',
    subHeading: 'Complete the sale and get a 100% transparent deal',
    image: CarDelivered,
  },
];
