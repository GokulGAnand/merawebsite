import React from 'react';
import FullStar from '~/svg/FullStar.svg';
import HalfStar from '~/svg/HalfStar.svg';
import EmptyStar from '~/svg/EmptyStar.svg';

export default function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const fullStarsArray = Array(fullStars).fill(
    <FullStar width={24} height={24} />
  );
  const halfStarsArray = halfStars
    ? [<HalfStar key={''} width={24} height={24} />]
    : [];
  const emptyStarsArray = Array(emptyStars).fill(
    <EmptyStar width={24} height={24} />
  );

  return (
    <div style={{ display: 'flex' }}>
      {fullStarsArray.map((star, index) => (
        <div key={`full-${index}`}>{star}</div>
      ))}
      {halfStarsArray.map((star, index) => (
        <div key={`half-${index}`}>{star}</div>
      ))}
      {emptyStarsArray.map((star, index) => (
        <div key={`empty-${index}`}>{star}</div>
      ))}
    </div>
  );
}
