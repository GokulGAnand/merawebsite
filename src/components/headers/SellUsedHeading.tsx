import React from 'react';
import HeaderWithBranding from './HeaderWithBranding';
import Heading from './Heading';

export default function SellUsedHeading() {
  return (
    <div>
      <div className='hidden lg:flex mt-20 mb-5 justify-center'>
        <HeaderWithBranding
          heading={`Sell your car for more money`}
          subHeading=''
          isBannerHead
        />
      </div>
      <div className='flex flex-col lg:hidden justify-center my-8'>
        <HeaderWithBranding heading={`Sell your car`} isBannerHead />
        <Heading heading={`for more money`} isWhite />
      </div>
    </div>
  );
}
