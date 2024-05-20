'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';
import { rto } from '@/data/rto';

export default function RtoOptions({ search }: { search: string }) {
  const isSearch = search !== '';

  const options = isSearch
    ? filterByText({
        array: rto ?? [],
        text: search,
        key: 'value',
      })
    : rto;

  return (
    options && (
      <div
        className={clsx(
          `grid justify-between gap-5`,
          'lg:grid-cols-4 grid-cols-3',
        )}
      >
        {options?.map((opt: { label: string; value: string }) => {
          return (
            <ButtonOption
              key={opt.label}
              value={opt.value}
              chipValue={opt.label}
              text={opt.label}
              type='rto'
              page={2}
            />
          );
        })}
      </div>
    )
  );
}
