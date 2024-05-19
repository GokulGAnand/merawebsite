import React from 'react';

export default function CarFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='bg-carFormGradient'>{children}</main>;
}
