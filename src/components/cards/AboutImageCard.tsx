import React from 'react';
import Image from 'next/image';
import AboutFirst from '~/images/AboutUs/about-3.png';
import AboutSecond from '~/images/AboutUs/about-4.png';
import AboutVector from '~/images/AboutUs/AboutVector.png';

export const AboutImageCard = () => {
  return (
    <div className='flex max-w-lg  mx-auto lg:mx-0 relative'>
      <div className='absolute z-30 h-full w-full'>
        <Image
          src={AboutVector}
          alt='About Vector'
          className=' object-contain hidden lg:flex'
        />
      </div>
      <div className='flex gap-3 z-40'>
        <div className='mt-12 lg:mt-20'>
          <Image
            src={AboutFirst}
            alt='Group of people'
            height={228}
            width={350}
          />
        </div>
        <div className='mt-24 lg:mt-36 mb-12'>
          <Image
            src={AboutSecond}
            alt='Guy with laptop'
            height={228}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};
