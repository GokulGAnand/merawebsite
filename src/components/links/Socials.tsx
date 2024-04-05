import { socials } from '@/data/socials';
import Link from 'next/link';
import React from 'react';

export default function Socials() {
  return (
    <div className='flex gap-5 align-middle place-items-center'>
      {socials.map((item) => {
        return (
          <Link
            href={item.link}
            key={item.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className=' flex align-middle'>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
