import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PageBannerProps {
  heading: string;
  subHeading: string;
  image?: React.ReactNode;
  srcPath?: StaticImageData;
  srcMobile?: StaticImageData;
}

const PageBanner = (props: PageBannerProps) => {
  const { heading, subHeading, srcPath, srcMobile } = props;
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
        </div>
      </>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content z-50'>
        <div className='max-w-xl absolute z-40'>
          <HeaderWithBranding
            heading={heading}
            subHeading={subHeading}
            isBannerHead
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
