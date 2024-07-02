'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';

interface PricingProps {
  icon: React.ReactNode;
  id: number;
  title: string;
  amount: string;
  rowContent: string[];
  actionContent: string;
  link?: string;
  isDisabled?: boolean;
}

const PricingCard = (props: PricingProps) => {
  const { title, amount, icon, rowContent, actionContent, isDisabled, link } =
    props;

  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div
      className={`mb-18 md:mb-18 lg:mb-0 ${isDisabled ? 'filter opacity-50 hidden lg:block' : ''}`}
    >
      <section className='bg-white'>
        <div>
          <div>
            <div className='flex justify-center'>
              <div className='flex flex-col mx-auto rounded-lg border-bannerChipText border-[2.5px] shadow dark:text-white'>
                <div className='block flex-col mt-6 ml-6 mr-14'>
                  <h3 className='mb-2 text-sm font-medium text-whiteButtonText'>
                    {title}
                  </h3>
                  <p className='font-light sm:text-lg'></p>
                  <div className='flex items-center mb-6 gap-2'>
                    <div className='flex lg:gap-2'>
                      <span className='text-lg md:text-4xl font-bold font-roboto justify-start text-headerLinkColor'>
                        ₹
                      </span>
                      <span className='text-lg md:text-4xl font-bold justify-start text-headerLinkColor'>
                        {amount}
                      </span>
                    </div>
                    <span className='text-subHeadingColor text-sm font-medium'>
                      per Month
                    </span>
                  </div>

                  <ul
                    role='list'
                    className='mb-8 space-y-4 text-left text-sm font-normal'
                  >
                    {rowContent.map((rowItem) => (
                      <li
                        key={rowItem}
                        className='flex items-start text-subHeadingColor'
                      >
                        <div className='flex-shrink-0 w-5 h-5 flex items-center justify-center'>
                          {icon}
                        </div>
                        <div className='ml-2 flex-col justify-center block'>
                          <span className='break-words'>{rowItem}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex items-center ml-6 mb-6 mr-12'>
                  <Button
                    variant='primary'
                    className='font-bold justify-center flex rounded-lg w-full h-12'
                    rightIcon={GrFormNextLink}
                    onClick={() => link && handleClick(link)}
                    disabled={isDisabled}
                  >
                    {actionContent}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingCard;
