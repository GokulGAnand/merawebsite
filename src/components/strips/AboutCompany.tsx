import React from 'react';
import Image from 'next/image';
import about3 from '~/images/AboutUs/about-3.png';
import about4 from '~/images/AboutUs/about-4.png';
import { AboutCard } from '../cards/AboutCard';

export const AboutCompany = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col w-[90%] lg:w-[88%] xl:w-[85%] justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2'>
          <AboutCard />
          <div className='grid grid-cols-2 md:pl-20 lg:pl-16 xl:pl-44 2xl:pl-60'>
            <div className='mt-[51px] lg:mt-20 pr-1.5 lg:pr-3 xl:pr-3 2xl-pr-3'>
              <Image src={about3} alt='About Image 1' />
            </div>
            <div className='mt-[87px] lg:mt-[137px] mb-12'>
              <Image src={about4} alt='About Image 2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
