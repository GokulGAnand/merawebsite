import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

function CustomerFeedbackHead() {
  return (
    <div className='flex flex-col justify-center items-center px-40 gap-2 '>
      <div className=' text-3xl font-bold leading-10 flex flex-col  items-start align-middle gap-1 '>
        <div>
          <div className=' flex justify-end'>
            <MeraVectorBlue width={50} heigth={11} />
          </div>
          <div className='flex'>Our Customer Feedback</div>
        </div>
      </div>
      <div className='text-subHeadingColor leading-6 text-lg '>
        See what our happy customers say about MeraCars
      </div>
    </div>
  );
}

export default CustomerFeedbackHead;
