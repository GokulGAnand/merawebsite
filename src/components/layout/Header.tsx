import Link from 'next/link';
import React from 'react';
import Button from '@/components/buttons/Button';
import HeaderLinks from '@/components/links/HeaderLinks';
import HamburgerMenu from '@/components/links/HamburgerMenu';
import Logo from '~/svg/MeraLogo.svg';

export const Header = () => {
  return (
    <div className='h-20 w-full fixed top-0 right-0 z-50 bg-white flex flex-wrap justify-center align-middle place-items-center shadow-md '>
      <div className=' w-[90%] lg:w-[88%] xl:w-[85%] flex justify-center'>
        <div className='flex  w-full  justify-between place-items-center'>
          <div className='flex items-center align-middle'>
            <HamburgerMenu />
            <div className='flex align-middle place-items-center   gap-8'>
              <Link href='/'>
                <div className='cursor-pointer '>
                  <Logo
                    width={144}
                    height={32}
                    className='w-36 h-8'
                    aria-label='MeraCars Logo'
                  />
                </div>
              </Link>
              <HeaderLinks />
            </div>
          </div>
          <div className='hidden lg:flex '>
            <Button
              variant='outline'
              className=' flex flex-shrink-0 rounded-lg font-semibold py-3 px-6 text-center'
            >
              Call us at 9999999999
            </Button>
          </div>
          <div className='flex lg:hidden '>
            <Button
              variant='primary'
              className=' flex  rounded-lg flex-shrink min-w-max font-semibold py-2 px-6 text-center'
            >
              Sell Your Car
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
