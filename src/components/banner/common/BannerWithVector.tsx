import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import BannerHeader from './BannerHeader';

interface BannerWithVectorProps {
  heading: string;
  subHeading: string;
  image?: React.ReactNode;
  srcPath?: StaticImageData;
  srcMobile?: StaticImageData;
  srcVector?: StaticImageData;
}

const BannerWithVector = (props: BannerWithVectorProps) => {
  const { heading, subHeading, srcPath, srcMobile, srcVector } = props;
  return (
    <div className='hero h-auto xl:h-[586px] bg-opacity-90 relative'>
      <>
        <div className='relative h-full w-full bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90 z-10 opacity-90 py-48 lg:py-56'></div>
        <div className='flex w-full h-auto absolute z-20'>
          <div className='flex-col h-full'>
            {srcVector && (
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full hidden lg:flex skew-y-[30deg]'
              />
            )}
          </div>
          <div className='flex-col h-full'>
            {srcVector && (
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full hidden lg:flex skew-y-12'
              />
            )}
          </div>
        </div>
        <div className='absolute z-40 top-0'>
          <BannerHeader />
        </div>
        <div className='w-full absolute z-30 bottom-0'>
          {srcPath && (
            <Image
              src={srcPath}
              alt='Banner'
              className='object-fill h-full w-full hidden md:flex'
            />
          )}
          {srcMobile && (
            <Image
              src={srcMobile}
              alt='Banner Mobile'
              className='object-fill h-full w-full flex md:hidden'
            />
          )}
        </div>
      </>
    </div>
  );
};

export default BannerWithVector;
