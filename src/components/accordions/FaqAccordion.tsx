import { faqs } from '@/data/faqs';
import React from 'react';
import ChevronDown from '~/svg/ChevronDown.svg';

interface AccordionBodyProps {
  answer: string;
  question: string;
  tabIndex: number;
}
const AccordionBody = (props: AccordionBodyProps) => {
  const { answer, question, tabIndex } = props;
  return (
    <div
      className='group flex flex-col gap-1  cursor-pointer  p-5 border-accordionBorder  border border-t-1 border-b-1 border-l-0 border-r-0 '
      tabIndex={tabIndex}
    >
      <div className='flex cursor-pointer items-center justify-between'>
        <span className=' font-medium text-headerLinkColor text-md leading-4'>
          {question}
        </span>

        <ChevronDown
          height={9}
          width={17}
          className=' transition-all duration-500 group-focus:-rotate-180'
        />
      </div>
      <div className='w-2/3 text-sm flex text-headerLinkColor font-normal leading-5 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 group-focus:pt-5'>
        {answer}
      </div>
    </div>
  );
};

export default function FaqAccordion() {
  return (
    <div className=' bg-accordionBody mt-12 mb-24   '>
      {faqs.map((faq) => {
        return (
          <AccordionBody
            key={faq.id}
            question={faq.que}
            answer={faq.ans}
            tabIndex={faq.id}
          />
        );
      })}
    </div>
  );
}
