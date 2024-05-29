import React from 'react';

interface DividerProps {
  color?: string;
  text?: string;
  textColor?: string;
}

export default function Divider(props: DividerProps) {
  const { color, text, textColor } = props;
  return (
    <div className='relative flex py-5 w-full items-center'>
      <div className='flex-grow border-t border-gray-400'></div>
      <div className='flex-grow border-t border-gray-400'></div>
    </div>
  );
}

export default Divider;
