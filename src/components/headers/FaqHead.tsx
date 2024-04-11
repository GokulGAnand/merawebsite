import React, { Fragment } from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

export default function FaqHead() {
  return (
    <Fragment>
      <div className=' text-3xl font-bold leading-10 flex flex-col text-center  items-start align-middle gap-1 '>
        <div>
          <div className=' flex justify-end'>
            <MeraVectorBlue width={50} heigth={11} />
          </div>
          <div className='text-xl text-stepsText sm:text-2xl lg:text-3xl flex'>
            Frequently Asked Questions
          </div>
        </div>
      </div>
      <div className='text-subHeadingColor leading-6 text-lg '>
        Find out how we make car selling clear-cut and trustworthy, just for
        you.
      </div>
    </Fragment>
  );
}
