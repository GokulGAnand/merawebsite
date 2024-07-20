'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/buttons/Button';
import { ReactElement } from 'react';
import clsx from 'clsx';
import { SlideButtonVariant } from '@/data/home-buttons';
import { GrFormNextLink } from 'react-icons/gr';

type downloadLink = string;

interface ButtonData {
  label: string;
  icon?: ReactElement;
  variant: SlideButtonVariant;
  link: string;
}

interface props {
  header: string;
  main_header: string;
  content: string;
  isHiring?: boolean;
  buttonData: ButtonData[];
}

export default function CallToAction({
  header,
  main_header,
  content,
  isHiring,
  buttonData,
}: props) {
  const router = useRouter();

  const handleClick = (link: downloadLink) => {
    router.push(link);
  };

  return (
    <div className='z-0 flex w-[595px] justify-between'>
      <div className='flex w-full flex-col items-start'>
        <div className='flex flex-col gap-4 pb-0 w-[86%] md:w-full'>
          <ul
            className={clsx(
              'list-none font-bold lg:text-md',
              isHiring ? 'text-bannerChipText' : 'text-white',
            )}
          >
            <li className='flex items-center text-sm lg:text-md font-bold lg:bg-transparent flex-1 w-fit px-3 lg:px-0 lg:py-0 rounded-3xl'>
              <span
                className={clsx(
                  'h-1 w-1 rounded-full mr-1',
                  isHiring ? 'bg-bannerChipText' : 'bg-white',
                )}
              ></span>
              {header}
            </li>
          </ul>
          <div
            className={clsx(
              'text-2xl lg:text-4xl font-bold w-full',
              isHiring ? 'text-stepsText' : 'text-white',
            )}
          >
            {main_header}
          </div>
          <div
            className={clsx(
              'text-sm lg:text-lg w-full',
              isHiring ? 'text-subHeadingColor' : 'text-white',
            )}
          >
            {content}
          </div>
        </div>
        <div className='flex flex-row items-center gap-x-1 md:gap-x-5 rtl:space-x-reverse mt-6 w-[86%]'>
          {isHiring
            ? buttonData.map((buttonContent: ButtonData, index: number) => (
                <Button
                  key={index}
                  variant={buttonContent.variant}
                  className='font-bold text-center flex justify-center rounded-lg min-w-48 min-h-16  '
                  rightIcon={GrFormNextLink}
                  onClick={() => handleClick(buttonContent.link)}
                >
                  {buttonContent.label}
                </Button>
              ))
            : buttonData.map((buttonContent: ButtonData, index: number) => (
                <Button
                  key={index}
                  variant={buttonContent.variant}
                  className='font-bold text-center flex justify-center rounded-lg min-w-36 min-h-12 max-w-52 max-h-16'
                  onClick={() => handleClick(buttonContent.link)}
                >
                  {buttonContent.icon}
                </Button>
              ))}
        </div>
      </div>
    </div>
  );
}
