import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import PricingCard from '../cards/PricingCard';
import { PricingPlans } from '@/data/pricing-plans';

const Pricing = () => {
  return (
    <div className='mt-24 flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col justify-center'>
        <HeaderWithBranding
          heading='Pick a right plan'
          subHeading='Sell your car the more money way, in three easy steps'
        />
      </div>
      <div className='flex flex-col items-center mb-8'>
        <div className='flex flex-row items-center mt-16 mb-8 w-full lg:w-[88%] xl:w-[90%]'>
          {PricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={plan.id}
              icon={plan.icon}
              title={plan.title}
              amount={plan.amount}
              row_1_content={plan.row_1_content}
              row_2_content={plan.row_2_content}
              row_3_content={plan.row_3_content}
              row_4_content={plan.row_4_content}
              action_content={plan.action_content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
