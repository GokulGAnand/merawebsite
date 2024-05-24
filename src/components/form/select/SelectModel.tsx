import React, { useState } from 'react';
import SearchWithHeader from '../components/SearchWithHeader';
import AllModels from '../car/all-options/AllModels';

export default function SelectModel() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchWithHeader
        heading='Select the car model'
        setSearch={setSearch}
        searchPlaceHolder='Search your model'
      />
      <div className='mt-4 lg:mt-14 flex flex-col gap-4'>
        <AllModels search={search} />
      </div>
    </>
  );
}
