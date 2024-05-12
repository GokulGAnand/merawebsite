import React from 'react';

interface GreyBtnProps {
  text: string;
}

export default function GreyBtn(props: GreyBtnProps) {
  const { text } = props;
  return (
    <button className='bg-greyBtn w-full text-md text-stepsText text-center py-3 rounded-md font-bold'>
      {text}
    </button>
  );
}
