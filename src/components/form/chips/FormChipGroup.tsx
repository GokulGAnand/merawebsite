import { ChipProps, Chips } from '@/lib/store/type';
import React from 'react';
import FormChips from './FormChips';
import { capitaliseFirstLetter } from '@/utils/capitalise-first-letter';
import { sortByDesiredOrder } from '@/utils/sort-by-order';

interface Props {
  chips: ChipProps[];
  switchPage: () => void;
}

export default function FormChipGroup(props: Props) {
  const { chips, switchPage } = props;
  const sortedChips = sortByDesiredOrder({
    data: chips,
    desiredOrder: [
      'make',
      'model',
      'variant',
      'rto',
      'year',
      'ownership',
      'kms',
      'when',
    ],
    key: 'type',
  });

  return (
    <>
      {sortedChips?.map((chip: Chips) => {
        if (chips.length) {
          return (
            <div className='flex mr-2' key={chip.chipValue}>
              <FormChips
                label={capitaliseFirstLetter(chip.chipValue ?? '') ?? ''}
                page={chip.page}
                switchPage={switchPage}
              />
            </div>
          );
        }
      })}
    </>
  );
}
