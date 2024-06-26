import CarBanner from '~/images/CarBanner.webp';
import CarBannerMobile from '~/images/CarBannerMobile.png';
import BannerWithHand from '~/images/BannerWithHand.webp';
import BannerWithHandMobile from '~/images/BannerWithHandMobile.png';

export const FirstSlideContent = {
  image: CarBanner,
  mobile_image: CarBannerMobile,
  mainHeaderText: 'Selling Your Car?',
  subHeaderText: 'We will Buy It for the Best Price.',
  description:
    'Sell your car quickly and for more money with MeraCars. We handle all the processes.  Enjoy doorstep pickup, same-day payment, and free RC transfer.',
};
export const SecondSlideContent = {
  image: BannerWithHand,
  mobile_image: BannerWithHandMobile,
  mainHeaderText: 'Selling Your Car?',
  subHeaderText: 'We will Buy It for the Best Price.',
  description:
    'Sell your car quickly and for more money with MeraCars. We handle all the processes.  Enjoy doorstep pickup, same-day payment, and free RC transfer.',
};

export const BannerSlides = [
  { content: FirstSlideContent },
  { content: SecondSlideContent },
];
