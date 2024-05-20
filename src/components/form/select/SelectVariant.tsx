'use client';
import React, { useState } from 'react';
import SearchWithHeader from '../car/SearchWithHeader';
import AllRtos from '../car/all-options/AllRtos';

export default function SelectVariant() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-medium'>
        Select Variant of your car
      </div>
      <div className='mt-14 flex flex-col gap-4'>
        <AllRtos search={search} />
      </div>
    </>
  );
}
