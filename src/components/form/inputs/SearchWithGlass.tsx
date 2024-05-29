import React, { SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
  setState: React.Dispatch<SetStateAction<string>>;
  searchPlaceHolder: string;
}

export default function SearchWithGlass(props: Props) {
  const { setState, searchPlaceHolder } = props;
  return (
    <div className='w-full flex relative'>
      <input
        placeholder={searchPlaceHolder}
        className=' rounded-md border border-solid border-formInputBorder py-3 w-full'
        onChange={(e) => setState(e.target.value)}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
        <AiOutlineSearch fontSize={24} className='text-searchInputIcon' />
      </div>
    </div>
  );
}
