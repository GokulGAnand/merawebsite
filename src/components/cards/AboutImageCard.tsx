import React from 'react';
import Image from 'next/image';
import about3 from '~/images/AboutUs/about-3.png';
import about4 from '~/images/AboutUs/about-4.png';
import aboutVector from '~/images/AboutUs/AboutVector.png';

export const AboutImageCard = () => {
  const parentStyle = {
    backgroundImage: `url(${aboutVector})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='flex max-w-lg  mx-auto lg:mx-0 relative '>
      <div className='absolute h-full w-full z-30'>
        <Image
          src={aboutVector}
          alt='About Vector'
          className='object-contain'
        />
      </div>
      <div className='flex gap-3'>
        <div className='mt-12 lg:mt-20 z-40'>
          <Image src={about3} alt='About Image 1' height={228} width={350} />
        </div>
        <div className='mt-24 lg:mt-36 mb-12 z-40'>
          <Image src={about4} alt='About Image 2' height={228} width={350} />
        </div>
      </div>
    </div>
  );
};
