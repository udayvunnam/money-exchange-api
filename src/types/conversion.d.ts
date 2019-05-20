export interface Conversion {
  id: string;
  value: number;
  from: string;
  to: string;
  convertedValue: number;
  exchangeRate: number;
  created: Date;
}
