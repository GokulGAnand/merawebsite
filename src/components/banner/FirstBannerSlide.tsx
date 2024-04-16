import { FirstSlideContents } from '@/components/banner/FirstSlideContents';
import Image from 'next/image';
import CarBanner from '~/images/CarBanner.png';

export const FirstBannerSlide = () => {
  return (
    <div className='relative  w-full z-10 rounded-none  '>
      <div className='w-full flex flex-1 h-full  aspect-square absolute inset-0 rounded-none  '>
        <Image
          src={CarBanner}
          className='w-full h-full object-cover'
          alt='Image'
          fill
          sizes='(min-width: 808px) 50vw, 100vw'
          priority
        />
      </div>

      <div className='relative h-full flex z-20 w-full  '>
        <FirstSlideContents />
      </div>
    </div>
  );
};
