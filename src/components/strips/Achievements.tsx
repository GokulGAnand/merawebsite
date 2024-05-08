import { achievements } from '@/data/achievements';
import AboutPattern from '~/images/AboutUs/AboutPattern.png';
import React from 'react';

export const AchievementBox = () => {
  const parentStyle = {
    backgroundImage: `url(${AboutPattern})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='flex justify-center'>
      <div
        className='flex-col justify-center bg-bannerChipText w-[90%] lg:w-[88%] xl:w-[85%] rounded-lg'
        style={parentStyle}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          {achievements.map((achievement) => {
            return (
              <div
                key={achievement.id}
                className='flex flex-col items-center py-14'
              >
                <div>{achievement.icon}</div>
                <div className='text-4xl leading-[62.5px] text-white'>
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
