export interface StockPriceResponse {
  p: number[];
  s: string;
  skip: number;
  t: number[];
  v: number[];
  x: string[];
  count: number;
  c: string[][];
}

export interface StockInfo {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  mic: string;
  symbol: string;
  type: string;
}

export interface Sp500Row {
  symbol: string;
  description: string;
  market: string;
  latestPrice: number;
  previousPrice: number;
  volume: number;
  tradeType: string;
}
