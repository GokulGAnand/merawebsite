import { useFormStore } from '@/lib/store/store';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { handleSellBtn } from '@/lib/functions/sell/sell-btn-fn';
import { useInspectionStore } from '@/lib/store/inspection-store';

interface Props {
  value: string;
  chipValue: string;
  type: string;
  text?: string;
  imgSrc?: string;
  page?: number;
  stopNavigation?: boolean;
  isStarterForm?: boolean;
  isSell?: boolean;
  isInspection?: boolean;
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
    isSell,
    isInspection,
  } = props;
  const {
    incrementPage,
    addChip,
    chips,
    addSelection,
    removeWrongValues,
    switchPage,
  } = useFormStore();

  const {
    chips: inspectionChips,
    addChip: addInspectionChip,
    incrementPage: incrementInspectionPage,
  } = useInspectionStore();

  const router = useRouter();
  function handleBtn() {
    const btnData = { value, type, page };

    switch (true) {
      case stopNavigation:
        addSelection(btnData);
        break;

      case isSell:
        handleSellBtn({
          addChip,
          btnData,
          chipValue,
          incrementPage,
          isStarterForm,
          removeWrongValues,
          router,
          switchPage,
        });
        break;

      case isInspection:
        addInspectionChip({ ...btnData, chipValue });
        incrementInspectionPage();
        break;

      default:
        addChip({ ...btnData, chipValue });
        incrementPage();
        break;
    }
  }

  const chipsSet = isInspection ? inspectionChips : chips;
  const curr = chipsSet?.find(
    (chip: { value: string }) => chip.value === value,
  );
  const selected = curr?.value === value;

  return (
    <button
      onClick={handleBtn}
      className={clsx(
        'flex flex-shrink-0 rounded-md cursor-pointer text-headerLinkColor text-sm font-medium justify-center align-middle',
        imgSrc ? 'px-3 py-5' : 'px-2 py-4',
        selected ? 'bg-btnselect' : 'bg-formButton',
      )}
    >
      {text}
      {imgSrc && <Image src={imgSrc} width={75} height={40} alt='Logo' />}
    </button>
  );
}
