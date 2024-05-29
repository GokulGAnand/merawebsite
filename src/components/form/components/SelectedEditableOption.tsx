import { useFormStore } from '@/lib/store/store';
import clsx from 'clsx';
import React from 'react';
import EditIcon from '~/svg/EditPencil.svg';

interface Props {
  text: string;
  type: string;
}

export default function SelectedEditableOption(props: Props) {
  const { text, type } = props;
  const { removeSelection } = useFormStore();

  function handleEdit() {
    removeSelection({
      type,
    });
  }

  return (
    <button
      className={clsx(
        'bg-btnselect px-5 py-3 text-sm flex flex-shrink-0 rounded-md gap-2 cursor-pointer text-headerLinkColor justify-between align-middle items-center',
      )}
    >
      {text}
      <EditIcon
        onClick={handleEdit}
        className='flex align-middle'
        width={20.5}
        height={20.5}
      />
    </button>
  );
}
