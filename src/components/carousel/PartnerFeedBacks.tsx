'use client';
import { PartnerReviews } from '@/data/partner';
import Marquee from 'react-fast-marquee';
import PartnerReviewCard from '../cards/PartnerReviewCard';

export default function PartnerFeedBacks() {
  return (
    <div>
      {PartnerReviews.map((review) => {
        const { icon, rating, partner, comments } = review;
        return (
          <div className='pt-16' key={partner}>
            <Marquee>
              <div className='flex p-8'>
                <PartnerReviewCard
                  comments={comments}
                  partner={partner}
                  icon={icon}
                  rating={rating}
                />
              </div>
            </Marquee>
          </div>
        );
      })}
    </div>
  );
}
