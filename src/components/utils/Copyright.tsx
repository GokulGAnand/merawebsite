import Link from 'next/link';
import React from 'react';
import TeamTech from '~/svg/TeamTech.svg';

export default function Copyright() {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between '>
      <div className='flex gap-2 text-md justify-start align-middle items-center '>
        <div className='text-[11px]  lg:text-sm lg:text-center lg:align-middle flex lg:items-center text-center text-copyRightText '>
          Copyright © {year} MeraCars, brought to you by{' '}
        </div>
        <div>
          <TeamTech className='w-full max-w-24 lg:max-w-36' />
        </div>
      </div>
      <div className='lg:flex hidden gap-2 '>
        <div className='text-copyRightText'>All Right Reserved </div>
        {' | '}
        <Link className='text-linkColor' href={'/terms-and-conditions'}>
          Terms and Condition
        </Link>
        {' | '}
        <Link className='text-linkColor' href={'/privacy-policy'}>
          Privacy Policy
        </Link>
      </div>

      {/* For Mobile  */}
      <div className='lg:hidden flex flex-col gap-1 mt-3 '>
        <div>All Right Reserved </div>
        <div className='mb-4'>
          <Link className='text-linkColor' href={'/terms-and-conditions'}>
            Terms and Conditions
          </Link>
          {' | '}
          <Link className='text-linkColor' href={'/privacy-policy'}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
