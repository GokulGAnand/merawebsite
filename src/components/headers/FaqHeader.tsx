import FaqAccordion from '@/components/accordions/FaqAccordion';
import FaqHead from '@/components/headers/FaqHead';
import React from 'react';

export default function FaqContent() {
  return (
    <div className='flex flex-col justify-center px-40 gap-2 '>
      <FaqHead />
      <FaqAccordion />
    </div>
  );
}
