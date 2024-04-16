import React from 'react';
import Button from './Button';

const SellCarButton = () => {
  return (
    <div className='flex lg:hidden '>
      <Button
        variant='primary'
        className=' flex  rounded-lg flex-shrink min-w-max font-semibold py-2 px-6 text-center'
      >
        Sell Your Car
      </Button>
    </div>
  );
};

export default SellCarButton;
