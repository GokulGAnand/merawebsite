import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

function CustomerFeedbackHead() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className=' text-3xl font-bold leading-10 flex gap-1 '>
        Our Customer{' '}
        <span className='-mt-2 flex flex-col '>
          <div className=' -mr-4 flex justify-end'>
            <MeraVectorBlue width={70} heigth={70} />
          </div>
          <div>
            <h1 className='text-3xl pl-1'>Feedback</h1>
          </div>
        </span>{' '}
      </div>
      <div className='text-subHeadingColor leading-6 text-lg '>
        See what our happy customers say about MeraCars
      </div>
    </div>
  );
}

export default CustomerFeedbackHead;
