import React from 'react';

interface DividerProps {
  className: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div className='relative flex py-5 w-full items-center'>
      <div className={className}></div>
      <div className={className}></div>
    </div>
  );
};

export default Divider;
