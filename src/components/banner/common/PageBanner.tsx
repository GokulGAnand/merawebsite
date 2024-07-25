import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PageBannerProps {
  heading: string;
  lastpartHeading?: string;
  subHeading: string;
  image?: React.ReactNode;
  srcPath?: StaticImageData;
  srcMobile?: StaticImageData;
  srcTab?: StaticImageData;
}

const PageBanner = (props: PageBannerProps) => {
  const { heading, lastpartHeading, subHeading, srcPath, srcMobile, srcTab } =
    props;
  return (
    <div className='hero min-h-[300px] bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90 relative'>
      <>
        <div className='relative h-full w-full bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90 z-40 opacity-90'></div>
        <div className='w-full h-full absolute z-20'>
          {srcPath && (
            <Image
              src={srcPath}
              alt='Banner'
              className='object-fill h-full w-full lg:flex hidden'
            />
          )}
          {srcMobile && (
            <Image
              src={srcMobile}
              alt='Banner Mobile'
              className='object-fill h-full w-full lg:hidden flex'
            />
          )}
          {srcTab && (
            <Image
              src={srcTab}
              alt='Banner Tab'
              className='object-fill h-full w-full  hidden md:flex lg:hidden'
            />
          )}
        </div>
      </>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content z-50'>
        <div className='max-w-xl absolute z-40'>
          <HeaderWithBranding
            heading={heading}
            lastpartHeading={lastpartHeading}
            subHeading={subHeading}
            isBannerHead
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
