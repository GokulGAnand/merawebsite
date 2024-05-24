'use client';
import React, { useState } from 'react';
import SearchBar, { getPriceRoute } from './SearchBar';
import OrSection from '../components/OrSection';
import { SideHeading } from '../components/SideHeading';
import BrandOptions from './options/BrandOptions';
import GreyBtn from '../components/GreyBtn';
import { useFormStore } from '@/lib/store/store';

export default function VehicleForm() {
  const [search, setSearch] = useState('');
  const { switchPage } = useFormStore();
  function handleMoreBrands() {
    switchPage(1);
  }
  return (
    <div className='flex justify-center lg:px-0 px-4'>
      <div className='flex flex-col lg:w-3/4 w-full justify-center shadow-xl '>
        <div className='bg-formBg w-full rounded-t-lg px-8 pt-8'>
          <SideHeading heading='Enter your car registration number' />
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className='bg-white rounded-b-lg'>
          <div className='flex'>
            <OrSection />
          </div>
          <div className='px-8'>
            <SideHeading heading='Start with your car brand' />
            <div className='mt-4 mb-8'>
              <BrandOptions search={search} />
            </div>
            <div className='mb-8'>
              <GreyBtn
                handleClick={handleMoreBrands}
                text='More Brands'
                isLink
                href={getPriceRoute}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
