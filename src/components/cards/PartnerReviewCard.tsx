import React, { useState } from 'react';
import StarRating from '@/components/rating/StarRating';

interface PartnerProps {
  icon: React.ReactNode;
  rating: number;
  partner: string;
  comments: string;
}

const PartnerReviewCard = (props: PartnerProps) => {
  const { icon, rating, partner, comments } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col sm:w-3/4 gap-3 p-6 rounded-2xl border border-solid border-serviceCardBorder shadow-[34.854px_29.62px_48.34px_0px_rgba(51,102,255,0.05)]'>
      <div className='flex justify-between'>
        <div>{icon}</div>
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className='text-lg text-headerLinkColor font-medium leading-normal'>
        {partner}
      </div>
      <div className='font-normal text-headerLinkColor leading-5'>
        {isOpen ? comments : `${comments.slice(0, 120)} `}
        <button className='cursor-pointer' onClick={toggleContent}>
          {isOpen ? (
            <span className='text-bannerChipText'>Show Less</span>
          ) : (
            '...'
          )}
        </button>
      </div>
    </div>
  );
};

export default PartnerReviewCard;
