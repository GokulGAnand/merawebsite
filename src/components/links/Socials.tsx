import { socials } from '@/data/socials';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface SocialProps {
  notFooter?: boolean;
}

export default function Socials(props: SocialProps) {
  const { notFooter } = props;
  return (
    <div className='flex gap-5 align-middle place-items-center'>
      {socials.map((item) => {
        return (
          <Link
            href={item.link}
            key={item.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.link}
          >
            <div
              className={clsx(
                ' flex align-middle',
                notFooter ? 'text-bannerChipText' : '',
              )}
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
