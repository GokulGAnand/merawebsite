import { useFormStore } from '@/lib/store/store';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { getPriceRoute } from '../car/SearchBar';

interface Props {
  value: string;
  chipValue: string;
  type: string;
  text?: string;
  imgSrc?: string;
  page?: number;
  stopNavigation?: boolean;
  isStarterForm?: boolean;
}

export default function ButtonOption(props: Props) {
  const {
    text,
    imgSrc,
    chipValue,
    value,
    type,
    page,
    stopNavigation,
    isStarterForm,
  } = props;
  const {
    incrementPage,
    addChip,
    chips,
    addSelection,
    removeWrongValues,
    switchPage,
  } = useFormStore();
  const router = useRouter();
  function handleBtn() {
    if (stopNavigation) {
      addSelection({
        value,
        type,
        page,
      });
    } else {
      addChip({
        value,
        chipValue,
        type,
        page,
      });
      removeWrongValues({
        type,
      });
      isStarterForm ? switchPage(2) : incrementPage();
      isStarterForm && router.push(getPriceRoute);
    }
  }

  const curr = chips?.find((chip: { value: string }) => chip.value === value);
  const selected = curr?.value === value;
  return (
    <button
      onClick={handleBtn}
      className={clsx(
        'flex flex-shrink-0  rounded-md cursor-pointer text-headerLinkColor justify-center align-middle',
        imgSrc ? 'px-3 py-5' : 'px-2 py-4',
        selected ? 'bg-btnselect' : 'bg-formButton',
      )}
    >
      {text}
      {imgSrc && <Image src={imgSrc} width={75} height={40} alt='Logo' />}
    </button>
  );
}
