import clsx from 'clsx';

interface FormBtnProps {
  btnText: string;
  onClick: () => void;
  isDisabled?: boolean;
}
export const FormButton = (props: FormBtnProps) => {
  const { btnText, onClick, isDisabled } = props;

  function handleClick() {
    onClick();
  }
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled ?? false}
      className={clsx(
        isDisabled
          ? 'bg-gray-300 text-gray-500'
          : 'bg-whiteButtonText text-white',
        'flex justify-center min-h-10 items-center text-center content-center rounded-md w-full font-semibold text-md leading-4',
      )}
    >
      {btnText}
    </button>
  );
};
