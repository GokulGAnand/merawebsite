'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../../../components/ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';
import { useFormStore } from '@/lib/store/store';
import axios from 'axios';
import { LoadingDots } from '@/components/loaders/LoadingDots';

interface Brand {
  id: string;
  logo_with_name: string;
  display_name: string;
  is_usable: boolean;
}

interface DataProps {
  popular: Brand[];
  results: Brand[];
}

async function getData(makeID: string) {
  const filterParams = {
    popular_count: 3,
    make_id: makeID,
    page: 1,
    page_size: 100,
    is_public: true,
    fields: 'id,name,display_name,is_usable,logo',
    remove_from_other: true,
    city_name: 'mumbai',
    make_year: '2022',
  };
  const response = axios.get('/api/model', {
    params: filterParams,
  });
  return response;
}

export default function ModelOptions({
  showAll,
  search,
}: {
  search: string;
  showAll?: boolean;
}) {
  const [data, setData] = useState<DataProps>();
  const { chips } = useFormStore();
  const make = chips?.find((item: { type: string }) => item.type === 'make');
  useEffect(() => {
    const response = getData(make.value);
    response.then((res) => {
      return setData(res.data);
    });
  }, [make.value]);

  const isSearch = search !== '';
  const models = showAll ? data?.results : data?.popular?.slice(0, 6);
  const options = isSearch
    ? filterByText({
        array: models ?? [],
        text: search,
        key: 'display_name',
      })
    : models;

  const filteredOpts = options?.filter(
    (opt: { is_usable: boolean }) => opt.is_usable,
  );
  return data ? (
    <div
      className={clsx(
        `grid justify-between gap-5`,
        showAll ? 'lg:grid-cols-3 grid-cols-2' : 'lg:grid-cols-4 grid-cols-2',
      )}
    >
      {filteredOpts?.map(
        (model: {
          id: string;
          logo_with_name: string | undefined;
          display_name: string;
        }) => {
          return (
            <ButtonOption
              key={model.id}
              value={model.id}
              chipValue={model.display_name}
              text={model.display_name}
              type='model'
              page={4}
              isSell
            />
          );
        },
      )}
    </div>
  ) : (
    <LoadingDots />
  );
}
