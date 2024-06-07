import React, { SetStateAction } from 'react';

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
      <div className='inline-flex items-center'>
        <label
          className='relative flex items-center p-3 rounded-full cursor-pointer'
          htmlFor='blue'
        >
          <input
            type='checkbox'
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
            id='blue'
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
          />
          <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3.5 w-3.5'
              viewBox='0 0 20 20'
              fill='currentColor'
              stroke='currentColor'
              stroke-width='1'
            >
              <path
                fill-rule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <span className=' text-stepsText leading-4 text-sm font-semibold'>
        {text}
      </span>
    </div>
  );
};
