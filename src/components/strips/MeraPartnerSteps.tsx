import React from 'react';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';

export const MeraPartnerSteps = () => {
  return (
    <div className='mt-24 flex flex-col justify-center w-full '>
      <div className='flex flex-col justify-center'>
        <HeaderWithBranding
          heading='How it works'
          subHeading='Sell your car the more money way, in three easy steps'
        />
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%]'>
          {/* {PartnerSteps.map((steps, index) => {
            return (
              <PartnerCard
                key={steps.heading}
                heading={steps.heading}
                img={steps.image}
                subHeading={steps.subHeading}
                index={index + 1}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
