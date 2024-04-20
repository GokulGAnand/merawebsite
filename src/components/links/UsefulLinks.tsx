import Link from 'next/link';
import React from 'react';

export default function UsefulLinks() {
  return (
    <div className='mt-8 w-full flex flex-col'>
      <div className=' text-md font-bold leading-6 '>Useful Links</div>
      <div className='grid grid-cols-4 lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:gap-6 gap-3 mt-4 w-full '>
        <Link className='text-sm' href='/'>
          About
        </Link>

        <Link className='text-sm' href='/'>
          Contact us
        </Link>

        <Link className='text-sm' href='/'>
          Careers
        </Link>

        <Link className='text-sm' href='/'>
          Culture
        </Link>

        <Link className='text-sm' href={'/'}>
          Blog
        </Link>
      </div>
    </div>
  );
}
