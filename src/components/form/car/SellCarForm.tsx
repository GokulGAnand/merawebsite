import React from 'react';
import FormSlideControl from '../components/FormSlideControl';
import SelectBrand from '../select/SelectBrand';

export default function SellCarForm() {
  return (
    <div
      className={`bg-white rounded-lg px-8 py-7 shadow-carFormShadow flex flex-col w-full max-w-3xl max-h-[495px] overflow-y-auto my-28 mx-auto custom-scroll`}
    >
      <div className='flex flex-col'>
        <FormSlideControl />
        <SelectBrand />
      </div>
    </div>
  );
}
