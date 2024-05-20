'use client';
import React, { useState } from 'react';
import SearchWithHeader from '../car/SearchWithHeader';
import AllRtos from '../car/all-options/AllRtos';

export default function SelectRto() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchWithHeader
        heading='Select RTO location of your car'
        setSearch={setSearch}
      />
      <div className='mt-14 flex flex-col gap-4'>
        <AllRtos search={search} />
      </div>
    </>
  );
}
