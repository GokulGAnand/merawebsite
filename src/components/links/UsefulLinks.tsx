import Link from 'next/link';
import React from 'react';

export default function UsefulLinks() {
  return (
    <div className='mt-4'>
      <div className=' text-md font-bold leading-6 '>Useful Links </div>
      <div className='grid grid-cols-2 grid-rows-5 gap-6 mt-4 '>
        <Link className='text-sm' href='/'>
          About
        </Link>
        <Link className='text-sm' href='/'>
          About
        </Link>

        <Link className='text-sm' href='/'>
          Contact us
        </Link>
        <Link className='text-sm' href='/'>
          Contact us
        </Link>

        <Link className='text-sm' href='/'>
          Careers
        </Link>
        <Link className='text-sm' href='/'>
          Careers
        </Link>

        <Link className='text-sm' href='/'>
          Culture
        </Link>
        <Link className='text-sm' href={'/'}>
          Culture
        </Link>

        <Link className='text-sm' href={'/'}>
          Blog
        </Link>
        <Link className='text-sm' href={'/'}>
          Blog
        </Link>
      </div>
    </div>
  );
}
