export interface InspectionCarObj {
  inspectionType: string;
  Adress: string;
  city: string;
  pinCode: number;
  proposeOfInspection: string;
  sellerMobileNumber: number;
  otp: number;
  dateAndTime: Date;
}

export interface InspectionResponse {
  status: string;
  message: string;
  data: [];
  meta: Meta;
}

interface Meta {
  access: string;
  refresh: string;
}
