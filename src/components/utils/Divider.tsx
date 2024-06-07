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
      <div
        className={`flex-grow border-t border-${color ? color : 'gray-400'}`}
      >
        {text && (
          <span
            className={`absolute text-${textColor ? textColor : 'black'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8`}
          >
            {text}
          </span>
        )}
      </div>
    </div>
  );
}
