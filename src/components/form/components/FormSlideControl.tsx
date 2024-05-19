import CircularProgress from '@/components/utils/CircularProgress';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

export default function FormSlideControl() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <IoMdArrowBack
          fontSize={24}
          className='text-stepsText cursor-pointer'
        />
      </div>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
}
