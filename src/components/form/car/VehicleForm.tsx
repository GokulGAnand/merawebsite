import React from 'react';
import SearchBar from './SearchBar';
import OrSection from './OrSection';
import { SideHeading } from '../components/SideHeading';
import BrandOptions from './BrandOptions';
import GreyBtn from '../components/GreyBtn';

export default function VehicleForm() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-3/4 justify-center '>
        <div className='bg-formBg w-full rounded-t-lg px-8 pt-8'>
          <SideHeading heading='Enter your car registration number' />
          <SearchBar />
        </div>
        <div className='bg-white'>
          <div className='flex'>
            <OrSection />
          </div>
          <div className='px-8'>
            <SideHeading heading='Start with your car brand' />
            <div className='mt-4 mb-8'>
              <BrandOptions />
            </div>
            <div className='mb-8'>
              <GreyBtn text='More Brands' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
