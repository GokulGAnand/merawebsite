import { useFormStore } from '@/lib/store/store';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface Props {
  value: string;
  chipValue: string;
  type: string;
  text?: string;
  imgSrc?: string;
  page?: number;
}

export default function ButtonOption(props: Props) {
  const { text, imgSrc, chipValue, value, type, page } = props;
  const { incrementPage, addBrand, addChip, chips } = useFormStore();
  function handleBtn() {
    addBrand(value);
    addChip({
      value,
      chipValue,
      type,
      page,
    });
    incrementPage();
  }

  const curr = chips?.find((chip: { value: string }) => chip.value === value);
  const selected = curr?.value === value;
  return (
    <button
      onClick={handleBtn}
      className={clsx(
        'flex flex-shrink-0  rounded-md cursor-pointer justify-center align-middle',
        imgSrc ? 'px-3 py-5' : 'px-2 py-4',
        selected ? 'bg-btnselect' : 'bg-formButton',
      )}
    >
      {text}
      {imgSrc && <Image src={imgSrc} width={75} height={40} alt='Logo' />}
    </button>
  );
}
