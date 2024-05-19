import React from 'react';

export default function CircularProgress() {
  const radius = 16.5;
  const circumference = 2 * Math.PI * radius;
  const progress = (1 / 2) * 100; // 50%

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
    >
      <circle cx='18' cy='18' r={radius} stroke='#E9F2FA' strokeWidth='3' />
      <circle
        cx='18'
        cy='18'
        r={radius}
        stroke='#007bff'
        strokeWidth='3'
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (progress / 100) * circumference}
        transform='rotate(-90 18 18)'
      />
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        dy='.3em'
        fontSize='10'
        fill='#0B2C4D'
        className='font-medium text-md leading-normal text-stepsText'
      >
        1/9
      </text>
    </svg>
  );
}
