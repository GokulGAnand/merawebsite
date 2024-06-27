import PageBanner from '@/components/banner/common/PageBanner';
import DocsComponent from '@/components/layout/Docs';
import { terms } from '@/data/terms';

export default function page() {
  return (
    <div>
      <PageBanner heading='Terms and Conditions' subHeading='' />
      <DocsComponent data={terms} />
    </div>
  );
}
