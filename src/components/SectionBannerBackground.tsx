import React from 'react';
import NextImage from './NextImage';
import { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface Props {
  Banner: StaticImageData;
  BannerMobile: StaticImageData;
  BannerTab: StaticImageData | '';
  isHiring?: boolean;
}

const SectionBannerBackground = (props: Props) => {
  const { Banner, BannerMobile, BannerTab, isHiring } = props;
  return (
    <>
      <div
        className={clsx(
          'absolute inset-0 hidden lg:flex',
          isHiring ? 'right-60' : '',
        )}
      >
        <NextImage
          src={Banner}
          layout='fill'
          alt='background pattern'
          className='w-full h-full'
        />
      </div>
      <div
        className={clsx(
          'absolute inset-0 flex lg:hidden',
          isHiring ? 'h-[30%] top-40' : '',
        )}
      >
        <NextImage
          src={BannerMobile}
          layout='fill'
          alt='background pattern'
          className='w-full h-full'
        />
      </div>
      {BannerTab && (
        <div className='absolute inset-0 hidden md:flex lg:hidden'>
          <NextImage
            src={BannerTab}
            layout='fill'
            alt='background pattern'
            className='w-full h-full'
          />
        </div>
      )}
    </>
  );
};

export default SectionBannerBackground;
