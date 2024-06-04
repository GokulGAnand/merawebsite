import React from 'react';
import FormSideHeading from '../../../components/FormSideHeading';
import DataOpts from '../options/DataOpts';
import { rto } from '@/data/rto';

interface Props {
  search: string;
}

export default function AllRtos(props: Props) {
  const { search } = props;
  return (
    <>
      <FormSideHeading text={`All RTO’s`} />
      <div>
        <DataOpts btnType={'rto'} data={rto} search={search} page={2} isSell />
      </div>
    </>
  );
}
