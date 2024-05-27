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
      <div className='flex flex-col items-center w-full lg:pt-16 pt-5'>
        <div className='flex flex-col lg:flex-row w-[80%] lg:w-[85%] justify-between'>
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
