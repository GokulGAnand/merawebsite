import React from 'react';
import Image from 'next/image';
import about3 from '~/images/AboutUs/about-3.png';
import about4 from '~/images/AboutUs/about-4.png';

export const AboutImageCard = () => {
  return (
    <div className='flex max-w-max gap-3 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 mx-auto lg:mx-0'>
      <div className='mt-12 lg:mt-20'>
        <Image src={about3} alt='About Image 1' height={228} width={350} />
      </div>
      <div className='mt-24 lg:mt-36 mb-12'>
        <Image src={about4} alt='About Image 2' height={228} width={350} />
      </div>
    </div>
  );
};
