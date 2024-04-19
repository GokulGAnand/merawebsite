import DocsComponent from '@/components/layout/Docs';
import { refund } from '@/data/refund';
import React from 'react';

export default function RefundPolicy() {
  return (
    <div>
      <DocsComponent data={refund} />
    </div>
  );
}
