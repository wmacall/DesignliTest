export interface StockSearchResponse {
  count: number;
  result: Stock[];
}

export interface Stock {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}
