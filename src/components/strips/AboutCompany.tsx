import React from 'react';
import Image from 'next/image';
import about3 from '~/images/AboutUs/about-3.png';
import about4 from '~/images/AboutUs/about-4.png';
import { AboutCard } from '../cards/AboutCard';

export const AboutCompany = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col w-[90%] lg:w-[88%] xl:w-[85%] justify-center'>
        <div className='grid grid-cols-2 gap-2'>
          <AboutCard />
          <div className='grid grid-cols-2'>
            <div>
              <Image src={about3} alt='About Image 1' />
            </div>
            <div>
              <Image src={about4} alt='About Image 2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
