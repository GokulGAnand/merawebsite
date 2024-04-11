import Link from 'next/link';
import React from 'react';
import TeamTech from '~/svg/TeamTech.svg';

export default function Copyright() {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between '>
      <div className='flex gap-2 text-md justify-start align-middle items-center '>
        <div className='text-[11px] lg:text-sm lg:text-center lg:align-middle flex lg:items-center text-center  flex '>
          Copyright © {year} MeraCars, brought to you by{' '}
        </div>
        <div>
          <TeamTech className='w-full max-w-24 lg:max-w-36' />
        </div>
      </div>
      <div className='lg:flex hidden gap-2 '>
        <div className=''>All Right Reserved </div>
        {' | '}
        <Link className='text-linkColor' href={'/'}>
          Terms and Condition
        </Link>
        {' | '}
        <Link className='text-linkColor' href={'/'}>
          Privacy Policy
        </Link>
      </div>

      {/* For Mobile  */}
      <div className='lg:hidden flex gap-2'>
        <div>All Right Reserved </div>
        {' | '}
        <Link className='text-linkColor' href={'/'}>
          Terms and Condition
        </Link>
        {' | '}
        <Link className='text-linkColor' href={'/'}>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
