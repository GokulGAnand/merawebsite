import VectorContainer from '@/components/containers/VectorContainer';
import VehicleForm from '@/components/form/car/VehicleForm';
import HowItWorks from '@/components/strips/HowItWorks';
import Image from 'next/image';
import React from 'react';
import SellUsedCars from '~/images/SellUsedCars/SellUsedCar.webp';
import SellUsedHeading from '@/components/headers/SellUsedHeading';

export default function SellUsedCar() {
  return (
    <div className='flex flex-col'>
      <div className='bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] min-h-[836px]'>
        <SellUsedHeading />
        <VectorContainer>
          <VehicleForm />
        </VectorContainer>
      </div>

      <div className='flex justify-center -mt-20 lg:-mt-56'>
        <Image
          src={SellUsedCars}
          alt='Sell Used Car'
          height={512}
          width={1164}
        />
      </div>

      <div className='mt-12 '>
        <HowItWorks />
      </div>
      {/* <Faq />
      <MostSearched /> */}
    </div>
  );
}
