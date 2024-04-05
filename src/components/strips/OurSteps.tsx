import React from 'react';

import { services } from '@/data/services';

import ServiceCard from '@/components/cards/ServiceCard';

import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

export const OurSteps = () => {
  return (
    <div className='mt-24 flex flex-col justify-center '>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col  justify-center '>
          <div className='flex relative font-bold text-4xl justify-center align-middle '>
            <p>Ready. Set. </p>{' '}
            <span className='-mt-4'>
              <div className='px-2'>
                <MeraVectorBlue width={70} heigth={70} />
              </div>
              <div>
                <h1 className='text-4xl pl-1'> Sold</h1>
              </div>
            </span>{' '}
          </div>
        </div>
        <div className='flex justify-center text-subHeadingColor'>
          Sell your car the more money way, in three easy steps
        </div>
      </div>
      <div className='grid grid-cols-3 gap-9 my-12 px-40'>
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.heading}
              heading={service.heading}
              img={service.image}
              subHeading={service.subHeading}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};
