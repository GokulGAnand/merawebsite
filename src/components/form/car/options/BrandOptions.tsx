'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../../components/ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';
import axios from 'axios';
import { LoadingDots } from '@/components/loaders/LoadingDots';

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
  const filterParams = {
    popular_count: 11,
  };
  const response = axios.get('/api/make', {
    params: filterParams,
  });
  return response;
}

export default function BrandOptions({
  showAll,
  search,
  isStarterForm,
}: {
  search: string;
  showAll?: boolean;
  isStarterForm?: boolean;
}) {
  const [data, setData] = useState<DataProps>();

  useEffect(() => {
    const response = getData();
    response.then((res) => {
      return setData(res.data);
    });
  }, []);

  const isSearch = search !== '';
  const brands = showAll ? data?.results : data?.popular?.slice(0, 6);
  const options = isSearch
    ? filterByText({
        array: data?.results ?? [],
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
        showAll ? 'lg:grid-cols-5 grid-cols-3' : 'lg:grid-cols-6 grid-cols-3',
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
              isStarterForm
            />
          );
        },
      )}
    </div>
  ) : (
    <LoadingDots />
  );
}
