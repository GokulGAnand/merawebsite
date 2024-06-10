interface FormBtnProps {
  btnText: string;
  onClick: () => void;
}
export const FormButton = (props: FormBtnProps) => {
  const { btnText, onClick } = props;

  function handleClick() {
    onClick();
  }
  return (
    <button
      onClick={handleClick}
      className='bg-whiteButtonText flex justify-center min-h-10 items-center text-center content-center rounded-md text-white w-full font-semibold text-md leading-4'
    >
      {btnText}
    </button>
  );
};
