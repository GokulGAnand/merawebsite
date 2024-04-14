import React from 'react';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';
import ToyCarBannerMobile from '~/images/ToyCarMobileBanner.png';
import ToyCarBanner from '~/images/ToyCarBanner.png';
import Image from 'next/image';
import SectionBlock from '@/components/SectionBlock';

export default function GetCarPrice() {
  return (
    <SectionBlock>
      <div className='bg-ctaBannerBlue w-full relative  flex overflow-hidden px-6 py-12 md:px-10 xl:px-32 xl:py-32  '>
        <Image
          src={ToyCarBanner}
          layout='fill'
          alt='background pattern'
          className='hidden lg:flex'
        />
        <Image
          src={ToyCarBannerMobile}
          layout='fill'
          alt='background pattern'
          className='flex lg:hidden'
        />
        <div className=' z-0 flex h-full w-full'>
          <div className=' relative flex flex-1  lg:h-full w-full  '>
            <div className='flex flex-col lg:h-full py-[25%] lg:py-0 lg:justify-center gap-5  absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] lg:w-[88%] xl:w-[85%] '>
              <ul className='list-none lg:text-white  text-bannerChipText  font-bold lg:text-md leading-5'>
                <li className='flex items-center text-md font-bold lg:bg-transparent bg-bannerChipColor flex-1 w-fit px-3 lg:px-0 py-px lg:py-0 rounded-3xl '>
                  <span className='h-1 w-1 lg:bg-white bg-bannerChipText rounded-full  mr-1'></span>
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
    </SectionBlock>
  );
}
