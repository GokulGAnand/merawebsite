import CustomerFeedBacks from '@/components/carousel/CustomerFeedBacks';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';

export const CustomerFeedBack = () => {
  return (
    <div className='flex flex-col justify-center mt-24 items-center  '>
      <HeaderWithBranding
        heading='Our Customer Feedback'
        subHeading='See what our happy customers say about MeraCars'
      />
      <CustomerFeedBacks />
    </div>
  );
};
