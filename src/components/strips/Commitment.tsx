import React from 'react';
import CommitmentContent from './CommitmentContent';
import { titleContent } from '@/data/commitment';

const Commitment = () => {
  const headerData = titleContent;
  return (
    <div className='flex justify-center'>
      <div className='flex-col mt-12 text-center lg:mt-16 w-[90%] lg:w-[88%] xl:w-[85%]'>
        <div className='text-lg lg:text-3xl font-bold text-stepsText'>
          {headerData.header}
        </div>
        <div className='mx-auto text-sm lg:text-lg text-center font-normal text-subHeadingColor mt-2 w-[70%] md:w-[80%]'>
          {headerData.subHeading}
        </div>
        <div>
          <CommitmentContent />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
