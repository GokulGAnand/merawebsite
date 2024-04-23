import { achievements } from '@/data/achievements';
import React from 'react';

export const AchievementBox = () => {
  return (
    <div className='flex flex-col justify-center py-10 px-10 bg-blue-600 w-[90%] lg:w-[88%] xl:w-[85%]'>
      <div className='flex justify-between'>
        {achievements.map((achievement) => {
          return (
            <div key={achievement.id} className='justify-between'>
              <div className='justify-center'>{achievement.icon}</div>
              <div>{achievement.title_content}</div>
              <div className='justify-center'>{achievement.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
