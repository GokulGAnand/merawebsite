import CustomerFeedBacks from '@/components/carousel/CustomerFeedBacks';
import CustomerFeedCarousel from '@/components/carousel/CustomerFeedCarousel';
import CustomerFeedbackHead from '@/components/headers/CustomerFeedbackHead';
import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

export const CustomerFeedBack = () => {
  return (
    <div className='flex flex-col justify-center mt-24 items-center  '>
      <CustomerFeedbackHead />
      <CustomerFeedBacks />
    </div>
  );
};
