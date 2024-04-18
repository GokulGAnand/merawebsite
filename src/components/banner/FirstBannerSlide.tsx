'use client';
import { FirstSlideContents } from '@/components/banner/FirstSlideContents';
import CarBanner from '~/images/CarBanner.png';
import CarBannerMobile from '~/images/CarBannerMobile.png';
import NextImage from '../NextImage';

export const FirstBannerSlide = () => {
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
        <FirstSlideContents />
      </div>
    </div>
  );
};
