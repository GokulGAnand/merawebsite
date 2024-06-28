'use client';
import { headerLinks } from '@/data/header-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const isActiveLink = (route: string, currentPath: string, homeRoute = '/') => {
  if (route === homeRoute) {
    return route === currentPath;
  }
  return currentPath.startsWith(route);
};

export default function HeaderLinks() {
  const path = usePathname();
  return (
    <div className='hidden lg:flex gap-[1vw]'>
      {headerLinks.map((option) => {
        const isActive = isActiveLink(option.route, path);
        return (
          <div key={option.label} className={`xl:px-5 flex  `}>
            <Link
              className={`text-lg text-${
                isActive ? 'bannerChipText' : `headerLinkColor`
              } `}
              href={option.route}
            >
              {option.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
