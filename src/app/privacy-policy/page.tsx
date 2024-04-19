import DocsComponent from '@/components/layout/Docs';
import policy from '@/data/policy';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div>
      <DocsComponent data={policy} />
    </div>
  );
}
