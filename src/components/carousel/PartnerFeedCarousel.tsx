'use client';
import { PartnerReviews } from '@/data/partner';
import PartnerReviewCard from '../cards/PartnerReviewCard';

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
    <div>
      {PartnerReviews.slice(start, end).map((review) => {
        const { icon, rating, partner, comments } = review;
        return (
          <div className='pt-16' key={partner}>
            <div className='flex p-8 justify-center'>
              <PartnerReviewCard
                comments={comments}
                partner={partner}
                icon={icon}
                rating={rating}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
