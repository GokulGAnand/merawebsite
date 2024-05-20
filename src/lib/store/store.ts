import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChipProps, Chips } from './type';

interface FormState {
  page: number;
  incrementPage: () => void;
  decrementPage: () => void;
  makeID: string;
  addBrand: (id: string) => void;
  chips: Chips[] | [];
  addChip: ({ value, chipValue, type }: ChipProps) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormStore = create<FormState | any>(
  persist(
    (set) => ({
      chips: [],
      addChip: ({ value, chipValue, type }: ChipProps) =>
        set((state: { chips: Chips[] }) => {
          const existingIndex = state?.chips?.findIndex(
            (chip) => chip.type === type,
          );
          if (existingIndex !== -1) {
            const updatedChip = [...state.chips];
            updatedChip[existingIndex] = { value, chipValue, type };
            return { chips: updatedChip };
          } else {
            return { chips: [...state.chips, { value, chipValue, type }] };
          }
        }),
      // Page
      page: 1,
      incrementPage: () =>
        set((state: { page: number }) => ({ page: state.page + 1 })),
      decrementPage: () =>
        set((state: { page: number }) => ({
          page: Number(state.page) > 1 ? Number(state.page) - 1 : 1,
        })),
      // Brand
      makeID: '',
      addBrand: (id: string) =>
        set(() => ({
          makeID: id,
        })),
    }),
    {
      name: 'mera:sell',
    },
  ),
);
