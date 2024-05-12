import VectorContainer from '@/components/containers/VectorContainer';
import VehicleForm from '@/components/form/car/VehicleForm';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';

export default function SellUsedCar() {
  return (
    <div className='bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7]'>
      <div className='mt-20'>
        <HeaderWithBranding
          heading={`Selling a car? We're buying!`}
          subHeading=''
          isBannerHead
        />
      </div>
      <VectorContainer>
        <VehicleForm />
      </VectorContainer>
    </div>
  );
}
