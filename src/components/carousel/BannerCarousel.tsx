import { FirstBannerSlide } from '@/components/banner/FirstBannerSlide';
import { Carousel } from 'flowbite-react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const chevronStyles = {
  fontSize: 60,
  color: '#FFFFFF',
  className: 'opacity-20 hover:opacity-40 ',
};

const BannerCarousel = () => {
  return (
    <div className='h-full w-screen'>
      <Carousel
        leftControl={<HiChevronLeft {...chevronStyles} />}
        rightControl={<HiChevronRight {...chevronStyles} />}
        indicators={false}
      >
        <FirstBannerSlide />
        <FirstBannerSlide />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
