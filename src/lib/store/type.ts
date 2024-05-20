export type FormType = 'make';

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
}
