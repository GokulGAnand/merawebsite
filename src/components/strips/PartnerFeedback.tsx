import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import PartnerFeedBacks from '../carousel/PartnerFeedBacks';
import React from 'react';

export const PartnerFeedBack = () => {
  return (
    <div className='flex flex-col justify-center mt-24'>
      <HeaderWithBranding
        heading='Our Partner Feedback'
        subHeading='See what our happy customers say about MeraCars'
      />
      <PartnerFeedBacks />
    </div>
  );
};
