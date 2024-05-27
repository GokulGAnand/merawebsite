import React from 'react';
import Button from '@/components/buttons/Button';
import { PricingPlans } from '@/data/pricing-plans';
import { GrFormNextLink } from 'react-icons/gr';

interface PricingProps {
  icon: React.ReactNode;
  id: number;
  title: string;
  amount: string;
  row_1_content: string;
  row_2_content: string;
  row_3_content: string;
  row_4_content: string;
  action_content: string;
}

const PricingCard = (props: PricingProps) => {
  const {
    id,
    title,
    amount,
    icon,
    row_1_content,
    row_2_content,
    row_3_content,
    row_4_content,
    action_content,
  } = props;

  const isComingSoon = action_content === 'Coming soon';

  return (
    <div
      className={`mb-18 md:mb-18 lg:mb-0 ${isComingSoon ? 'filter opacity-50 hidden lg:block' : ''}`}
    >
      <section className='bg-white'>
        <div className='max-w-screen-xl'>
          <div className='space-y-8'>
            {/* Pricing Card */}
            {
              <div className='flex justify-center'>
                <div className='flex flex-col py-6 pl-6 pr-12 lg:pr-20 mx-auto max-w-lg text-gray-900 rounded-lg border-bannerChipText border-[2.5px] shadow dark:text-white'>
                  <h3 className='mb-2 text-sm font-medium text-whiteButtonText'>
                    {title}
                  </h3>
                  <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'></p>
                  <div className='flex items-center mb-6 gap-2'>
                    <span className='text:lg md:text-4xl font-bold'>
                      {amount}
                    </span>
                    <span className='text-gray-500 dark:text-gray-400 text-sm font-medium'>
                      per month
                    </span>
                  </div>

                  <ul
                    role='list'
                    className='mb-8 space-y-4 text-left text-sm font-normal'
                  >
                    <li className='flex items-center space-x-3'>
                      <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                      <span>{row_1_content}</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                      <span>{row_2_content}</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                      <span>{row_3_content}</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                      <span>{row_4_content}</span>
                    </li>
                  </ul>

                  <div className=' flex items-center pt-9 pb-7'>
                    <Button
                      variant='primary'
                      className='absolute font-bold justify-center flex rounded-lg px-14'
                      rightIcon={GrFormNextLink}
                    >
                      {action_content}
                    </Button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingCard;
