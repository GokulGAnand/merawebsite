import { commitments } from '@/data/commitment';
import React from 'react';

const CommitmentContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-12 lg:mt-16 mb-14 xl:gap-10'>
      {commitments.map((content) => {
        return (
          <div key={content.id} className='flex flex-col items-center md:m-4'>
            <div className='pb-5 lg:pb-6'>{content.icon}</div>
            <div className='text-sm lg:text-lg text-subHeadingColor text-center pb-6 w-[80%] lg:w-full'>
              {content.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommitmentContent;
