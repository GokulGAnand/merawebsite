import CustomerFeedBacks from '@/components/carousel/CustomerFeedBacks';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import { testimonials } from '@/data/testimonials';
import React from 'react';

export const CustomerFeedBack = () => {
  return (
    <div className='flex flex-col justify-center mt-24 items-center  '>
      <HeaderWithBranding
        heading='Our Customer Feedback'
        subHeading='See what our happy customers say about MeraCars'
      />
      <CustomerFeedBacks data={testimonials} />
    </div>
  );
};
