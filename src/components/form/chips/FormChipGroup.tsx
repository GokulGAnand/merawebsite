import { ChipProps, Chips } from '@/lib/store/type';
import React from 'react';
import FormChips from './FormChips';

interface Props {
  chips: ChipProps[];
}

export default function FormChipGroup(props: Props) {
  const { chips } = props;

  return (
    <>
      {chips?.map((chip: Chips) => {
        if (chips.length) {
          return (
            <div className='flex mr-4' key={chip.chipValue}>
              <FormChips label={chip.chipValue ?? ''} page={chip.page} />
            </div>
          );
        }
      })}
    </>
  );
}
