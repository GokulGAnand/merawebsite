import React, { SetStateAction } from 'react';
import SearchWithGlass from '../inputs/SearchWithGlass';

interface Props {
  heading: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}

export default function SearchWithHeader(props: Props) {
  const { heading, setSearch } = props;
  return (
    <div className='mt-7'>
      <div className='text-stepsText text-lg leading-normal mb-4 font-medium'>
        {heading}
      </div>
      <div>
        <SearchWithGlass setState={setSearch} />
      </div>
    </div>
  );
}
