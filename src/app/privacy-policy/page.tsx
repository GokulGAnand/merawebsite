import PageBanner from '@/components/banner/common/PageBanner';
import DocsComponent from '@/components/layout/Docs';
import policy from '@/data/policy';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div>
      <PageBanner heading='Privacy Policy' subHeading='' />
      <DocsComponent data={policy} />
    </div>
  );
}
