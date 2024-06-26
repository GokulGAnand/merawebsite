'use client';
import SlideContents from '@/components/banner/home-banner-slides/SlideContents';
import NextImage from '@/components/NextImage';
import { StaticImageData } from 'next/image';

interface props {
  CarBanner: StaticImageData;
  CarBannerMobile: StaticImageData;
  mainHeaderText: string;
  subHeaderText: string;
  description: string;
}

export default function HomeBannerSlide(props: props) {
  const {
    CarBanner,
    CarBannerMobile,
    mainHeaderText,
    subHeaderText,
    description,
  } = props;

  return (
    <div className='relative  w-full z-10 rounded-none  '>
      <div className='w-full flex flex-1 h-full  aspect-square absolute inset-0 rounded-none  '>
        <NextImage
          src={CarBanner}
          layout='fill'
          alt='car'
          className='hidden lg:flex'
        />
        <NextImage
          src={CarBannerMobile}
          layout='fill'
          alt='background pattern'
          className='flex lg:hidden'
        />
      </div>
      <div className='relative h-full flex z-20 w-full  '>
        <SlideContents
          mainHeaderText={mainHeaderText}
          subHeaderText={subHeaderText}
          description={description}
        />
      </div>
    </div>
  );
}
