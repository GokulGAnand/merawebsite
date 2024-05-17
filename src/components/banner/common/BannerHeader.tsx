import React from 'react';
import MeraVector from '~/svg/MeraCarsVector.svg';

const BannerHeader = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col w-[90%] lg:w-[88%] xl:w-[85%] pt-16'>
        <div className='flex justify-center'>
          <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-sm '>
            <ul className='list-none'>
              <li className='flex items-center text-base font-bold text-bannerChipText px-10'>
                <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
                World of used cars in India
              </li>
            </ul>
          </div>
        </div>
        <div className=' text-white flex flex-col gap-4'>
          <div className='flex flex-col gap-2 '>
            <div className='text-4xl lg:text-5xl font-bold leading-10 flex flex-col  items-start  gap-1'>
              <div>
                <div className='mr-6 flex justify-end'>
                  <MeraVector width={70} height={70} />
                </div>
                <div className=''>Selling Your Car? We are Buying!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
