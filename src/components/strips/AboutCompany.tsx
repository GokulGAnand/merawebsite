import React from 'react';
import { AboutCard } from '../cards/AboutCard';
import { AboutImageCard } from '../cards/AboutImageCard';

export const AboutCompany = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[90%] lg:w-[88%] xl:w-[85%] justify-center'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <AboutCard />
          <AboutImageCard />
        </div>
      </div>
    </div>
  );
};
