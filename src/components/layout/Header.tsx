import Link from 'next/link';
import React from 'react';
import Button from '@/components/buttons/Button';
import HeaderLinks from '@/components/links/HeaderLinks';
import Logo from '~/svg/MeraLogo.svg';
import dynamic from 'next/dynamic';
import SellCarButton from '../buttons/SellCarButton';
import { contactNum } from '@/data/contacts';
const HamburgerMenu = dynamic(() => import('@/components/links/HamburgerMenu'));

export const Header = () => {
  return (
    <div
      className={
        'h-20 w-full fixed top-0 right-0 z-50 bg-white flex flex-wrap justify-center align-middle place-items-center shadow-md'
      }
    >
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
              Call us at {contactNum}
            </Button>
          </div>
          <SellCarButton />
        </div>
      </div>
    </div>
  );
};
