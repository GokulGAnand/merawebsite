'use client';
import CircularProgress from '@/components/utils/CircularProgress';
import { useFormStore } from '@/lib/store/store';
import clsx from 'clsx';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

interface FormSlideControlProps {
  count: number;
  page: number;
  decrementPage: () => void;
}

export default function FormSlideControl(props: FormSlideControlProps) {
  const { count, page, decrementPage } = props;
  const disable = count === page;

  function handleBack() {
    if (disable) {
      return;
    }
    decrementPage();
  }
  return (
    <div className='flex justify-between items-center'>
      <div>
        <IoMdArrowBack
          fontSize={24}
          className={clsx(
            disable
              ? 'text-greyBtn cursor-not-allowed'
              : 'text-stepsText  cursor-pointer',
          )}
          onClick={handleBack}
        />
      </div>
      <div>
        <CircularProgress page={page} count={count} />
      </div>
    </div>
  );
}
