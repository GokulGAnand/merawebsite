import React from 'react';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';
import ToyCarBanner from '~/svg/ToyCarBanner.svg';

export default function GetCarPrice() {
  return (
    <div className='bg-ctaBannerBlue w-full h-max flex lg:h-[624px] '>
      <div className='  flex h-full w-full'>
        <div className=' relative flex flex-1  h-full w-full  '>
          <ToyCarBanner className='object-cover' />
          <div className='flex flex-col h-full justify-center gap-5  absolute top-0 bottom-0 left-0 right-0 m-auto px-40 '>
            <ul className='list-none text-white font-bold text-md leading-5'>
              <li className='flex items-center text-md font-bold'>
                <span className='h-1 w-1 bg-white rounded-full mr-1'></span>
                World of used cars in India
              </li>
            </ul>
            <div className='text-4xl text-white font-bold leading-10 '>
              Selling a car ? We're buying!
            </div>
            <div className='text-lg text-white leading-6 w-full  lg:w-1/3 '>
              Get up to ₹20,000 when you sell and buy your next car from us.
            </div>
            <div>
              <Button
                variant='light'
                className='font-bold text-center flex justify-center rounded-lg min-w-48 min-h-16  '
                rightIcon={GrFormNextLink}
              >
                Get Car Price
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
