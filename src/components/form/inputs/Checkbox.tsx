import React, { SetStateAction, useState } from 'react';

interface CheckBoxProps {
  text: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<SetStateAction<boolean>>;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  text,
  onChange,
  disabled = false,
  isChecked,
  setIsChecked,
}) => {
  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className='flex items-center gap-3'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className='checkbox checkbox-sm'
      />
      <span className=' text-stepsText leading-4 text-sm font-semibold'>
        {text}
      </span>
    </div>
  );
};
