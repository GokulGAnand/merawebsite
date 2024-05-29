'use client';
import { useFormStore } from '@/lib/store/store';
import Link from 'next/link';
import React, { SetStateAction } from 'react';

interface Props {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}

export const getPriceRoute = '/sell-used-car/get-car-price';

export default function SearchBar(props: Props) {
  const { search, setSearch } = props;
  const { switchPage } = useFormStore();
  function handleClick() {
    switchPage(1);
  }
  return (
    <div className='w-full flex lg:flex-row flex-col py-5 lg:gap-0 gap-4'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search your brand'
        className=' lg:rounded-l-md lg:rounded-r-none rounded-md border border-solid border-formInputBorder py-3 lg:w-3/4 w-full'
      />
      <Link
        onClick={handleClick}
        className='bg-whiteButtonText text-center content-center rounded-md lg:rounded-l-none lg:rounded-r-md py-3 text-white lg:w-1/4 w-full font-semibold text-md leading-4  px-14'
        href={getPriceRoute}
      >
        <button>Get your car price</button>
      </Link>
    </div>
  );
}
