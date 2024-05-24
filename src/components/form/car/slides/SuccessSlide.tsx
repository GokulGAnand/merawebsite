import Success from '~/svg/SuccessIcon.svg';

interface SuccessSlideProps {
  successText: string;
}

export const SuccessSlide = (props: SuccessSlideProps) => {
  const { successText } = props;
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center mt-12'>
        <Success width={168} height={168} />
      </div>
      <div className='flex text-center mt-8 text-subHeadingColor'>
        <div>{successText}</div>
      </div>
    </div>
  );
};
