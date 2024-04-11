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
    <div className='h-full  '>
      <Carousel
        leftControl={<HiChevronLeft {...chevronStyles} />}
        rightControl={<HiChevronRight {...chevronStyles} />}
        indicators={false}
        theme={{
          scrollContainer: {
            base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
            snap: 'snap-x',
          },
        }}
      >
        <FirstBannerSlide />
        <FirstBannerSlide />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
