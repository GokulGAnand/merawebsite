import { useState } from 'react';
import ButtonOption from '../../../components/ButtonOption';
import FormSideHeading from '../../../components/FormSideHeading';
import SearchWithGlass from '../../../inputs/SearchWithGlass';
import { Options } from './type';
import { filterByText } from '@/utils/filter-by-string';

interface Props {
  varients: Options[];
}

export const SearchVariantOptions = (props: Props) => {
  const { varients } = props;
  const [search, setSearch] = useState('');
  const isSearch = search && search !== '';
  const options = isSearch
    ? filterByText({
        array: varients ?? [],
        text: search,
        key: 'display_name',
      })
    : varients;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <FormSideHeading text={'Select Variant'} />
        <SearchWithGlass
          searchPlaceHolder='Search your variant'
          setState={setSearch}
        />
      </div>
      <div
        className={`grid justify-between gap-5 grid-cols-2 lg:grid-cols-3 lg:mt-7`}
      >
        {options?.map((option: Options) => {
          return (
            <ButtonOption
              key={option.display_name}
              value={option.id}
              chipValue={option.display_name}
              text={option.display_name}
              page={5}
              type='variant'
              isSell
            />
          );
        })}
      </div>
    </div>
  );
};
