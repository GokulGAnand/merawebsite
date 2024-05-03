import { achievements } from '@/data/achievements';
import React from 'react';

export const AchievementBox = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col justify-center bg-bannerChipText w-[90%] lg:w-[88%] xl:w-[85%] rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          {achievements.map((achievement) => {
            return (
              <div key={achievement.id} className='grid justify-items-center'>
                <div className='mt-6 lg:mt-14 justify-center'>
                  {achievement.icon}
                </div>
                <div className='font-dm-sans text-4xl font-normal leading-[62.5px] text-center text-white'>
                  {achievement.title_content}
                </div>
                <div className='mb-11 lg:mb-14  justify-center font-dm-sans text-base font-medium leading-[22.8px] text-center text-white'>
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
