import Error from '~/svg/Error.svg';

interface Props {
  errorText: string;
}

export const ErrorSlide = (props: Props) => {
  const { errorText } = props;
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center mt-12'>
        <Error width={168} height={168} />
      </div>
      <div className='flex text-center mt-8 text-subHeadingColor'>
        <div>{errorText}</div>
      </div>
    </div>
  );
};
