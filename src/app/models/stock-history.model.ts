export type HistoryRange = 'intraday' | '7d' | '1m' | '1y';

export interface StockHistoryPoint {
  date: string;
  close: number;
}

export interface StockHistoryByRange {
  symbol: string;
  intraday: StockHistoryPoint[];
  d7: StockHistoryPoint[];
  m1: StockHistoryPoint[];
  y1: StockHistoryPoint[];
}
