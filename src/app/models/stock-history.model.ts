export interface StockHistoryPoint {
  date: string;
  close: number;
}

export interface StockHistory {
  symbol: string;
  points: StockHistoryPoint[];
}
