import React from 'react';
import { services } from '@/data/services';
import ServiceCard from '@/components/cards/ServiceCard';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';

export const OurSteps = () => {
  return (
    <div className='mt-24 flex flex-col justify-center w-full '>
      <div className='flex flex-col justify-center'>
        <HeaderWithBranding
          heading='Ready. Set. Sold'
          subHeading='Sell your car the more money way, in three easy steps'
        />
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%]'>
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
    </div>
  );
};
