export type FormType = 'make' | 'fuel' | 'transmission' | 'variant' | 'model';

export interface Chips {
  type: FormType;
  label?: string;
  page?: number;
  value?: string;
  chipValue?: string;
}

export interface ChipProps {
  value: string;
  chipValue: string;
  type: FormType;
  page?: number;
}

export interface SelectionProps {
  value: string;
  type: FormType;
  page?: number;
}
