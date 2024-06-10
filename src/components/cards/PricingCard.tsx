import React from 'react';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';

interface PricingProps {
  icon: React.ReactNode;
  id: number;
  title: string;
  amount: string;
  row_content: string[];
  action_content: string;
}

const PricingCard = (props: PricingProps) => {
  const { id, title, amount, icon, row_content, action_content } = props;

  const isComingSoon = action_content === 'Coming soon';

  return (
    <div
      className={`mb-18 md:mb-18 lg:mb-0 ${isComingSoon ? 'filter opacity-50 hidden lg:block' : ''}`}
    >
      <section className='bg-white'>
        <div className='max-w-screen-xl'>
          <div className='space-y-8'>
            {
              <div className='flex justify-center'>
                <div className='flex flex-col py-6 pl-6 pr-12 lg:pr-16 xl:pr-24 mx-auto max-w-lg w-[290px] lg:w-auto text-gray-900 rounded-lg border-bannerChipText border-[2.5px] shadow dark:text-white'>
                  <h3 className='mb-2 text-sm font-medium text-whiteButtonText'>
                    {title}
                  </h3>
                  <p className='font-light sm:text-lg'></p>
                  <div className='flex items-center mb-6 gap-2'>
                    <span className='text:lg md:text-4xl font-bold justify-start  text-headerLinkColor '>
                      {amount}
                    </span>
                    <span className='text:lg md:text-4xl font-bold font-roboto justify-start  text-headerLinkColor'>
                      ₹
                    </span>
                    <span className='text-subHeadingColor text-sm font-medium'>
                      per Month
                    </span>
                  </div>

                  <ul
                    role='list'
                    className='mb-8 space-y-4 text-left text-sm font-normal'
                  >
                    {row_content.map((row_item, index) => (
                      <li
                        key={index}
                        className='flex items-center text-subHeadingColor'
                      >
                        <div className='flex-shrink-0 w-5 h-5 flex items-center justify-start'>
                          {icon}
                        </div>
                        <span>{row_item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className=' flex items-center pt-3 pb-6'>
                    <Button
                      variant='primary'
                      className='absolute font-bold justify-center flex rounded-lg w-60 h-11'
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
