import React from 'react';
import NextImage from './NextImage';
import { StaticImageData } from 'next/image';

interface props {
  Banner: StaticImageData;
  BannerMobile: StaticImageData;
  BannerTab: StaticImageData | '';
}

const SectionBannerImage = (props: props) => {
  const { Banner, BannerMobile, BannerTab } = props;
  return (
    <>
      <NextImage
        src={Banner}
        layout='fill'
        alt='background pattern'
        className='hidden lg:flex'
      />
      <NextImage
        src={BannerMobile}
        layout='fill'
        alt='background pattern'
        className='flex lg:hidden'
      />
      {BannerTab && (
        <NextImage
          src={BannerTab}
          layout='fill'
          alt='background pattern'
          className='hidden md:flex lg:hidden'
        />
      )}
    </>
  );
};

export default SectionBannerImage;
