import React, { SetStateAction } from 'react';
import SearchWithGlass from '../inputs/SearchWithGlass';

interface Props {
  heading: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  searchPlaceHolder: string;
}

export default function SearchWithHeader(props: Props) {
  const { heading, setSearch, searchPlaceHolder } = props;
  return (
    <div className='mt-7'>
      <div className='text-stepsText text-lg leading-normal mb-4 font-medium'>
        {heading}
      </div>
      <div>
        <SearchWithGlass
          searchPlaceHolder={searchPlaceHolder}
          setState={setSearch}
        />
      </div>
    </div>
  );
}
