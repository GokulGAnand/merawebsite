export interface SellCarObject {
  make: string;
  model: string;
  variant: string;
  fuelType: string;
  ownershipNumber: string;
  monthAndYearOfManufacture: string;
  odometerReading: string;
  transmission: string;
  sellerMobileNumber: number;
  proposeOfSell: string;
  rto: string;
  proposeOfInspection?: string;
}

export interface SellObject {
  status: string;
  message: string;
  data: Datum[];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}

interface Datum {
  leadId: string;
  make: string;
  model: string;
  variant: string;
  fuelType: string;
  ownershipNumber: string;
  monthAndYearOfManufacture: string;
  odometerReading: string;
  transmission: string;
  sellerMobileNumber: number;
  proposeOfSell: string;
  rto: string;
  source: string;
  isDeposited: boolean;
  leadStatus: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
