import { FirstSlideContents } from '@/components/banner/FirstSlideContents';

import MainBanner from '~/svg/CarBanner.svg';

export const FirstBannerSlide = () => {
  return (
    <div>
      <div className='relative z-0 border border-solid border-red-700 h-[621px]'>
        {/* <FirstSlide />  */}
        <div className='w-full flex flex-1 h-full '>
          <MainBanner className=' w-full h-full object-cover' />
        </div>

        <div className='absolute z-10 top-0 '>
          <FirstSlideContents />
        </div>
      </div>
    </div>
  );
};
