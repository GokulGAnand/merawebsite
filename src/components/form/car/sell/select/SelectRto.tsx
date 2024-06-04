'use client';
import React, { useState } from 'react';
import SearchWithHeader from '../../../components/SearchWithHeader';
import AllRtos from '../all-options/AllRtos';

export default function SelectRto() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchWithHeader
        heading='Select RTO location of your car'
        setSearch={setSearch}
        searchPlaceHolder='Search your RTO'
      />
      <div className='mt-4 lg:mt-14 flex flex-col gap-4'>
        <AllRtos search={search} />
      </div>
    </>
  );
}
