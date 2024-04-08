import { LucideMoveRight } from 'lucide-react';
import React from 'react';
import Button from '@/components/buttons/Button';
import CarBanner from '~/images/ToyCarBanner.png';
import Image from 'next/image';
import { GrFormNextLink } from 'react-icons/gr';

export default function GetCarPrice() {
  return (
    <div className='bg-ctaBannerBlue w-full h-max  xl:h-[465px] '>
      <div className='py-24 relative  flex h-full'>
        <div className='w-full flex flex-1 aspect-square absolute inset-0   flex-shrink-0  h-full '>
          {/* <CarPriceBanner className=' object-cover max-h-full w-full ' /> */}
          <Image
            src={CarBanner}
            className='object-cover'
            alt='Get Price Banner'
          />
        </div>
        <div className='flex flex-col justify-center gap-5 absolute top-0 px-40 py-24 '>
          <ul className='list-none text-white font-bold text-md leading-5'>
            <li className='flex items-center text-md font-bold'>
              <span className='h-1 w-1 bg-white rounded-full mr-1'></span>
              World of used cars in India
            </li>
          </ul>
          <div className='text-4xl text-white font-bold leading-10 '>
            Selling a car ? We're buying!
          </div>
          <div className='text-lg text-white leading-6  w-2/3 '>
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
  );
}
