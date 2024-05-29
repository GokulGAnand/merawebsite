import React from 'react';
import HeaderWithBranding from './HeaderWithBranding';
import Heading from './Heading';

export default function SellUsedHeading() {
  return (
    <div>
      <div className='hidden lg:flex mt-20 mb-5 justify-center'>
        <HeaderWithBranding
          heading={`Selling a car? We're buying!`}
          subHeading=''
          isBannerHead
        />
      </div>
      <div className='flex flex-col lg:hidden justify-center my-8'>
        <HeaderWithBranding heading={`Selling a car?`} isBannerHead />
        <Heading heading={`We're buying!`} isWhite />
      </div>
    </div>
  );
}
