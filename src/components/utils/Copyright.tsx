import Link from 'next/link';
import React from 'react';
import TeamTech from '~/svg/TeamTech.svg';

export default function Copyright() {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className='flex justify-between px-40'>
      <div className='flex gap-2 text-md '>
        <div>Copyright © {year} MeraCars, brought to you by </div>
        <div>
          <TeamTech />
        </div>
      </div>
      <div className='flex gap-2'>
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
