'use client';
import CircularProgress from '@/components/utils/CircularProgress';
import { useFormStore } from '@/lib/store/store';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

interface FormSlideControlProps {
  count: number;
}

export default function FormSlideControl(props: FormSlideControlProps) {
  const { count } = props;
  const store = useFormStore();

  return (
    <div className='flex justify-between items-center'>
      <div>
        <IoMdArrowBack
          fontSize={24}
          className='text-stepsText cursor-pointer'
          onClick={store.decrementPage}
        />
      </div>
      <div>
        <CircularProgress page={store.page} count={count} />
      </div>
    </div>
  );
}
