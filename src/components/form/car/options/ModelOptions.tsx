'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from '../ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';
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

async function getData(makeID: string) {
  const params = new URLSearchParams({
    popular_count: '3',
    make_id: makeID,
    page: '1',
    page_size: '100',
    is_public: 'true',
    fields: 'id,name,display_name,is_usable,logo',
    remove_from_other: 'true',
    city_name: 'mumbai',
    make_year: '2022',
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
  const { chips } = useFormStore();
  const make = chips?.find((item: { type: string }) => item.type === 'make');
  useEffect(() => {
    const response = getData(make.value);
    response.then((res) => {
      return setData(res);
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
        showAll ? 'lg:grid-cols-5' : 'lg:grid-cols-6 grid-cols-3',
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
              value={model.display_name}
              chipValue={model.display_name}
              text={model.display_name}
              type='model'
              page={4}
            />
          );
        },
      )}
    </div>
  ) : (
    <></>
  );
}
