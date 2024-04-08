import { FirstSlideContents } from '@/components/banner/FirstSlideContents';
import Image from 'next/image';
import CarBanner from '~/images/CarBanner.png';

export const FirstBannerSlide = () => {
  return (
    <div>
      <div className='relative  w-full z-0 border border-solid border-green-700 h-[621px]'>
        <div className='w-full flex flex-1 h-full  aspect-square absolute inset-0  '>
          {/* <MainBanner className='w-full h-full object-cover  ' /> */}
          <Image
            src={CarBanner}
            className='w-full h-full object-contain'
            alt='Image'
          />
        </div>

        <div className='relative h-full flex z-10  '>
          <FirstSlideContents />
        </div>
      </div>
    </div>
  );
};
