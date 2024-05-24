'use client';
import React from 'react';
import FormSlideControl from '../components/FormSlideControl';
import SelectBrand from '../select/SelectBrand';
import { useFormStore } from '@/lib/store/store';
import SelectRto from '../select/SelectRto';
import SelectYear from '../select/SelectYear';
import FormChipGroup from '../chips/FormChipGroup';
import SelectModel from '../select/SelectModel';
import SelectVariant from '../select/SelectVariant';
import SelectWithoutSearch from '../select/SelectWithoutSearch';
import { ownership } from '@/data/ownership';
import { kilometers } from '@/data/kilometers';
import { whenToSell } from '@/data/whenToSell';
import { EnterPhone } from './slides/EnterPhone';
import { EnterOtp } from './slides/EnterOtp';
import { SuccessSlide } from './slides/SuccessSlide';

type SlideIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const slides = {
  1: <SelectBrand />,
  2: <SelectRto />,
  3: <SelectYear />,
  4: <SelectModel />,
  5: <SelectVariant />,
  6: (
    <SelectWithoutSearch
      btnType='ownership'
      data={ownership}
      valueKey='value'
      heading='Select the ownership history of your car'
      page={6}
    />
  ),
  7: (
    <SelectWithoutSearch
      btnType='kms'
      data={kilometers}
      valueKey='chipValue'
      heading='Select the Kilometers driven of your car'
      page={7}
    />
  ),
  8: (
    <SelectWithoutSearch
      btnType='when'
      data={whenToSell}
      heading='When do you want to sell your car?'
      page={8}
    />
  ),
  9: <EnterPhone />,
  10: <EnterOtp />,
  11: (
    <SuccessSlide
      successText='Thank you for submitting your details. You can expect a call from our 
  customer care team within the next 24 hours.'
    />
  ),
};

export default function SellCarForm() {
  const { page, chips } = useFormStore();
  const slideCount = Object.keys(slides).length;
  return (
    <div className='flex flex-col my-20'>
      <div className='flex flex-wrap gap-1 max-w-3xl w-full mb-4 mx-auto'>
        <FormChipGroup chips={chips} />
      </div>
      <div
        className={`bg-white rounded-lg px-8 py-7 shadow-carFormShadow flex flex-col w-full max-w-3xl min-h-[495px] max-h-[495px] overflow-y-auto  mx-auto custom-scroll`}
      >
        <div className='flex flex-col'>
          <FormSlideControl count={slideCount} />
          {slides[page as SlideIndex]}
        </div>
      </div>
    </div>
  );
}
