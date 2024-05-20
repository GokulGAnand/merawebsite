import React from 'react';
import { PricingPlans } from '@/data/pricing-plans';

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
  return (
    <div>
      <section className='bg-white'>
        <div className='py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='space-y-8'>
            {/* Pricing Card */}
            <div className='flex justify-center'>
              <div className='flex flex-col p-6 mx-auto max-w-lg text-gray-900 rounded-lg border border-bannerChipText shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                <h3 className='mb-4 text-2xl font-semibold text-whiteButtonText '>
                  {title}
                </h3>
                <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'></p>
                <div className='flex items-baseline my-8'>
                  <span className='mr-2 text-5xl font-extrabold'>{amount}</span>
                  <span className='text-gray-500 dark:text-gray-400'>
                    per month
                  </span>
                </div>
                {/* List */}
                <ul role='list' className='mb-8 space-y-4 text-left'>
                  <li className='flex items-center space-x-3'>
                    {/* Icon */}
                    <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                    <span>{row_1_content}</span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    {/* Icon */}
                    <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                    <span>{row_2_content}</span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    {/* Icon */}
                    <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                    <span>{row_3_content}</span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    {/* Icon */}
                    <div className='flex-shrink-0 w-5 h-5'>{icon}</div>
                    <span>{row_4_content}</span>
                  </li>
                </ul>
                <a
                  href='#'
                  className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
                >
                  {action_content}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingCard;
