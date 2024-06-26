import { Carousel } from 'flowbite-react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HomeBannerSlide from '../banner/home-banner-slides/HomeBannerSlide';
import { BannerSlides } from '@/data/home-banner';

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
        {BannerSlides.map((slide, index) => (
          <HomeBannerSlide
            key={index}
            CarBanner={slide.content.image}
            CarBannerMobile={slide.content.mobile_image}
            mainHeaderText={slide.content.mainHeaderText}
            subHeaderText={slide.content.subHeaderText}
            description={slide.content.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
