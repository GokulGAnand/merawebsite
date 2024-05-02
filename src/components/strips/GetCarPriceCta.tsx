'use client';
import Image from 'next/image';
import SectionBlock from '@/components/SectionBlock';
import ToyCarBanner from '~/images/ToyCarBanner.png';
import ToyCarBannerMobile from '~/images/ToyCarMobileBanner.png';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';
import NextImage from '@/components/NextImage';

const CallToAction = () => {
  return (
    <SectionBlock className='last:pb-0 mt-10'>
      <div className='relative flex w-full overflow-hidden  bg-gray-100  pt-10 pb-48 md:pt-8 px-[6%] md:px-[6.15%] lg:px-[7%]  xl:px-[7.25%] lg:py-24'>
        <NextImage
          src={ToyCarBanner}
          layout='fill'
          alt='car'
          className='hidden lg:flex'
        />
        <NextImage
          src={ToyCarBannerMobile}
          layout='fill'
          alt='background pattern'
          className='flex lg:hidden'
        />
        <div className='z-0 flex w-full justify-between '>
          <div className='flex max-w-[500px] flex-col   items-start'>
            <div className='flex flex-col gap-4 md:gap-8 lg:gap-4 pb-0 md:pt-32 lg:pt-0'>
              <ul className='list-none lg:text-white  text-bannerChipText   font-bold lg:text-md leading-5'>
                <li className='flex items-center text-md font-bold lg:bg-transparent bg-bannerChipColor flex-1 w-fit px-3 lg:px-0 py-px lg:py-0 rounded-3xl '>
                  <span className='h-1 w-1 lg:bg-white bg-bannerChipText rounded-full  mr-1'></span>
                  Accelerating India's Car Selling Journeys
                </li>
              </ul>
              <div className='text-4xl text-white font-bold leading-10 '>
                Trust us 100% with your car selling journey.
              </div>
              <div className='text-lg text-white leading-6 w-full  max-w-md  '>
                Most trustable car selling service from Kerala's #1 digital
                automobile company.
              </div>
            </div>
            <div className=' flex items-center space-x-6 rtl:space-x-reverse mt-14 lg:mt-6 '>
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
    </SectionBlock>
  );
};

export default CallToAction;
