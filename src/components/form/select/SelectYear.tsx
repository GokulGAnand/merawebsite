'use client';
import React, { useState } from 'react';
import SearchWithHeader from '../components/SearchWithHeader';
import DataOpts from '../car/options/DataOpts';
import { years } from '@/data/years';

export default function SelectYear() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchWithHeader
        heading='Select the car manufacturing year'
        setSearch={setSearch}
        searchPlaceHolder='Search your year'
      />
      <div className='mt-4 lg:mt-14 flex flex-col gap-4'>
        <DataOpts btnType='year' data={years} search={search} page={3} />
      </div>
    </>
  );
}
