import FaqAccordion from '@/components/accordions/FaqAccordion';
import FaqHead from '@/components/headers/FaqHead';
import React from 'react';

export default function FaqContent() {
  return (
    <div className='flex flex-col justify-center w-[90%] lg:w-[88%] xl:w-[85%] gap-2 '>
      <FaqHead />
      <FaqAccordion />
    </div>
  );
}
