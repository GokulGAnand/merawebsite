'use client';
import { useFormStore } from '@/lib/store/store';

interface FormChipProps {
  label: string;
  page?: number;
}

export default function FormChips(props: FormChipProps) {
  const { label, page } = props;
  const { switchPage } = useFormStore();

  function handleFormChip() {
    switchPage(page);
  }
  return (
    <button
      onClick={handleFormChip}
      className='justify-center flex px-2 py-2 text-xs text-headerLinkColor leading-5 font-medium rounded-md bg-white cursor-pointer'
    >
      {label}
    </button>
  );
}
