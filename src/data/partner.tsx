import PerfectQualityCars from '~/images/MeraPartners/PerfectQualityCars.png';
import TransparentBidding from '~/images/Merapartners/TransparentBidding.png';
import HassleFreePayment from '~/images/Merapartners/HassleFreePayment.png';
import Floyd from '~/images/MeraPartners/Partners/FloydMiles.svg';
import PlayStoreButton from '~/svg/PlayStoreVector.svg';
import AppStoreButton from '~/svg/AppStoreVector.svg';

export const MeraPartners = [
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

export const PartnerReviews = [
  {
    icon: <Floyd width={60} height={60} />,
    rating: 5,
    partner: 'Floyd Miles',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. `,
  },
  {
    icon: <Floyd width={60} height={60} />,
    rating: 5,
    partner: 'Floyd Miles',
    comments: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. `,
  },
];

export const DownloadPartner = {
  header: 'Make your dealership a success',
  main_header: 'MeraPartners, Join Now!',
  content:
    'Join our trusted network of car dealers and access high-quality used cars with complete inspection reports from our certified inspectors.',
};

export const DownloadButton = [
  {
    label: 'Playstore Button',
    icon: <PlayStoreButton width={144} height={33} />,
  },
  {
    label: 'App store button',
    icon: <AppStoreButton width={144} height={33} />,
  },
];
