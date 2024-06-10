export interface PaymentValues {
  sellerMobileNumber: number;
  amount: number;
}

export interface OrderObject {
  status: string;
  message: string;
  data: OrderData;
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

export interface OrderData {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: [];
  offer_id: null;
  receipt: string;
  status: string;
}
