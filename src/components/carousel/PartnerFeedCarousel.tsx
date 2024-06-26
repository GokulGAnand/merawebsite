'use client';
import PartnerReviewCard from '../cards/PartnerReviewCard';
import { partnerReviews } from '@/data/partner';

export default function PartnerFeedCarousel({
  carouselNumber,
  slides,
}: {
  carouselNumber: number;
  slides: number;
}) {
  const start = slides * carouselNumber;
  const end = start + slides;
  return (
    <>
      <div className=' flex flex-col justify-center items-center mb-8'>
        <div className='flex  gap-7 mt-16 mb-8 w-[100%]  lg:w-[88%] xl:w-[85%]  justify-center'>
          {partnerReviews.slice(start, end).map((review) => (
            <PartnerReviewCard
              key={review.partner}
              comments={review.comments}
              partner={review.partner}
              icon={review.icon}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
