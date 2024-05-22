/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../ButtonOption';
import clsx from 'clsx';
import { useFormStore } from '@/lib/store/store';

interface DataProps {
  popular: {
    id: string;
    logo_with_name: string;
  }[];
  results: {
    id: string;
    logo_with_name: string;
  }[];
}

async function getData(modelID: string, year: string) {
  const params = new URLSearchParams({
    model: modelID,
    make_year: year,
    page_size: '100',
    page: '1',
    is_public: 'true',
    sell_page_filter: 'true',
  });
  const res = await fetch(
    `https://api.spinny.com/v3/api/catalogue/variant-list?${params.toString()}`,
  );
  return res.json();
}

export default function VariantOptions() {
  const [data, setData] = useState<DataProps>();
  const { chips } = useFormStore();
  const model = chips?.find((item: { type: string }) => item.type === 'model');
  const year = chips?.find((item: { type: string }) => item.type === 'year');

  useEffect(() => {
    const response = getData(model.value, year.value);
    response.then((res) => {
      return setData(res);
    });
  }, [model.value, year.value]);

  const varients: any = data?.results;
  const uniqueTypes = [];

  return data ? (
    <div className={clsx(`grid justify-between gap-5`, 'lg:grid-cols-5')}>
      {varients?.map((option: string) => {
        return (
          <ButtonOption
            key={option}
            value={option}
            chipValue={option}
            text={option}
            type='variant'
            page={4}
          />
        );
      })}
    </div>
  ) : (
    <></>
  );
}
