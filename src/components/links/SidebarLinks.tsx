'use client';
import { headerLinks } from '@/data/header-links';
import { usePathname } from 'next/navigation';
import React from 'react';

export const SidebarLinks = () => {
  const path = usePathname();
  return (
    <div>
      {/* {headerLinks.map((link) => {
        const isActive = link.route === path;
        return (
          <div
            key={link.label}
            className={` px-5 py-4 border border-solid border-b-mobileSidebarBorder border-x-0 border-t-0  text-${
              isActive ? 'bannerChipText' : `headerLinkColor`
            }`}
          >
            {link.label}
          </div>
        );
      })} */}
    </div>
  );
};
