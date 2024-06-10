interface NextBtnProps {
  btnText: string;
  onClick: () => void;
}

export const NxtButton = (props: NextBtnProps) => {
  const { btnText, onClick } = props;
  return (
    <button
      onClick={onClick}
      className='w-full bg-whiteButtonText text-white py-4 items-center text-center rounded-lg font-semibold text-md '
    >
      {btnText ?? ''}
    </button>
  );
};
