import FaqAccordion from '@/components/accordions/FaqAccordion';
import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

export default function FaqHeader() {
  return (
    <div className='flex flex-col justify-center px-40 gap-2'>
      <div className=' text-3xl font-bold leading-10 flex gap-1 '>
        Frequently Asked{' '}
        <span className='-mt-2 flex flex-col '>
          <div className=' -mr-4 flex justify-end'>
            <MeraVectorBlue width={70} heigth={70} />
          </div>
          <div>
            <h1 className='text-3xl pl-1'>Questions</h1>
          </div>
        </span>{' '}
      </div>
      <div className='text-subHeadingColor leading-6 text-lg '>
        Find out how we make car selling clear-cut and trustworthy, just for
        you.
      </div>
      <FaqAccordion />
    </div>
  );
}
