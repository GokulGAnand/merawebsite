'use client';
import React from 'react';
import FormSlideControl from '../components/FormSlideControl';
import SelectBrand from '../select/SelectBrand';
import { useFormStore } from '@/lib/store/store';
import SelectRto from '../select/SelectRto';

type SlideIndex = 1 | 2;

const slides = {
  1: <SelectBrand />,
  2: <SelectRto />,
};

export default function SellCarForm() {
  const { page } = useFormStore();
  const slideCount = Object.keys(slides).length;
  return (
    <div
      className={`bg-white rounded-lg px-8 py-7 shadow-carFormShadow flex flex-col w-full max-w-3xl max-h-[495px] overflow-y-auto my-28 mx-auto custom-scroll`}
    >
      <div className='flex flex-col'>
        <FormSlideControl count={slideCount} />
        {slides[page as SlideIndex]}
      </div>
    </div>
  );
}
