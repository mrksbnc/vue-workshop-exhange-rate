export interface ExchangeRateByTime {
  hour: number;
  day: number;
  month: number;
  year: number;
}

export interface ExchangeRate {
  code: string,
  exchange: ExchangeRateByTime,
}
