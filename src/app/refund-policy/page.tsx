import PageBanner from '@/components/banner/common/PageBanner';
import DocsComponent from '@/components/layout/Docs';
import { refund } from '@/data/refund';
import React from 'react';

export default function RefundPolicy() {
  return (
    <div>
      <PageBanner heading='Refund Policy' subHeading='' />
      <DocsComponent data={refund} />
    </div>
  );
}
