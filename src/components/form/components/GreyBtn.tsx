import Link from 'next/link';
import React from 'react';

interface GreyBtnProps {
  text: string;
  isLink?: boolean;
  href?: string;
  handleClick?: () => void;
}

export default function GreyBtn(props: GreyBtnProps) {
  const { text, isLink, href, handleClick } = props;

  const button = (
    <button
      onClick={handleClick}
      className='bg-greyBtn w-full text-md text-stepsText text-center py-3 rounded-md font-bold'
    >
      {text}
    </button>
  );

  if (isLink && href) {
    return <Link href={href}>{button}</Link>;
  }
  return button;
}
