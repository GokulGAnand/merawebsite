import React from 'react';
import BrandOptions from '../options/BrandOptions';
import FormSideHeading from '../../components/FormSideHeading';
import ModelOptions from '../options/ModelOptions';

interface Props {
  search: string;
}

export default function AllModels(props: Props) {
  const { search } = props;
  return (
    <>
      <div className='flex flex-col gap-4'>
        <FormSideHeading text={'Popular Models'} />
        <div>
          <ModelOptions search={search} />
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-10'>
        <FormSideHeading text={'All Models'} />
        <div>
          <ModelOptions showAll search={search} />
        </div>
      </div>
    </>
  );
}
