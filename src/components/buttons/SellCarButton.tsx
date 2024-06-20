import React from 'react';
import Button from './Button';
import { contactNum } from '@/data/contacts';

const SellCarButton = () => {
  return (
    <div className='flex lg:hidden '>
      <a href={`tel:${contactNum}`}>
        <Button
          variant='primary'
          className='flex rounded-lg flex-shrink min-w-max font-semibold py-2 px-6 text-center'
        >
          Sell Your Car
        </Button>
      </a>
    </div>
  );
};

export default SellCarButton;
