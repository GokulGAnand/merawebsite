'use client';
import { headerLinks } from '@/data/header-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const SidebarLinks = () => {
  const path = usePathname();
  const handleLinkClick = () => {
    const drawerCheckbox = document.getElementById(
      'my-drawer',
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  return (
    <div>
      {headerLinks.map((link) => {
        const isActive = link.route === path;
        return (
          <Link
            href={link.route}
            onClick={handleLinkClick}
            key={link.label}
            className={`px-5 flex flex-col py-4 border border-solid border-b-mobileSidebarBorder border-x-0 border-t-0  text-${
              isActive ? 'bannerChipText' : `headerLinkColor`
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
