import React from 'react';
import BrandOptions from '../options/BrandOptions';
import FormSideHeading from '../../components/FormSideHeading';

interface Props {
  search: string;
}

export default function AllBrands(props: Props) {
  const { search } = props;
  return (
    <>
      <FormSideHeading text='All Brands' />
      <div>
        <BrandOptions search={search} showAll />
      </div>
    </>
  );
}
