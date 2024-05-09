import { achievements } from '@/data/achievements';
import AboutPattern from '~/images/AboutUs/AboutPattern.png';
import AboutPatternMobile from '~/images/AboutUs/AboutPatternMobile.png';
import Image from 'next/image';
import React from 'react';

export const AchievementBox = () => {
  return (
    <div className='flex justify-center '>
      <div className='flex-col justify-center bg-bannerChipText w-[90%] lg:w-[88%] xl:w-[85%] rounded-lg z-20 relative'>
        <div className='absolute z-30 w-full h-full items-stretch'>
          <Image
            src={AboutPattern}
            alt='About Pattern'
            className='object-contain w-full lg:flex hidden'
          />
          <Image
            src={AboutPatternMobile}
            alt='About Pattern'
            className='object-fill w-full h-full lg:hidden opacity-15 mx-auto'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          {achievements.map((achievement) => {
            return (
              <div
                key={achievement.id}
                className='flex flex-col items-center lg:py-14 py-6'
              >
                <div>{achievement.icon}</div>
                <div className='text-3xl lg:text-5xl leading-[62.5px] font-normal text-white lg:pt-4 lg:pb-9'>
                  {achievement.title_content}
                </div>
                <div className='text-base text-white'>{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
