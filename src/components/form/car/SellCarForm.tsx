'use client';
import React from 'react';
import FormSlideControl from '../components/FormSlideControl';
import SelectBrand from '../select/SelectBrand';
import { useFormStore } from '@/lib/store/store';
import SelectRto from '../select/SelectRto';
import FormChips from '../chips/FormChips';
import { Chips } from '@/lib/store/type';

type SlideIndex = 1 | 2;

const slides = {
  1: <SelectBrand />,
  2: <SelectRto />,
};

export default function SellCarForm() {
  const { page, chips } = useFormStore();
  const slideCount = Object.keys(slides).length;
  return (
    <div className='flex flex-col my-20'>
      <div className='flex max-w-3xl w-full mb-4 mx-auto'>
        {chips?.map((chip: Chips) => {
          if (chips.length) {
            return (
              <div className='flex mr-4' key={chip.chipValue}>
                <FormChips label={chip.chipValue ?? ''} page={chip.page} />
              </div>
            );
          }
        })}
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
