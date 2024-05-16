import React from 'react';
import StepOne from '~/svg/StepOne.svg';

interface StepProps {
  index: number;
}

export default function Steps(props: StepProps) {
  const { index } = props;
  return (
    <div className='flex flex-col'>
      <StepOne height={17} width={52} />
      <div className='flex justify-center   '>
        <p className='text-white  -mt-4 text-xs'>STEP {index}</p>
      </div>
    </div>
  );
}
