'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';

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

async function getData() {
  const params = new URLSearchParams({
    popular_count: '3',
  });
  const res = await fetch(
    `https://api.spinny.com/v3/api/catalogue/model-list?${params.toString()}`,
  );
  return res.json();
}

export default function ModelOptions({
  showAll,
  search,
}: {
  search: string;
  showAll?: boolean;
}) {
  const [data, setData] = useState<DataProps>();

  useEffect(() => {
    const response = getData();
    response.then((res) => {
      return setData(res);
    });
  }, []);

  const isSearch = search !== '';
  const brands = showAll ? data?.results : data?.popular?.slice(0, 6);
  const options = isSearch
    ? filterByText({
        array: brands ?? [],
        text: search,
        key: 'display_name',
      })
    : brands;

  const filteredOpts = options?.filter(
    (opt: { is_usable: boolean }) => opt.is_usable,
  );

  return data ? (
    <div
      className={clsx(
        `grid justify-between gap-5`,
        showAll ? 'lg:grid-cols-5' : 'lg:grid-cols-6 grid-cols-3',
      )}
    >
      {filteredOpts?.map(
        (brand: {
          id: string;
          logo_with_name: string | undefined;
          display_name: string;
        }) => {
          return (
            <ButtonOption
              key={brand.id}
              imgSrc={brand.logo_with_name}
              value={brand.id}
              chipValue={brand.display_name}
              type='make'
              page={1}
            />
          );
        },
      )}
    </div>
  ) : (
    <></>
  );
}
