import React from 'react';
import MeraVector from '~/svg/MeraCarsVector.svg';

const BannerHeader = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col w-full pt-9 lg:pt-16'>
        <div className='flex justify-center'>
          <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-sm'>
            <ul className='list-none'>
              <li className='flex items-center text-xs lg:text-base font-bold text-bannerChipText px-3.5 lg:px-10'>
                <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
                World of used cars in India
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-2 pt-9 text-center relative text-white justify-center'>
          <div className='text-2xl lg:text-5xl font-bold leading-10 flex flex-col items-start gap-1'>
            <div>
              <div className='mr-6 flex justify-end lg:hidden'>
                <MeraVector width={32} height={7} />
              </div>
              <div className='mr-6 lg:flex justify-end hidden'>
                <MeraVector width={67} height={15} />
              </div>
              <div>Selling Your Car? We are Buying!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
