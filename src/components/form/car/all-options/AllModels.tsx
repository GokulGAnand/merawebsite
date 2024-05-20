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
      <FormSideHeading text={'Popular Model’s'} />
      <div>
        <ModelOptions search={search} />
      </div>
    </>
  );
}
