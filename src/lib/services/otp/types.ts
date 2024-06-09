export interface RootObject {
  status: string;
  message: string;
  data: [];
  meta: Meta;
}

export interface Meta {
  access: string;
  refresh: string;
}
