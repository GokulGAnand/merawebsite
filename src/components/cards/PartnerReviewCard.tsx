import React from 'react';
import StarRating from '@/components/rating/StarRating';

interface PartnerProps {
  icon: React.ReactNode;
  rating: number;
  partner: string;
  comments: string;
}

export default function PartnerReviewCard(props: PartnerProps) {
  const { icon, rating, partner, comments } = props;
  return (
    <div className='flex flex-col w-1/3 gap-3 p-6 rounded-2xl border border-solid border-serviceCardBorder shadow-[34.854px_29.62px_48.34px_0px_rgba(51,102,255,0.05)]    '>
      <div className='flex justify-between'>
        <div>{icon}</div>
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className='text-lg text-headerLinkColor font-medium leading-normal'>
        {partner}
      </div>
      <div className='font-normal text-headerLinkColor leading-5 text-ellipsis text-sm'>
        {comments}{' '}
      </div>
    </div>
  );
}
