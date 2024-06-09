import React from 'react';

interface Options {
  value: string | null;
  label: string;
}

interface DropdownProps {
  options: Options[];
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectInput(props: DropdownProps) {
  const { value, handleChange, options } = props;
  return (
    <div className='w-full h-max flex '>
      <select
        className='select border-none border-formInputBorder w-full h-full
      bg-textInputGrey placeholder-textInputPlaceholderGrey border-0  rounded-md '
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option disabled={option.value === null} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
