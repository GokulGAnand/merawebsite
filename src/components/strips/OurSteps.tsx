import React from 'react';

import { services } from '@/data/services';

import ServiceCard from '@/components/cards/ServiceCard';

import OurStepsHead from '@/components/headers/OurStepsHead';

export const OurSteps = () => {
  return (
    <div className='mt-24 flex flex-col justify-center '>
      <div className='flex flex-col justify-center'>
        <OurStepsHead />
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
