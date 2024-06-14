'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/buttons/Button';
import { downloadPartner } from '@/data/partner';
import { downloadButton } from '@/data/download-partner';

type downloadLink = string;

export default function DownloadPartners() {
  const router = useRouter();

  const handleClick = (link: downloadLink) => {
    router.push(link);
  };

  return (
    <div className='z-0 flex w-[595px] justify-between'>
      <div className='flex w-full flex-col items-start'>
        <div className='flex flex-col gap-4 pb-0 w-[86%] md:w-full'>
          <ul className='list-none text-white font-bold lg:text-md'>
            <li className='flex items-center text-sm lg:text-md font-bold lg:bg-transparent flex-1 w-fit px-3 lg:px-0 lg:py-0 rounded-3xl'>
              <span className='h-1 w-1 bg-white rounded-full mr-1'></span>
              {downloadPartner.header}
            </li>
          </ul>
          <div className='text-2xl lg:text-4xl text-white font-bold w-full'>
            {downloadPartner.main_header}
          </div>
          <div className='text-sm lg:text-lg text-white w-full'>
            {downloadPartner.content}
          </div>
        </div>
        <div className='flex flex-row items-center gap-x-1 md:gap-x-5 rtl:space-x-reverse mt-6 w-[86%]'>
          {downloadButton.map((buttonContent, index) => (
            <Button
              key={index}
              variant='light'
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
