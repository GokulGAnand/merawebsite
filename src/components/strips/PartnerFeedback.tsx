import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';
import CustomerFeedBacks from '../carousel/CustomerFeedBacks';
import { partnerReviews } from '@/data/partner';

export const PartnerFeedBack = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <HeaderWithBranding
        heading='Our Partner Feedback'
        subHeading='See what our happy customers say about MeraCars'
      />
      <CustomerFeedBacks data={partnerReviews} />
    </div>
  );
};
