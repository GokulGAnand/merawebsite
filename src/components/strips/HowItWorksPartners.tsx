import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import ServiceCard from '../cards/ServiceCard';
import { Services } from '@/data/partner';

export default function HowItWorks() {
  return (
    <div className='mt-12 lg:mt-44'>
      <HeaderWithBranding
        heading='How it Works'
        subHeading='Sell your car the more money way, in three easy steps'
      />
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%]'>
          {Services.map((service, index) => {
            return (
              <ServiceCard
                key={service.heading}
                heading={service.heading}
                img={service.image}
                subHeading={service.subHeading}
                index={index + 1}
                isSecondary
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
