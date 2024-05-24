'use client';
import ButtonOption from '../../components/ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';
import { Key } from 'react';

interface DataType {
  label: string;
  value: string;
}

interface DataOptsProps {
  data: DataType[];
  btnType: string;
  page: number;
  search?: string;
  gridCols?: number;
  valueKey?: Key;
}

export default function DataOpts(props: DataOptsProps) {
  const { search, data, btnType, page, gridCols, valueKey } = props;
  const isSearch = search && search !== '';
  const options = isSearch
    ? filterByText({
        array: data ?? [],
        text: search,
        key: 'value',
      })
    : data;

  return (
    options && (
      <div
        className={clsx(
          `grid justify-between gap-5`,
          gridCols ? `lg:grid-cols-${gridCols}` : 'lg:grid-cols-4',
          ' grid-cols-3',
        )}
      >
        {options?.map(
          (opt: { label: string; value: string; [key: string]: string }) => {
            return (
              <ButtonOption
                key={opt.label}
                value={opt.value}
                chipValue={valueKey ? opt[String(valueKey)] : opt.label}
                text={opt.label}
                type={btnType}
                page={page}
              />
            );
          },
        )}
      </div>
    )
  );
}
