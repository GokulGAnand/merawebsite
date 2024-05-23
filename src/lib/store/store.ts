import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChipProps, Chips, FormType, SelectionProps } from './type';

interface FormState {
  page: number;
  switchPage: () => void;
  incrementPage: () => void;
  decrementPage: () => void;
  makeID: string;
  addBrand: (id: string) => void;
  chips: Chips[] | [];
  addChip: ({ value, chipValue, type, page }: ChipProps) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormStore = create<FormState | any>(
  persist(
    (set) => ({
      chips: [],
      addChip: ({ value, chipValue, type, page }: ChipProps) =>
        set((state: { chips: Chips[] }) => {
          const existingIndex = state?.chips?.findIndex(
            (chip) => chip.type === type,
          );
          if (existingIndex !== -1) {
            const updatedChip = [...state.chips];
            updatedChip[existingIndex] = { value, chipValue, type, page };
            return { chips: updatedChip };
          } else {
            return {
              chips: [...state.chips, { value, chipValue, type, page }],
            };
          }
        }),
      // data Without Chip
      selections: [],
      addSelection: ({ value, type, page }: SelectionProps) => {
        set((state: { selections: SelectionProps[] }) => {
          const existingIndex = state?.selections?.findIndex(
            (opt) => opt.type === type,
          );
          if (existingIndex !== -1) {
            const updatedSelection = [...state.selections];
            updatedSelection[existingIndex] = { value, type, page };
            return { selections: updatedSelection };
          } else {
            return {
              selections: [...state.selections, { value, type, page }],
            };
          }
        });
      },
      removeSelection: ({ type }: { type: string }) => {
        set((state: { selections: SelectionProps[]; chips: Chips[] }) => {
          let updatedSelections = state.selections.filter(
            (opt) => opt.type !== type,
          );
          if (type === 'fuel') {
            updatedSelections = updatedSelections.filter(
              (opt) => opt.type !== 'transmission',
            );
          }

          return { selections: updatedSelections };
        });
      },

      // Page
      page: 1,
      switchPage: (pageNumber: number) => set(() => ({ page: pageNumber })),
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

      // Remove Wrong Value
      removeWrongValues: ({ type }: { type: FormType }) =>
        set((state: { selections: SelectionProps[]; chips: Chips[] }) => {
          if (type === 'make') {
            const updatedChips = state.chips?.filter(
              (chip) => chip.type !== 'variant',
            );
            const updated = updatedChips?.filter(
              (chip) => chip.type !== 'model',
            );

            return { selections: [], chips: updated };
          } else {
            return state;
          }
        }),
    }),
    {
      name: 'mera:sell',
    },
  ),
);
