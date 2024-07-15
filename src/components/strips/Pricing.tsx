import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import PricingCard from '../cards/PricingCard';
import { pricingPlans } from '@/data/pricing-plans';

const Pricing = () => {
  return (
    <div className='py-[1.5rem] xl:py-[5%] 2xl:py-[10%]  lg:pb-32 flex flex-col justify-center items-center w-full'>
      <div className='container flex flex-col justify-center lg:pt-10'>
        <HeaderWithBranding
          heading='Pick a right plan'
          subHeading='Get a paid certified car inspection report quickly, tailored to your needs.'
        />
      </div>
      <div className='grid lg:grid-cols-3 justify-items-center lg:pt-16 pt-5 w-[94%] lg:w-[88%]'>
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            icon={plan.icon}
            title={plan.title}
            amount={plan.amount}
            rowContent={plan.rowContent}
            actionContent={plan.actionContent}
            link={plan.link}
            isDisabled={plan.isDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
