'use client';
import Link from 'next/link';
import React from 'react';

export default function SearchBar() {
  const getPriceRoute = '/sell-used-car/get-car-price';
  return (
    <div className='w-full flex lg:flex-row flex-col py-5 lg:gap-0 gap-4'>
      <input
        placeholder='Search your brand'
        className=' lg:rounded-l-md lg:rounded-r-none rounded-md border border-solid border-formInputBorder py-3 lg:w-3/4 w-full'
      />
      <Link
        className='bg-whiteButtonText text-center content-center rounded-md lg:rounded-l-none lg:rounded-r-md py-3 text-white lg:w-1/4 w-full font-semibold text-md leading-4  px-14'
        href={getPriceRoute}
      >
        <button>Get your car price</button>
      </Link>
    </div>
  );
}
