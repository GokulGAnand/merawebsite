import React from 'react';

interface CircularProgressProps {
  page: number;
  count: number;
}

export default function CircularProgress(props: CircularProgressProps) {
  const { page, count } = props;
  const radius = 16.5;
  const circumference = 2 * Math.PI * radius;
  const progress = (page / count) * 100;

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
        fontSize='14'
        fill='#0B2C4D'
        className='font-medium leading-normal text-stepsText'
      >
        {page}/{count}
      </text>
    </svg>
  );
}
