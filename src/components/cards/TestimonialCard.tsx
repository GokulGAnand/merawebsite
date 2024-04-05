import React from 'react';
import CustomerOne from '~/svg/CustomerOne.svg';
import StarRating from '@/components/rating/StarRating';

interface TestimonialProps {
  icon: React.ReactNode;
  rating: number;
  customer: string;
  comments: string;
}

export default function TestimonialCard(props: TestimonialProps) {
  const { icon, rating, customer, comments } = props;
  return (
    <div className='flex flex-col w-1/3 gap-3 p-6 rounded-2xl border border-solid border-serviceCardBorder shadow-[34.854px_29.62px_48.34px_0px_rgba(51,102,255,0.05)]    '>
      <div className='flex justify-between'>
        <div>{icon}</div>
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className='text-lg font-medium leading-normal'>{customer}</div>
      <div>{comments} </div>
    </div>
  );
}
