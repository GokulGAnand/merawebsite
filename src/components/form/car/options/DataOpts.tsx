'use client';
import ButtonOption from '../ButtonOption';
import clsx from 'clsx';
import { filterByText } from '@/utils/filter-by-string';

interface DataType {
  label: string;
  value: string;
}

interface DataOptsProps {
  search: string;
  data: DataType[];
  btnType: string;
  page: number;
}

export default function DataOpts(props: DataOptsProps) {
  const { search, data, btnType, page } = props;
  const isSearch = search !== '';
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
              type={btnType}
              page={page}
            />
          );
        })}
      </div>
    )
  );
}
