import clsx from 'clsx';

interface Props {
  heading: string;
  subHeading?: string;
  isStart?: boolean;
  isWhite?: boolean;
}

export default function Heading(props: Props) {
  const { heading, subHeading, isStart, isWhite } = props;
  return (
    <div
      className={clsx(
        'flex flex-col gap-2',
        isStart ? '' : 'justify-center items-center',
      )}
    >
      <div className='font-bold leading-10 flex flex-col  items-start align-middle gap-1 '>
        <div>
          <div
            className={clsx(
              'flex md:text-5xl sm:text-4xl text-3xl ',
              isWhite ? 'text-white' : 'text-stepsText',
            )}
          >
            {heading}
          </div>
        </div>
      </div>
      {subHeading && (
        <div
          className={clsx(
            'flex',
            isStart
              ? ''
              : 'align-middle justify-center text-center text-subHeadingColor leading-6 text-lg',
          )}
        >
          {subHeading}
        </div>
      )}
    </div>
  );
}
