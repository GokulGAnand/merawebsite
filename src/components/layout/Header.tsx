'use client';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';

import Logo from '~/images/logoHeader.svg';

const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Sell Your Car',
    route: '/sell',
  },
  {
    label: 'MeraPartners',
    route: '/',
  },
  {
    label: 'Car Inspection',
    route: '/',
  },
  {
    label: 'More',
    route: '/',
  },
];

export const Header = () => {
  return (
    <div className='h-20 flex justify-between align-middle place-items-center px-40'>
      <div className='flex align-middle place-items-center   gap-8'>
        <Link href='/'>
          <div className='cursor-pointer '>
            <Logo className='w-36 h-8' />
          </div>
        </Link>

        <div className='flex gap-3'>
          {headerLinks.map((option) => {
            return (
              <div key={option.label} className='px-5 text-headerLinkColor '>
                <Link href={option.route}>{option.label}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Button
          variant='primary'
          className=' rounded-lg font-semibold py-3 px-6 text-center'
        >
          Call us at 9999999999
        </Button>
      </div>
    </div>
  );
};
