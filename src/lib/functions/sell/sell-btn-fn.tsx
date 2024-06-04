import { getPriceRoute } from '@/components/form/car/SearchBar';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface BtnData {
  type: string;
  page?: number;
  value: string;
}

type ChipProps = BtnData & { chipValue: string };

interface SellBtnFnProps {
  addChip: (props: ChipProps) => void;
  btnData: BtnData;
  chipValue: string;
  removeWrongValues: ({ type }: { type: string }) => void;
  isStarterForm?: boolean;
  switchPage: (page: number) => void;
  router: AppRouterInstance;
  incrementPage: () => void;
}

export function handleSellBtn({
  addChip,
  btnData,
  chipValue,
  removeWrongValues,
  isStarterForm,
  switchPage,
  router,
  incrementPage,
}: SellBtnFnProps) {
  const { type } = btnData;
  addChip({ ...btnData, chipValue });
  removeWrongValues({ type });
  if (isStarterForm) {
    switchPage(2);
    router.push(getPriceRoute);
  } else {
    incrementPage();
  }
}
