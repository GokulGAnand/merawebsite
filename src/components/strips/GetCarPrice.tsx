import { LucideMoveRight } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';

import CarPriceBanner from '~/svg/CarPriceBanner.svg';
export default function GetCarPrice() {
  return (
    <div className='bg-ctaBannerBlue w-full  h-3/4 '>
      <div className='py-20 relative '>
        <div className='w-full  flex-shrink-0 relative'>
          <CarPriceBanner />
        </div>
        <div className='flex flex-col gap-5 '>
          <div className='text-white font-bold text-md'>
            World of used cars in india
          </div>
          <div className='text-4xl text-white font-bold '>
            Selling a car ? We're buying!
          </div>
          <div className='text-lg text-white leading-6  w-1/4'>
            Get up to ₹20,000 when you sell and buy your next car from us.
          </div>
        </div>

        <div className='absolute'>
          <Button
            variant='light'
            className='font-bold px-4 py-4  '
            rightIcon={LucideMoveRight}
          >
            Get Car Price
          </Button>
        </div>
      </div>
    </div>
  );
}
