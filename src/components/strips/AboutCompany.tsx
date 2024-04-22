import React from 'react';
import Image from 'next/image';
import about3 from '~/images/AboutUs/about-3.png';
import about4 from '~/images/AboutUs/about-4.png';
import { about } from '@/data/about';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';

export const AboutCompany = () => {
  return (
    <div className='flex flex-column justify-center w-[90%] lg:w-[88%] xl:w-[85%] gap-2 '>
      <p className='text-left text-16 text-blue-900 font-bold leading-5'>
        About the company
      </p>
      <HeaderWithBranding
        isStart
        heading='Our Company Overview'
        subHeading=''
      />
      <div>
        {about.map((aboutItem) => {
          return (
            <div
              key={aboutItem.title}
              className='flex gap-4 align-middle place-items-center text-serviceText'
            >
              <div className=''>
                <div className='font-bold line text-md'>{aboutItem.title}</div>
                <div className='text-sm text-subHeadingColor'>
                  {aboutItem.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Image src={about3} alt='About Image 1' />
      </div>
      <div>
        <Image src={about4} alt='About Image 2' />
      </div>
    </div>
  );
};
