import CarBanner from '~/images/CarBanner.webp';
import CarBannerMobile from '~/images/CarBannerMobile.png';
import BannerWithHand from '~/images/BannerWithHand.webp';
import BannerWithHandMobile from '~/images/BannerWithHandMobile.png';
import BannerSlide from '@/components/banner/home-banner-slides/BannerSlide';

export const BannerSlides = [
  {
    component: BannerSlide,
    props: {
      image: CarBanner,
      mobileImage: CarBannerMobile,
      highlightedText: `Accelerating India's Car Selling Journey`,
      mainHeaderText: 'Selling Your Car?',
      subHeaderText: 'We will Buy It for the Best Price.',
      description:
        'Sell your car quickly and for more money with MeraCars. We handle all the processes. Enjoy doorstep pickup, same-day payment, and free RC transfer.',
    },
  },
  {
    component: BannerSlide,
    props: {
      image: BannerWithHand,
      mobileImage: BannerWithHandMobile,
      highlightedText: `Accelerating India's Car Selling Journey`,
      mainHeaderText: 'Selling Your Car?',
      subHeaderText: 'We will Buy It for the Best Price.',
      description:
        'Sell your car quickly and for more money with MeraCars. We handle all the processes. Enjoy doorstep pickup, same-day payment, and free RC transfer.',
    },
  },
];
