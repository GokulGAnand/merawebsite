'use client';
import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import ChevronDown from '~/svg/ChevronDown.svg';
import { faqs } from '@/data/faqs';

const AccordionItem = ({
  header,
  ...rest
}: {
  header: string;
  children: React.ReactNode;
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}

        <ChevronDown
          height={9}
          width={17}
          alt='Chevron'
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
        />
      </>
    )}
    className='border-b border-accordionBorder text-headerLinkColor  '
    buttonProps={{
      className: () =>
        `flex w-full px-6 py-4 items-center text-lg text-start font-medium text-md leading-6   `,
    }}
    contentProps={{
      className:
        'transition-height text-md duration-200  ease-out w-full lg:w-3/4 leading-6 font-normal   ',
    }}
    panelProps={{ className: 'pb-4 pt-0 px-6' }}
  />
);

export default function Faq() {
  return (
    <div className='  border-t bg-accordionBody mt-10  mb-24 '>
      <Accordion transition transitionTimeout={200}>
        {faqs.map((faq) => {
          return (
            <AccordionItem key={faq.id} header={faq.que}>
              {faq.ans}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
