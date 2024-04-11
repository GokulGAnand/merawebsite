import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';

import Logo from '~/images/logoHeader.svg';
import HeaderLinks from '@/components/links/HeaderLinks';

export const Header = () => {
  return (
    <div className='h-20 w-full flex flex-wrap justify-center align-middle place-items-center shadow-md '>
      <div className=' w-[90%] lg:w-[88%] xl:w-[85%] flex justify-center'>
        <div className='flex w-full  justify-between place-items-center'>
          <div className='flex align-middle place-items-center   gap-8'>
            <Link href='/'>
              <div className='cursor-pointer '>
                <Logo width={144} height={32} className='w-36 h-8' />
              </div>
            </Link>

            <HeaderLinks />
          </div>
          <div className='hidden lg:flex '>
            <Button
              variant='primary'
              className=' flex flex-shrink-0 rounded-lg font-semibold py-3 px-6 text-center'
            >
              Call us at 9999999999
            </Button>
          </div>
          <div className='flex lg:hidden '>
            <Button
              variant='primary'
              className=' flex flex-shrink-0 rounded-lg font-semibold py-2 px-6 text-center'
            >
              Sell Your Car
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
