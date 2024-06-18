import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChipProps, Chips, FormType, SelectionProps } from './type';

interface FormState {
  page: number;
  switchPage: () => void;
  incrementPage: () => void;
  decrementPage: () => void;
  chips: Chips[] | [];
  addChip: ({ value, chipValue, type, page }: ChipProps) => void;
  clearAll: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useInspectionStore = create<FormState | any>(
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

      // Phone Number
      phone: '',
      setPhone: (phoneNumber: string) => set(() => ({ phone: phoneNumber })),

      // Address
      addressOne: '',
      setAddressOne: (text: string) => set(() => ({ addressOne: text })),
      addressTwo: '',
      setAddressTwo: (text: string) => set(() => ({ addressTwo: text })),
      district: '',
      setDistrict: (text: string) => set(() => ({ district: text })),
      pin: '',
      setPin: (text: string) => set(() => ({ pin: text })),

      // Date
      date: new Date(),
      setDate: (dateInput: Date | null) => set(() => ({ date: dateInput })),

      // Get Updates on Mobile
      isChecked: false,
      setIsChecked: (checked: boolean) => set(() => ({ isChecked: checked })),

      // Clear All
      clearAll: () =>
        set(() => ({
          chips: [],
          selections: [],
          phone: '',
          isChecked: false,
          date: new Date(),
          addressOne: '',
          addressTwo: '',
          district: '',
          pin: '',
        })),
    }),
    {
      name: 'mera:inspection',
    },
  ),
);
