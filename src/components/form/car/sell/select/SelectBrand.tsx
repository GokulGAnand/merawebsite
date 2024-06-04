'use client';
import React, { useState } from 'react';
import SearchWithHeader from '../../../components/SearchWithHeader';
import AllBrands from '../all-options/AllBrands';

export default function SelectBrand() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchWithHeader
        heading='Select your car brand'
        setSearch={setSearch}
        searchPlaceHolder='Search your brand'
      />
      <div className='mt-4 lg:mt-14 flex flex-col gap-4'>
        <AllBrands search={search} />
      </div>
    </>
  );
}
