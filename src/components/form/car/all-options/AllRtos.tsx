import React from 'react';
import BrandOptions from '../options/BrandOptions';
import FormSideHeading from '../../components/FormSideHeading';
import RtoOptions from '../options/RtoOptions';

interface Props {
  search: string;
}

export default function AllRtos(props: Props) {
  const { search } = props;
  return (
    <>
      <FormSideHeading text={`All RTO’s`} />
      <div>
        <RtoOptions search={search} />
      </div>
    </>
  );
}
