'use client';
import React from 'react';
import FormSlideControl from '../components/FormSlideControl';
import SelectBrand from '../select/SelectBrand';
import { useFormStore } from '@/lib/store/store';
import SelectRto from '../select/SelectRto';
import SelectYear from '../select/SelectYear';
import FormChipGroup from '../chips/FormChipGroup';
import SelectModel from '../select/SelectModel';

type SlideIndex = 1 | 2 | 3 | 4;

const slides = {
  1: <SelectBrand />,
  2: <SelectRto />,
  3: <SelectYear />,
  4: <SelectModel />,
};

export default function SellCarForm() {
  const { page, chips } = useFormStore();
  const slideCount = Object.keys(slides).length;
  return (
    <div className='flex flex-col my-20'>
      <div className='flex max-w-3xl w-full mb-4 mx-auto'>
        <FormChipGroup chips={chips} />
      </div>
      <div
        className={`bg-white rounded-lg px-8 py-7 shadow-carFormShadow flex flex-col w-full max-w-3xl max-h-[495px] overflow-y-auto  mx-auto custom-scroll`}
      >
        <div className='flex flex-col'>
          <FormSlideControl count={slideCount} />
          {slides[page as SlideIndex]}
        </div>
      </div>
    </div>
  );
}
