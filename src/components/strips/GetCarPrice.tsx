import { LucideMoveRight } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';

import CarPriceBanner from '~/svg/CarPriceBanner.svg';
export default function GetCarPrice() {
  return (
    <div className='bg-ctaBannerBlue w-full  h-[465px] '>
      <div className='py-24 relative  flex h-full'>
        <div className='w-full  flex-shrink-0 relative h-full '>
          <CarPriceBanner className=' object-cover w-full ' />
        </div>
        <div className='flex flex-col justify-center gap-5 absolute top-0 px-40 py-24 '>
          <ul className='list-none text-white font-bold text-md leading-5'>
            <li className='flex items-center text-md font-bold'>
              <span className='h-1 w-1 bg-white rounded-full mr-1'></span>
              World of used cars in India
            </li>
          </ul>
          {/* <div className='text-white font-bold text-md leading-5'>

            World of used cars in india
          </div> */}
          <div className='text-4xl text-white font-bold leading-10 '>
            Selling a car ? We're buying!
          </div>
          <div className='text-lg text-white leading-6  w-2/3 '>
            Get up to ₹20,000 when you sell and buy your next car from us.
          </div>
          <div>
            <Button
              variant='light'
              className='font-bold px-4 py-4 rounded-lg  '
              rightIcon={LucideMoveRight}
            >
              Get Car Price
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
